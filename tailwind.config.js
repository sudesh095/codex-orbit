/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

module.exports = {
  content: [
    "./index.html",
   './src/**/*.{js,ts,jsx,tsx,css}'
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
}
