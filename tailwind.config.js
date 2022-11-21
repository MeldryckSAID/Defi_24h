/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#1c163c",
        "main-beige": "#dfc494",
        "dark-blue": "#0b052c",
        "Gris/700": "#383a3d",
      },
    },
  },
  plugins: [],
};
