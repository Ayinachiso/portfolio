import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        desk: "rgb(var(--desk) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        sky: "rgb(var(--sky) / <alpha-value>)",
        lilac: "rgb(var(--lilac) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-serif", "Georgia"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      boxShadow: {
        ink: "5px 5px 0 rgb(var(--ink) / 0.92)",
        "ink-soft": "3px 3px 0 rgb(var(--ink) / 0.22)",
        glow: "0 20px 70px rgb(var(--primary) / 0.18)",
      },
      borderRadius: {
        stamp: "0.35rem",
      },
    },
  },
  plugins: [],
};

export default config;
