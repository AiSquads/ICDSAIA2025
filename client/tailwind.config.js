/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4a008f", // Medium blue
        "primary-light": "#aa50ff", // Light blue
        "primary-dark": "#2c0055", // Dark blue
        secondary: "#000000", // Black
        "secondary-light": "#333333", // Dark gray
        "secondary-dark": "#000000", // Black (repeated for consistency)
        background: "#ffffff", // White
        text: "#333333", // Dark gray for text
        shadow: "rgba(0, 0, 0, 0.1)" // Light shadow color
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};
