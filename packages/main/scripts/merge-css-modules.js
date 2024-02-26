import { glob } from 'glob';
import { readFileSync, writeFileSync } from 'node:fs';
import { basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const cssDir = fileURLToPath(new URL('../dist/css', import.meta.url));
const cssIndexFile = fileURLToPath(new URL('../dist/css/index.css', import.meta.url));

const cssModules = await glob(`${cssDir}/**/*.module.css`);
const fileContent = [];

for (const cssModule of cssModules) {
  const cssContent = readFileSync(cssModule, 'utf-8');
  const componentName = basename(cssModule, '.module.css');

  fileContent.push(`/* ${componentName} */`);
  fileContent.push(cssContent);
  fileContent.push('');
}

writeFileSync(cssIndexFile, fileContent.join('\n'));
