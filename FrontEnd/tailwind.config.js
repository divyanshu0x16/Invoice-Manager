const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Spartan', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        navbar: {
          bg: '#373b54',
          darkbg: '#1e2139'
        },
        all: {
          bp: '#7c5dfa',
          darkbg: '#141625',
          lightbg: '#f8f8fb',
          switch: '#858bb3'
        },
        logo: {
          light: "#9277ff",
          dark: "#7c5dfa"
        },
        line: {
          color: "#494E6E"
        }
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.amber,
      pink: colors.pink,
      purple: colors.purple,
      blue: colors.blue,
      green: colors.emerald,
    },
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
