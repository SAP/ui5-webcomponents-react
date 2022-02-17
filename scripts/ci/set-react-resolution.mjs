import { writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import pkgJson from '../../package.json' assert { type: 'json' };

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

writeFileSync(pkgJsonPath, JSON.stringify(newPackageJson, undefined, 2));
