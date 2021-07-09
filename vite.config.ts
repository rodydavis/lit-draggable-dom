import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/lit-draggable-dom/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
