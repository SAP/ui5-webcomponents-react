import glob from 'glob';
import fs from 'node:fs';
import { extname, resolve } from 'node:path';
import { rimrafSync } from 'rimraf';
import PATHS from '../config/paths.js';

const mainPackage = resolve(PATHS.packages, 'main');

const tmpDir = resolve(mainPackage, 'tmp');
const ignoredFiles = new Set(['.md', '.mdx', '.snap']);

rimrafSync(tmpDir);

// copy full src dir
fs.cpSync(resolve(mainPackage, 'src'), tmpDir, { recursive: true });

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
