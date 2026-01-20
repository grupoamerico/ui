import { useState } from "react"
import {
  Tabs,
  ProgressTabs,
  ProgressAccordion,
  Command,
  Text,
  Badge,
} from "@americojs/ui"
import { PageHeader, DemoSection, DemoGrid, DemoItem } from "../components/DemoSection"

export function NavigationDemo() {
  const [activeTab, setActiveTab] = useState("tab1")
  const [progressStep, setProgressStep] = useState("step1")

  return (
    <div>
      <PageHeader
        title="Navigation"
        description="Componentes para navegacion y organizacion de contenido."
        components={["Tabs", "ProgressTabs", "ProgressAccordion", "Command"]}
      />

      {/* Tabs */}
      <DemoSection
        title="Tabs"
        description="Pestanas para organizar contenido en secciones."
      >
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <Tabs.List>
            <Tabs.Trigger value="tab1">General</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Configuracion</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Avanzado</Tabs.Trigger>
            <Tabs.Trigger value="tab4" disabled>
              Deshabilitado
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1" className="p-4">
            <Text>Contenido de la pestana General. Aqui puedes mostrar informacion basica.</Text>
          </Tabs.Content>
          <Tabs.Content value="tab2" className="p-4">
            <Text>Contenido de Configuracion. Ajustes y preferencias del usuario.</Text>
          </Tabs.Content>
          <Tabs.Content value="tab3" className="p-4">
            <Text>Contenido Avanzado. Opciones para usuarios expertos.</Text>
          </Tabs.Content>
        </Tabs>
      </DemoSection>

      {/* Tabs Sizes */}
      <DemoSection
        title="Tabs - Tamanos"
        description="Los tabs vienen en diferentes tamanos."
      >
        <div className="space-y-6">
          <div>
            <Text size="small" className="text-ui-fg-muted mb-2">Small</Text>
            <Tabs defaultValue="a" size="small">
              <Tabs.List>
                <Tabs.Trigger value="a">Tab A</Tabs.Trigger>
                <Tabs.Trigger value="b">Tab B</Tabs.Trigger>
                <Tabs.Trigger value="c">Tab C</Tabs.Trigger>
              </Tabs.List>
            </Tabs>
          </div>
          <div>
            <Text size="small" className="text-ui-fg-muted mb-2">Base (default)</Text>
            <Tabs defaultValue="a">
              <Tabs.List>
                <Tabs.Trigger value="a">Tab A</Tabs.Trigger>
                <Tabs.Trigger value="b">Tab B</Tabs.Trigger>
                <Tabs.Trigger value="c">Tab C</Tabs.Trigger>
              </Tabs.List>
            </Tabs>
          </div>
        </div>
      </DemoSection>

      {/* ProgressTabs */}
      <DemoSection
        title="ProgressTabs"
        description="Tabs con indicador de progreso para flujos de varios pasos."
      >
        <ProgressTabs value={progressStep} onValueChange={setProgressStep}>
          <ProgressTabs.List>
            <ProgressTabs.Trigger
              value="step1"
              status={progressStep === "step1" ? "in-progress" : progressStep > "step1" ? "completed" : "not-started"}
            >
              Paso 1: Datos Personales
            </ProgressTabs.Trigger>
            <ProgressTabs.Trigger
              value="step2"
              status={progressStep === "step2" ? "in-progress" : progressStep > "step2" ? "completed" : "not-started"}
            >
              Paso 2: Direccion
            </ProgressTabs.Trigger>
            <ProgressTabs.Trigger
              value="step3"
              status={progressStep === "step3" ? "in-progress" : "not-started"}
            >
              Paso 3: Pago
            </ProgressTabs.Trigger>
          </ProgressTabs.List>
          <ProgressTabs.Content value="step1" className="p-4">
            <Text className="mb-4">Ingresa tus datos personales: nombre, email, telefono.</Text>
            <button
              onClick={() => setProgressStep("step2")}
              className="text-ui-fg-interactive hover:underline"
            >
              Siguiente paso →
            </button>
          </ProgressTabs.Content>
          <ProgressTabs.Content value="step2" className="p-4">
            <Text className="mb-4">Ingresa tu direccion de envio.</Text>
            <button
              onClick={() => setProgressStep("step3")}
              className="text-ui-fg-interactive hover:underline"
            >
              Siguiente paso →
            </button>
          </ProgressTabs.Content>
          <ProgressTabs.Content value="step3" className="p-4">
            <Text>Selecciona tu metodo de pago y completa la compra.</Text>
          </ProgressTabs.Content>
        </ProgressTabs>
      </DemoSection>

      {/* ProgressAccordion */}
      <DemoSection
        title="ProgressAccordion"
        description="Acordeon con indicadores de progreso para procesos paso a paso."
      >
        <ProgressAccordion type="single" collapsible defaultValue="item-1">
          <ProgressAccordion.Item value="item-1">
            <ProgressAccordion.Header status="completed">
              1. Crear cuenta
            </ProgressAccordion.Header>
            <ProgressAccordion.Content>
              <div className="pb-4">
                <Text className="text-ui-fg-muted">
                  Tu cuenta ha sido creada exitosamente. Email confirmado.
                </Text>
                <Badge color="green" className="mt-2">Completado</Badge>
              </div>
            </ProgressAccordion.Content>
          </ProgressAccordion.Item>

          <ProgressAccordion.Item value="item-2">
            <ProgressAccordion.Header status="in-progress">
              2. Configurar perfil
            </ProgressAccordion.Header>
            <ProgressAccordion.Content>
              <div className="pb-4">
                <Text className="text-ui-fg-muted">
                  Completa la informacion de tu perfil para personalizar tu experiencia.
                </Text>
                <Badge color="orange" className="mt-2">En progreso</Badge>
              </div>
            </ProgressAccordion.Content>
          </ProgressAccordion.Item>

          <ProgressAccordion.Item value="item-3">
            <ProgressAccordion.Header status="not-started">
              3. Conectar integraciones
            </ProgressAccordion.Header>
            <ProgressAccordion.Content>
              <div className="pb-4">
                <Text className="text-ui-fg-muted">
                  Conecta tus herramientas favoritas para maximizar tu productividad.
                </Text>
                <Badge color="grey" className="mt-2">Pendiente</Badge>
              </div>
            </ProgressAccordion.Content>
          </ProgressAccordion.Item>
        </ProgressAccordion>
      </DemoSection>

      {/* Command */}
      <DemoSection
        title="Command"
        description="Componente para mostrar comandos de terminal con opcion de copiar."
      >
        <div className="space-y-4">
          <div>
            <Text size="small" className="text-ui-fg-muted mb-2">Comando de instalacion</Text>
            <Command>
              <code>npm install @americojs/ui</code>
              <Command.Copy content="npm install @americojs/ui" />
            </Command>
          </div>
          <div>
            <Text size="small" className="text-ui-fg-muted mb-2">Comando de desarrollo</Text>
            <Command>
              <code>npm run dev</code>
              <Command.Copy content="npm run dev" />
            </Command>
          </div>
          <div>
            <Text size="small" className="text-ui-fg-muted mb-2">Comando de build</Text>
            <Command>
              <code>npm run build</code>
              <Command.Copy content="npm run build" />
            </Command>
          </div>
        </div>
      </DemoSection>
    </div>
  )
}
