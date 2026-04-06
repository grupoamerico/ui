import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet"

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Sheet>

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Abrir (Derecha)</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Editar perfil</SheetTitle>
          <SheetDescription>
            Realiza cambios en tu perfil. Haz clic en guardar cuando termines.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Nombre</Label>
            <Input className="col-span-3" placeholder="Tu nombre" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Email</Label>
            <Input className="col-span-3" placeholder="tu@email.com" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Cancelar</Button>
          </SheetClose>
          <Button>Guardar</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Abrir (Izquierda)</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navegación</SheetTitle>
          <SheetDescription>
            Menú de navegación lateral.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start">Inicio</Button>
          <Button variant="ghost" className="w-full justify-start">Productos</Button>
          <Button variant="ghost" className="w-full justify-start">Clientes</Button>
          <Button variant="ghost" className="w-full justify-start">Configuración</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
}

export const Top: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Abrir (Arriba)</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Notificación</SheetTitle>
          <SheetDescription>
            Tienes nuevas actualizaciones disponibles.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Cerrar</Button>
          </SheetClose>
          <Button>Ver detalles</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Abrir (Abajo)</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
          <SheetDescription>
            Aplica filtros para refinar tu búsqueda.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <div>
            <Label>Categoría</Label>
            <Input placeholder="Todas" />
          </div>
          <div>
            <Label>Precio máximo</Label>
            <Input placeholder="Sin límite" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Limpiar</Button>
          </SheetClose>
          <Button>Aplicar filtros</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}
