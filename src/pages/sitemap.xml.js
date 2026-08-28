import { getCollection } from 'astro:content';
export async function GET({ site }) {
  const base = site || new URL('https://benondelivery.com');
  const staticPaths = ['/', '/articles', '/the-last-inch', '/the-process-broke-here', '/field-notes', '/about', '/contact', '/privacy', '/commenting-guidelines'];
  const entries = await getCollection('writing');
  const paths = [...staticPaths, ...entries.map(e => e.data.format === 'field-note' ? `/field-notes/${e.id}` : `/articles/${e.id}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p => `<url><loc>${new URL(p, base)}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
