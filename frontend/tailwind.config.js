/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vose-black": "#0c0c0d",
        "vose-red": "#e50914",
        "vose-gray": "#9ca3af",
        "vose-lightGray": "#f4f4f6",
      },
      fontFamily: {
        display: ["'Orbitron'", "sans-serif"],
      },
    },
  },
  plugins: [],
};