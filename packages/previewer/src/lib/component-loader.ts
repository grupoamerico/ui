/**
 * Auto-discovery loader for UI components and their stories.
 * Uses Vite's import.meta.glob for lazy loading.
 *
 * Path note: this file is at packages/previewer/src/lib/
 * so ../../../ goes up to packages/, then into ui/ or icons/.
 */

// Eagerly load all component modules (for export discovery)
const componentModules = import.meta.glob(
  [
    "../../../ui/src/components/*/index.ts",
    "../../../ui/src/components/*/index.tsx",
  ],
  { eager: true }
) as Record<string, Record<string, unknown>>

// Lazily load story modules
const storyModules = import.meta.glob(
  "../../../ui/src/components/*/*.stories.tsx"
) as Record<string, () => Promise<Record<string, unknown>>>

/**
 * Get all exported members from a component module.
 */
export function getComponentModule(
  slug: string
): Record<string, unknown> | null {
  // Try both .ts and .tsx extensions
  const tsKey = `../../../ui/src/components/${slug}/index.ts`
  const tsxKey = `../../../ui/src/components/${slug}/index.tsx`
  return (
    (componentModules[tsKey] as Record<string, unknown>) ||
    (componentModules[tsxKey] as Record<string, unknown>) ||
    null
  )
}

/**
 * Load stories for a component (lazy).
 */
export async function loadStories(
  slug: string
): Promise<Record<string, unknown> | null> {
  const key = `../../../ui/src/components/${slug}/${slug}.stories.tsx`
  const loader = storyModules[key]
  if (!loader) return null
  return (await loader()) as Record<string, unknown>
}

/**
 * Get all available component slugs from the glob.
 */
export function getComponentSlugs(): string[] {
  return Object.keys(componentModules)
    .map((key) => {
      const match = key.match(/\/components\/([^/]+)\/index\.tsx?$/)
      return match ? match[1] : null
    })
    .filter(Boolean) as string[]
}
