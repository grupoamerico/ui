/**
 * Storybook type stubs for the previewer.
 * These allow .stories.tsx files to compile without Storybook dependencies.
 */

declare module "@storybook/react" {
  import type { ComponentType } from "react"

  export interface Meta<T = unknown> {
    title?: string
    component?: ComponentType<T>
    parameters?: Record<string, unknown>
    args?: Partial<T>
    argTypes?: Record<string, unknown>
    decorators?: Array<(story: () => React.ReactElement, context: unknown) => React.ReactElement>
    tags?: string[]
  }

  export interface StoryObj<T = unknown> {
    args?: Partial<T>
    render?: (args: Partial<T>) => React.ReactElement
    name?: string
    parameters?: Record<string, unknown>
    decorators?: Array<(story: () => React.ReactElement, context: unknown) => React.ReactElement>
    play?: (context: unknown) => Promise<void>
  }

  export type StoryFn<T = unknown> = (args: Partial<T>) => React.ReactElement
}

declare module "@storybook/addon-essentials" {}
declare module "@storybook/addon-interactions" {}
declare module "@storybook/addon-links" {}
declare module "@storybook/addon-styling" {
  export function withThemeByDataAttribute(config: unknown): unknown
}
