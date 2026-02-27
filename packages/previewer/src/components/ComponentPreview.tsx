import React from "react"

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
  children: React.ReactNode
}

export function ComponentPreview({ name, children }: ComponentPreviewProps) {
  return (
    <div className="rounded-xl border border-ui-border-base bg-ui-bg-base overflow-hidden">
      <div className="border-b border-ui-border-base px-4 py-2">
        <h3 className="text-sm font-medium text-ui-fg-base">{name}</h3>
      </div>
      <div className="p-4 lg:p-6 flex items-center justify-center min-h-[100px] lg:min-h-[120px]">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </div>
    </div>
  )
}
