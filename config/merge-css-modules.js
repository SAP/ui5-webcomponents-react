import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, resolve } from 'node:path';
import { glob } from 'glob';

const cssDir = resolve(process.cwd(), 'dist', 'css');
const cssIndexFile = resolve(cssDir, 'index.css');

const cssModules = await glob(`${cssDir}/**/*.module.css`);

// manually add ThemeProvider
const themeProviderCssPath = resolve(cssDir, 'components', 'ThemeProvider', 'ThemeProvider.css');
if (existsSync(themeProviderCssPath)) {
  cssModules.unshift(themeProviderCssPath);
}

const fileContent = [];

for (const cssModule of cssModules) {
  const cssContent = readFileSync(cssModule, 'utf-8');
  const componentName = basename(cssModule, '.module.css');

  fileContent.push(`/* ${componentName} */`);
  fileContent.push(cssContent);
  fileContent.push('');
}

writeFileSync(cssIndexFile, fileContent.join('\n'));
