import React from "react"

/**
 * Serializes a React element tree into a formatted JSX string
 * for display as copyable code in the previewer.
 */
export function elementToJsx(
  element: React.ReactNode,
  indent: number = 0
): string {
  if (element === null || element === undefined || typeof element === "boolean") {
    return ""
  }

  if (typeof element === "string") {
    return element
  }

  if (typeof element === "number") {
    return String(element)
  }

  // Handle arrays (fragments with multiple children)
  if (Array.isArray(element)) {
    return element
      .map((child) => elementToJsx(child, indent))
      .filter(Boolean)
      .join("\n")
  }

  if (!React.isValidElement(element)) {
    return String(element)
  }

  const { type, props } = element as React.ReactElement<Record<string, unknown>>

  const tagName = getTagName(type)
  if (!tagName) return ""

  const pad = "  ".repeat(indent)
  const propsStr = serializeProps(props, indent)
  const children = props.children as React.ReactNode

  // Self-closing if no children
  if (children === undefined || children === null) {
    if (propsStr) {
      return `${pad}<${tagName} ${propsStr} />`
    }
    return `${pad}<${tagName} />`
  }

  const childStr = serializeChildren(children, indent + 1)
  const opening = propsStr ? `<${tagName} ${propsStr}>` : `<${tagName}>`

  // Inline simple text children
  if (typeof children === "string" || typeof children === "number") {
    return `${pad}${opening}${children}</${tagName}>`
  }

  return `${pad}${opening}\n${childStr}\n${pad}</${tagName}>`
}

function getTagName(type: unknown): string {
  if (typeof type === "string") return type

  if (typeof type === "function") {
    return (type as { displayName?: string; name?: string }).displayName ||
      (type as { name?: string }).name ||
      ""
  }

  // ForwardRef, memo, etc.
  if (typeof type === "object" && type !== null) {
    const obj = type as Record<string, unknown>

    // React.forwardRef
    if (obj.$$typeof === Symbol.for("react.forward_ref") && obj.render) {
      const render = obj.render as { displayName?: string; name?: string }
      return render.displayName || render.name || "Component"
    }

    // React.memo
    if (obj.$$typeof === Symbol.for("react.memo") && obj.type) {
      return getTagName(obj.type)
    }

    // Object.assign compound components (like Popover)
    if (obj.displayName) return obj.displayName as string
  }

  return "Component"
}

function serializeProps(
  props: Record<string, unknown>,
  indent: number
): string {
  const parts: string[] = []

  for (const [key, value] of Object.entries(props)) {
    if (key === "children" || key === "key" || key === "ref") continue
    if (value === undefined) continue

    // Skip internal props
    if (key.startsWith("__")) continue

    const serialized = serializePropValue(key, value, indent)
    if (serialized !== null) {
      parts.push(serialized)
    }
  }

  if (parts.length === 0) return ""

  // If short enough, single line
  const inline = parts.join(" ")
  if (inline.length <= 60) return inline

  // Multi-line
  const pad = "  ".repeat(indent + 1)
  return "\n" + parts.map((p) => `${pad}${p}`).join("\n") + "\n" + "  ".repeat(indent)
}

function serializePropValue(
  key: string,
  value: unknown,
  indent: number
): string | null {
  if (value === true) return key
  if (value === false) return `${key}={false}`

  if (typeof value === "string") {
    return `${key}="${escapeString(value)}"`
  }

  if (typeof value === "number") {
    return `${key}={${value}}`
  }

  if (React.isValidElement(value)) {
    const inner = elementToJsx(value, 0).trim()
    return `${key}={${inner}}`
  }

  if (typeof value === "function") {
    // Show event handlers as inline stubs
    return `${key}={() => { ... }}`
  }

  if (Array.isArray(value)) {
    // Check if it's an array of React elements (children-like)
    const hasElements = value.some((v) => React.isValidElement(v))
    if (hasElements) {
      const items = value
        .map((v) => {
          if (React.isValidElement(v)) return elementToJsx(v, 0).trim()
          if (typeof v === "string") return `"${escapeString(v)}"`
          return String(v)
        })
        .join(", ")
      return `${key}={[${items}]}`
    }
    return `${key}={${JSON.stringify(value)}}`
  }

  if (typeof value === "object" && value !== null) {
    try {
      const json = JSON.stringify(value)
      if (json.length <= 40) return `${key}={${json}}`
      return `${key}={${JSON.stringify(value, null, 2)}}`
    } catch {
      return null
    }
  }

  return null
}

function serializeChildren(
  children: React.ReactNode,
  indent: number
): string {
  if (typeof children === "string" || typeof children === "number") {
    return "  ".repeat(indent) + String(children)
  }

  if (Array.isArray(children)) {
    return children
      .map((child) => elementToJsx(child, indent))
      .filter(Boolean)
      .join("\n")
  }

  if (React.isValidElement(children)) {
    return elementToJsx(children, indent)
  }

  return ""
}

function escapeString(str: string): string {
  return str.replace(/"/g, "&quot;")
}
