/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      container : {
        center: true,
        margin: '0px',
        padding: '2px',
      },
      extend: {
        backgroundImage : {
          'parallax' : 'url("https://images.pexels.com/photos/176851/pexels-photo-176851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
        },
        colors : {
          primary: '#FFFFFF',
          dark: '#0f172a',
          secondary: '#F6EEF9',
          head: '#161439',
          p: '#6D6C80'
        },
        screens: {
          '2xl': '1320px',
        },
        dropShadow: {
          'baten': '0 35px 35px #050071'
        }
      },
    },
    plugins: [],
  }