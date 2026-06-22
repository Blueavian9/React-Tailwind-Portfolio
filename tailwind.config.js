// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        app: {
          background: "#080D1A",  // page base (was #F8F9FA)
          surface:    "#0F1829",  // cards, nav (was #FFFFFF)
          text:       "#F0F4FF",  // headings (was #1A1A1A)
          muted:      "#8B9BB4",  // body, captions (was #2D3748)
          accent:     "#00D4AA",  // CTAs, active nav (unchanged)
          "accent-dim": "#00A882", // hover states
          border:     "#1E2D47",  // dividers (was #CBD5E1)
          card:       "#0F1829",  // cards (was #F1F5F9)
          pill:       "#112240",  // tech skill badges
        },
        neon: "#03e9f4",
      },
      keyframes: {
        btnAnim1: { "0%": { left: "-100%" }, "50%,100%": { left: "100%" } },
        btnAnim2: { "0%": { top: "-100%" }, "50%,100%": { top: "100%" } },
        btnAnim3: { "0%": { right: "-100%" }, "50%,100%": { right: "100%" } },
        btnAnim4: { "0%": { bottom: "-100%" }, "50%,100%": { bottom: "100%" } },
        fadeSlideUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        contactBtnAnim1: "btnAnim1 1s linear infinite",
        contactBtnAnim2: "btnAnim2 1s linear infinite 0.25s",
        contactBtnAnim3: "btnAnim3 1s linear infinite 0.5s",
        contactBtnAnim4: "btnAnim4 1s linear infinite 0.75s",
        "fade-up":   "fadeSlideUp 0.6s ease-out both",
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















// // tailwind.config.js
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//     // add external UI library paths here if you use tailwind classes in node_modules
//     // example: "./node_modules/@your-org/ui-library/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         app: {
//           background: "#F8F9FA",
//           surface: "#FFFFFF",
//           text: "#1A1A1A",
//           muted: "#2D3748",
//           accent: "#00D4AA",
//           border: "#CBD5E1",
//           card: "#F1F5F9",
//         },
//         neon: "#03e9f4",
//       },
//       keyframes: {
//         btnAnim1: { "0%": { left: "-100%" }, "50%,100%": { left: "100%" } },
//         btnAnim2: { "0%": { top: "-100%" }, "50%,100%": { top: "100%" } },
//         btnAnim3: { "0%": { right: "-100%" }, "50%,100%": { right: "100%" } },
//         btnAnim4: { "0%": { bottom: "-100%" }, "50%,100%": { bottom: "100%" } },
//         fadeSlideUp: {
//           "0%": { opacity: "0", transform: "translateY(24px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//       },
//       animation: {
//         contactBtnAnim1: "btnAnim1 1s linear infinite",
//         contactBtnAnim2: "btnAnim2 1s linear infinite 0.25s",
//         contactBtnAnim3: "btnAnim3 1s linear infinite 0.5s",
//         contactBtnAnim4: "btnAnim4 1s linear infinite 0.75s",
//         // Hero entrance — each step 150ms later than the last
//         "fade-up": "fadeSlideUp 0.6s ease-out both",
//         "fade-up-1": "fadeSlideUp 0.6s ease-out 0.1s both",
//         "fade-up-2": "fadeSlideUp 0.6s ease-out 0.25s both",
//         "fade-up-3": "fadeSlideUp 0.6s ease-out 0.45s both",
//         "fade-up-4": "fadeSlideUp 0.6s ease-out 0.65s both",
//         "fade-up-5": "fadeSlideUp 0.6s ease-out 0.85s both",
//       },
//       colors: {
//         neon: "#03e9f4",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// };
