/**
 * Extracts source code snippets for each story from a raw .stories.tsx file.
 *
 * Returns a map of { ExportName -> code string } so the story-adapter
 * can attach the code to each ParsedStory.
 */

/**
 * Find the index of the matching closing character (brace, paren, etc.)
 * accounting for nesting, strings, and template literals.
 */
function findMatchingClose(
  source: string,
  start: number,
  open: string,
  close: string
): number {
  let depth = 1
  let i = start
  while (i < source.length && depth > 0) {
    const ch = source[i]

    // Skip string literals
    if (ch === '"' || ch === "'" || ch === "`") {
      i = skipString(source, i)
      continue
    }

    // Skip line comments
    if (ch === "/" && source[i + 1] === "/") {
      i = source.indexOf("\n", i)
      if (i === -1) break
      i++
      continue
    }

    // Skip block comments
    if (ch === "/" && source[i + 1] === "*") {
      i = source.indexOf("*/", i + 2)
      if (i === -1) break
      i += 2
      continue
    }

    if (ch === open) depth++
    else if (ch === close) depth--

    i++
  }
  return depth === 0 ? i : -1
}

function skipString(source: string, start: number): number {
  const quote = source[start]
  let i = start + 1
  while (i < source.length) {
    if (source[i] === "\\") {
      i += 2
      continue
    }
    if (source[i] === quote) {
      return i + 1
    }
    // Template literal interpolation
    if (quote === "`" && source[i] === "$" && source[i + 1] === "{") {
      i = findMatchingClose(source, i + 2, "{", "}")
      continue
    }
    i++
  }
  return i
}

/**
 * Extract the render body (JSX content) from a story's render function source.
 * e.g. `render: () => (<Foo>...</Foo>)` -> `<Foo>...</Foo>`
 * e.g. `render: () => { return (...) }` -> the content
 */
function extractRenderBody(renderSource: string): string {
  // Pattern: () => ( ... ) or () => <...>
  const arrowMatch = renderSource.match(/\)\s*=>\s*/)
  if (!arrowMatch) return renderSource.trim()

  const afterArrow = renderSource.substring(
    (arrowMatch.index ?? 0) + arrowMatch[0].length
  )
  const trimmed = afterArrow.trim()

  // Arrow with parens: () => (...)
  if (trimmed.startsWith("(")) {
    const end = findMatchingClose(trimmed, 1, "(", ")")
    if (end !== -1) {
      return trimmed.substring(1, end - 1).trim()
    }
  }

  // Arrow with block: () => { return ... }
  if (trimmed.startsWith("{")) {
    const end = findMatchingClose(trimmed, 1, "{", "}")
    if (end !== -1) {
      const block = trimmed.substring(1, end - 1).trim()
      // Find the return statement
      const returnMatch = block.match(/return\s*\(/)
      if (returnMatch) {
        const afterReturn = block.substring(
          (returnMatch.index ?? 0) + returnMatch[0].length
        )
        const retEnd = findMatchingClose("(" + afterReturn, 1, "(", ")")
        if (retEnd !== -1) {
          return afterReturn.substring(0, retEnd - 2).trim()
        }
      }
      // return without parens
      const returnSimple = block.match(/return\s+/)
      if (returnSimple) {
        return block.substring(
          (returnSimple.index ?? 0) + returnSimple[0].length
        ).trim()
      }
    }
  }

  // Arrow without parens: () => <SomeJsx /> or () => <SomeJsx>...</SomeJsx>
  if (trimmed.startsWith("<")) {
    // Find the end of the JSX expression - it ends at the matching close tag
    // or self-closing tag, followed by comma/newline/closing brace
    return extractInlineJsx(trimmed)
  }

  return trimmed
}

/**
 * Extract a JSX expression from a string that starts with `<`.
 * Handles self-closing `<Foo />` and open/close `<Foo>...</Foo>`.
 */
