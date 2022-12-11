/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-800": "#131313",
        "primary-100": "#FFFFFF",
        accent: "#FF5733",
      },
      screens: {
        "-md": { max: "768px" },
        "-sm": { max: "640px" },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        primary: ["Titillium Web", "sans-serif"],
        heading: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
