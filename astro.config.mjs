import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://astroxvim.github.io',
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  server: {
    host: '127.0.0.1',
  }
});
