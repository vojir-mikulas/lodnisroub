const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#16161E",
      secondary: "#1A1B26",
      text: "#767A97",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.blue,
      yellow: colors.yellow,
      red: colors.red,
      pink: colors.pink,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
