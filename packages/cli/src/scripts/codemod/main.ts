import childProcess from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SUPPORTED_TRANSFORMERS = ['v2'];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transformerDir = path.resolve(__dirname, 'transforms');

export default async function runCodemod(transform: string, inputDir: string, useTypeScript: boolean) {
  if (!SUPPORTED_TRANSFORMERS.includes(transform)) {
    // eslint-disable-next-line no-console
    console.error('Invalid transform choice, pick one of:');
    // eslint-disable-next-line no-console
    console.error(SUPPORTED_TRANSFORMERS.map((x) => '- ' + x).join('\n'));
    process.exit(1);
  }

  const jscodeshiftOptions = [];

  const transformerPath = path.join(transformerDir, transform, `main.cjs`);
  jscodeshiftOptions.push(`--transform`, transformerPath);

  if (useTypeScript) {
    jscodeshiftOptions.push('--extensions=tsx,ts,jsx,js');
    jscodeshiftOptions.push('--parser', 'tsx');
  } else {
    jscodeshiftOptions.push('--extensions=jsx,js');
  }

  jscodeshiftOptions.push('--ignore-pattern=**/node_modules/**');

  // eslint-disable-next-line no-console
  console.log(`Executing 'npx jscodeshift ${jscodeshiftOptions.join(' ')} ${inputDir}'`);
  childProcess.spawnSync('npx', ['jscodeshift', ...jscodeshiftOptions, inputDir], {
    stdio: 'inherit'
  });
}
