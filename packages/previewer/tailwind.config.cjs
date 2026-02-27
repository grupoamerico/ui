/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("../ui/src/preset")],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "../ui/src/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
}
