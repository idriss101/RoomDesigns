module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
      letterSpacing: {
        widest: ".7rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
