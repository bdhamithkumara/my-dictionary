import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const nextUITheme = {
  themes: {
    light: {
      colors: {
        primary: {
          DEFAULT: "#5648eb",
          foreground: "#ffffff",
        },
        focus: "#d7d4ff",
      },
    },
  },
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          0: "#eeebff",
          1: "#d7d4ff",
          2: "#aba5f7",
          3: "#7d73f1",
          4: "#5648eb",
          5: "#3d2de9",
          6: "#3020e8",
          7: "#2314cf",
          8: "#1c11ba",
          9: "#100ca4",
        },
      },
      backgroundColor: {
        main: "#f5f7fa",
      },
      fontSize: { 15: "15px" },
    },
  },
  darkMode: "class",
  plugins: [nextui(nextUITheme)],
};
export default config;
