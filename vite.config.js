import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import postcss from "./postcss.config.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss,
  },
  server: {
    port: 3000,
  },
});
