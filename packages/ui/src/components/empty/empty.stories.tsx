import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { InboxSolid, PlusMini, MagnifyingGlass } from "@grupoamerico/icons"
import { Button } from "@/components/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./empty"

const meta: Meta<typeof Empty> = {
  title: "Components/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof Empty>

export const Default: Story = {
  render: () => (
    <Empty className="w-[400px]">
      <EmptyMedia>
        <InboxSolid className="size-12 text-muted-foreground" />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>No hay resultados</EmptyTitle>
        <EmptyDescription>
          No se encontraron elementos que coincidan con tu búsqueda.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}

export const IconVariant: Story = {
  render: () => (
    <Empty className="w-[400px]">
      <EmptyMedia variant="icon">
        <MagnifyingGlass />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>Sin resultados</EmptyTitle>
        <EmptyDescription>
          Intenta con otros términos de búsqueda.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Empty className="w-[400px]">
      <EmptyMedia variant="icon">
        <InboxSolid />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>No hay productos</EmptyTitle>
        <EmptyDescription>
          Comienza agregando tu primer producto al catálogo.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <PlusMini />
          Agregar producto
        </Button>
      </EmptyContent>
    </Empty>
  ),
}

export const Minimal: Story = {
  render: () => (
    <Empty className="w-[400px]">
      <EmptyHeader>
        <EmptyTitle>Lista vacía</EmptyTitle>
        <EmptyDescription>
          Aún no hay elementos en esta lista.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}
