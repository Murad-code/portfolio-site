/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/Assets/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        white: "#FFFFFF",
        offWhite: "#F5F5F5",
        primary: "#339989",
        primaryDark: "#2d7f72",
      },
      colors: {
        black: "#353535",
        grey: "#5D5D5D",
        primary: "#339989",
        secondary: "#0E79BA",
      },
      fontFamily: { sans: ["Outfit", ...defaultTheme.fontFamily.sans] },
      dropShadow: {
        base: "0 1px 4px rgba(235, 238, 242, 1)",
      },
    },
  },
  plugins: [],
};
