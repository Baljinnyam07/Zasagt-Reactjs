/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'opacity': 'opacity', // Add 'opacity' to the transition properties
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}