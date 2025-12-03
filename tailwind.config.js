/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kleda: {
          primary: "#C34C57",
          dark: "#111111",
          gray: "#6B7280",
          background: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
