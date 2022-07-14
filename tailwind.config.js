/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,vue}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  theme: {
    extend: {
      top: {
        m5: "-5rem",
      },
      maxWidth: {
        "1/2": "50%",
        7: "1.75rem",
      },
      minWidth: {
        "1/4": "20rem",
        540: "32rem",
      },
      width: {
        75: "75vw"
      },
      height: {
        128: "35rem",
        75: "75vw",
      },
      gridAutoColumns: {
        "1fr": "minmax(320px,1fr)",
      },
      spacing: {
        '128': '50vw',
      }
    },
  },
};
