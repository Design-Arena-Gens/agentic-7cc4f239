import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      colors: {
        "forest": {
          50: "#f4faf4",
          100: "#e3f3e3",
          200: "#c4e5c5",
          300: "#9cd59f",
          400: "#6fbc72",
          500: "#4ca154",
          600: "#3a7f42",
          700: "#2f6134",
          800: "#284d2b",
          900: "#1e3c22"
        }
      }
    }
  },
  plugins: []
};

export default config;
