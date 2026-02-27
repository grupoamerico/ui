"use client"

import { ExclamationCircle } from "@grupoamerico/icons"
import * as React from "react"

import { Button } from "@/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/dialog"

interface UnsavedChangesDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
  onCancel: () => void
}

function UnsavedChangesDialog({
  open,
  onOpenChange,
  onConfirm,
  onCancel,
}: UnsavedChangesDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-2">
            <ExclamationCircle className="h-5 w-5 text-yellow-500" />
            <DialogTitle>Cambios sin guardar</DialogTitle>
          </div>
          <DialogDescription>
            Tienes cambios sin guardar. Si sales ahora, perderás estos cambios.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary" onClick={onCancel}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={onConfirm}>
            Salir sin guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { UnsavedChangesDialog }
export type { UnsavedChangesDialogProps }
