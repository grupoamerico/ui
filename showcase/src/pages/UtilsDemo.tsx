import { useState } from "react"
import { Button, Switch, Text, Code, Heading, toast, useToggleState, clx } from "@americojs/ui"
import { PageHeader, DemoSection, DemoGrid, DemoItem } from "../components/DemoSection"

export function UtilsDemo() {
  const [toggleState, open, close, toggle] = useToggleState(false)
  const [clxDemo, setClxDemo] = useState({ primary: true, large: false, disabled: false })

  const generatedClass = clx(
    "rounded-lg px-4 py-2 font-medium transition-colors",
    clxDemo.primary && "bg-ui-button-inverted text-ui-fg-on-color",
    !clxDemo.primary && "bg-ui-bg-subtle text-ui-fg-base border border-ui-border-base",
    clxDemo.large && "text-lg px-6 py-3",
    clxDemo.disabled && "opacity-50 cursor-not-allowed"
  )

  return (
    <div>
      <PageHeader
        title="Utilities & Hooks"
        description="Funciones utilitarias y hooks personalizados para el desarrollo."
        components={["usePrompt", "useToggleState", "clx", "toast"]}
      />

      {/* useToggleState */}
      <DemoSection
        title="useToggleState"
        description="Hook para manejar estados booleanos con funciones de control."
      >
        <div className="space-y-4">
          <div className="rounded-lg border border-ui-border-base bg-ui-bg-field p-4 font-mono text-sm">
            <Text className="text-ui-fg-muted">{"// Uso del hook"}</Text>
            <br />
            <Text className="text-ui-fg-base">
              {"const [state, open, close, toggle] = useToggleState(false)"}
            </Text>
          </div>

          <div className="flex items-center gap-4">
            <Text>Estado actual: <Code>{toggleState ? "true" : "false"}</Code></Text>
          </div>

          <DemoGrid columns={4}>
            <DemoItem label="open()">
              <Button onClick={open} variant="primary" size="small">
                Abrir
              </Button>
            </DemoItem>
            <DemoItem label="close()">
              <Button onClick={close} variant="secondary" size="small">
                Cerrar
              </Button>
            </DemoItem>
            <DemoItem label="toggle()">
              <Button onClick={toggle} variant="transparent" size="small">
                Toggle
              </Button>
            </DemoItem>
            <DemoItem label="Estado visual">
              <div
                className={clx(
                  "h-10 w-10 rounded-lg transition-colors",
                  toggleState ? "bg-ui-tag-green-bg" : "bg-ui-tag-red-bg"
                )}
              />
            </DemoItem>
          </DemoGrid>

          <div className="mt-4">
            <Text size="small" className="text-ui-fg-muted">
              Casos de uso: modales, drawers, dropdowns, expansiones de contenido, etc.
            </Text>
          </div>
        </div>
      </DemoSection>

      {/* clx */}
      <DemoSection
        title="clx"
        description="Funcion utilitaria que combina clsx con tailwind-merge para manejar clases de forma segura."
      >
        <div className="space-y-4">
          <div className="rounded-lg border border-ui-border-base bg-ui-bg-field p-4 font-mono text-sm">
            <Text className="text-ui-fg-muted">{"// Importar"}</Text>
            <br />
            <Text className="text-ui-fg-base">{"import { clx } from '@americojs/ui'"}</Text>
            <br /><br />
            <Text className="text-ui-fg-muted">{"// Uso"}</Text>
            <br />
            <Text className="text-ui-fg-base">{"clx('base-class', condition && 'conditional-class')"}</Text>
          </div>

          <div>
            <Text size="small" className="text-ui-fg-muted mb-2">Configuracion interactiva:</Text>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <Switch
                  checked={clxDemo.primary}
                  onCheckedChange={(checked) => setClxDemo((p) => ({ ...p, primary: checked }))}
                  size="small"
                />
                <Text size="small">Primary</Text>
              </label>
              <label className="flex items-center gap-2">
                <Switch
                  checked={clxDemo.large}
                  onCheckedChange={(checked) => setClxDemo((p) => ({ ...p, large: checked }))}
                  size="small"
                />
                <Text size="small">Large</Text>
              </label>
              <label className="flex items-center gap-2">
                <Switch
                  checked={clxDemo.disabled}
                  onCheckedChange={(checked) => setClxDemo((p) => ({ ...p, disabled: checked }))}
                  size="small"
                />
                <Text size="small">Disabled</Text>
              </label>
            </div>
          </div>

          <div>
            <Text size="small" className="text-ui-fg-muted mb-2">Resultado:</Text>
            <div className={generatedClass}>
              Boton con clases dinamicas
            </div>
          </div>

          <div>
            <Text size="small" className="text-ui-fg-muted mb-2">Clases generadas:</Text>
            <Code className="text-xs break-all">{generatedClass}</Code>
          </div>
        </div>
      </DemoSection>

      {/* toast */}
      <DemoSection
        title="toast"
        description="Funcion para mostrar notificaciones temporales. Usa Sonner internamente."
      >
        <div className="space-y-4">
          <div className="rounded-lg border border-ui-border-base bg-ui-bg-field p-4 font-mono text-sm">
            <Text className="text-ui-fg-muted">{"// Importar"}</Text>
            <br />
            <Text className="text-ui-fg-base">{"import { toast } from '@americojs/ui'"}</Text>
            <br /><br />
            <Text className="text-ui-fg-muted">{"// Variantes"}</Text>
            <br />
            <Text className="text-ui-fg-base">{"toast.success('Mensaje de exito')"}</Text>
            <br />
            <Text className="text-ui-fg-base">{"toast.error('Mensaje de error')"}</Text>
            <br />
            <Text className="text-ui-fg-base">{"toast.warning('Mensaje de advertencia')"}</Text>
            <br />
            <Text className="text-ui-fg-base">{"toast.info('Mensaje informativo')"}</Text>
            <br />
            <Text className="text-ui-fg-base">{"toast.loading('Cargando...')"}</Text>
          </div>

          <DemoGrid columns={3}>
            <DemoItem label="Success">
              <Button
                onClick={() => toast.success("Cambios guardados correctamente")}
                variant="primary"
                size="small"
              >
                toast.success()
              </Button>
            </DemoItem>
            <DemoItem label="Error">
              <Button
                onClick={() => toast.error("No se pudo completar la operacion")}
                variant="danger"
                size="small"
              >
                toast.error()
              </Button>
            </DemoItem>
            <DemoItem label="Info">
              <Button
                onClick={() => toast.info("Nueva actualizacion disponible")}
                variant="secondary"
                size="small"
              >
                toast.info()
              </Button>
            </DemoItem>
          </DemoGrid>

          <div>
            <Text size="small" className="text-ui-fg-muted mb-2">Con opciones avanzadas:</Text>
            <Button
              onClick={() =>
                toast("Archivo subido", {
                  description: "El archivo se ha subido correctamente al servidor.",
                  action: {
                    label: "Ver",
                    onClick: () => alert("Ver archivo"),
                  },
                })
              }
              variant="secondary"
              size="small"
            >
              Toast con accion
            </Button>
          </div>
        </div>
      </DemoSection>

      {/* usePrompt */}
      <DemoSection
        title="usePrompt"
        description="Hook para mostrar dialogos de confirmacion de forma programatica."
      >
        <div className="space-y-4">
          <div className="rounded-lg border border-ui-border-base bg-ui-bg-field p-4 font-mono text-sm">
            <Text className="text-ui-fg-muted">{"// Importar"}</Text>
            <br />
            <Text className="text-ui-fg-base">{"import { usePrompt, Prompt } from '@americojs/ui'"}</Text>
            <br /><br />
            <Text className="text-ui-fg-muted">{"// Uso"}</Text>
            <br />
            <Text className="text-ui-fg-base">{"const prompt = usePrompt()"}</Text>
            <br />
            <Text className="text-ui-fg-base">{"const confirmed = await prompt({ title: '...', description: '...' })"}</Text>
          </div>

          <Text size="small" className="text-ui-fg-muted">
            Nota: El hook usePrompt requiere que el componente {"<Prompt>"} este presente en el arbol de componentes.
            Ver la seccion de Overlays para un ejemplo interactivo.
          </Text>
        </div>
      </DemoSection>

      {/* Resumen de exports */}
      <DemoSection
        title="Resumen de Exports"
        description="Todos los exports disponibles desde @americojs/ui"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Heading level="h4" className="text-ui-fg-base mb-2">Componentes (44)</Heading>
            <div className="text-sm text-ui-fg-muted space-y-1 max-h-64 overflow-y-auto">
              {[
                "Alert", "Avatar", "Badge", "Button", "Calendar", "Checkbox", "Code",
                "CodeBlock", "Command", "CommandBar", "Container", "Copy", "CurrencyInput",
                "DatePicker", "Divider", "Drawer", "DropdownMenu", "FocusModal", "Heading",
                "Hint", "I18nProvider", "IconBadge", "IconButton", "InlineTip", "Input",
                "Kbd", "Label", "Popover", "ProgressAccordion", "ProgressTabs", "Prompt",
                "RadioGroup", "Select", "Skeleton", "StatusBadge", "Switch", "Table",
                "Tabs", "Text", "Textarea", "Toast", "Toaster", "Tooltip", "TooltipProvider"
              ].map((comp) => (
                <div key={comp}>{comp}</div>
              ))}
            </div>
          </div>
          <div>
            <Heading level="h4" className="text-ui-fg-base mb-2">Blocks</Heading>
            <div className="text-sm text-ui-fg-muted mb-4">
              DataTable (con useDataTable, helpers, tipos)
            </div>

            <Heading level="h4" className="text-ui-fg-base mb-2">Hooks</Heading>
            <div className="text-sm text-ui-fg-muted mb-4">
              usePrompt, useToggleState
            </div>

            <Heading level="h4" className="text-ui-fg-base mb-2">Utilidades</Heading>
            <div className="text-sm text-ui-fg-muted mb-4">
              clx, toast, buttonVariants
            </div>

            <Heading level="h4" className="text-ui-fg-base mb-2">Tipos</Heading>
            <div className="text-sm text-ui-fg-muted">
              DateRange, ToasterPosition, CheckboxCheckedState, etc.
            </div>
          </div>
        </div>
      </DemoSection>
    </div>
  )
}
