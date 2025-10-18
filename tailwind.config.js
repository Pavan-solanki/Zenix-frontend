/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#004AAD',      // Zenix Blue
        secondary: '#01184E',    // Dark Blue
        black: '#000000',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
