import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const base = 'https://danieldacunhabueno.github.io/personal-website';
  const pages = ['', '/blog'];
  const urls = pages
    .map((p) => `<url><loc>${base}${p}</loc><changefreq>weekly</changefreq></url>`) 
    .join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
