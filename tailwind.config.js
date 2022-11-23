const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xsm': '400px',
      ...defaultTheme.screens,
      /* 'sm': '640px',
      'md':'768',
      'lg':'1024',
      'xl':'1280',
      '2xl':'1536' */
    },
    extend: {
      fontFamily: {
        cabin: ['Cabin', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};