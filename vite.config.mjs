// vite.config.mjs
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Root deployment (Vercel, Netlify, etc.). Subdirectory deploys (e.g. GitHub Pages) need
  // base: "/YourRepoName/" — set VITE_BASE_PATH in that environment instead of changing this file.
  base: process.env.VITE_BASE_PATH || "/",
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
