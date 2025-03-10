/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sunflower: ["Sunflower", "sans-serif"],
        ubuntumono: ["Ubuntu Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
