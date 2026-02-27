import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { ComponentPage } from "./pages/ComponentPage"
import { IconsPage } from "./pages/IconsPage"

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/components/:slug" element={<ComponentPage />} />
        <Route path="/icons" element={<IconsPage />} />
      </Route>
    </Routes>
  )
}
