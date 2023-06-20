/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkGreen': '#1DB956',
        'green': '#1FD662',
        'white': '#FEFEFE',
        'dark': '#191313'
      },
      fontFamily: {
        mainFonts: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

