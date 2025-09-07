import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourwealthsite.com',
  integrations: [tailwind()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  prefetch: true
});
