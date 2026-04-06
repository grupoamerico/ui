import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { Button } from "@/components/button"
import { UnsavedChangesDialog } from "./unsaved-changes-dialog"

const meta: Meta<typeof UnsavedChangesDialog> = {
  title: "Components/UnsavedChangesDialog",
  component: UnsavedChangesDialog,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof UnsavedChangesDialog>

const DefaultDemo = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Simular salida con cambios
      </Button>
      <UnsavedChangesDialog
        open={open}
        onOpenChange={setOpen}
        onConfirm={() => {
          setOpen(false)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}

export const Default: Story = {
  render: () => <DefaultDemo />,
}
