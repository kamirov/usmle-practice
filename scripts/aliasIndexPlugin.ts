import type { Plugin } from "vite";

import { generateAliasIndex } from "./generate-alias-index";

export function aliasIndexPlugin(): Plugin {
  let generating = false;

  const runGenerate = async () => {
    if (generating) return;
    generating = true;
    try {
      generateAliasIndex();
    } finally {
      generating = false;
    }
  };

  return {
    name: "alias-index",
    async buildStart() {
      await runGenerate();
    },
    configureServer(server) {
      void runGenerate();
      server.watcher.on("change", (file) => {
        if (file.includes("/src/data/")) {
          void runGenerate();
        }
      });
    },
  };
}
