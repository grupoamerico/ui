import { Alert, Hint, InlineTip, Skeleton, toast, Button } from "@americojs/ui"
import { PageHeader, DemoSection, DemoGrid, DemoItem } from "../components/DemoSection"

export function FeedbackDemo() {
  const showToast = (variant: "success" | "error" | "warning" | "info" | "loading") => {
    const messages = {
      success: "Operacion completada exitosamente",
      error: "Ocurrio un error inesperado",
      warning: "Atencion: Esta accion no se puede deshacer",
      info: "Informacion importante para el usuario",
      loading: "Procesando solicitud...",
    }

    if (variant === "loading") {
      toast.loading(messages[variant])
    } else {
      toast[variant](messages[variant])
    }
  }

  return (
    <div>
      <PageHeader
        title="Feedback"
        description="Componentes para mostrar mensajes, alertas y estados de carga."
        components={["Alert", "Toast", "Toaster", "Hint", "InlineTip", "Skeleton"]}
      />

      {/* Alert */}
      <DemoSection
        title="Alert"
        description="Alertas para mostrar mensajes importantes al usuario."
      >
        <div className="space-y-4">
          <Alert variant="success">
            <strong>Exito!</strong> Tu perfil ha sido actualizado correctamente.
          </Alert>
          <Alert variant="error">
            <strong>Error!</strong> No se pudo guardar los cambios. Intenta de nuevo.
          </Alert>
          <Alert variant="warning">
            <strong>Advertencia!</strong> Tu sesion expirara en 5 minutos.
          </Alert>
          <Alert variant="info">
            <strong>Informacion:</strong> Hay una nueva version disponible.
          </Alert>
        </div>
      </DemoSection>

      {/* Alert with Dismissible */}
      <DemoSection
        title="Alert - Dismissible"
        description="Alertas que el usuario puede cerrar."
      >
        <div className="space-y-4">
          <Alert variant="success" dismissible>
            Esta alerta se puede cerrar haciendo click en la X.
          </Alert>
          <Alert variant="info" dismissible>
            Informacion que el usuario puede descartar.
          </Alert>
        </div>
      </DemoSection>

      {/* Toast */}
      <DemoSection
        title="Toast (Notificaciones)"
        description="Notificaciones temporales que aparecen en la esquina de la pantalla."
      >
        <DemoGrid columns={3}>
          <DemoItem label="Success">
            <Button onClick={() => showToast("success")} variant="primary" size="small">
              Mostrar Success
            </Button>
          </DemoItem>
          <DemoItem label="Error">
            <Button onClick={() => showToast("error")} variant="danger" size="small">
              Mostrar Error
            </Button>
          </DemoItem>
          <DemoItem label="Warning">
            <Button onClick={() => showToast("warning")} variant="secondary" size="small">
              Mostrar Warning
            </Button>
          </DemoItem>
          <DemoItem label="Info">
            <Button onClick={() => showToast("info")} variant="secondary" size="small">
              Mostrar Info
            </Button>
          </DemoItem>
          <DemoItem label="Loading">
            <Button onClick={() => showToast("loading")} variant="secondary" size="small">
              Mostrar Loading
            </Button>
          </DemoItem>
          <DemoItem label="Custom">
            <Button
              onClick={() => toast("Mensaje personalizado", { description: "Con descripcion adicional" })}
              variant="transparent"
              size="small"
            >
              Toast Custom
            </Button>
          </DemoItem>
        </DemoGrid>
      </DemoSection>

      {/* Hint */}
      <DemoSection
        title="Hint"
        description="Texto de ayuda para campos de formulario."
      >
        <div className="space-y-4 max-w-md">
          <div>
            <Hint>Este es un hint normal para guiar al usuario.</Hint>
          </div>
          <div>
            <Hint variant="error">Este campo es obligatorio.</Hint>
          </div>
        </div>
      </DemoSection>

      {/* InlineTip */}
      <DemoSection
        title="InlineTip"
        description="Consejos y sugerencias en linea."
      >
        <div className="space-y-4">
          <InlineTip variant="tip">
            <strong>Tip:</strong> Puedes usar Ctrl+S para guardar rapidamente.
          </InlineTip>
          <InlineTip variant="warning">
            <strong>Advertencia:</strong> Los cambios no guardados se perderan.
          </InlineTip>
        </div>
      </DemoSection>

      {/* Skeleton */}
      <DemoSection
        title="Skeleton"
        description="Placeholders animados para estados de carga."
      >
        <div className="space-y-6">
          <div>
            <p className="text-sm text-ui-fg-muted mb-2">Texto / Parrafos</p>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>

          <div>
            <p className="text-sm text-ui-fg-muted mb-2">Card Skeleton</p>
            <div className="rounded-lg border border-ui-border-base p-4 space-y-3">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-3 w-1/4" />
                </div>
              </div>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>

          <div>
            <p className="text-sm text-ui-fg-muted mb-2">Table Skeleton</p>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="h-8 w-1/4" />
                  <Skeleton className="h-8 w-1/4" />
                  <Skeleton className="h-8 w-1/4" />
                  <Skeleton className="h-8 w-1/4" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-ui-fg-muted mb-2">Avatar + Info</p>
            <DemoGrid columns={3}>
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
              ))}
            </DemoGrid>
          </div>
        </div>
      </DemoSection>
    </div>
  )
}
