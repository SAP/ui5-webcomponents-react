import { spawnSync } from 'node:child_process';
import { rename, readdir, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import prettier from 'prettier';
import prettierConfig from '../../../prettier.config.cjs';

const require = createRequire(import.meta.url);

const DIST_DIR = fileURLToPath(new URL('../dist', import.meta.url));
const SRC_I18N_PROPERTIES = fileURLToPath(new URL('../src/i18n', import.meta.url));
const TARGET_I18N_BUNDLES = fileURLToPath(new URL('../dist/assets/i18n', import.meta.url));
const TARGET_I18N_JSON_IMPORTS = fileURLToPath(new URL('../dist/json-imports', import.meta.url));

// generate i18n bundles
spawnSync(
  'node',
  [require.resolve('@ui5/webcomponents-tools/lib/i18n/toJSON.js'), SRC_I18N_PROPERTIES, TARGET_I18N_BUNDLES],
  {
    stdio: [0, 1, 2]
  }
);

// generate JSON Imports for i18n bundles
spawnSync(
  'node',
  [
    require.resolve('@ui5/webcomponents-tools/lib/generate-json-imports/i18n.js'),
    TARGET_I18N_BUNDLES,
    TARGET_I18N_JSON_IMPORTS
  ],
  {
    cwd: new URL('../', import.meta.url),
    stdio: [0, 1, 2]
  }
);

// generate i18n defaults
spawnSync(
  'node',
  [require.resolve('@ui5/webcomponents-tools/lib/i18n/defaults.js'), SRC_I18N_PROPERTIES, SRC_I18N_PROPERTIES],
  {
    stdio: [0, 1, 2]
  }
);

await rename(
  path.resolve(SRC_I18N_PROPERTIES, 'i18n-defaults.js'),
  path.resolve(SRC_I18N_PROPERTIES, 'i18n-defaults.ts')
);

spawnSync('npx', ['prettier', '--write', path.resolve(SRC_I18N_PROPERTIES, 'i18n-defaults.ts')], {
  stdio: [0, 1, 2]
});

// generate Assets.js and Assets-static.js
const jsonImports = await readdir(TARGET_I18N_JSON_IMPORTS);

const assets = [`import '@ui5/webcomponents/dist/Assets.js';`, `import '@ui5/webcomponents-fiori/dist/Assets.js';`];
const assetsStatic = [
  `import '@ui5/webcomponents/dist/Assets-static.js';`,
  `import '@ui5/webcomponents-fiori/dist/Assets-static.js';`
];

for (const file of jsonImports) {
  if (file.includes('-static')) {
    assetsStatic.push(`import './json-imports/${file}';`);
  } else {
    assets.push(`import './json-imports/${file}';`);
  }
}

await writeFile(
  path.resolve(DIST_DIR, 'Assets.js'),
  await prettier.format(assets.join('\n'), { ...prettierConfig, parser: 'babel' })
);
await writeFile(
  path.resolve(DIST_DIR, 'Assets-static.js'),
  await prettier.format(assetsStatic.join('\n'), { ...prettierConfig, parser: 'babel' })
);
