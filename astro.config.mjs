// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://Thaarun23.github.io',
  base: 'https://github.com/Thaarun23/Githubportfolio'
});
