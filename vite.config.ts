import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";
import { aliasIndexPlugin } from "./scripts/aliasIndexPlugin";

export default defineConfig({
  plugins: [aliasIndexPlugin(), crx({ manifest })],
  build: {
    // Emit SVGs as files so content scripts can load them via chrome.runtime.getURL
    // (data: URLs are blocked by UWorld's CSP).
    assetsInlineLimit: 0,
  },
});
