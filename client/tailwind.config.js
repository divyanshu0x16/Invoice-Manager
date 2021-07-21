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
          darkbg: '#1e2139',
        },
        all: {
          bp: '#7c5dfa',
          darkbg: '#141625',
          lightbg: '#f8f8fb',
          switch: '#858bb3',
        },
        logo: {
          light: '#9277ff',
          dark: '#7c5dfa',
        },
        line: {
          color: '#494E6E',
        },
        paid: {
          text: '#62d79f',
          bg: '#f3fdf9',
          darkbg: '#1f2c3f',
        },
        pending: {
          text: '#ef8f07',
          bg: '#fef8f0',
          darkbg: '#2b2736',
        },
        item: {
          lightbg: '#f9fafe',
          darkbg: '#252945',
          lighttotal: '#373b54',
          darktotal: '#0c0e15',
        },
      },
      outline: {
        purple: '2px solid #7c5dfa',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      green: colors.emerald,
      blue: colors.blue
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
