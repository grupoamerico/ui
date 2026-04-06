import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./menubar"

const meta: Meta<typeof Menubar> = {
  title: "Components/Menubar",
  component: Menubar,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Menubar>

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Archivo</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Nuevo archivo <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Abrir <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Guardar <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Guardar como...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Salir</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Editar</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Deshacer <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Rehacer <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cortar <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Copiar <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Pegar <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Ver</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom in</MenubarItem>
          <MenubarItem>Zoom out</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Pantalla completa</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

const WithCheckboxDemo = () => {
  const [showToolbar, setShowToolbar] = React.useState(true)
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [showSidebar, setShowSidebar] = React.useState(false)

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Vista</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Paneles</MenubarLabel>
          <MenubarSeparator />
          <MenubarCheckboxItem
            checked={showToolbar}
            onCheckedChange={setShowToolbar}
          >
            Barra de herramientas
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Barra de estado
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={showSidebar}
            onCheckedChange={setShowSidebar}
          >
            Panel lateral
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export const WithCheckboxItems: Story = {
  render: () => <WithCheckboxDemo />,
}

const WithRadioDemo = () => {
  const [theme, setTheme] = React.useState("light")

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Preferencias</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Tema</MenubarLabel>
          <MenubarSeparator />
          <MenubarRadioGroup value={theme} onValueChange={setTheme}>
            <MenubarRadioItem value="light">Claro</MenubarRadioItem>
            <MenubarRadioItem value="dark">Oscuro</MenubarRadioItem>
            <MenubarRadioItem value="system">Sistema</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export const WithRadioItems: Story = {
  render: () => <WithRadioDemo />,
}

export const WithSubMenu: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Insertar</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Imagen</MenubarItem>
          <MenubarItem>Tabla</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>Formas</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Rectángulo</MenubarItem>
              <MenubarItem>Círculo</MenubarItem>
              <MenubarItem>Triángulo</MenubarItem>
              <MenubarItem>Línea</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Enlace</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}
