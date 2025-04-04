/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          200: '#D5DAE1',
        },
        black: {
          DEFAULT: '#000',
          500: '#1D2235',
        },
        blue: {
          500: '#2b77e7',
        },
        green: {
          bg: '#32463a',
        },
        neon_green: {
          300: '#c6ecbe',
          500: '#268b6d',
          800: '#265446',
        },
        neon_blue: {
          300: '#40c9ff',
        },
      },
      fontFamily: {
        worksans: ['Work Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
