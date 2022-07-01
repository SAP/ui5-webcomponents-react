import glob from 'glob';
import fs from 'node:fs';
import { extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import rimraf from 'rimraf';

const tmpDir = fileURLToPath(new URL('../tmp', import.meta.url));
const ignoredFiles = new Set(['.md', '.mdx', '.snap']);

rimraf.sync(tmpDir);

// copy full src dir
fs.cpSync(new URL('../src', import.meta.url), tmpDir, { recursive: true });

const allFiles = glob
  .sync('**/*', { cwd: tmpDir })
  .filter((file) => fs.statSync(resolve(tmpDir, file)).isFile())
  .filter((file) => {
    const shouldBeIgnored = ignoredFiles.has(extname(file));
    if (shouldBeIgnored) {
      fs.unlinkSync(resolve(tmpDir, file));
    }
    return !shouldBeIgnored;
  });

for (const file of allFiles) {
  let content = fs.readFileSync(resolve(tmpDir, file)).toString();
  content = content.replaceAll(/import '@ui5\/webcomponents(-fiori)?\/dist.+\n/g, '');
  fs.writeFileSync(resolve(tmpDir, file), content);
}
