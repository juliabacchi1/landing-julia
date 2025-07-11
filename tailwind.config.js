const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        primary: "#7D2AE8",
        secondary: "#00C4CC",
        accent: "#FFA2C0",
        dark: "#18191F",
        light: "#F9FAFB",
        graylight: "#F2F2F2",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
