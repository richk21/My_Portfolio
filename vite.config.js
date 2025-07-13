import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: ".",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      external: ["three"],
    },
  },
  plugins: [react()],
  commonjsOptions: {
    esmExternals: true,
  },
});
