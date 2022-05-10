module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
        1: "1",
        "-2": "-2",
        2: "2",
      },
      fontSize: {
        11: "11px",
        10: "10px",
        9: "9px",
      },
      borderWidth: {
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      colors: {
        dark: "#212529",
        logoYellow: "#f8e84b",
        logoDark: "#11100c",
        indigoCustom: "#3360c2",
        logoGreen: "#6fa149",
      },
      borderRadius: {
        3: "3px",
        4: "4px",
        5: "5px",
      },
      lineHeight: {
        11: "2.5rem",
        12: "3rem",
        13: "3.5rem",
        14: "4rem",
        15: "4.5rem",
        16: "5rem",
      },
    },
  },
  plugins: [],
};
