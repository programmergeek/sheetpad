/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const colours = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "400px",
      md: "800px",
      lg: "1200px",
      xl: "1600px",
    },
    colors: {
      white: "#fff",
      gray: colours.gray,
      orange: {
        lightOrange: "#f3bd91",
        darkOrange: "#f57207",
      },
    },
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
    },
    boxShadow: {
      DEFAULT: "0px 5px 15px rgba(245, 114, 7, 0.39)",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
