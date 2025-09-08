import { spawnSync } from 'node:child_process';
import { rename, readdir, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
// eslint-disable-next-line import/default
import prettier from 'prettier';
import prettierConfig from '../../../prettier.config.js';

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
    stdio: [0, 1, 2],
  },
);

// generate JSON Imports for i18n bundles
spawnSync(
  'node',
  [
    require.resolve('@ui5/webcomponents-tools/lib/generate-json-imports/i18n.js'),
    TARGET_I18N_BUNDLES,
    TARGET_I18N_JSON_IMPORTS,
  ],
  {
    cwd: new URL('../', import.meta.url),
    stdio: [0, 1, 2],
  },
);

// generate i18n defaults
spawnSync(
  'node',
  [require.resolve('@ui5/webcomponents-tools/lib/i18n/defaults.js'), SRC_I18N_PROPERTIES, SRC_I18N_PROPERTIES],
  {
    stdio: [0, 1, 2],
  },
);

await rename(
  path.resolve(SRC_I18N_PROPERTIES, 'i18n-defaults.js'),
  path.resolve(SRC_I18N_PROPERTIES, 'i18n-defaults.ts'),
);

spawnSync('npx', ['prettier', '--write', path.resolve(SRC_I18N_PROPERTIES, 'i18n-defaults.ts')], {
  stdio: [0, 1, 2],
});

// generate Assets.js and Assets-fetch.js
const jsonImports = await readdir(TARGET_I18N_JSON_IMPORTS);

// todo: Next.js does not support top level await
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createDynamicFioriAssetsImport(suffix) {
  return `try {
  await import('@ui5/webcomponents-fiori/dist/Assets${suffix}.js');
} catch {
  console.warn("Skipped '@ui5/webcomponents-fiori/dist/Assets${suffix}.js' import!")
}`;
}

function createFioriAssetsImport(suffix) {
  return `import '@ui5/webcomponents-fiori/dist/Assets${suffix}.js';`;
}

const assets = [`import '@ui5/webcomponents/dist/Assets.js';`, createFioriAssetsImport('')];
const assetsFetch = [`import '@ui5/webcomponents/dist/Assets-fetch.js';`, createFioriAssetsImport('-fetch')];
const assetsNode = [`import '@ui5/webcomponents/dist/Assets-node.js';`, createFioriAssetsImport('-node')];

for (const file of jsonImports) {
  if (file.includes('-fetch')) {
    assetsFetch.push(`import './json-imports/${file}';`);
  } else if (file.includes('-node')) {
    assetsNode.push(`import './json-imports/${file}';`);
  } else {
    assets.push(`import './json-imports/${file}';`);
  }
}

await writeFile(
  path.resolve(DIST_DIR, 'Assets.js'),
  await prettier.format(assets.join('\n'), { ...prettierConfig, parser: 'babel' }),
);

await writeFile(
  path.resolve(DIST_DIR, 'Assets-fetch.js'),
  await prettier.format(assetsFetch.join('\n'), { ...prettierConfig, parser: 'babel' }),
);

await writeFile(
  path.resolve(DIST_DIR, 'Assets-node.js'),
  await prettier.format(assetsNode.join('\n'), { ...prettierConfig, parser: 'babel' }),
);
