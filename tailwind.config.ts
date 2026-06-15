import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          50: "#f6f6f6",
          100: "#e8e8e8",
          200: "#d1d1d1",
          300: "#a8a8a8",
          400: "#7a7a7a",
          500: "#555555",
          600: "#3f3f3f",
          700: "#2a2a2a",
          800: "#1a1a1a",
          900: "#0d0d0d"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"]
      },
      letterSpacing: {
        luxury: "0.18em"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
