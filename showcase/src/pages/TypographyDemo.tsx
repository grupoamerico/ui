import { Heading, Text, Label, Code, CodeBlock, Kbd, Divider } from "@americojs/ui"
import { PageHeader, DemoSection, DemoGrid, DemoItem } from "../components/DemoSection"

export function TypographyDemo() {
  const codeExample = `import { Button } from '@americojs/ui'

function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  )
}`

  return (
    <div>
      <PageHeader
        title="Typography"
        description="Componentes para texto, titulos y codigo."
        components={["Heading", "Text", "Label", "Code", "CodeBlock", "Kbd", "Divider"]}
      />

      {/* Heading */}
      <DemoSection
        title="Heading"
        description="Titulos de diferentes niveles jerarquicos."
      >
        <div className="space-y-4">
          <Heading level="h1">Heading H1 - Titulo Principal</Heading>
          <Heading level="h2">Heading H2 - Subtitulo</Heading>
          <Heading level="h3">Heading H3 - Seccion</Heading>
        </div>
      </DemoSection>

      {/* Text */}
      <DemoSection
        title="Text"
        description="Componente de texto con diferentes tamanos y pesos."
      >
        <div className="space-y-6">
          <div>
            <p className="text-xs text-ui-fg-muted mb-2 uppercase tracking-wide">Tamanos</p>
            <div className="space-y-2">
              <Text size="xlarge">Text XLarge - Para destacar informacion importante</Text>
              <Text size="large">Text Large - Para subtitulos y resaltados</Text>
              <Text size="base">Text Base - Tamano por defecto para cuerpo de texto</Text>
              <Text size="small">Text Small - Para texto secundario y notas</Text>
              <Text size="xsmall">Text XSmall - Para etiquetas y metadatos</Text>
            </div>
          </div>

          <Divider />

          <div>
            <p className="text-xs text-ui-fg-muted mb-2 uppercase tracking-wide">Pesos</p>
            <div className="space-y-2">
              <Text weight="regular">Text Regular - Peso normal (400)</Text>
              <Text weight="plus">Text Plus - Semi-bold (500)</Text>
            </div>
          </div>

          <Divider />

          <div>
            <p className="text-xs text-ui-fg-muted mb-2 uppercase tracking-wide">Leading (Line Height)</p>
            <div className="space-y-4">
              <div>
                <Text size="small" className="text-ui-fg-muted mb-1">Normal</Text>
                <Text leading="normal" className="max-w-md">
                  Este texto tiene line-height normal. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </div>
              <div>
                <Text size="small" className="text-ui-fg-muted mb-1">Compact</Text>
                <Text leading="compact" className="max-w-md">
                  Este texto tiene line-height compacto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </DemoSection>

      {/* Text Colors */}
      <DemoSection
        title="Text - Colores"
        description="El texto puede usar diferentes colores semanticos mediante clases de Tailwind."
      >
        <DemoGrid columns={3}>
          <DemoItem label="Base">
            <Text className="text-ui-fg-base">Texto base</Text>
          </DemoItem>
          <DemoItem label="Subtle">
            <Text className="text-ui-fg-subtle">Texto subtle</Text>
          </DemoItem>
          <DemoItem label="Muted">
            <Text className="text-ui-fg-muted">Texto muted</Text>
          </DemoItem>
          <DemoItem label="Interactive">
            <Text className="text-ui-fg-interactive">Texto interactive</Text>
          </DemoItem>
          <DemoItem label="Error">
            <Text className="text-ui-fg-error">Texto error</Text>
          </DemoItem>
          <DemoItem label="On Color">
            <span className="bg-ui-button-inverted px-2 py-1 rounded">
              <Text className="text-ui-fg-on-color">On Color</Text>
            </span>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* Label */}
      <DemoSection
        title="Label"
        description="Etiquetas para campos de formulario."
      >
        <DemoGrid columns={3}>
          <DemoItem label="Default">
            <Label>Campo requerido</Label>
          </DemoItem>
          <DemoItem label="Con htmlFor">
            <Label htmlFor="example-input">Email</Label>
          </DemoItem>
          <DemoItem label="Weight Plus">
            <Label weight="plus">Titulo importante</Label>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* Code */}
      <DemoSection
        title="Code"
        description="Texto de codigo inline para variables, funciones, etc."
      >
        <div className="space-y-4">
          <Text>
            Para instalar el paquete, ejecuta <Code>npm install @americojs/ui</Code> en tu terminal.
          </Text>
          <Text>
            El componente <Code>Button</Code> acepta las props <Code>variant</Code> y <Code>size</Code>.
          </Text>
          <Text>
            Usa la funcion <Code>clx()</Code> para combinar clases de Tailwind.
          </Text>
        </div>
      </DemoSection>

      {/* CodeBlock */}
      <DemoSection
        title="CodeBlock"
        description="Bloques de codigo con syntax highlighting."
      >
        <div className="space-y-4">
          <CodeBlock
            snippets={[
              {
                label: "TypeScript",
                language: "tsx",
                code: codeExample,
              },
            ]}
          >
            <CodeBlock.Header />
            <CodeBlock.Body />
          </CodeBlock>
        </div>
      </DemoSection>

      {/* Kbd */}
      <DemoSection
        title="Kbd"
        description="Representacion visual de teclas del teclado."
      >
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Text>Guardar:</Text>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>S</Kbd>
          </div>
          <div className="flex items-center gap-2">
            <Text>Copiar:</Text>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>C</Kbd>
          </div>
          <div className="flex items-center gap-2">
            <Text>Buscar:</Text>
            <Kbd>Ctrl</Kbd>
            <span>+</span>
            <Kbd>K</Kbd>
          </div>
          <div className="flex items-center gap-2">
            <Text>Escape:</Text>
            <Kbd>Esc</Kbd>
          </div>
          <div className="flex items-center gap-2">
            <Text>Navegacion:</Text>
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
            <Kbd>←</Kbd>
            <Kbd>→</Kbd>
          </div>
        </div>
      </DemoSection>

      {/* Divider */}
      <DemoSection
        title="Divider"
        description="Linea divisoria para separar secciones de contenido."
      >
        <div className="space-y-4">
          <div>
            <Text className="text-ui-fg-muted mb-2">Horizontal (default)</Text>
            <Divider />
          </div>
          <div>
            <Text className="text-ui-fg-muted mb-2">Con variante</Text>
            <Divider variant="dashed" />
          </div>
          <div className="flex h-20 items-center gap-4">
            <Text>Seccion A</Text>
            <Divider orientation="vertical" />
            <Text>Seccion B</Text>
            <Divider orientation="vertical" />
            <Text>Seccion C</Text>
          </div>
        </div>
      </DemoSection>
    </div>
  )
}
