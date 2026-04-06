import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { Button } from "@/components/button"
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from "./button-group"

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof ButtonGroup>

export const Horizontal: Story = {
  render: () => (
    <ButtonGroup orientation="horizontal">
      <Button variant="secondary">Izquierda</Button>
      <Button variant="secondary">Centro</Button>
      <Button variant="secondary">Derecha</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="secondary">Arriba</Button>
      <Button variant="secondary">Centro</Button>
      <Button variant="secondary">Abajo</Button>
    </ButtonGroup>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup orientation="horizontal">
      <Button variant="secondary">Copiar</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">Pegar</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">Cortar</Button>
    </ButtonGroup>
  ),
}

export const WithText: Story = {
  render: () => (
    <ButtonGroup orientation="horizontal">
      <ButtonGroupText>Página 1 de 10</ButtonGroupText>
      <Button variant="secondary">Anterior</Button>
      <Button variant="secondary">Siguiente</Button>
    </ButtonGroup>
  ),
}
