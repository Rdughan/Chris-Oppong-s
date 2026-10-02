import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep chunks predictable for a small single-page site.
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
