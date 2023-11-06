#!/usr/bin/env node
import { resolve } from 'node:path';
import { parseArgs } from 'node:util';
import * as process from 'process';

const options = {
  packageName: {
    type: 'string' as const
  },
  out: {
    type: 'string' as const,
    short: 'o'
  }
};
const { values, positionals } = parseArgs({ options, allowPositionals: true });

const [command] = positionals;

console.log(command);

switch (command) {
  case 'create-wrappers':
    const { packageName, out } = values;
    const missingParameters = [];
    if (!packageName) {
      missingParameters.push('--packageName');
    }
    if (!out) {
      missingParameters.push('--out');
    }

    if (missingParameters.length > 0) {
      console.error(`
      Missing parameters: ${missingParameters.join(', ')}
      Example: ui5-wcr create-wrappers --packageName @ui5/webcomponents --out ./src/components
      
      Please add the missing parameters and try again.
      `);
      process.exit(1);
    }

    const createWrapperModule = await import('../scripts/createWrappers.js');

    const outDir = resolve(process.cwd(), values.out!);
    // eslint-disable-next-line @typescript-eslint/await-thenable
    await createWrapperModule.default(packageName!, outDir);
    process.exit(0);
    break;
  default:
    console.warn('Unknown command', command);
    process.exit(1);
}
