/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        backgound_primary: '#EDEDFF',
        main_100: '#C0DEFF',
        main_200: '#195290A8',
        main_600: '#195290',
        neut_100: '#92959B',
        neut_200: '#4F4F4F',
        indicator: '#FF4100'
      }
    },
  },
  plugins: [],
}