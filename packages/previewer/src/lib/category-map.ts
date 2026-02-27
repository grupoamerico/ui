/**
 * Maps icon file names to categories for the icon gallery.
 */

const ICON_CATEGORY_PREFIXES: Record<string, string> = {
  "arrow-": "Flechas",
  "chevron-": "Flechas",
  "circle-": "Formas",
  "square-": "Formas",
  "triangle-": "Formas",
  star: "Formas",
  heart: "Formas",
  sun: "UI",
  moon: "UI",
  eye: "UI",
  bell: "UI",
  calendar: "UI",
  clock: "UI",
  cog: "UI",
  gear: "UI",
  home: "UI",
  lock: "UI",
  search: "UI",
  settings: "UI",
  user: "UI",
  users: "UI",
  mail: "UI",
  chat: "UI",
  message: "UI",
  photo: "UI",
  camera: "UI",
  image: "UI",
  document: "UI",
  folder: "UI",
  file: "UI",
  trash: "UI",
  edit: "UI",
  pencil: "UI",
  plus: "UI",
  minus: "UI",
  check: "UI",
  x: "UI",
  close: "UI",
  menu: "UI",
  filter: "UI",
  sort: "UI",
  download: "UI",
  upload: "UI",
  share: "UI",
  link: "UI",
  copy: "UI",
  clipboard: "UI",
  refresh: "UI",
  external: "UI",
  logout: "UI",
  login: "UI",
  apple: "Social",
  amazon: "Social",
  google: "Social",
  github: "Social",
  twitter: "Social",
  facebook: "Social",
  instagram: "Social",
  linkedin: "Social",
  discord: "Social",
  slack: "Social",
  figma: "Social",
  stripe: "Social",
  vercel: "Social",
  nextjs: "Social",
  gatsby: "Social",
  astro: "Social",
  fly: "Social",
}

export function getIconCategory(fileName: string): string {
  const lower = fileName.toLowerCase()

  if (lower.endsWith("-solid")) return "Solidos"

  for (const [prefix, category] of Object.entries(ICON_CATEGORY_PREFIXES)) {
    if (lower.startsWith(prefix)) return category
  }

  return "Otros"
}

export const ICON_CATEGORIES = [
  "Todos",
  "Flechas",
  "UI",
  "Formas",
  "Social",
  "Solidos",
  "Otros",
]
