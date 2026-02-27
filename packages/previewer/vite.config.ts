import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: true,
  },
  resolve: {
    alias: {
      "@grupoamerico/ui": path.resolve(__dirname, "../ui/src/index.ts"),
      "@grupoamerico/icons": path.resolve(__dirname, "../icons/src/index.ts"),
      "@grupoamerico/ui/preset": path.resolve(
        __dirname,
        "../ui/src/preset/index.ts"
      ),
      "@/components": path.resolve(__dirname, "../ui/src/components"),
      "@/hooks": path.resolve(__dirname, "../ui/src/hooks"),
      "@/utils": path.resolve(__dirname, "../ui/src/utils"),
      "@/types": path.resolve(__dirname, "../ui/src/types"),
      "@/blocks": path.resolve(__dirname, "../ui/src/blocks"),
      // Storybook stubs — story files import types from these modules
      "@storybook/react": path.resolve(
        __dirname,
        "src/lib/storybook-stub.ts"
      ),
      "@storybook/addon-styling": path.resolve(
        __dirname,
        "src/lib/storybook-stub.ts"
      ),
    },
    dedupe: ["react", "react-dom"],
  },
})
