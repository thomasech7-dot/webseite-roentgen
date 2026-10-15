import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';

const origin = 'https://webseite-roentgen.vercel.app';
const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'));
const template = await readFile('dist/index.html', 'utf8');
const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
try {
  const { Page } = await server.ssrLoadModule('/src/main.tsx');
  const pages = [
    ['/', 'index.html', 'Kostenloser Website-Check | Thomas Olesch', 'Persönlicher Website-Check für Selbstständige und Unternehmen im DACH-Raum: Nutzerführung, Texte und SEO prüfen lassen. Drei priorisierte Empfehlungen.', true],
    ['/impressum', 'impressum.html', 'Impressum | Thomas Olesch Website-Röntgen', 'Anbieter- und Kontaktangaben zum Website-Röntgen von Thomas Olesch.', false],
    ['/datenschutz', 'datenschutz.html', 'Datenschutz | Thomas Olesch Website-Röntgen', 'Informationen zur Verarbeitung von Daten auf der Website und beim Anfordern des Website-Röntgens.', false],
    ['/danke', 'danke.html', 'Danke für deine Anfrage | Thomas Olesch', 'Informationen zu deiner Website-Röntgen-Anfrage.', false],
    ['/404', '404.html', 'Seite nicht gefunden | Thomas Olesch', 'Diese Seite ist nicht vorhanden.', false],
  ];
  for (const [path, file, title, description, indexable] of pages) {
    let markup = renderToString(React.createElement(Page, { path }));
    for (const [src, entry] of Object.entries(manifest)) {
      markup = markup.replaceAll(`/${src}`, `/${entry.file}`);
    }
    if (markup.includes('/src/assets/')) throw new Error(`Unresolved image asset in ${file}`);
    const url = new URL(path, origin).href;
    const head = `<title>${escape(title)}</title><meta name="description" content="${escape(description)}"><meta name="robots" content="${indexable ? 'index,follow,max-image-preview:large' : 'noindex,follow'}">${file === '404.html' ? '' : `<link rel="canonical" href="${url}">`}<meta property="og:type" content="website"><meta property="og:locale" content="de_DE"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${url}">`;
    const schema = indexable ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': [
      { '@type': 'Person', '@id': `${origin}/#person`, name: 'Thomas Olesch', jobTitle: 'Copywriter und Webdesigner', url: 'https://thomas-olesch-homepage.vercel.app/', address: { '@type': 'PostalAddress', addressLocality: 'Hildesheim', addressCountry: 'DE' } },
      { '@type': 'Service', '@id': `${origin}/#service`, name: 'Kostenloses Website-Röntgen', url: `${origin}/`, provider: { '@id': `${origin}/#person` }, areaServed: ['Deutschland', 'Österreich', 'Schweiz'], description: 'Persönliche Prüfung von Nutzerführung, Texten, Positionierung und Suchintention mit drei priorisierten Empfehlungen.' },
      { '@type': 'WebPage', '@id': `${origin}/#webpage`, url: `${origin}/`, name: title, inLanguage: 'de', mainEntity: { '@id': `${origin}/#service` } },
    ] }).replaceAll('<', '\\u003c')}</script>` : '';
    const html = template.replace(/<title>[\s\S]*?<\/title>/i, '').replace(/<meta\b[^>]*name="description"[^>]*>/i, '').replace('</head>', `${head}${schema}</head>`).replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
    if ((html.match(/<h1[ >]/g) || []).length !== 1) throw new Error(`Expected one H1 in ${file}`);
    await writeFile(`dist/${file}`, html);
  }
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>\n`);
  console.log('Prerendered 5 pages with route-specific metadata, robots.txt and sitemap.xml.');
} finally {
  await server.close();
}
