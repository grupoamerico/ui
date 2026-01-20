import { Routes, Route } from "react-router-dom"
import { Toaster, TooltipProvider } from "@americojs/ui"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { ButtonsDemo } from "./pages/ButtonsDemo"
import { FormsDemo } from "./pages/FormsDemo"
import { FeedbackDemo } from "./pages/FeedbackDemo"
import { DataDisplayDemo } from "./pages/DataDisplayDemo"
import { OverlaysDemo } from "./pages/OverlaysDemo"
import { NavigationDemo } from "./pages/NavigationDemo"
import { TypographyDemo } from "./pages/TypographyDemo"
import { UtilsDemo } from "./pages/UtilsDemo"

function App() {
  return (
    <TooltipProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buttons" element={<ButtonsDemo />} />
          <Route path="/forms" element={<FormsDemo />} />
          <Route path="/feedback" element={<FeedbackDemo />} />
          <Route path="/data-display" element={<DataDisplayDemo />} />
          <Route path="/overlays" element={<OverlaysDemo />} />
          <Route path="/navigation" element={<NavigationDemo />} />
          <Route path="/typography" element={<TypographyDemo />} />
          <Route path="/utils" element={<UtilsDemo />} />
        </Routes>
      </Layout>
      <Toaster position="bottom-right" />
    </TooltipProvider>
  )
}

export default App
