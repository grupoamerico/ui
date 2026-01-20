import { Link } from "react-router-dom"
import { Heading, Text, Badge, Container } from "@americojs/ui"

const categories = [
  {
    path: "/buttons",
    title: "Buttons & Actions",
    description: "Button, IconButton, Copy",
    count: 3,
    color: "blue" as const,
  },
  {
    path: "/forms",
    title: "Form Controls",
    description: "Input, Select, Checkbox, Switch, RadioGroup, Textarea, DatePicker, CurrencyInput",
    count: 8,
    color: "green" as const,
  },
  {
    path: "/feedback",
    title: "Feedback",
    description: "Alert, Toast, Toaster, Hint, InlineTip, Skeleton",
    count: 6,
    color: "orange" as const,
  },
  {
    path: "/data-display",
    title: "Data Display",
    description: "Table, DataTable, Badge, StatusBadge, IconBadge, Avatar, Calendar",
    count: 7,
    color: "purple" as const,
  },
  {
    path: "/overlays",
    title: "Overlays",
    description: "Drawer, FocusModal, Popover, Tooltip, DropdownMenu, Prompt, CommandBar",
    count: 7,
    color: "red" as const,
  },
  {
    path: "/navigation",
    title: "Navigation",
    description: "Tabs, ProgressTabs, ProgressAccordion, Command",
    count: 4,
    color: "grey" as const,
  },
  {
    path: "/typography",
    title: "Typography",
    description: "Heading, Text, Label, Code, CodeBlock, Kbd",
    count: 6,
    color: "blue" as const,
  },
  {
    path: "/utils",
    title: "Utilities & Hooks",
    description: "usePrompt, useToggleState, clx, toast",
    count: 4,
    color: "green" as const,
  },
]

export function Home() {
  return (
    <Container>
      <div className="mb-12">
        <Heading level="h1" className="text-ui-fg-base mb-4">
          Americo UI Design System
        </Heading>
        <Text size="large" className="text-ui-fg-muted max-w-2xl">
          Una coleccion completa de componentes React construidos con Tailwind CSS,
          Radix UI y React Aria. Explora todos los componentes y prueba sus variantes.
        </Text>
      </div>

      {/* Stats */}
      <div className="mb-12 grid grid-cols-4 gap-4">
        <div className="rounded-lg border border-ui-border-base bg-ui-bg-subtle p-4">
          <Text size="xlarge" weight="plus" className="text-ui-fg-base">
            44+
          </Text>
          <Text size="small" className="text-ui-fg-muted">
            Componentes
          </Text>
        </div>
        <div className="rounded-lg border border-ui-border-base bg-ui-bg-subtle p-4">
          <Text size="xlarge" weight="plus" className="text-ui-fg-base">
            2
          </Text>
          <Text size="small" className="text-ui-fg-muted">
            Custom Hooks
          </Text>
        </div>
        <div className="rounded-lg border border-ui-border-base bg-ui-bg-subtle p-4">
          <Text size="xlarge" weight="plus" className="text-ui-fg-base">
            100%
          </Text>
          <Text size="small" className="text-ui-fg-muted">
            TypeScript
          </Text>
        </div>
        <div className="rounded-lg border border-ui-border-base bg-ui-bg-subtle p-4">
          <Text size="xlarge" weight="plus" className="text-ui-fg-base">
            Dark
          </Text>
          <Text size="small" className="text-ui-fg-muted">
            Mode Support
          </Text>
        </div>
      </div>

      {/* Categories Grid */}
      <Heading level="h2" className="text-ui-fg-base mb-6">
        Categorias de Componentes
      </Heading>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <Link
            key={category.path}
            to={category.path}
            className="group rounded-lg border border-ui-border-base bg-ui-bg-subtle p-6 transition-all hover:border-ui-border-strong hover:shadow-elevation-card-hover"
          >
            <div className="flex items-start justify-between mb-2">
              <Heading level="h3" className="text-ui-fg-base group-hover:text-ui-fg-interactive">
                {category.title}
              </Heading>
              <Badge color={category.color}>{category.count}</Badge>
            </div>
            <Text size="small" className="text-ui-fg-muted">
              {category.description}
            </Text>
          </Link>
        ))}
      </div>

      {/* Quick Import Example */}
      <div className="mt-12">
        <Heading level="h2" className="text-ui-fg-base mb-4">
          Como Usar
        </Heading>
        <div className="rounded-lg border border-ui-border-base bg-ui-bg-field p-4 font-mono text-sm">
          <Text className="text-ui-fg-muted">{"// Importar componentes"}</Text>
          <br />
          <Text className="text-ui-fg-base">
            {"import { Button, Input, Select } from '@americojs/ui'"}
          </Text>
          <br />
          <br />
          <Text className="text-ui-fg-muted">{"// Importar iconos"}</Text>
          <br />
          <Text className="text-ui-fg-base">
            {"import { Spinner, Check } from '@americojs/icons'"}
          </Text>
          <br />
          <br />
          <Text className="text-ui-fg-muted">{"// Importar preset de Tailwind"}</Text>
          <br />
          <Text className="text-ui-fg-base">
            {"import preset from '@americojs/ui-preset'"}
          </Text>
        </div>
      </div>
    </Container>
  )
}
