import React, { useState } from "react"

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <p className="font-medium">Error de renderizado</p>
            <p className="mt-1 text-xs font-mono">
              {this.state.error?.message}
            </p>
          </div>
        )
      )
    }
    return this.props.children
  }
}

interface ComponentPreviewProps {
  name: string
  code?: string
  children: React.ReactNode
}

export function ComponentPreview({ name, code, children }: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (!code) return
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl border border-ui-border-base bg-ui-bg-base overflow-hidden">
      {/* Header */}
      <div className="border-b border-ui-border-base px-4 py-2 flex items-center justify-between">
        <h3 className="text-sm font-medium text-ui-fg-base">{name}</h3>
        {code && (
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-1.5 text-xs text-ui-fg-muted hover:text-ui-fg-subtle transition-fg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            {showCode ? "Ocultar código" : "Ver código"}
          </button>
        )}
      </div>

      {/* Code block */}
      {showCode && code && (
        <div className="border-b border-ui-border-base bg-ui-bg-component relative group">
          <button
            onClick={handleCopy}
            className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 rounded-md border border-ui-border-base bg-ui-bg-base px-2 py-1 text-[11px] font-medium text-ui-fg-muted hover:text-ui-fg-subtle hover:bg-ui-bg-base-hover transition-fg opacity-0 group-hover:opacity-100"
          >
            {copied ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                Copiado
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                Copiar
              </>
            )}
          </button>
          <pre className="overflow-x-auto p-4 text-[12px] leading-relaxed text-ui-fg-subtle">
            <code>{code}</code>
          </pre>
        </div>
      )}

      {/* Preview area */}
      <div className="p-4 lg:p-6 flex items-center justify-center min-h-[100px] lg:min-h-[120px]">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </div>
    </div>
  )
}
