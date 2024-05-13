/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: "typeface-muli",
        base: "typeface-sacramento",
      },
    },
  },
  plugins: [],
};
