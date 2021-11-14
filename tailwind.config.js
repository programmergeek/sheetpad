/* eslint-disable no-undef */
module.exports = {
  mode: "jit",
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
      orange: {
        lightOrange: "#f3bd91",
        darkOrange: "#f57207",
      },
    },
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
