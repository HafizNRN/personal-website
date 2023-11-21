/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        dark: "#252530",
        primary: {
          1: "#6366f1",
          2: "#f97316",
          3: "#3b82f6"
        }
      }
    }
  },
  plugins: []
};
