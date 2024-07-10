/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      DMSans: ["DM Sans", "sans-serif"],
      Arsenal: ["Arsenal SC", "sans-serif"],
    },
    screens: {
      xs: "350px",
      xm: "520px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
