import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL('https://daniel.cunhabueno.com.br')).toString().replace(/\/$/, '');
  const staticPages = ['', '/blog'];
  const posts = await getCollection('blog');
  const postUrls = posts.map(p => `/blog/${p.slug}`);
  const pages = [...staticPages, ...postUrls];
  const urls = pages
    .map((p) => `<url><loc>${base}${p}</loc><changefreq>weekly</changefreq></url>`) 
    .join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
