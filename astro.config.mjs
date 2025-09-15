import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://danieldacunhabueno.github.io/personal-website',
  base: '/personal-website',
  integrations: [
    tailwind({
      applyBaseStyles: true
    })
  ]
});
