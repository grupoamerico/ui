import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { componentRegistry } from "../registry.generated"
import { loadStories } from "../lib/component-loader"
import { parseStories, type ParsedStory } from "../lib/story-adapter"
import { ComponentPreview } from "../components/ComponentPreview"

export function ComponentPage() {
  const { slug } = useParams<{ slug: string }>()
  const [stories, setStories] = useState<ParsedStory[]>([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  const entry = componentRegistry.find((c) => c.slug === slug)

  useEffect(() => {
    if (!slug) return

    setLoading(true)
    setStories([])

    loadStories(slug)
      .then((mod) => {
        if (mod) {
          setStories(parseStories(mod))
        }
      })
      .catch(() => {
        // Stories may not exist for all components
      })
      .finally(() => setLoading(false))
  }, [slug])

  if (!entry) {
    return (
      <div className="p-12">
        <p className="text-ui-fg-muted">Componente no encontrado: {slug}</p>
      </div>
    )
  }

  const importStatement = `import { ${entry.name} } from '@grupoamerico/ui'`

  const handleCopy = () => {
    navigator.clipboard.writeText(importStatement)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="px-12 py-10 max-w-4xl space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <h1 className="text-[28px] font-bold text-ui-fg-base">
            {entry.name}
          </h1>
          <span className="rounded-full bg-ui-bg-highlight px-2.5 py-1 text-xs font-semibold text-ui-fg-interactive">
            {entry.category}
          </span>
        </div>

        {/* Import statement */}
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center justify-between rounded-lg border border-ui-border-base bg-ui-bg-component px-[18px] py-[14px]">
            <code
              className="text-[13px] text-ui-fg-base"
              style={{ fontFamily: "'JetBrains Mono', 'Roboto Mono', monospace" }}
            >
              {importStatement}
            </code>
            <button
              onClick={handleCopy}
              className="text-ui-fg-muted hover:text-ui-fg-subtle transition-fg shrink-0 ml-3"
              title="Copiar sentencia de importacion"
            >
              {copied ? (
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
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              ) : (
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
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Stories / Examples */}
      <div className="space-y-4">
        <h2 className="text-[22px] font-semibold text-ui-fg-base">Ejemplos</h2>

        {loading && (
          <div className="rounded-xl border border-ui-border-base bg-ui-bg-base p-8 flex items-center justify-center">
            <p className="text-sm text-ui-fg-muted">Cargando ejemplos...</p>
          </div>
        )}

        {!loading && stories.length === 0 && (
          <div className="rounded-xl border border-ui-border-base bg-ui-bg-base p-8 flex items-center justify-center">
            <p className="text-sm text-ui-fg-muted">
              No se encontraron ejemplos para este componente.
            </p>
          </div>
        )}

        <div className="grid gap-4">
          {stories.map((story) => (
            <ComponentPreview key={story.name} name={story.name}>
              {story.element}
            </ComponentPreview>
          ))}
        </div>
      </div>
    </div>
  )
}
