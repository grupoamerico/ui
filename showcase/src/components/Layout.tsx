import { useState, useEffect, ReactNode } from "react"
import { NavLink } from "react-router-dom"
import { Button, Switch, Text, Heading, clx } from "@americojs/ui"

const navItems = [
  { path: "/", label: "Inicio", icon: "🏠" },
  { path: "/buttons", label: "Buttons & Actions", icon: "🔘" },
  { path: "/forms", label: "Form Controls", icon: "📝" },
  { path: "/feedback", label: "Feedback", icon: "💬" },
  { path: "/data-display", label: "Data Display", icon: "📊" },
  { path: "/overlays", label: "Overlays", icon: "🪟" },
  { path: "/navigation", label: "Navigation", icon: "🧭" },
  { path: "/typography", label: "Typography", icon: "✏️" },
  { path: "/utils", label: "Utilities & Hooks", icon: "🔧" },
]

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDark(true)
      document.documentElement.setAttribute("data-mode", "dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    if (newIsDark) {
      document.documentElement.setAttribute("data-mode", "dark")
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-mode")
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <div className="min-h-screen bg-ui-bg-base">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-ui-border-base bg-ui-bg-subtle">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="border-b border-ui-border-base p-4">
            <Heading level="h2" className="text-ui-fg-base">
              Americo UI
            </Heading>
            <Text size="small" className="text-ui-fg-muted">
              Design System Showcase
            </Text>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      clx(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                        isActive
                          ? "bg-ui-bg-base-pressed text-ui-fg-base font-medium"
                          : "text-ui-fg-subtle hover:bg-ui-bg-base-hover hover:text-ui-fg-base"
                      )
                    }
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <div className="border-t border-ui-border-base p-4">
            <div className="flex items-center justify-between">
              <Text size="small" className="text-ui-fg-subtle">
                Dark Mode
              </Text>
              <Switch checked={isDark} onCheckedChange={toggleTheme} />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen p-8">
        {children}
      </main>
    </div>
  )
}
