module.exports = {
  content: ["./public/index.html"],
  theme: {
    colors: {
      primary: "#FFDB0A",
      red: "#FF6142",
      white: {
        dark: "#F6FAFC",
        normal: "#fff",
      },
      black: {
        light: "#333333",
        normal: "#141414",
      },
      blue: {
        dark: "#26458C",
        normal: "#3D61B0",
      },
    },
    fontSize: {
      "5xs": [
        "10px",
        {
          lineHeight: "16px",
        },
      ],
      "4xs": [
        "12px",
        {
          lineHeight: "18px",
        },
      ],
      "2xs": [
        "15px",
        {
          lineHeight: "23px",
        },
      ],
      "3xs": [
        "14px",
        {
          lineHeight: "21px",
        },
      ],
      "1xs": [
        "16px",
        {
          lineHeight: "25px",
        },
      ],
      xs: [
        "18px",
        {
          lineHeight: "27px",
        },
      ],
      "1sm": [
        "22px",
        {
          lineHeight: "33px",
        },
      ],
      sm: [
        "24px",
        {
          lineHeight: "35px",
        },
      ],
      md: [
        "34px",
        {
          lineHeight: "62px",
        },
      ],
      "1md": [
        "38px",
        {
          lineHeight: "57px",
        },
      ],
      lg: [
        "44px",
        {
          lineHeight: "62px",
        },
      ],
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      "semi-bold": 600,
      bold: 700,
    },
    screens: {
      vxs: "260px",
      xs: "350px",
      sm: "650px",
      md: "750px",
      lg: "950px",
      xl: "1080px",
    },
    extend: {
      borderRadius: {
        "4xl": "34px",
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        100: "28rem",
      },
    },
  },
  plugins: [],
};
