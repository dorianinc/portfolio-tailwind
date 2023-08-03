/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      width: {
        '49': '49%',
      }
    },
  },
  plugins: [require("preline/plugin")],
};
