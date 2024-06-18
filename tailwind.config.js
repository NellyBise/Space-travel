/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "light-blue": "#D0D6F9",
      "dark-blue": '#0B0D17',
      white:"#FFFFFF",
      transparent: 'transparent',
    },
    fontSize: {
      'xl': ['144px'],
      'l': ['100px'],
      'm': ['56px'],
      's': ['32px'],
      'xs': ['28px'],
      'subl': ['28px'],
      'subs': ['14px'],
      'nav': ['16px'],
      'body': ['18px'],
      },
  },
  plugins: [],
}

