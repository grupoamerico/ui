import { useState } from "react"
import { Link } from "react-router-dom"
import {
  componentRegistry,
  iconRegistry,
  categories,
} from "../registry.generated"

function CopyIcon() {
  return (
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
  )
}

function CheckIcon() {
  return (
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
  )
}

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center justify-between w-full rounded-lg bg-ui-bg-component px-[18px] py-[14px]">
      <code className="text-[13px] font-normal text-ui-fg-base" style={{ fontFamily: "'JetBrains Mono', 'Roboto Mono', monospace" }}>
        {code}
      </code>
      <button
        onClick={handleCopy}
        className="text-ui-fg-muted hover:text-ui-fg-subtle transition-fg shrink-0 ml-3"
        title="Copiar"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  )
}

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="px-12 pt-10 pb-0">
        <div className="flex flex-col gap-3">
          <h1 className="text-[28px] font-bold text-ui-fg-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Grupo Americo UI / Iconos
          </h1>
        </div>

        {/* Stats Row */}
        <div className="flex gap-5 mt-8">
          <div className="flex-1 flex flex-col items-center gap-1 rounded-xl border border-ui-border-base bg-ui-bg-base p-6">
            <span className="text-[34px] font-bold text-ui-fg-interactive">
              {componentRegistry.length}
            </span>
            <span className="text-[13px] text-ui-fg-subtle">Componentes</span>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1 rounded-xl border border-ui-border-base bg-ui-bg-base p-6">
            <span className="text-[34px] font-bold text-ui-fg-interactive">
              {iconRegistry.length}
            </span>
            <span className="text-[13px] text-ui-fg-subtle">Iconos</span>
          </div>
          <div className="flex-1 flex flex-col items-center gap-1 rounded-xl border border-ui-border-base bg-ui-bg-base p-6">
            <span className="text-[34px] font-bold text-ui-fg-interactive">
              {categories.length}
            </span>
            <span className="text-[13px] text-ui-fg-subtle">Categorias</span>
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="px-12 pt-8">
        <h2 className="text-[22px] font-semibold text-ui-fg-base" style={{ fontFamily: "Inter, sans-serif" }}>
          Primeros pasos
        </h2>
        <div className="flex gap-5 mt-5">
          <div className="flex-1 flex flex-col gap-4 rounded-xl border border-ui-border-base bg-ui-bg-base p-6">
            <h3 className="text-base font-semibold text-ui-fg-base">
              Instalacion
            </h3>
            <CodeBlock code="npm install @grupoamerico/ui @grupoamerico/icons" />
          </div>
          <div className="flex-1 flex flex-col gap-4 rounded-xl border border-ui-border-base bg-ui-bg-base p-6">
            <h3 className="text-base font-semibold text-ui-fg-base">
              Preset de Tailwind
            </h3>
            <CodeBlock code="presets: [require('@grupoamerico/ui/preset')]" />
          </div>
        </div>
      </div>

      {/* Components Section */}
      <div className="px-12 pt-5 pb-12">
        <h2 className="text-[22px] font-semibold text-ui-fg-base" style={{ fontFamily: "Inter, sans-serif" }}>
          Componentes
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {categories.map((cat) => {
            const items = componentRegistry.filter((c) => c.category === cat)
            return (
              <div
                key={cat}
                className="flex flex-col gap-4 rounded-xl border border-ui-border-base bg-ui-bg-base p-6"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-ui-fg-base">
                    {cat}
                  </h3>
                  <span className="flex items-center justify-center rounded-full bg-ui-bg-highlight px-2.5 py-1 text-xs font-semibold text-ui-fg-interactive">
                    {items.length}
                  </span>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {items.map((comp) => (
                    <Link
                      key={comp.slug}
                      to={`/components/${comp.slug}`}
                      className="rounded-md bg-ui-bg-component px-3 py-[5px] text-xs font-medium text-ui-fg-subtle hover:bg-ui-bg-component-hover hover:text-ui-fg-base transition-fg"
                    >
                      {comp.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Icons Gallery Link */}
      <div className="px-12 pb-12">
        <Link
          to="/icons"
          className="flex items-center justify-between rounded-xl border border-ui-border-base bg-ui-bg-base p-6 hover:bg-ui-bg-base-hover transition-fg group"
        >
          <div>
            <h3 className="text-base font-semibold text-ui-fg-base">
              Galeria de Iconos
            </h3>
            <p className="text-sm text-ui-fg-subtle mt-1">
              Explora {iconRegistry.length} iconos con busqueda y copiar al
              portapapeles
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-ui-fg-muted group-hover:text-ui-fg-subtle transition-fg"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
