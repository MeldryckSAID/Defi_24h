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
      backgroundImage: {
        allan: "url('/src/components/equipe/Allan.jpg')",
        ilkay: "url('/src/components/equipe/Ilkay.jpg')",
        luka: "url('/src/components/equipe/Luka.jpg')",
        meldryck: "url('/src/components/equipe/Meldryck.jpg')",
        theo: "url('/src/components/equipe/Theo.jpg')",
        amphib: "url('/src/components/jpg/amphib.png')",
      },
      
    },
  },
  plugins: [],
};
