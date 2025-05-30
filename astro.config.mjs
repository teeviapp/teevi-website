// @ts-check
import { defineConfig } from "astro/config"

import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://teeviapp.github.io",
  integrations: [
    react({
      include: ["**/react/*", "**/components/*"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
})
