/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primarydarkgray:{
         100: "#424242",
         200:"#2C2A2A",
         300:"#3C3C3C",
         400:"#414141",
        500:"#373737",
        },
        primarydark:{
          100: "#252525",
          200:"#202020",
          300:"#131313",
         },
         primarywhite:{
          100: "#FFFFFF",
          200:"#EDEDED",
          300:"#F2F2F2",
          400:"#FAFAFA",
         },
         primaryyellow:{
          100: "#F9ED32",
          200:"#FFF225",
         },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

