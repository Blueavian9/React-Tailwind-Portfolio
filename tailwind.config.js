// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        btnAnim1: { "0%": { left: "-100%" }, "50%,100%": { left: "100%" } },
        btnAnim2: { "0%": { top: "-100%" }, "50%,100%": { top: "100%" } },
        btnAnim3: { "0%": { right: "-100%" }, "50%,100%": { right: "100%" } },
        btnAnim4: { "0%": { bottom: "-100%" }, "50%,100%": { bottom: "100%" } },
      },
      animation: {
        contactBtnAnim1: "btnAnim1 1s linear infinite",
        contactBtnAnim2: "btnAnim2 1s linear infinite 0.25s",
        contactBtnAnim3: "btnAnim3 1s linear infinite 0.5s",
        contactBtnAnim4: "btnAnim4 1s linear infinite 0.75s",
      },
      colors: {
        neon: "#03e9f4", // the signature cyan glow
      },
    },
  },
  plugins: [],
};
