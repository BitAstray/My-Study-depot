import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target:
          "http://127.0.0.1:5500/2.%20%E5%B0%B1%E4%B8%9A/07.%20CompositionApi/",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
