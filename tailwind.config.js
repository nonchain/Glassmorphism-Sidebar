/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        'sidebar' : '0 8px 24px rgba(2, 4, 24, 0.65)',
      }
    },
  },
  plugins: [],
}
