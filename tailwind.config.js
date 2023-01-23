/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#119744",
        secondary: "#FF5050",
        "light-green": "#D8F1E5",
        "light-tomato": "#FEE2E2",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
