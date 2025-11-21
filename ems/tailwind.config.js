/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#5A0E24",
        maroon1:"#76153C",
        teal:"#3B9797"
      },
    },
  },
  plugins: [],
}
