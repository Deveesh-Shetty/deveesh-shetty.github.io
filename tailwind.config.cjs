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
        monospace: ["Space Mono", "monospace"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        contrast: "change-color 1s linear infinite",
        "bounce-horizontal": "horizontal 2s infinite ease-in-out",
      },
      keyframes: {
        "change-color": {
          "50%": { mixBlendMode: "hard-light" },
        },
        horizontal: {
          "0%, 100%": {
            transform: "translateX(-25%)",
          },
          "50%": {
            transform: "none",
          },
        },
      },
    },
  },
  plugins: [],
}
