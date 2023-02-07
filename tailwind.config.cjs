/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'white':'#ffffff',
      'black':'#000000',
      'purple-600':'#3D1673',
      'purple-500':'#6D28D9',
      'purple-500_30':'#6D28D933',
      'purple-400':'#9C49BF',
      'purple-400_20':'#9c49bf33',
      'purple-300':'#A57EBF',
      'gray-purple':'#634C73',
      'warm-meat':'#BF847E',
      'warning':'#FF4040',
      'transparent':'transparent',
    },
  },
  plugins: [],
}