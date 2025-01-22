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
          dark: "#01263B",
          extraDark: "#014D57",
        },
        secondary: {
          DEFAULT: "#F69331",
          light: "#F7B079",
          dark: "#C65F16",
        },
        white: {
          DEFAULT: "#F9F9F9",
          light: "#ffffff",
          dark: "#B20000",
        },
        gray: {
          DEFAULT: "#EDF4F4",
          light: "#EDF4F4",
          dark: "#0C0819",
        },
        black: {
          DEFAULT: "#212121",
          dark: "#000000",
        },
      },
      fontFamily: {
        karla: ["var(--font-karla)", "sans-serif"],
        archivo: ["var(--font-archivo)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        0: "0px 4px 50px 0px #00000040",
      },
      width: {
        85: "85%",
      },
      maxWidth: {
        85: "85%",
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
        "custom-gradient2":
          "linear-gradient(52.91deg, rgba(0, 38, 58, 1) 1.12%, rgba(2, 113, 126, 1) 79.96%)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
