/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gamer-purple': '#6b21a8', // Example purple from the image
        'gamer-dark': '#0f0f0f',
      }
    },
  },
  plugins: [],
}
