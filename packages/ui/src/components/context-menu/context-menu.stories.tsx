import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./context-menu"

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof ContextMenu>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Clic derecho aquí
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Atrás
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Adelante
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Recargar
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Guardar como...
          <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Imprimir</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

const CheckboxDemo = () => {
  const [showBookmarks, setShowBookmarks] = React.useState(true)
  const [showUrls, setShowUrls] = React.useState(false)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Clic derecho aquí
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          Mostrar marcadores
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={showUrls}
          onCheckedChange={setShowUrls}
        >
          Mostrar URLs completas
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export const WithCheckboxItems: Story = {
  render: () => <CheckboxDemo />,
}

const RadioDemo = () => {
  const [person, setPerson] = React.useState("pedro")

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Clic derecho aquí
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>Asignar a</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
          <ContextMenuRadioItem value="pedro">Pedro</ContextMenuRadioItem>
          <ContextMenuRadioItem value="maria">María</ContextMenuRadioItem>
          <ContextMenuRadioItem value="carlos">Carlos</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export const WithRadioItems: Story = {
  render: () => <RadioDemo />,
}

export const WithSubMenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Clic derecho aquí
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>Nuevo archivo</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Compartir con</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Email</ContextMenuItem>
            <ContextMenuItem>WhatsApp</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Copiar enlace</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Eliminar
          <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm text-muted-foreground">
        Clic derecho aquí
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuGroup>
          <ContextMenuLabel>Edición</ContextMenuLabel>
          <ContextMenuItem>Cortar</ContextMenuItem>
          <ContextMenuItem>Copiar</ContextMenuItem>
          <ContextMenuItem>Pegar</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Vista</ContextMenuLabel>
          <ContextMenuItem>Zoom in</ContextMenuItem>
          <ContextMenuItem>Zoom out</ContextMenuItem>
          <ContextMenuItem>Restablecer zoom</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
