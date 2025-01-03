import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#8E7DEF",
        primary2: "#7A67E6",
        secondary1: "#F9F9F9",
        secondary2: "#EFECFF",
        secondary3: "#1C1636",
        secondary4: "#635E80",
        secondary5: "#FFC700",
        "custom-text-color": "#6B6B6C",
        "custom-warn-background": "#FFF0F0",
        "custom-warn-bar": "#B23638",
        "custom-info-background": "#FFFCF6",
        "custom-info-bar": "#E1A539",
        "custom-success-background": "#F2FFFB",
        "custom-success-bar": "#20A679",
        "custom-notification-background": "#EEF7FE",
        "custom-notification-bar": "#1C6BAB",
      },
      fontSize: {
        heading: ["54px", { lineHeight: "81px" }],
        heading2: ["48px", { lineHeight: "63px" }],
        heading3: ["30px", { lineHeight: "30px" }],
        para: ["18px", { lineHeight: "28px" }],
        mobileheading: ["28px", { lineHeight: "40px" }],
        mobileheading2: ["24px", { lineHeight: "24px" }],
        mobilepara: ["14px", { lineHeight: "auto" }],
      },
      fontWeight: {
        light: "300",
        thin: "400",
        normal: "500",
        medium: "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
      borderWidth: {
        "1": "1.6px",
        "3": "3px",
        "5": "5px",
      },
      borderRadius: {
        xl: "10px",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
};

export default config;
