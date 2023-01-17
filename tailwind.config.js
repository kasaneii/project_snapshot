/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'darkest-blue':  '#000A25',
        'darker-blue': '#001343',
        'dark-blue': '#001857',
        'blue-clr': '#02437A',
        'font-clr': '#BBE0FF',
        'orange-clr': '#E8630A',
        'yellow-clr': '#FCD900',
        'light-gray-clr': '#C3C3C3',
      },
    },
  },
  plugins: [],
}
