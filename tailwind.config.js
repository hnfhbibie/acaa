/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        bghero: "#fec7d7",
      },
      backgroundImage: {
        quest: "url('./src/assets/images/quest-image.png')",
      },
      colors: {
        primary: "#f9f8fc",
        secondary: "#d9d4e7",
        underline: "#fec7d7",
      },
      componentColor: {
        btn: "#0e172c",
        btntext: "#fffffe",
      },
      textColor: {
        headline: "#0e172c",
        main: "#f9f8fc",
        tertiary: "#a786df",
        highlight: "#fec7d7",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
