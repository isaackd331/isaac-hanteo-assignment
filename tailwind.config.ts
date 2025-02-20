import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./interface/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // gray scale
        "gr-50": "#f7f8f9",
        "gr-100": "#e8ebed",
        "gr-200": "#c9cdd2",
        "gr-400": "#9ea4aa",
        "gr-500": "#72787f",
        "gr-600": "#454c53",
        "gr-800": "#26282b",
        "gr-900": "#1b1d1f",

        // color scale
        pink: "#FFB1B2",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
