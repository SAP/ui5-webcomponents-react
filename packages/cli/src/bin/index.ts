#!/usr/bin/env node
import { resolve } from 'node:path';
import { parseArgs } from 'node:util';
import * as process from 'process';

const { positionals } = parseArgs({ allowPositionals: true, strict: false });

const [command] = positionals;

switch (command) {
  case 'create-wrappers': {
    const wrapperOptions = {
      packageName: {
        type: 'string' as const
      },
      out: {
        type: 'string' as const,
        short: 'o'
      },
      additionalComponentNote: {
        type: 'string' as const
      }
    };
    const { values } = parseArgs({ options: wrapperOptions, allowPositionals: true });
    const { packageName, out, additionalComponentNote } = values;
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

    const createWrapperModule = await import('../scripts/create-wrappers/main.js');

    const outDir = resolve(process.cwd(), values.out!);
    // eslint-disable-next-line @typescript-eslint/await-thenable
    await createWrapperModule.default(packageName!, outDir, { additionalComponentNote });
    break;
  }

  case 'resolve-cem': {
    const cemOptions = {
      packageName: {
        type: 'string' as const
      },
      out: {
        type: 'string' as const,
        short: 'o'
      }
    };
    const { values } = parseArgs({ options: cemOptions, allowPositionals: true });
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
      Example: ui5-wcr resolve-cem --packageName @ui5/webcomponents --out ./src/components
      
      Please add the missing parameters and try again.
      `);
      process.exit(1);
    }

    const resolveCEM = await import('../scripts/resolve-cem/main.js');
    const outPath = resolve(process.cwd(), out!);
    await resolveCEM.default(packageName!, outPath);
    break;
  }

  case 'codemod': {
    const codemodOptions = {
      transform: {
        type: 'string' as const
      },
      src: {
        type: 'string' as const
      },
      typescript: {
        type: 'boolean' as const,
        default: false
      }
    };
    const { values } = parseArgs({ options: codemodOptions, allowPositionals: true });
    const missingParameters = [];
    if (!values.src) {
      missingParameters.push('--src');
    }
    if (!values.transform) {
      missingParameters.push('--transform');
    }

    if (missingParameters.length > 0) {
      console.error(`
      Missing parameters: ${missingParameters.join(', ')}
      Example: ui5-wcr codemod --src ./src --transform v2 (--typescript)
      
      Please add the missing parameters and try again.
      `);
      process.exit(1);
    }
    const codemod = await import('../scripts/codemod/main.js');
    await codemod.default(values.transform!, values.src!, values.typescript!);
    break;
  }
  default:
    console.warn('Unknown command', command);
    process.exit(1);
}

process.exit(0);
