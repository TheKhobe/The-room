/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
     screens: {
      sm: '480px',
      md: '768px',
      lg: '1440px'
    },
    extend: {
      colors: {
      darkGray: ' hsl(0, 0%, 63%)',
      veryDarkGray: 'hsl(0, 0%, 27%)',
      black: 'hsl(0, 0%, 0%)',
      white: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}
