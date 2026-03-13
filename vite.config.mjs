// vite.config.mjs
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:
    process.env.NODE_ENV === "production" ? "/React-Tailwind-Portfolio/" : "/", // Important for Vercel previews & production
  css: {
    postcss: "./postcss.config.js", // If you have one (usually auto-detected)
  },
  // Optional: better dev experience
  server: {
    open: true, // auto-open browser on dev
    port: 5173,
  },
  // Optional: resolve aliases if you use them (e.g. @/src)
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
