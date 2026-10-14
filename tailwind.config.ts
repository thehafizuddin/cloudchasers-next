import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#5c0b12",
        "accent-dark": "#45080e",
        ink: "#1a191d",
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
