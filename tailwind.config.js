/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'noir-header': '#020203',
        'gris-chart': '#FBFBFB',
        'gris-text': '#74798C',

        'red-SportSee' :  '#FF0101',
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
