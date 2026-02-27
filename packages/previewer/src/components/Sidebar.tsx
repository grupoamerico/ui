import { NavLink } from "react-router-dom"
import { componentRegistry, categories } from "../registry.generated"

interface SidebarProps {
  onNavigate?: () => void
}

const categoryIcons: Record<string, React.ReactNode> = {
  Disposicion: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  ),
  Formularios: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1" />
      <path d="M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5" />
      <path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
      <path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
      <path d="M9 7v10" />
    </svg>
  ),
  Navegacion: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  Proveedores: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
  Retroalimentacion: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  ),
  Superposiciones: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  ),
  Tipografia: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  ),
  "Visualizacion de datos": (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  ),
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="flex w-[260px] shrink-0 flex-col bg-ui-bg-base h-screen border-r border-ui-border-base">
      {/* Nav Container */}
      <nav className="flex-1 overflow-y-auto p-3 flex flex-col gap-0.5">
        {/* Inicio */}
        <NavLink
          to="/"
          end
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-2 h-9 px-3 rounded-md text-sm font-medium shrink-0 transition-fg ${
              isActive
                ? "bg-ui-bg-highlight text-ui-fg-interactive"
                : "text-ui-fg-subtle hover:bg-ui-bg-base-hover hover:text-ui-fg-base"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Inicio
        </NavLink>

        {/* Iconos */}
        <NavLink
          to="/icons"
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-2 h-9 px-3 rounded-md text-sm font-medium shrink-0 transition-fg ${
              isActive
                ? "bg-ui-bg-highlight text-ui-fg-interactive"
                : "text-ui-fg-subtle hover:bg-ui-bg-base-hover hover:text-ui-fg-base"
            }`
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
          </svg>
          Iconos
        </NavLink>

        {/* Component categories */}
        {categories.map((category) => {
          const items = componentRegistry.filter(
            (c) => c.category === category
          )
          if (items.length === 0) return null
          return (
            <div key={category}>
              <div className="h-3" />
              <div className="flex items-center gap-1.5 px-3 py-1.5">
                <span className="text-ui-fg-interactive shrink-0">
                  {categoryIcons[category]}
                </span>
                <p className="text-[11px] font-semibold text-ui-fg-muted uppercase tracking-[1.2px] leading-none">
                  {category}
                </p>
              </div>
              <div className="h-1" />
              {items.map((comp) => (
                <NavLink
                  key={comp.slug}
                  to={`/components/${comp.slug}`}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `flex items-center h-8 px-3 rounded-md text-[13px] shrink-0 transition-fg ${
                      isActive
                        ? "bg-ui-bg-highlight text-ui-fg-interactive font-medium"
                        : "text-ui-fg-subtle hover:bg-ui-bg-base-hover hover:text-ui-fg-base"
                    }`
                  }
                >
                  {comp.name}
                </NavLink>
              ))}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
