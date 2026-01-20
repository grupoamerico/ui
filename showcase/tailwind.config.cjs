const path = require("path")

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("./ui-preset.cjs")],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    path.resolve(__dirname, "../ui/src/**/*.{js,ts,jsx,tsx}"),
  ],
  darkMode: ["class", '[data-mode="dark"]'],
}
