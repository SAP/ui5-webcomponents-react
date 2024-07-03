import fs from 'node:fs';
import { postcssConfigFactory } from '../../config/postcss-config-factory.mjs';

const packageName = JSON.parse(fs.readFileSync('./package.json').toString()).name;

export default postcssConfigFactory(packageName);
