/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "src/*.{html,js}", "src/static/js/views/*.{html,js}", "src/static/js/components/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          ultraLight: '#FFE19C',
          light: '#FDB713',
          dark: '#E3A107'
        }
      },
      spacing: {
        '8': '0.5rem',
        '16': '1rem',
        '24': '1.5rem',
        '32': '2rem',
        '40': '2.5rem',
        '48': '3rem',
        '56': '3.5rem',
        '64': '4rem',
        '72': '4.5rem',
        '80': '5rem',
        '88': '5.5rem',
        '96': '6rem',
        '104': '6.5rem',
        '112': '7rem',
        '120': '7.5rem',
      },
      borderRadius: {
        5: '5px',
        10: '10px',
        12: '12px',
        15: '15px',
        20: '20px'
      }
    },
  },
  plugins: [],
}
