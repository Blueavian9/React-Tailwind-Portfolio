/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        spinPulse: {
          "0%": { transform: "rotate(0deg)", opacity: 0.8 },
          "50%": { transform: "rotate(180deg)", opacity: 1 },
          "100%": { transform: "rotate(360deg)", opacity: 0.8 },
        },
        btnAnim1: {
          "0%": { left: "-100%" },
          "50%,100%": { left: "100%" },
        },
        btnAnim2: {
          "0%": { top: "-100%" },
          "50%,100%": { top: "100%" },
        },
        btnAnim3: {
          "0%": { right: "-100%" },
          "50%,100%": { right: "100%" },
        },
        btnAnim4: {
          "0%": { bottom: "-100%" },
          "50%,100%": { bottom: "100%" },
        },
      },
      animation: {
        "spin-pulse": "spinPulse 8s ease-in-out infinite",
        btnAnim1: "btnAnim1 1s linear infinite",
        btnAnim2: "btnAnim2 1s linear infinite 0.25s",
        btnAnim3: "btnAnim3 1s linear infinite 0.5s",
        btnAnim4: "btnAnim4 1s linear infinite 0.75s",
      },
      colors: {
        "glow-cyan": "#22d3ee",
        "glow-fuchsia": "#e879f9",
        "glow-violet": "#a78bfa",
      },
    },
  },
  plugins: [],
};
