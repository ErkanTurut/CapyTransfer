import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import rollupNodePolyFill from "rollup-plugin-polyfill-node";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    rollupNodePolyFill({
      include: ["node_modules/**/*.js", new RegExp("node_modules/.vite/.*js")],
    }),
  ],

  build: {
    rollupOptions: {
      plugins: [
        // ↓ Needed for build
        rollupNodePolyFill(),
      ],
    },
    // ↓ Needed for build if using WalletConnect and other providers
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
