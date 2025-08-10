/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#D6A99D',
          light: '#FBF3D5',
          muted: '#D6DAC8',
          accent: '#9CAFAA',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};