/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#3b2c21",
        "primary-white": "#fefefd",
        "primary-red": "#ad2f3c",
        "primary-blue": "#5DD9CC",
        "primary-green": "#0F0",
        "primary-green-darker":"#8c714a"
      },
      backgroundImage: {
        "create-booking": "url(Assets/Images/booking-bg-placeholder.webp)",
      },
    },
  },
  plugins: [],
}
