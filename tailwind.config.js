/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        
        // sm: '240px',
        // md: '768px',
        // "ipad": '800px',
        //  lg: '1024px',
        // xl: '1280px',
        // "2xl": "1440px",
        'phone': '440px',
        'tablet': '788px',
        'laptop': '1180px',
      },
      width: {
        1600: '1600px',
        400: '400px',
        450: '450px',
        210: '210px',
        550: '550px',
        260: '260px',
        650: '650px',
      },
      height: {
        600: '600px',
        280: '280px',
        900: '900px',
        458: '458px',
      },
      top: {
        ' 50%': '50%',
      },
      backgroundColor: {
        primary: '#F1F1F2',
        blur: '#030303',
      },
      colors: {
        primary: 'rgb(22, 24, 35)',
      },
      height: {
        '88vh': '88vh',
      },
      backgroundImage: {
        'cover':
          "url('https://newevolutiondesigns.com/images/freebies/black-facebook-cover-10.jpg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // require('flowbite/plugin')
  ],
};