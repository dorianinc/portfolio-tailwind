/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./apps/**/*.{html,js,jsx}",
  ], 
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


// container.className = "mx-auto w-full lg:w-5/6 xl:w-3/4";