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
      backgroundColor: {
        'custom-rgba': 'rgba(35, 53, 107, 0.04)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}