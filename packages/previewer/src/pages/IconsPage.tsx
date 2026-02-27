import { IconGallery } from "../components/IconGallery"

export function IconsPage() {
  return (
    <div className="px-5 py-6 lg:px-12 lg:py-10 max-w-6xl space-y-4 lg:space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl lg:text-[28px] font-bold text-ui-fg-base">
          Galeria de Iconos
        </h1>
        <p className="text-sm lg:text-[15px] text-ui-fg-subtle leading-[1.5]">
          Explora, busca y copia los imports de iconos. Haz clic en cualquier
          icono para copiar su sentencia de importacion.
        </p>
      </div>
      <IconGallery />
    </div>
  )
}
