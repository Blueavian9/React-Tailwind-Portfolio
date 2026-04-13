// vite.config.mjs
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel and most hosts serve the app at "/". For GitHub Pages (subpath), set VITE_BASE=/your-repo-name/ in that CI env only.
  base: process.env.VITE_BASE || "/",
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
