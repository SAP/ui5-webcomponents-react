import fs from 'fs';
import prettier from 'prettier';
import prettierConfig from '../../prettier.config.cjs';
// All languages present in the file system
const files = fs.readdirSync('dist/json-imports');

let assets = `import "@ui5/webcomponents/dist/Assets.js";\nimport "@ui5/webcomponents-fiori/dist/Assets.js";`;
let assetsStatic = `import "@ui5/webcomponents/dist/Assets-static.js";\nimport "@ui5/webcomponents-fiori/dist/Assets-static.js";`;

// No i18n - just import dependencies, if any
if (files.length === 0) {
  assets = `import "@ui5/webcomponents/dist/Assets.js";\nimport "@ui5/webcomponents-fiori/dist/Assets.js";`;
  assetsStatic = `import "@ui5/webcomponents/dist/Assets-static.js";\nimport "@ui5/webcomponents-fiori/dist/Assets-static.js";`;
  // There is i18n - generate the full file
} else {
  // Actual imports for json assets
  assets += files
    .filter((file) => !file.includes('-static'))
    .map((key) => `import './json-imports/${key}';`)
    .join('\n');
  assetsStatic += files
    .filter((file) => file.includes('-static'))
    .map((key) => `import './json-imports/${key}';`)
    .join('\n');
}

fs.writeFileSync('dist/Assets.js', prettier.format(assets, { ...prettierConfig, parser: 'babel' }));
fs.writeFileSync('dist/Assets-static.js', prettier.format(assetsStatic, { ...prettierConfig, parser: 'babel' }));
