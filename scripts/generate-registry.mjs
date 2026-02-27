/**
 * Auto-discovery script for previewer registry.
 *
 * Generates packages/previewer/src/registry.generated.ts with:
 * - componentRegistry: all UI components with metadata
 * - iconRegistry: all icon names and import names
 */

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import { kebabToPascal, autoGenHeader } from "./utils.mjs"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const COMPONENTS_DIR = path.join(ROOT, "packages/ui/src/components")
const ICONS_DIR = path.join(ROOT, "packages/icons/src/components")
const OUTPUT_FILE = path.join(ROOT, "packages/previewer/src/registry.generated.ts")

// Mapeo de categorias por tipo de componente
const CATEGORY_MAP = {
  // Disposicion
  container: "Disposicion",
  divider: "Disposicion",

  // Tipografia
  heading: "Tipografia",
  text: "Tipografia",
  code: "Tipografia",
  "code-block": "Tipografia",
  kbd: "Tipografia",

  // Formularios
  button: "Formularios",
  "icon-button": "Formularios",
  input: "Formularios",
  textarea: "Formularios",
  select: "Formularios",
  checkbox: "Formularios",
  "radio-group": "Formularios",
  switch: "Formularios",
  "currency-input": "Formularios",
  label: "Formularios",
  hint: "Formularios",
  "date-picker": "Formularios",

  // Retroalimentacion
  alert: "Retroalimentacion",
  toast: "Retroalimentacion",
  toaster: "Retroalimentacion",
  skeleton: "Retroalimentacion",
  "inline-tip": "Retroalimentacion",

  // Superposiciones
  popover: "Superposiciones",
  tooltip: "Superposiciones",
  "dropdown-menu": "Superposiciones",
  drawer: "Superposiciones",
  "focus-modal": "Superposiciones",
  prompt: "Superposiciones",
  "command-bar": "Superposiciones",
  command: "Superposiciones",

  // Visualizacion de datos
  avatar: "Visualizacion de datos",
  badge: "Visualizacion de datos",
  "icon-badge": "Visualizacion de datos",
  "status-badge": "Visualizacion de datos",
  table: "Visualizacion de datos",
  copy: "Visualizacion de datos",
  calendar: "Visualizacion de datos",

  // Navegacion
  tabs: "Navegacion",
  "progress-tabs": "Navegacion",
  "progress-accordion": "Navegacion",

  // Proveedores
  "i18n-provider": "Proveedores",
}

// Internal components not shown in the previewer
const INTERNAL_COMPONENTS = new Set(["date-segment", "time-input"])

function generate() {
  // --- Component Registry ---
  const componentDirs = fs
    .readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !INTERNAL_COMPONENTS.has(d.name))
    .map((d) => d.name)
    .sort()

  const components = componentDirs.map((dir) => {
    const name = kebabToPascal(dir)
    const category = CATEGORY_MAP[dir] || "Otros"
    const hasStories = fs.existsSync(
      path.join(COMPONENTS_DIR, dir, `${dir}.stories.tsx`)
    )

    // Read the index.ts to find export names
    const indexPath = path.join(COMPONENTS_DIR, dir, "index.ts")
    let exports = []
    if (fs.existsSync(indexPath)) {
      const content = fs.readFileSync(indexPath, "utf-8")
      const matches = content.matchAll(/export\s+\*\s+from\s+["']\.\/([^"']+)["']/g)
      for (const m of matches) {
        exports.push(m[1])
      }
    }

    return { slug: dir, name, category, hasStories, exports }
  })

  // --- Icon Registry ---
  let icons = []
  if (fs.existsSync(ICONS_DIR)) {
    const iconFiles = fs
      .readdirSync(ICONS_DIR)
      .filter((f) => f.endsWith(".tsx") && f !== "index.tsx")
      .sort()

    icons = iconFiles.map((file) => {
      const baseName = file.replace(".tsx", "")
      const content = fs.readFileSync(path.join(ICONS_DIR, file), "utf-8")
      const displayMatch = content.match(/(\w+)\.displayName\s*=\s*["'](\w+)["']/)
      const importName = displayMatch ? displayMatch[2] : kebabToPascal(baseName)
      return { fileName: baseName, importName }
    })
  }

  // --- Generate output ---
  const lines = [
    autoGenHeader("generate-registry.mjs"),
    "",
    "export interface ComponentEntry {",
    "  slug: string",
    "  name: string",
    "  category: string",
    "  hasStories: boolean",
    "}",
    "",
    "export interface IconEntry {",
    "  fileName: string",
    "  importName: string",
    "}",
    "",
    `export const componentRegistry: ComponentEntry[] = ${JSON.stringify(components.map(({ slug, name, category, hasStories }) => ({ slug, name, category, hasStories })), null, 2)}`,
    "",
    `export const iconRegistry: IconEntry[] = ${JSON.stringify(icons, null, 2)}`,
    "",
    "export const categories = [...new Set(componentRegistry.map((c) => c.category))].sort()",
    "",
  ]

  // Ensure output dir exists
  const outputDir = path.dirname(OUTPUT_FILE)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  fs.writeFileSync(OUTPUT_FILE, lines.join("\n"), "utf-8")
  console.log(
    `✓ Generated ${OUTPUT_FILE} (${components.length} components, ${icons.length} icons)`
  )
}

generate()
