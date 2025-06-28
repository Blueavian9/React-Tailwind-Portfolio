/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": { transform: "translateX(-100%)", opacity: 0.6 },
          "50%": { transform: "translateX(100%)", opacity: 1 },
        },
        btnAnim1: {
          "0%": { left: "-100%" },
          "50%, 100%": { left: "100%" },
        },
        btnAnim2: {
          "0%": { top: "-100%" },
          "50%, 100%": { top: "100%" },
        },
        btnAnim3: {
          "0%": { right: "-100%" },
          "50%, 100%": { right: "100%" },
        },
        btnAnim4: {
          "0%": { bottom: "-100%" },
          "50%, 100%": { bottom: "100%" },
        },
      },
      fontFamily: {
        sans: ["font-mono", "sans-serif"],
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
        btnAnim1: "btnAnim1 1s linear infinite",
        btnAnim2: "btnAnim2 1s linear infinite 0.25s",
        btnAnim3: "btnAnim3 1s linear infinite 0.5s",
        btnAnim4: "btnAnim4 1s linear infinite 0.75s",
      },
      backgroundImage: {
        "gradient-heading":
          "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
      },
      colors: {
        "glow-blue": "#03e9f4",
        pink: "hsl(var(--neon-pink))",
        green: "hsl(var(--neon-green))",
        orange: "hsl(var(--neon-orange))",
      },
    },
  },
  plugins: [],
};
