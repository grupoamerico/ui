import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { Button } from "@/components/button"
import { DeleteConfirmDialog } from "./delete-confirm-dialog"

const meta: Meta<typeof DeleteConfirmDialog> = {
  title: "Components/DeleteConfirmDialog",
  component: DeleteConfirmDialog,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof DeleteConfirmDialog>

const DefaultDemo = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Eliminar registro
      </Button>
      <DeleteConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Eliminar registro"
        description="¿Estás seguro de que deseas eliminar este registro? Esta acción no se puede deshacer."
        onConfirm={() => setOpen(false)}
      />
    </>
  )
}

export const Default: Story = {
  render: () => <DefaultDemo />,
}

const LoadingDemo = () => {
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const handleConfirm = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpen(false)
    }, 2000)
  }

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Eliminar usuario
      </Button>
      <DeleteConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Eliminar usuario"
        description="Se eliminará el usuario y todos sus datos asociados permanentemente."
        onConfirm={handleConfirm}
        isLoading={loading}
      />
    </>
  )
}

export const WithLoading: Story = {
  render: () => <LoadingDemo />,
}

const CustomTextDemo = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(true)}>
        Remove item
      </Button>
      <DeleteConfirmDialog
        open={open}
        onOpenChange={setOpen}
        title="Remove item"
        description="Are you sure you want to remove this item?"
        onConfirm={() => setOpen(false)}
        confirmText="Yes, remove"
        cancelText="No, keep it"
      />
    </>
  )
}

export const CustomTexts: Story = {
  render: () => <CustomTextDemo />,
}
