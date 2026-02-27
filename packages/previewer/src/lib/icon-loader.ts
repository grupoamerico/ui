/**
 * Auto-discovery loader for icon components.
 *
 * Path note: this file is at packages/previewer/src/lib/
 * so ../../../ goes up to packages/, then into icons/.
 */

import React from "react"

const iconModules = import.meta.glob("../../../icons/src/components/*.tsx", {
  eager: true,
  import: "default",
}) as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>

export interface IconInfo {
  name: string
  component: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

let _iconCache: IconInfo[] | null = null

/**
 * Get all icons with their display names.
 */
export function getAllIcons(): IconInfo[] {
  if (_iconCache) return _iconCache

  _iconCache = Object.entries(iconModules)
    .filter(([key]) => !key.endsWith("/index.ts") && !key.endsWith("/index.tsx"))
    .map(([key, component]) => {
      // Extract the display name from the component or derive from filename
      const comp = component as React.ComponentType & { displayName?: string }
      const fileName = key.match(/\/([^/]+)\.tsx$/)?.[1] || ""
      const name =
        comp.displayName ||
        fileName
          .split("-")
          .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
          .join("")

      return { name, component }
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  return _iconCache
}
