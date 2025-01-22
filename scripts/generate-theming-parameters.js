import { writeFileSync } from 'fs';
import ThemingParameters from '@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/variables.json' with { type: 'json' };
import PATHS from '../config/paths.js';
import path from 'path';
import prettier from 'prettier';
import prettierConfig from '../prettier.config.cjs';

let fileContent = `/* eslint-disable camelcase */

/* 
 * ### WARNING ### 
 * This is an autogenerated file, do not change manually. 
 * In order to recreate this file, please run 'node scripts/generate-theming-parameters.js'
 */

`;

fileContent += 'export const ThemingParameters = {\n';
for (const variable in ThemingParameters.root) {
  fileContent += `  '${variable}': 'var(--${variable})',\n`;
}
fileContent += '}\n';

writeFileSync(
  path.join(PATHS.packages, 'base', 'src', 'styling', 'ThemingParameters.ts'),
  await prettier.format(fileContent, { ...prettierConfig, parser: 'typescript' })
);
