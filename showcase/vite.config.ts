import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@americojs/ui": path.resolve(__dirname, "../ui/src/index.ts"),
      "@americojs/icons": path.resolve(__dirname, "../icons/src/index.ts"),
      "@americojs/ui-preset": path.resolve(__dirname, "../ui-preset/src/index.ts"),
      "@/components": path.resolve(__dirname, "../ui/src/components"),
      "@/blocks": path.resolve(__dirname, "../ui/src/blocks"),
      "@/hooks": path.resolve(__dirname, "../ui/src/hooks"),
      "@/utils": path.resolve(__dirname, "../ui/src/utils"),
      "@/types": path.resolve(__dirname, "../ui/src/types"),
      // Resolve dependencies from showcase's node_modules
      "@internationalized/date": path.resolve(__dirname, "node_modules/@internationalized/date"),
      "@radix-ui/react-select": path.resolve(__dirname, "node_modules/@radix-ui/react-select"),
      "@radix-ui/react-dialog": path.resolve(__dirname, "node_modules/@radix-ui/react-dialog"),
      "@dnd-kit/core": path.resolve(__dirname, "node_modules/@dnd-kit/core"),
      "@dnd-kit/sortable": path.resolve(__dirname, "node_modules/@dnd-kit/sortable"),
      "@dnd-kit/utilities": path.resolve(__dirname, "node_modules/@dnd-kit/utilities"),
      "@tanstack/react-table": path.resolve(__dirname, "node_modules/@tanstack/react-table"),
      "react-aria": path.resolve(__dirname, "node_modules/react-aria"),
      "react-stately": path.resolve(__dirname, "node_modules/react-stately"),
      "sonner": path.resolve(__dirname, "node_modules/sonner"),
      "cva": path.resolve(__dirname, "node_modules/cva"),
      "clsx": path.resolve(__dirname, "node_modules/clsx"),
      "tailwind-merge": path.resolve(__dirname, "node_modules/tailwind-merge"),
      "copy-to-clipboard": path.resolve(__dirname, "node_modules/copy-to-clipboard"),
      "prism-react-renderer": path.resolve(__dirname, "node_modules/prism-react-renderer"),
      "react-currency-input-field": path.resolve(__dirname, "node_modules/react-currency-input-field"),
      "radix-ui": path.resolve(__dirname, "node_modules/radix-ui"),
    },
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@internationalized/date",
      "@radix-ui/react-select",
      "@dnd-kit/core",
      "@dnd-kit/sortable",
      "@dnd-kit/utilities",
    ],
  },
})
