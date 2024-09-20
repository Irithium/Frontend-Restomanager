/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      scrollbar: {
        thumb: {
          rounded: "full",
        },
        track: {
          rounded: "full",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        // Add your colors here
      },
    },
    animation: {
      blink: "blink 2s infinite",

      pulse_delay_200: "pulse 1s infinite 0.2s",
      pulse_delay_400: "pulse 1s infinite 0.4s",
    },
    keyframes: {
      blink: {
        "0%": { opacity: "1" },
        "50%": { opacity: "0.5" },
        "100%": { opacity: "1" },
      },
    },
    colors: {
      ...colors,
    },
  },
  plugins: [
    require("tailwind-scrollbar")({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
  ],
};
