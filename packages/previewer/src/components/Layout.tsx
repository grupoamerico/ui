import { Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import { ThemeToggle } from "./ThemeToggle"
import { SearchDialog } from "./SearchDialog"

export function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden bg-ui-bg-subtle">
        {/* Top Bar */}
        <header className="flex items-center justify-end gap-4 h-14 shrink-0 border-b border-ui-border-base bg-ui-bg-base px-8">
          <SearchDialog />
          <ThemeToggle />
        </header>
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
