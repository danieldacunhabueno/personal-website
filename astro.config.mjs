import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Domínio personalizado (subdomínio) configurado no GitHub Pages / Cloudflare
  site: 'https://daniel.cunhabueno.com.br',
  // Com domínio dedicado, o site deve ser servido na raiz
  base: '/',
  integrations: [
    tailwind({
      applyBaseStyles: true
    })
  ]
});
