/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      
      margin: {
        320: "320px",
      },
      width: {
        150: "150px",
        190: "190px",
        200: "200px",
        250:"250px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
        1000:"1000px",
        1200:"1200px"
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        550: "550px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      colors: {
        textColor: "#101010",
        activeText: "#D6230A",
        gradientBg: "rgba(116, 249, 105,0.4)",
        whiteAlpha: "rgba(255,255,255,0.2)",
        cardColor: "#f5f5f5",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
        cardOverlay:"rgba(256,256,256,0.4)"
      },
      fontFamily: {
        bodyFont: ["DM Sans", "sans-serif"],
        titleFont: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  
    plugins: [require("tailwind-scrollbar")],
  
};
