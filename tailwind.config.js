// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        app: {
          // ── Light tokens ──────────────────────────────────────
          background: "#F8F9FA",
          surface: "#FFFFFF",
          text: "#1A1A1A",
          muted: "#4A5568",
          accent: "#00D4AA",
          "accent-dim": "#00A882",
          border: "#CBD5E1",
          card: "#F1F5F9",
          pill: "#E2E8F0",

          // ── Dark tokens (use as dark:bg-app-dark-background etc.) ──
          "dark-background": "#080D1A",
          "dark-surface": "#0F1829",
          "dark-text": "#F0F4FF",
          "dark-muted": "#94A3B8",
          "dark-border": "#1E2D47",
          "dark-card": "#112240",
          "dark-pill": "#1E2D47",
        },
        neon: "#03e9f4",
      },
      keyframes: {
        btnAnim1: { "0%": { left: "-100%" }, "50%,100%": { left: "100%" } },
        btnAnim2: { "0%": { top: "-100%" }, "50%,100%": { top: "100%" } },
        btnAnim3: { "0%": { right: "-100%" }, "50%,100%": { right: "100%" } },
        btnAnim4: { "0%": { bottom: "-100%" }, "50%,100%": { bottom: "100%" } },
        fadeSlideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        contactBtnAnim1: "btnAnim1 1s linear infinite",
        contactBtnAnim2: "btnAnim2 1s linear infinite 0.25s",
        contactBtnAnim3: "btnAnim3 1s linear infinite 0.5s",
        contactBtnAnim4: "btnAnim4 1s linear infinite 0.75s",
        "fade-up": "fadeSlideUp 0.6s ease-out both",
        "fade-up-1": "fadeSlideUp 0.6s ease-out 0.1s both",
        "fade-up-2": "fadeSlideUp 0.6s ease-out 0.25s both",
        "fade-up-3": "fadeSlideUp 0.6s ease-out 0.45s both",
        "fade-up-4": "fadeSlideUp 0.6s ease-out 0.65s both",
        "fade-up-5": "fadeSlideUp 0.6s ease-out 0.85s both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
