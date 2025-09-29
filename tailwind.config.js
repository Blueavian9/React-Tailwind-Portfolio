/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseSoft: {
          "0%,100%": { opacity: 0.8 },
          "50%": { opacity: 1 },
        },
        // … keep your btnAnim1-4 if used elsewhere
      },
      animation: {
        "spin-slow": "spinSlow 12s linear infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
      },
      colors: {
        "glow-cyan": "#22d3ee",
        "glow-fuchsia": "#e879f9",
        "glow-violet": "#a78bfa",
      },
      hover:before:animate-[pulse_2s_infinite]

    },
  },
  plugins: [],
};
