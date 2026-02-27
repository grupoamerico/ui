import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { ThemeToggle } from "./ThemeToggle"
import { SearchDialog } from "./SearchDialog"

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  // Close sidebar on navigation
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      {/* Mobile Drawer Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ui-bg-overlay"
            onClick={closeSidebar}
          />
          <div className="relative h-full w-[280px] shadow-xl">
            <Sidebar onNavigate={closeSidebar} />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col overflow-hidden bg-ui-bg-subtle">
        {/* Mobile Header */}
        <header className="flex lg:hidden items-center justify-between h-14 shrink-0 border-b border-ui-border-base bg-ui-bg-base px-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="flex items-center justify-center w-9 h-9 rounded-lg text-ui-fg-base hover:bg-ui-bg-base-hover transition-fg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
          <span className="text-base font-bold text-ui-fg-base">
            Grupo Americo UI
          </span>
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center justify-center w-9 h-9 rounded-lg text-ui-fg-base hover:bg-ui-bg-base-hover transition-fg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </header>

        {/* Desktop Top Bar */}
        <header className="hidden lg:flex items-center justify-end gap-4 h-14 shrink-0 border-b border-ui-border-base bg-ui-bg-base px-8">
          <SearchDialog />
          <ThemeToggle />
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile Search Dialog */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  )
}
