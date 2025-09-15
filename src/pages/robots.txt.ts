import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const body = `User-agent: *
Allow: /
Sitemap: https://danieldacunhabueno.github.io/personal-website/sitemap.xml`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
