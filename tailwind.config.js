/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/Components/*', './src/App.jsx', './src/main.jsx', './index.html'],
  theme: {
    extend: {
      screens:{
      'md':'800px',
      '2xl':'1580px'
      }
    },
    colors:{
      'primary-800': '#191C24',
      'primary-600': '#2a2f3c',
      'primary-400': '#AF1763',
      'accent-dark-blue': '#0D6EFD',
      'accent-green': '#198754',
      'accent-light-blue': '#0DCAF0',
      'accent-red': "#AB2E3C",
      'accent-yellow': "#FFC107"
    }
  },
  plugins: [],
}

