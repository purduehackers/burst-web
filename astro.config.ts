import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";

import { schema } from "./env.ts";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://burst.purduehackers.com",
  output: "server",

  integrations: [tailwind({
    configFile: "./tailwind.config.ts",
    applyBaseStyles: false,
  }), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }), sitemap(), playformCompress({
    Logger: 1,
  }), react()],

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

  adapter: vercel(),
});