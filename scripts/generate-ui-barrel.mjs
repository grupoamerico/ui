/**
 * Auto-discovery script for UI component barrel file.
 *
 * Scans packages/ui/src/components/* and generates packages/ui/src/index.ts
 * Uses `export * from` for all components since each component's index.ts
 * already controls what gets exported.
 */

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { autoGenHeader } from "./utils.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const COMPONENTS_DIR = path.join(ROOT, "packages/ui/src/components")
const OUTPUT_FILE = path.join(ROOT, "packages/ui/src/index.ts")

// Components that are internal-only and should NOT be re-exported from the barrel
const INTERNAL_COMPONENTS = new Set(["date-segment", "time-input"])

function generate() {
  const dirs = fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => !INTERNAL_COMPONENTS.has(name))
    .sort()

  const lines = [autoGenHeader("generate-ui-barrel.mjs"), ""]

  // Components
  lines.push("// Components")
  for (const dir of dirs) {
    lines.push(`export * from "./components/${dir}"`)
  }

  // Blocks
  lines.push("")
  lines.push("// Blocks")
  lines.push(`export * from "./blocks/data-table"`)

  // Hooks
  lines.push("")
  lines.push("// Hooks")
  const hooksDir = path.join(ROOT, "packages/ui/src/hooks")
  if (fs.existsSync(hooksDir)) {
    const hookDirs = fs
      .readdirSync(hooksDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort()

    for (const hookDir of hookDirs) {
      const hookIndexPath = path.join(hooksDir, hookDir, "index.ts")
      if (fs.existsSync(hookIndexPath)) {
        lines.push(`export * from "./hooks/${hookDir}"`)
      }
    }
  }

  // Utils
  lines.push("")
  lines.push("// Utils")
  lines.push(`export { clx } from "./utils/clx"`)
  lines.push(`export { toast } from "./utils/toast"`)

  // Types
  lines.push("")
  lines.push("// Types")
  lines.push(`export * from "./types"`)
  lines.push("")

  const output = lines.join("\n")
  fs.writeFileSync(OUTPUT_FILE, output, "utf-8")
  console.log(`✓ Generated ${OUTPUT_FILE} (${dirs.length} components)`)
}

generate()
