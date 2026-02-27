/**
 * Story adapter that renders Storybook-format stories without Storybook.
 *
 * Handles 4 patterns:
 * 1. Story has `render` function -> `story.render(mergedArgs)`
 * 2. Meta has `render` function -> `meta.render(mergedArgs)`
 * 3. Simple `args` on component -> `<Component {...mergedArgs} />`
 * 4. No component or render -> skip
 */

import React from "react"

interface StoryMeta {
  title?: string
  component?: React.ComponentType<unknown>
  parameters?: Record<string, unknown>
  args?: Record<string, unknown>
  argTypes?: Record<string, unknown>
  render?: (args: Record<string, unknown>) => React.ReactElement
  decorators?: Array<
    (story: () => React.ReactElement, context: unknown) => React.ReactElement
  >
}

interface StoryDef {
  args?: Record<string, unknown>
  render?: (args: Record<string, unknown>) => React.ReactElement
  name?: string
  parameters?: Record<string, unknown>
  decorators?: Array<
    (story: () => React.ReactElement, context: unknown) => React.ReactElement
  >
}

export interface ParsedStory {
  name: string
  element: React.ReactElement | null
}

/**
 * Parse a stories module and return renderable elements.
 */
export function parseStories(
  storiesModule: Record<string, unknown>
): ParsedStory[] {
  const meta = storiesModule.default as StoryMeta | undefined
  const Component = meta?.component
  const defaultArgs = meta?.args || {}
  const metaRender = meta?.render

  const stories: ParsedStory[] = []

  for (const [exportName, exportValue] of Object.entries(storiesModule)) {
    if (exportName === "default") continue
    if (typeof exportValue !== "object" || exportValue === null) continue

    const story = exportValue as StoryDef
    const storyName =
      story.name || exportName.replace(/([A-Z])/g, " $1").trim()

    const mergedArgs = { ...defaultArgs, ...story.args }

    let element: React.ReactElement | null = null

    try {
      if (typeof story.render === "function") {
        // Pattern 1: story-level render function
        element = story.render(mergedArgs)
      } else if (typeof metaRender === "function") {
        // Pattern 2: meta-level render function
        element = metaRender(mergedArgs)
      } else if (Component) {
        // Pattern 3: simple args on component
        element = React.createElement(
          Component as React.ComponentType<Record<string, unknown>>,
          mergedArgs
        )
      }
    } catch (err) {
      console.error(`[previewer] Error rendering story "${storyName}":`, err)
      element = null
    }

    stories.push({ name: storyName, element })
  }

  return stories
}
