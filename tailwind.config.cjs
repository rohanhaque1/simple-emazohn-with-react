/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8fc6e8",

          secondary: "#ffc1e3",

          accent: "#68e86e",

          neutral: "#232334",

          "base-100": "#DDE2EE",

          info: "#8FADE0",

          success: "#55D8A6",

          warning: "#EBBC47",

          error: "#E96767",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
