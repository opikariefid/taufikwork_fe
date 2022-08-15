/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: "#014E79",
        secondary: "#185b87",
        info: "#3498db",
        success: "#2ecc71",
        warning: "#f1c40f",
        danger: "#e74c3c",
        surface: '#EFF5F4',
      },      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      boxShadow: {
        'project-card': '0px 4px 10px rgba(0, 0, 0, 0.05)',
        'menu-card': '0px 4px 20px rgba(0, 0, 0, 0.1)',
        'data-card': '0px 3.61985px 16px rgba(0, 0, 0, 0.1)',
        'button': '0px 2px 4px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        'app-padding': '1em',
      },
      borderRadius: {
        'app-radius': '15px',
      }
    },
  },
  plugins: [],
}
