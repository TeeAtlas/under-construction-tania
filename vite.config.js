import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./", // Ensure it points to your project root
  build: {
    build: { outDir: 'dist' },
  },
});
