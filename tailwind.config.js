/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#000",
        "primary-white": "#FFF",
        "primary-red": "#F00",
        "primary-blue": "#00F",
        "primary-green": "#0F0",
      },
    },
  },
  plugins: [],
}
