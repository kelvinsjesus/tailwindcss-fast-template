/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/*.{html,js,php}",
    "./src/*/*.{html,js,php}",
    // "./src/*/*.{html,js,ts,tsx,jsx,php,blade}"
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      // }
    },
    // colors: {
    //   ...colors
    // }
  },
  plugins: [],
}
