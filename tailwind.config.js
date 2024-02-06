/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      base: "12px",
      icon: "8px",
    },
    screens: {
      xl: "1142px",
    },
    extend: {
      maxWidth: {
        "635px": "635px",
        "350px": "350px",
        '920px': '920px',
      },
      spacing: {
        "201px": "201px",
        "455px": "455px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-setif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        accentYellow: "rgb(242, 183, 5);",
        accentYellowHover: "#BE9414",
        accentBlue: "rgb(97, 107, 232);",
        accentBlueHover: "#2431D9",
        colorTitle: "rgb(66, 68, 103);",
        colorSubtitleP: "rgb(139, 143, 187);",
        colorWhite: "#fff",
        colorWhiteSecondary: "rgb(245,245,245)",
      },
      lineHeight: {
        title1: "70px",
        "30px": "30px",
        "49px": "49px",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
