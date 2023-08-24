/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      height: {
        "30-rem": "25rem",
      },
      width: {
        "49-percent": "49%",
        "60-rem": "60rem",
        "70-rem": "70rem",
        "75-rem": "75rem",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
