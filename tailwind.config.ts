import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { createThemes } from "tw-colors";
import { colors } from "./src/utilities/colors";

const config: Config = {
  darkMode: ["class", '[data-mode="nightMode"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-blue": "#040A21",
        "primary-blue": "#0061E6",
        "primary-blue(12%)": "#0060e61f",
        "light-blue": "#1B2857",
        customColor: "#10152B",
        "ash-blue": "#040A21",
        orange: "#FFA416",
        "orange(10%)": "#ffa5141a",
        "orange(20%)": "#ffa51433",
        "card-bg": "#1B2136",
        "input-color": "#747EA1",
        inputheader: "#E4E8F1",
        "grid-bg": "#0f1428",
        "box-boundary": "#272f4E",
        blue: "#5791E1",
        // LIGHTCOLORS
        lightbg: "#f4f7fb",
        // testing: state.themes.theme === "dark" ? "#040A21" : "#F4F7FB",
      },

      loaderContainer: {
        margin: "30rem auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 450ms ease",
        position: "relative",
      },
      loader: {
        // position: "absolute",
        zIndex: 3,
        // top: "50%",
        // left: "50%",
        width: "100px",
        height: "100px",
        background: "transparent",
        border: "1px solid #0061E6", // Update this to reference your theme's borderColor
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "120px",
        fontFamily: "sans-serif",
        fontSize: "20px",
        letterSpacing: "4px",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:before": {
          content: '""',
          // position: "absolute",
          // top: "-3px",
          // left: "-3px",
          width: "100%",
          height: "100%",
          border: "1px solid transparent",
          borderTop: "1px solid #0061E6", // Update this to reference your theme's MainBlueColor
          borderRight: "1px solid #0061E6",
          borderRadius: "50%",
          animation: "animateC 1s linear infinite",
        },
      },
      "@keyframes animateC": {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
    },
  },

  plugins: [
    createThemes({ ...colors }),
    require("flowbite/plugin"),
    plugin(({ addUtilities, addComponents, e, theme }) => {
      // Add your custom styles here
      addUtilities({
        ".imageHolder": {
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
        },
        ".imageHolder img": {
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "0",
          top: "0",
          "object-fit": "cover",
          border: "none",
        },
        ".scroll_style::-webkit-scrollbar": {
          width: "0",
          height: "3px",
        },
        ".scroll_style::-webkit-scrollbar-thumb": {
          "background-color": "rgba(166, 171, 183, 0.7)",
          "border-radius": "40px",
        },
        ".scroll_style::-webkit-scrollbar-track": {
          "background-color": "transparent",
        },
        ".Y_scroll_style::-webkit-scrollbar": {
          width: "3px",
        },
        ".Y_scroll_style::-webkit-scrollbar-thumb": {
          "background-color": "rgba(166, 171, 183, 0.7)",
          "border-radius": "40px",
        },
        ".Y_scroll_style::-webkit-scrollbar-track": {
          "background-color": "transparent",
        },
      });
    }),
  ],
};

export default config;
