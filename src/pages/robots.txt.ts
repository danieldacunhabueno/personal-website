import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL('https://daniel.cunhabueno.com.br')).toString().replace(/\/$/, '');
  const body = `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
