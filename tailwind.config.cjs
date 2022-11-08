/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        darkBlue:'hsl(209, 23%, 22%)',
        veryDarkBlue:'hsl(207, 26%, 17%)',
        veryDarkBlueL:'hsl(200, 15%, 8%)',
        darkGray:'hsl(0, 0%, 52%)',
        veryLightGray:'hsl(0, 0%, 98%)'
      },
      fontFamily:{
        nunitoSans:['Nunito Sans','sans serif']
      }
      
    },
  },
  plugins: [],
}
