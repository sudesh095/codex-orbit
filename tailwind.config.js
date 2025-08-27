/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: "#FF6F00",
        gold: "#FFD54F",
        skyblue: "#0288D1",
      },
    },
  },
  plugins: [],
}