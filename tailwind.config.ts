import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF9F4",
        blush: "#F8D8DF",
        strawberry: "#E96B76",
        matcha: "#B7D3B0",
        cocoa: "#6E4A3D",
        ink: "#2D2D2D",
        // soft supporting tints derived from the core palette
        "blush-light": "#FCEDF0",
        "matcha-light": "#E3EFE0",
        "cream-deep": "#FBF2E9",
        "folder-pink": "#F7C7D5",
        "folder-blue": "#B9DDF0",
        "folder-green": "#BDD4C5",
        "folder-cream": "#F6D8A8",
        "paper": "#FFFCF7",
        "cocoa-deep": "#4A2B24",
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "system-ui", "sans-serif"],
        body: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 12px 40px -12px rgba(110, 74, 61, 0.18)",
        card: "0 8px 24px -8px rgba(110, 74, 61, 0.14)",
        button: "0 6px 20px -6px rgba(233, 107, 118, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--rot, 0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--rot, 0deg))" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        untie: {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-40" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        wiggle: "wiggle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
