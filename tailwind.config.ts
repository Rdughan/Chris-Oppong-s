import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#10231C",
        forest: "#193C2E",
        sage: "#789681",
        ivory: "#F6F3EA",
        paper: "#FCFBF7",
        gold: "#B5965A",
        border: "#D9DED7",
        muted: "#4B5F54",
        flag: "#F1E9D6",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "Times New Roman", "serif"],
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        wrap: "1120px",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        rise: "rise .9s cubic-bezier(.2,.7,.2,1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;