function extractInlineJsx(source: string): string {
  // Self-closing: <Component ... />
  const selfCloseMatch = source.match(/^<[A-Za-z][A-Za-z0-9.]*[^>]*\/>\s*/)
  if (selfCloseMatch) {
    return selfCloseMatch[0].trim()
  }

  // Open tag: find the tag name, then find the matching close tag
  const tagMatch = source.match(/^<([A-Za-z][A-Za-z0-9.]*)/)
  if (!tagMatch) return source.trim()

  const tagName = tagMatch[1]
  // Use angle bracket matching: count open/close of the same tag
  let depth = 0
  let i = 0
  while (i < source.length) {
    // Opening tag of same name
    const openPattern = `<${tagName}`
    const closePattern = `</${tagName}`

    if (source.substring(i).startsWith(openPattern)) {
      // Check it's not a self-closing tag
      const restAfterOpen = source.substring(i + openPattern.length)
      const closeAngle = restAfterOpen.indexOf(">")
      if (closeAngle !== -1 && restAfterOpen[closeAngle - 1] !== "/") {
        depth++
      }
      i += openPattern.length
      continue
    }

    if (source.substring(i).startsWith(closePattern)) {
      depth--
      if (depth <= 0) {
        // Find the closing >
        const closeAngle = source.indexOf(">", i)
        if (closeAngle !== -1) {
          return source.substring(0, closeAngle + 1).trim()
        }
      }
      i += closePattern.length
      continue
    }

    i++
  }

  // Fallback: return up to the first comma or newline+closing-brace
  const fallbackEnd = source.search(/,\s*\n|,\s*}/)
  if (fallbackEnd !== -1) {
    return source.substring(0, fallbackEnd).trim()
  }

  return source.trim()
}

/**
 * Given a story render body that calls a local component (e.g. `<Demo />`),
 * find that component's definition in the source and return its body instead.
 */
