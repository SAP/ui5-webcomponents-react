import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseArgs } from 'node:util';

const options = {
  directory: {
    type: 'string',
    short: 'd'
  }
};

const { values } = parseArgs({ options });

const storybookDir = resolve(process.cwd(), values.directory);
const stories = readFileSync(resolve(storybookDir, 'index.json'), 'utf-8');
const storiesJson = JSON.parse(stories);

const docs = Object.values(storiesJson.entries)
  .filter((story) => {
    return story.name === 'Docs';
  })
  .map((story) => {
    return `?path=/docs/${story.id}`;
  });

const lastModified = new Date().toISOString().replace(/T[\d:\.]+Z/, '');
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
sitemap += `    <url>\n`;
sitemap += `        <loc>https://sap.github.io/ui5-webcomponents-react/</loc>\n`;
sitemap += `        <lastmod>${lastModified}</lastmod>\n`;
sitemap += `    </url>\n`;
for (const sitemapUrl of docs) {
  sitemap += `    <url>\n`;
  sitemap += `        <loc>https://sap.github.io/ui5-webcomponents-react/${sitemapUrl}</loc>\n`;
  sitemap += `        <lastmod>${lastModified}</lastmod>\n`;
  sitemap += `    </url>\n`;
}
sitemap += `</urlset>`;

writeFileSync(resolve(storybookDir, 'sitemap.xml'), sitemap);
