/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '464px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      'mochi-orange': '#D44E31',
      'mochi-gray': '#F4F0E6'
    },
    extend: {
      fontFamily: {
        "gloock": ['"Gloock", serif'],
        "chillax": ['"chillaxregular", serif]']
      }
    },
  },
  plugins: [],
}