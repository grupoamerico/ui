import { NavLink } from "react-router-dom"
import { componentRegistry, categories } from "../registry.generated"

interface SidebarProps {
  onNavigate?: () => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="flex w-[260px] lg:w-[260px] shrink-0 flex-col bg-ui-bg-base h-screen border-r border-ui-border-base">
      {/* Logo Area */}
      <div className="flex items-center gap-2.5 h-16 px-5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-ui-bg-interactive" />
        <span className="text-base font-bold text-ui-fg-base tracking-[0.5px]">
          AMERICO UI
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-ui-border-base shrink-0" />

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

        {/* Component categories */}
        {categories.map((category) => {
          const items = componentRegistry.filter(
            (c) => c.category === category
          )
          if (items.length === 0) return null
          return (
            <div key={category}>
              <div className="h-3" />
              <p className="px-3 text-[11px] font-semibold text-ui-fg-muted uppercase tracking-[1.2px] leading-none">
                {category}
              </p>
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
