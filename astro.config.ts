import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";

import { schema } from "./env.ts";

export default defineConfig({
  site: "https://burst.purduehackers.com",
  output: "static",
  integrations: [
    tailwind({
      configFile: "./tailwind.config.ts",
      applyBaseStyles: false,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
    playformCompress({
      Logger: 1,
    }),
  ],
  server: {
    port: 3000,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  experimental: {
    env: { schema },
  },
});
