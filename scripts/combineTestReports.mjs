import { spawnSync } from 'node:child_process';
import { copyFileSync, mkdirSync, renameSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT_DIR = fileURLToPath(new URL('../temp', import.meta.url));
const REPORTS_DIR = fileURLToPath(new URL('../temp/reports', import.meta.url));

// create reports dir
mkdirSync(REPORTS_DIR, { recursive: true });

// move cypress and jest coverage reports
copyFileSync(
  new URL('../temp/cypress-coverage/coverage-final.json', import.meta.url),
  join(REPORTS_DIR, 'cypress.json')
);
copyFileSync(new URL('../temp/jest-coverage/coverage-final.json', import.meta.url), join(REPORTS_DIR, 'jest.json'));

if (existsSync(new URL('../temp/web-components-coverage/coverage-final.json', import.meta.url))) {
  copyFileSync(
    new URL('../temp/web-components-coverage/coverage-final.json', import.meta.url),
    join(REPORTS_DIR, 'web-components.json')
  );
}

// merge coverage reports
spawnSync('npx', ['--yes', 'nyc', 'merge', 'reports'], { stdio: [0, 1, 2], cwd: ROOT_DIR });
mkdirSync(join(ROOT_DIR, '.nyc_output'), { recursive: true });
renameSync(join(ROOT_DIR, 'coverage.json'), join(ROOT_DIR, '.nyc_output', 'out.json'));

// create final report
spawnSync(
  'npx',
  [
    '--yes',
    'nyc',
    'report',
    '--reporter',
    'lcov',
    '--reporter',
    'text',
    '--reporter',
    'html',
    '--report-dir',
    'temp/coverage'
  ],
  {
    stdio: [0, 1, 2],
    cwd: ROOT_DIR
  }
);
