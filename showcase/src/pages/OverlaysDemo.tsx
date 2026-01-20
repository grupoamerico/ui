import { useState } from "react"
import {
  Button,
  Drawer,
  FocusModal,
  Popover,
  Tooltip,
  DropdownMenu,
  Prompt,
  CommandBar,
  Heading,
  Text,
  Input,
  Label,
  usePrompt,
} from "@americojs/ui"
import { PageHeader, DemoSection, DemoGrid, DemoItem } from "../components/DemoSection"

export function OverlaysDemo() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [commandBarOpen, setCommandBarOpen] = useState(false)
  const prompt = usePrompt()

  const handlePrompt = async () => {
    const confirmed = await prompt({
      title: "Eliminar elemento",
      description: "Esta seguro que desea eliminar este elemento? Esta accion no se puede deshacer.",
      confirmText: "Eliminar",
      cancelText: "Cancelar",
    })
    if (confirmed) {
      alert("Elemento eliminado")
    }
  }

  return (
    <div>
      <PageHeader
        title="Overlays"
        description="Componentes que se superponen al contenido principal."
        components={["Drawer", "FocusModal", "Popover", "Tooltip", "DropdownMenu", "Prompt", "CommandBar"]}
      />

      {/* Drawer */}
      <DemoSection
        title="Drawer"
        description="Panel lateral deslizable para formularios y detalles."
      >
        <Button onClick={() => setDrawerOpen(true)}>Abrir Drawer</Button>
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Editar Perfil</Drawer.Title>
              <Drawer.Description>
                Actualiza la informacion de tu perfil aqui.
              </Drawer.Description>
            </Drawer.Header>
            <Drawer.Body className="p-4 space-y-4">
              <div>
                <Label htmlFor="drawer-name">Nombre</Label>
                <Input id="drawer-name" placeholder="Tu nombre" />
              </div>
              <div>
                <Label htmlFor="drawer-email">Email</Label>
                <Input id="drawer-email" type="email" placeholder="tu@email.com" />
              </div>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="secondary" onClick={() => setDrawerOpen(false)}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={() => setDrawerOpen(false)}>
                Guardar
              </Button>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer>
      </DemoSection>

      {/* FocusModal */}
      <DemoSection
        title="FocusModal"
        description="Modal que captura el foco para tareas importantes."
      >
        <Button onClick={() => setModalOpen(true)}>Abrir Modal</Button>
        <FocusModal open={modalOpen} onOpenChange={setModalOpen}>
          <FocusModal.Content>
            <FocusModal.Header>
              <FocusModal.Title>Crear Nuevo Proyecto</FocusModal.Title>
              <FocusModal.Description>
                Completa los detalles para crear un nuevo proyecto.
              </FocusModal.Description>
            </FocusModal.Header>
            <FocusModal.Body className="p-6 space-y-4">
              <div>
                <Label htmlFor="modal-project">Nombre del Proyecto</Label>
                <Input id="modal-project" placeholder="Mi Proyecto" />
              </div>
              <div>
                <Label htmlFor="modal-desc">Descripcion</Label>
                <Input id="modal-desc" placeholder="Descripcion breve..." />
              </div>
            </FocusModal.Body>
            <FocusModal.Footer>
              <Button variant="secondary" onClick={() => setModalOpen(false)}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={() => setModalOpen(false)}>
                Crear Proyecto
              </Button>
            </FocusModal.Footer>
          </FocusModal.Content>
        </FocusModal>
      </DemoSection>

      {/* Popover */}
      <DemoSection
        title="Popover"
        description="Contenedor flotante activado por click."
      >
        <DemoGrid columns={3}>
          <DemoItem label="Default">
            <Popover>
              <Popover.Trigger asChild>
                <Button variant="secondary">Abrir Popover</Button>
              </Popover.Trigger>
              <Popover.Content>
                <div className="p-4">
                  <Heading level="h4" className="mb-2">Titulo del Popover</Heading>
                  <Text size="small" className="text-ui-fg-muted">
                    Este es el contenido del popover. Puede contener cualquier cosa.
                  </Text>
                </div>
              </Popover.Content>
            </Popover>
          </DemoItem>
          <DemoItem label="Con Form">
            <Popover>
              <Popover.Trigger asChild>
                <Button variant="secondary">Editar</Button>
              </Popover.Trigger>
              <Popover.Content>
                <div className="p-4 space-y-3 w-64">
                  <Label htmlFor="pop-input">Valor</Label>
                  <Input id="pop-input" placeholder="Nuevo valor" />
                  <Button variant="primary" size="small" className="w-full">
                    Guardar
                  </Button>
                </div>
              </Popover.Content>
            </Popover>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* Tooltip */}
      <DemoSection
        title="Tooltip"
        description="Informacion contextual al pasar el cursor."
      >
        <DemoGrid columns={4}>
          <DemoItem label="Default">
            <Tooltip content="Este es un tooltip">
              <Button variant="secondary">Hover me</Button>
            </Tooltip>
          </DemoItem>
          <DemoItem label="Top">
            <Tooltip content="Tooltip arriba" side="top">
              <Button variant="secondary">Top</Button>
            </Tooltip>
          </DemoItem>
          <DemoItem label="Right">
            <Tooltip content="Tooltip derecha" side="right">
              <Button variant="secondary">Right</Button>
            </Tooltip>
          </DemoItem>
          <DemoItem label="Bottom">
            <Tooltip content="Tooltip abajo" side="bottom">
              <Button variant="secondary">Bottom</Button>
            </Tooltip>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* DropdownMenu */}
      <DemoSection
        title="DropdownMenu"
        description="Menu desplegable con opciones."
      >
        <DemoGrid columns={2}>
          <DemoItem label="Simple">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button variant="secondary">Opciones</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>Ver detalles</DropdownMenu.Item>
                <DropdownMenu.Item>Editar</DropdownMenu.Item>
                <DropdownMenu.Item>Duplicar</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item className="text-ui-fg-error">Eliminar</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </DemoItem>
          <DemoItem label="Con Submenu">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <Button variant="secondary">Menu Complejo</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>Nuevo archivo</DropdownMenu.Item>
                <DropdownMenu.Item>Nueva carpeta</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger>Exportar como</DropdownMenu.SubTrigger>
                  <DropdownMenu.SubContent>
                    <DropdownMenu.Item>PDF</DropdownMenu.Item>
                    <DropdownMenu.Item>Excel</DropdownMenu.Item>
                    <DropdownMenu.Item>CSV</DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Configuracion</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* Prompt */}
      <DemoSection
        title="Prompt"
        description="Dialogo de confirmacion para acciones importantes."
      >
        <Prompt>
          <Button onClick={handlePrompt} variant="danger">
            Eliminar (con usePrompt hook)
          </Button>
        </Prompt>
      </DemoSection>

      {/* CommandBar */}
      <DemoSection
        title="CommandBar"
        description="Barra de comandos estilo spotlight."
      >
        <Button onClick={() => setCommandBarOpen(true)}>
          Abrir Command Bar (Ctrl+K)
        </Button>
        <CommandBar open={commandBarOpen} onOpenChange={setCommandBarOpen}>
          <CommandBar.Bar>
            <CommandBar.Value>3 items seleccionados</CommandBar.Value>
            <CommandBar.Seperator />
            <CommandBar.Command
              label="Editar"
              action={() => alert("Editar")}
              shortcut="E"
            />
            <CommandBar.Command
              label="Duplicar"
              action={() => alert("Duplicar")}
              shortcut="D"
            />
            <CommandBar.Command
              label="Eliminar"
              action={() => alert("Eliminar")}
              shortcut="Del"
            />
          </CommandBar.Bar>
        </CommandBar>
      </DemoSection>
    </div>
  )
}
