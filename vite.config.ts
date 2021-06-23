import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/lit-css-canvas/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
