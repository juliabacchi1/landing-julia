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
        sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        gemini: {
          blue: "#8ab4f8",
          pink: "#f482c3",
          "dark-bg": "#131314",
          "light-bg": "#1f1f1f",
          "text-primary": "#e3e3e3",
          "text-secondary": "#8a8a8a",
        },
      },
    },
  },
  plugins: [],
};
