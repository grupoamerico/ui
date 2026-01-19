import type { StorybookConfig } from "@storybook/react-vite"
import { mergeConfig } from "vite"
import path from "path"
import turbosnap from "vite-plugin-turbosnap"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@/components": path.resolve(__dirname, "../src/components"),
          "@/providers": path.resolve(__dirname, "../src/providers"),
          "@/hooks": path.resolve(__dirname, "../src/hooks"),
          "@/utils": path.resolve(__dirname, "../src/utils"),
          "@/types": path.resolve(__dirname, "../src/types"),
          "@/blocks": path.resolve(__dirname, "../src/blocks"),
          "@americojs/icons": path.resolve(__dirname, "../../icons/src/index.ts"),
          "@americojs/ui-preset": path.resolve(__dirname, "../../ui-preset/src/index.ts"),
        },
      },
      optimizeDeps: {
        include: ["@americojs/icons"],
        esbuildOptions: {
          loader: {
            ".ts": "ts",
            ".tsx": "tsx",
          },
        },
      },
      plugins:
        configType === "PRODUCTION"
          ? [turbosnap({ rootDir: config.root ?? process.cwd() })]
          : [],
    })
  },
}

export default config
