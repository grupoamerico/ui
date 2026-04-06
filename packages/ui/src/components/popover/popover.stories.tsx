import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Popover } from "./popover"

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="secondary">Abrir popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="grid gap-4 p-2">
          <div className="space-y-2">
            <h4 className="font-medium leading-none text-sm">Dimensiones</h4>
            <p className="text-xs text-muted-foreground">
              Configura las dimensiones del elemento.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label className="text-xs">Ancho</Label>
              <Input className="col-span-2 h-8" placeholder="100%" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label className="text-xs">Alto</Label>
              <Input className="col-span-2 h-8" placeholder="auto" />
            </div>
          </div>
        </div>
      </Popover.Content>
    </Popover>
  ),
}

export const SideTop: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="secondary">Arriba</Button>
      </Popover.Trigger>
      <Popover.Content side="top">
        <div className="p-2">
          <p className="text-sm">Contenido del popover (arriba)</p>
        </div>
      </Popover.Content>
    </Popover>
  ),
}

export const SideLeft: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="secondary">Izquierda</Button>
      </Popover.Trigger>
      <Popover.Content side="left">
        <div className="p-2">
          <p className="text-sm">Contenido del popover (izquierda)</p>
        </div>
      </Popover.Content>
    </Popover>
  ),
}

export const SideRight: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="secondary">Derecha</Button>
      </Popover.Trigger>
      <Popover.Content side="right">
        <div className="p-2">
          <p className="text-sm">Contenido del popover (derecha)</p>
        </div>
      </Popover.Content>
    </Popover>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="secondary">Opciones</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="p-2">
          <p className="text-sm font-medium">Configuración</p>
        </div>
        <Popover.Seperator />
        <div className="p-2">
          <p className="text-sm text-muted-foreground">
            Ajusta la configuración del elemento.
          </p>
        </div>
      </Popover.Content>
    </Popover>
  ),
}
