import fs from 'fs';
import prettier from 'prettier';
import prettierConfig from '../../prettier.config.cjs';
// All languages present in the file system
const files = fs.readdirSync('dist/json-imports');

let assets;
let assetsStatic;

// No i18n - just import dependencies, if any
if (files.length === 0) {
  assets = ``;
  assetsStatic = ``;
  // There is i18n - generate the full file
} else {
  // Actual imports for json assets
  assets = files
    .filter((file) => !file.includes('-static'))
    .map((key) => `import './json-imports/${key}';`)
    .join('\n');
  assetsStatic = files
    .filter((file) => file.includes('-static'))
    .map((key) => `import './json-imports/${key}';`)
    .join('\n');
}

fs.writeFileSync('dist/Assets.js', prettier.format(assets, { ...prettierConfig, parser: 'babel' }));
fs.writeFileSync('dist/Assets-static.js', prettier.format(assetsStatic, { ...prettierConfig, parser: 'babel' }));
