import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "./",
  build: {
    outDir: "docs",
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "twitter-openapi/dist/*",
          dest: "assets/openapi",
        },
      ],
    }),
  ],
});
