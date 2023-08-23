/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'opacity': 'opacity',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}