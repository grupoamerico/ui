/**
 * Auto-discovery script for icons barrel file.
 *
 * Scans packages/icons/src/components/*.tsx and generates
 * packages/icons/src/components/index.ts
 */

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { autoGenHeader } from "./utils.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const ICONS_DIR = path.join(ROOT, "packages/icons/src/components")
const OUTPUT_FILE = path.join(ICONS_DIR, "index.ts")

function getDisplayName(content) {
  // Match: ComponentName.displayName = "ComponentName"
  const match = content.match(/(\w+)\.displayName\s*=\s*["'](\w+)["']/)
  if (match) return match[2]
  return null
}

function generate() {
  const files = fs
    .readdirSync(ICONS_DIR)
    .filter((f) => f.endsWith(".tsx") && f !== "index.tsx")
    .sort()

  const lines = [autoGenHeader("generate-icons-barrel.mjs"), ""]

  for (const file of files) {
    const filePath = path.join(ICONS_DIR, file)
    const content = fs.readFileSync(filePath, "utf-8")
    const displayName = getDisplayName(content)
    const baseName = file.replace(".tsx", "")

    if (displayName) {
      lines.push(`export { default as ${displayName} } from "./${baseName}"`)
    } else {
      // Fallback: derive from filename
      const name = baseName
        .split("-")
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join("")
      lines.push(`export { default as ${name} } from "./${baseName}"`)
    }
  }

  lines.push("")
  const output = lines.join("\n")
  fs.writeFileSync(OUTPUT_FILE, output, "utf-8")
  console.log(`✓ Generated ${OUTPUT_FILE} (${files.length} icons)`)
}

generate()
