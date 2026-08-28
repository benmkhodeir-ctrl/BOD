import { getCollection } from 'astro:content';
export async function GET({ site }) {
  const entries = (await getCollection('writing')).sort((a,b) => b.data.published.valueOf() - a.data.published.valueOf());
  const base = site || new URL('https://benondelivery.com');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>BEN ON DELIVERY</title><link>${base}</link><description>The point where the system meets reality.</description>${entries.map(e => {
    const path = e.data.format === 'field-note' ? `/field-notes/${e.id}` : `/articles/${e.id}`;
    const url = new URL(path, base);
    return `<item><title><![CDATA[${e.data.title}]]></title><link>${url}</link><guid>${url}</guid><pubDate>${e.data.published.toUTCString()}</pubDate><description><![CDATA[${e.data.standfirst}]]></description></item>`;
  }).join('')}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
