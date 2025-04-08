/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,css}",  // Scan all relevant files
    "./apps/**/*.{html,js,jsx,ts,tsx}"       // Ensure it catches files in 'apps'
  ],
  theme: {
    extend: {
      height: {
        "30-rem": "25rem",
        "90-per": "90%"
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