import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { Button } from "@/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notificaciones</CardTitle>
        <CardDescription>Tienes 3 mensajes sin leer.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Revisa tu bandeja de entrada para ver los nuevos mensajes.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="secondary">Cancelar</Button>
        <Button>Ver mensajes</Button>
      </CardFooter>
    </Card>
  ),
}

export const SimpleContent: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Estadísticas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Usuarios</span>
            <span className="text-sm font-medium">1,234</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Ingresos</span>
            <span className="text-sm font-medium">$12,345</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Pedidos</span>
            <span className="text-sm font-medium">567</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}

export const WithFooterOnly: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Plan Pro</CardTitle>
        <CardDescription>
          Obtén acceso ilimitado a todas las funcionalidades.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Actualizar plan</Button>
      </CardFooter>
    </Card>
  ),
}
