import { useState } from "react"
import { Button, IconButton, Copy, Tooltip, toast } from "@americojs/ui"
import { PageHeader, DemoSection, DemoGrid, DemoItem } from "../components/DemoSection"

export function ButtonsDemo() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div>
      <PageHeader
        title="Buttons & Actions"
        description="Componentes para acciones e interacciones del usuario."
        components={["Button", "IconButton", "Copy"]}
      />

      {/* Button Variants */}
      <DemoSection
        title="Button - Variantes"
        description="Los botones vienen en diferentes variantes para diferentes niveles de enfasis."
      >
        <DemoGrid columns={4}>
          <DemoItem label="Primary">
            <Button variant="primary">Primary</Button>
          </DemoItem>
          <DemoItem label="Secondary">
            <Button variant="secondary">Secondary</Button>
          </DemoItem>
          <DemoItem label="Transparent">
            <Button variant="transparent">Transparent</Button>
          </DemoItem>
          <DemoItem label="Danger">
            <Button variant="danger">Danger</Button>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* Button Sizes */}
      <DemoSection
        title="Button - Tamanos"
        description="Los botones estan disponibles en varios tamanos."
      >
        <div className="flex items-end gap-4">
          <DemoItem label="Small">
            <Button size="small">Small</Button>
          </DemoItem>
          <DemoItem label="Base">
            <Button size="base">Base</Button>
          </DemoItem>
          <DemoItem label="Large">
            <Button size="large">Large</Button>
          </DemoItem>
          <DemoItem label="XLarge">
            <Button size="xlarge">XLarge</Button>
          </DemoItem>
        </div>
      </DemoSection>

      {/* Button States */}
      <DemoSection
        title="Button - Estados"
        description="Los botones pueden mostrar diferentes estados."
      >
        <DemoGrid columns={3}>
          <DemoItem label="Normal">
            <Button>Normal</Button>
          </DemoItem>
          <DemoItem label="Loading">
            <Button isLoading onClick={handleLoadingClick}>
              {isLoading ? "Cargando..." : "Click para cargar"}
            </Button>
          </DemoItem>
          <DemoItem label="Disabled">
            <Button disabled>Disabled</Button>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* IconButton */}
      <DemoSection
        title="IconButton"
        description="Botones que solo contienen un icono, ideales para acciones compactas."
      >
        <DemoGrid columns={4}>
          <DemoItem label="Small">
            <IconButton size="small" variant="primary">
              <span>+</span>
            </IconButton>
          </DemoItem>
          <DemoItem label="Base">
            <IconButton size="base" variant="secondary">
              <span>✓</span>
            </IconButton>
          </DemoItem>
          <DemoItem label="Large">
            <IconButton size="large" variant="transparent">
              <span>⚙</span>
            </IconButton>
          </DemoItem>
          <DemoItem label="XLarge">
            <IconButton size="xlarge" variant="primary">
              <span>★</span>
            </IconButton>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* Copy Button */}
      <DemoSection
        title="Copy"
        description="Boton para copiar contenido al portapapeles."
      >
        <DemoGrid columns={3}>
          <DemoItem label="Texto simple">
            <div className="flex items-center gap-2 rounded border border-ui-border-base bg-ui-bg-field px-3 py-2">
              <code className="text-sm text-ui-fg-base">npm install @americojs/ui</code>
              <Copy content="npm install @americojs/ui" />
            </div>
          </DemoItem>
          <DemoItem label="Con Tooltip">
            <Tooltip content="Copiar al portapapeles">
              <Copy content="Texto copiado!" />
            </Tooltip>
          </DemoItem>
          <DemoItem label="Variante">
            <Copy content="Otro texto" variant="mini" />
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* Combined Examples */}
      <DemoSection
        title="Ejemplos Combinados"
        description="Botones en contextos reales."
      >
        <div className="space-y-4">
          <div className="flex gap-2">
            <Button variant="primary">Guardar Cambios</Button>
            <Button variant="secondary">Cancelar</Button>
          </div>
          <div className="flex gap-2">
            <Button variant="danger">Eliminar</Button>
            <Button variant="transparent">Cancelar</Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              isLoading={isLoading}
              onClick={handleLoadingClick}
            >
              {isLoading ? "Enviando..." : "Enviar Formulario"}
            </Button>
            {isLoading && (
              <span className="text-sm text-ui-fg-muted">
                Procesando solicitud...
              </span>
            )}
          </div>
        </div>
      </DemoSection>
    </div>
  )
}
