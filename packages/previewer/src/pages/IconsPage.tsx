import { IconGallery } from "../components/IconGallery"

export function IconsPage() {
  return (
    <div className="px-12 py-10 max-w-6xl space-y-6">
      <div className="space-y-2">
        <h1 className="text-[28px] font-bold text-ui-fg-base">
          Galeria de Iconos
        </h1>
        <p className="text-[15px] text-ui-fg-subtle leading-[1.5]">
          Explora, busca y copia los imports de iconos. Haz clic en cualquier
          icono para copiar su sentencia de importacion.
        </p>
      </div>
      <IconGallery />
    </div>
  )
}
