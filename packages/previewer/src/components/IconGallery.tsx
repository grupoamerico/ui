import { useState, useMemo } from "react"
import { getAllIcons, type IconInfo } from "../lib/icon-loader"
import { getIconCategory, ICON_CATEGORIES } from "../lib/category-map"

export function IconGallery() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("Todos")
  const [copied, setCopied] = useState<string | null>(null)

  const icons = useMemo(() => getAllIcons(), [])

  const filtered = useMemo(() => {
    return icons.filter((icon) => {
      const matchesSearch = icon.name
        .toLowerCase()
        .includes(search.toLowerCase())
      const matchesCategory =
        category === "Todos" || getIconCategory(icon.name) === category
      return matchesSearch && matchesCategory
    })
  }, [icons, search, category])

  const handleCopy = (icon: IconInfo) => {
    const importStatement = `import { ${icon.name} } from '@grupoamerico/icons'`
    navigator.clipboard.writeText(importStatement)
    setCopied(icon.name)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Search and filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-ui-fg-muted"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Buscar entre ${icons.length} iconos...`}
            className="w-full rounded-lg border border-ui-border-base bg-ui-bg-field pl-10 pr-3 py-2.5 text-sm text-ui-fg-base placeholder:text-ui-fg-muted outline-none focus:border-ui-border-interactive transition-fg"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {ICON_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-fg ${
                category === cat
                  ? "bg-ui-fg-base text-ui-bg-base"
                  : "bg-ui-bg-base border border-ui-border-base text-ui-fg-subtle hover:text-ui-fg-base hover:bg-ui-bg-base-hover"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-ui-fg-muted">
        {filtered.length} icono{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3">
        {filtered.map((icon) => {
          const Icon = icon.component
          return (
            <button
              key={icon.name}
              onClick={() => handleCopy(icon)}
              className="group flex flex-col items-center gap-2 rounded-lg border border-ui-border-base bg-ui-bg-base p-3 hover:bg-ui-bg-base-hover hover:border-ui-border-strong transition-fg"
              title={icon.name}
            >
              <div className="flex items-center justify-center h-8">
                <Icon className="h-5 w-5 text-ui-fg-base" />
              </div>
              <span className="text-[10px] text-ui-fg-muted text-center leading-tight truncate w-full">
                {copied === icon.name ? "Copiado!" : icon.name}
              </span>
            </button>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="flex items-center justify-center py-20">
          <p className="text-sm text-ui-fg-muted">No se encontraron iconos.</p>
        </div>
      )}
    </div>
  )
}
