/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "body-bg": "#f2f3f7",
        "common-bg": "white",
        "muted-color": "#00000060",
        "common-color": "#ff7519",
        "common-gray": "#5a5a5a",
        "border": "#dee2e6",
      }
    },
  },
  plugins: [],
}