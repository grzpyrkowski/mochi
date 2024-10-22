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
      'mochi-yellow': '#F4F0E6',
      'mochi-white': '#EFEFEF',
      'mochi-brown': '#E8E3E3',
      'mochi-black': '#000000',
      'mochi-semi-black': '#00000059'
    },
    extend: {
      fontFamily: {
        "roboto": ['"Roboto", sans-serif'],
        "chillax-regular": ['"Chillax-Regular", serif]']
      }
    },
  },
  plugins: [],
}