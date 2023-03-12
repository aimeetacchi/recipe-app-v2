/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      orange: {
        200: '#FDEEDC',
        300: '#FFD8A9',
        400: '#F1A661',
        500: '#E38B29'
      
      }
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}