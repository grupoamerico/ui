import { ReactNode } from "react"
import { Heading, Text, Divider, clx } from "@americojs/ui"

interface DemoSectionProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function DemoSection({ title, description, children, className }: DemoSectionProps) {
  return (
    <section className={clx("mb-8", className)}>
      <Heading level="h3" className="text-ui-fg-base mb-2">
        {title}
      </Heading>
      {description && (
        <Text size="small" className="text-ui-fg-muted mb-4">
          {description}
        </Text>
      )}
      <div className="rounded-lg border border-ui-border-base bg-ui-bg-subtle p-6">
        {children}
      </div>
    </section>
  )
}

interface DemoGridProps {
  children: ReactNode
  columns?: 2 | 3 | 4
}

export function DemoGrid({ children, columns = 3 }: DemoGridProps) {
  return (
    <div
      className={clx(
        "grid gap-4",
        columns === 2 && "grid-cols-2",
        columns === 3 && "grid-cols-3",
        columns === 4 && "grid-cols-4"
      )}
    >
      {children}
    </div>
  )
}

interface DemoItemProps {
  label: string
  children: ReactNode
}

export function DemoItem({ label, children }: DemoItemProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <Text size="xsmall" className="text-ui-fg-muted font-medium uppercase tracking-wide">
        {label}
      </Text>
      {children}
    </div>
  )
}

interface PageHeaderProps {
  title: string
  description: string
  components?: string[]
}

export function PageHeader({ title, description, components }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <Heading level="h1" className="text-ui-fg-base mb-2">
        {title}
      </Heading>
      <Text className="text-ui-fg-muted mb-4">{description}</Text>
      {components && components.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {components.map((comp) => (
            <span
              key={comp}
              className="rounded-md bg-ui-tag-neutral-bg px-2 py-1 text-xs font-mono text-ui-tag-neutral-text"
            >
              {comp}
            </span>
          ))}
        </div>
      )}
      <Divider className="mt-6" />
    </div>
  )
}
