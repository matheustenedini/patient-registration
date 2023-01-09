/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        logo: '#012856',
        fontFamily: {
          sans: ['var(--font-montserrat)', ...fontFamily.sans],
        },
      },
      fontSize: {
        xs: '13px',
      },
    },
  },
  plugins: [],
};
