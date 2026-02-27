import { useState, useEffect, useCallback, useMemo, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { componentRegistry, iconRegistry } from "../registry.generated"

interface SearchResult {
  type: "component" | "icon"
  name: string
  slug?: string
  category?: string
}

interface SearchDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function SearchDialog({ open: controlledOpen, onOpenChange }: SearchDialogProps = {}) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [query, setQuery] = useState("")
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen

  const setOpen = useCallback((value: boolean) => {
    if (onOpenChange) {
      onOpenChange(value)
    }
    setInternalOpen(value)
  }, [onOpenChange])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen(!open)
      }
      if (e.key === "Escape" && open) {
        e.stopPropagation()
        setOpen(false)
      }
    },
    [open, setOpen]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery("")
    }
  }, [open])

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()

    const componentResults: SearchResult[] = componentRegistry
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.slug.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      )
      .map((c) => ({
        type: "component" as const,
        name: c.name,
        slug: c.slug,
        category: c.category,
      }))

    const iconResults: SearchResult[] = iconRegistry
      .filter((i) => i.importName.toLowerCase().includes(q))
      .slice(0, 10)
      .map((i) => ({
        type: "icon" as const,
        name: i.importName,
      }))

    return [...componentResults, ...iconResults]
  }, [query])

  // When used as desktop trigger button (no controlledOpen)
  if (!open && controlledOpen === undefined) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 w-[280px] h-9 rounded-lg border border-ui-border-base bg-ui-bg-field px-3 text-[13px] text-ui-fg-muted hover:bg-ui-bg-field-hover transition-fg"
      >
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
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="flex-1 text-left">Buscar...</span>
        <span className="flex items-center h-[22px] rounded border border-ui-border-base bg-ui-bg-base px-1.5 text-[11px] font-medium text-ui-fg-muted">
          Ctrl+K
        </span>
      </button>
    )
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[20vh] lg:pt-[15vh] px-4 lg:px-0">
      <div
        className="fixed inset-0 bg-ui-bg-overlay"
        onClick={() => setOpen(false)}
      />
      <div className="relative w-full max-w-lg rounded-xl border border-ui-border-base bg-ui-bg-base shadow-elevation-modal">
        <div className="flex items-center border-b border-ui-border-base px-4">
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
            className="text-ui-fg-muted mr-2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar componentes, iconos..."
            className="flex-1 bg-transparent py-3 text-sm text-ui-fg-base placeholder:text-ui-fg-muted outline-none"
          />
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && query.trim() && (
            <p className="px-3 py-6 text-center text-sm text-ui-fg-muted">
              No se encontraron resultados.
            </p>
          )}
          {results.map((result, i) => (
            <button
              key={`${result.type}-${result.name}-${i}`}
              className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-ui-fg-base hover:bg-ui-bg-base-hover transition-fg"
              onClick={() => {
                if (result.type === "component" && result.slug) {
                  navigate(`/components/${result.slug}`)
                } else {
                  navigate("/icons")
                }
                setOpen(false)
                setQuery("")
              }}
            >
              <span className="inline-flex items-center rounded bg-ui-bg-component px-1.5 py-0.5 text-xs font-medium text-ui-fg-muted">
                {result.type === "component" ? "Componente" : "Icono"}
              </span>
              <span>{result.name}</span>
              {result.category && (
                <span className="ml-auto text-xs text-ui-fg-muted">
                  {result.category}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
