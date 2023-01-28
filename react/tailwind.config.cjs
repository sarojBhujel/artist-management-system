/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
