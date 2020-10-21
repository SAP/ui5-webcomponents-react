import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync } from 'fs';
import pkgJson from '../../package.json';
import prettier from 'prettier';
import prettierConfig from '../../prettier.config.js';

const [reactVersion] = process.argv.slice(2);

const __dirname = dirname(fileURLToPath(import.meta.url));

const newPackageJson = {
  ...pkgJson,
  resolutions: {
    ...pkgJson.resolutions,
    react: `${reactVersion}`,
    'react-dom': `${reactVersion}`
  }
};

const pkgJsonPath = resolve(__dirname, '..', '..', 'package.json');

writeFileSync(pkgJsonPath, prettier.format(JSON.stringify(newPackageJson), { ...prettierConfig, parser: 'json' }));
