/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#016E7C",
          light: "#B6D2D5",
          dark: "#014B52",
        },
        secondary: {
          DEFAULT: "#F69331",
          light: "#F7B079",
          dark: "#C65F16",
        },
        white: {
          DEFAULT: "#F9F9F9",
          light: "#F9F9F9",
          dark: "#B20000",
        },
        gray: {
          DEFAULT: "#EDF4F4",
          light: "#EDF4F4",
          dark: "#B20000",
        },
        black: {
          DEFAULT: "#212121",
        },
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        0: "0px 4px 50px 0px #00000040",
      },
      maxWidth: {
        90: "90%",
      },
      borderRadius: {
        10: "10px",
        100: "100px",
        40: "40px",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(269.37deg, #DD8024 40.44%, #FFE5CB 72.41%)",
      },
    },
  },
  plugins: [],
};
