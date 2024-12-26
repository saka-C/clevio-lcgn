/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      
      fontWeight: {
        poppins400: "400",
        poppins500: "500",
        poppins600: "600",
        poppins700: "700",
      },
      colors: {
        primary: {
          100: "#d2d7ea",
          200: "#a4afd4",
          300: "#7788bf",
          400: "#4960a9",
          500: "#1c3894",
          600: "#162d76",
          700: "#112259",
          800: "#0b163b",
          900: "#060b1e",
        },
        secondary: {
          100: "#eaf4cc",
          200: "#d6e999",
          300: "#c1dd66",
          400: "#add233",
          500: "#98c700",
          600: "#7a9f00",
          700: "#5b7700",
          800: "#3d5000",
          900: "#1e2800",
        },
        thirdnary: {
          100: "#fffde3",
          200: "#fffbc7",
          300: "#fff9ac",
          400: "#fff790",
          500: "#fff574",
          600: "#ccc45d",
          700: "#999346",
          800: "#66622e",
          900: "#333117",
        },
      },
    },
  },
  plugins: [],
};