function resolveLocalComponent(
  renderBody: string,
  fullSource: string
): string | null {
  // Match patterns like `<Demo />` or `<SortingDemo />`
  const match = renderBody.match(/^<([A-Z][A-Za-z0-9]*)\s*\/>$/)
  if (!match) return null

  const componentName = match[1]

  // Find the component definition: `const Demo = () => {` or `function Demo(`
  // Pattern 1: const X = () => { ... } or const X = () => ( ... )
  const constPattern = new RegExp(
    `(?:const|let|var)\\s+${componentName}\\s*=\\s*\\(?\\s*\\)\\s*=>\\s*`
  )
  const constMatch = fullSource.match(constPattern)
  if (constMatch && constMatch.index !== undefined) {
    const afterDef = fullSource.substring(
      constMatch.index + constMatch[0].length
    )
    const trimmed = afterDef.trim()

    if (trimmed.startsWith("{")) {
      const end = findMatchingClose(trimmed, 1, "{", "}")
      if (end !== -1) {
        const block = trimmed.substring(1, end - 1).trim()
        // Extract return JSX
        const returnMatch = block.match(/return\s*\(\s*/)
        if (returnMatch && returnMatch.index !== undefined) {
          const afterReturn = block.substring(
            returnMatch.index + returnMatch[0].length
          )
          const retEnd = findMatchingClose("(" + afterReturn, 1, "(", ")")
          if (retEnd !== -1) {
            return afterReturn.substring(0, retEnd - 2).trim()
          }
        }
        // return without parens
        const returnSimple = block.match(/return\s+(<[\s\S]+)/)
        if (returnSimple) {
          return returnSimple[1].trim()
        }
      }
    }

    if (trimmed.startsWith("(")) {
      const end = findMatchingClose(trimmed, 1, "(", ")")
      if (end !== -1) {
        return trimmed.substring(1, end - 1).trim()
      }
    }
  }

  // Pattern 2: function X() { ... }
  const funcPattern = new RegExp(
    `function\\s+${componentName}\\s*\\(\\s*\\)\\s*\\{`
  )
  const funcMatch = fullSource.match(funcPattern)
  if (funcMatch && funcMatch.index !== undefined) {
    const braceStart =
      funcMatch.index +
      funcMatch[0].length
    const end = findMatchingClose(fullSource, braceStart, "{", "}")
    if (end !== -1) {
      const block = fullSource.substring(braceStart, end - 1).trim()
      const returnMatch = block.match(/return\s*\(\s*/)
      if (returnMatch && returnMatch.index !== undefined) {
        const afterReturn = block.substring(
          returnMatch.index + returnMatch[0].length
        )
        const retEnd = findMatchingClose("(" + afterReturn, 1, "(", ")")
        if (retEnd !== -1) {
          return afterReturn.substring(0, retEnd - 2).trim()
        }
      }
    }
  }

  return null
}

/**
 * Extract code for each story export from the raw source text.
 * Returns a map: { "ExportName": "code string" }
 */
export function extractStoryCodes(
  source: string
): Record<string, string> {
  const result: Record<string, string> = {}

  // Find all `export const XXX: Story = {` or `export const XXX = {`
  const storyExportRegex =
    /export\s+const\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*(?::\s*Story\s*)?=\s*\{/g

  let match: RegExpExecArray | null
  while ((match = storyExportRegex.exec(source)) !== null) {
    const exportName = match[1]
    const braceStart = match.index + match[0].length

    // Find the closing brace of this story object
    const end = findMatchingClose(source, braceStart, "{", "}")
    if (end === -1) continue

    const storyObjectSource = source.substring(braceStart - 1, end)

    // Try to extract render function body
    const renderMatch = storyObjectSource.match(/render\s*:\s*/)
    if (renderMatch && renderMatch.index !== undefined) {
      const renderStart = renderMatch.index + renderMatch[0].length
      const renderSource = storyObjectSource.substring(renderStart)

      let code = extractRenderBody(renderSource)

      // If the render just returns a local component like <Demo />,
      // resolve it to the actual JSX
      const resolved = resolveLocalComponent(code, source)
      if (resolved) {
        code = resolved
      }

      if (code) {
        result[exportName] = dedent(code)
      }
      continue
    }

    // Try to extract args-based story and generate JSX
    const argsMatch = storyObjectSource.match(/args\s*:\s*\{/)
    if (argsMatch && argsMatch.index !== undefined) {
      const argsStart = argsMatch.index + argsMatch[0].length
      const argsEnd = findMatchingClose(
        storyObjectSource,
        argsStart,
        "{",
        "}"
      )
      if (argsEnd !== -1) {
        const argsSource = storyObjectSource
          .substring(argsStart - 1, argsEnd)
          .trim()

        // Get component name from meta
        const componentName = extractComponentName(source)
        if (componentName) {
          result[exportName] = generateArgsJsx(componentName, argsSource)
        }
      }
    }
  }

  return result
}

/**
 * Extract the component name from `component: Badge` in the meta.
 */
function extractComponentName(source: string): string | null {
  const match = source.match(/component\s*:\s*([A-Z][A-Za-z0-9_]*)/)
  return match ? match[1] : null
}

/**
 * Generate JSX from component name and args source.
 * e.g. Component = "Badge", args = `{ color: "green", children: "Badge" }`
 * -> `<Badge color="green">Badge</Badge>`
 */
function generateArgsJsx(componentName: string, argsSource: string): string {
  // Parse children and other props from the args object source
  const inner = argsSource.replace(/^\{/, "").replace(/\}$/, "").trim()

  // Split on commas that are followed by a newline and a key pattern
  // This handles both `key: value,\n` and `key: value, key2: value2`
  const lines = inner
    .split(/,\s*\n/)
    .map((l) => l.trim())
    .filter(Boolean)

  let children = ""
  const props: string[] = []

  for (const line of lines) {
    const cleanLine = line.replace(/,\s*$/, "").trim()
    if (!cleanLine) continue

    // Match key: value pairs
    const kvMatch = cleanLine.match(/^([A-Za-z_$][A-Za-z0-9_$]*)\s*:\s*(.+)$/)
    if (!kvMatch) continue

    const [, key, rawValue] = kvMatch
    const value = rawValue.trim().replace(/,\s*$/, "")

    if (key === "children") {
      // Remove quotes for string children
      const strMatch = value.match(/^["'](.*)["']$/)
      if (strMatch) {
        children = strMatch[1]
      } else {
        children = `{${value}}`
      }
      continue
    }

    // String prop
    const strMatch = value.match(/^["'](.*)["']$/)
    if (strMatch) {
      props.push(`${key}="${strMatch[1]}"`)
      continue
    }

    // Boolean true
    if (value === "true") {
      props.push(key)
      continue
    }

    // Other values
    props.push(`${key}={${value}}`)
  }

  const propsStr = props.length > 0 ? " " + props.join(" ") : ""

  if (children) {
    return `<${componentName}${propsStr}>${children}</${componentName}>`
  }
  return `<${componentName}${propsStr} />`
}

/**
 * Remove common leading whitespace from a multi-line string.
 */
function dedent(code: string): string {
  const lines = code.split("\n")
  if (lines.length <= 1) return code.trim()

  // Find minimum indentation (ignoring empty lines)
  const nonEmptyLines = lines.filter((l) => l.trim().length > 0)
  if (nonEmptyLines.length === 0) return code

  const minIndent = Math.min(
    ...nonEmptyLines.map((l) => {
      const match = l.match(/^(\s*)/)
      return match ? match[1].length : 0
    })
  )

  if (minIndent === 0) return code

  return lines
    .map((l) => l.substring(minIndent))
    .join("\n")
    .trim()
}
