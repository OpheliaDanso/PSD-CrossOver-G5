/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: "typeface-muli",
        base: "typeface-sacramento",
      },
      colors: { "custom-dark-green": "#366032", "custom-green": "#789f10", "custom-black": "#28362C", "custom-gray": "#F1F3F2" },
    },
  },
  plugins: [],
};
