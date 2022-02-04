import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import PATHS from '../config/paths.js';

// clean the output
spawnSync('npm', ['run', 'clean'], { stdio: [0, 1, 2] });

// build base package
const baseResult = spawnSync('npm', ['run', 'build'], {
  stdio: [0, 1, 2],
  cwd: join(PATHS.packages, 'base')
});

if (baseResult.status !== 0) {
  console.error(`Build failed for 'base' package`);
  process.exit(baseResult.status);
}

// build main package
const mainResult = spawnSync('npm', ['run', 'build'], {
  stdio: [0, 1, 2],
  cwd: join(PATHS.packages, 'main')
});

if (mainResult.status !== 0) {
  console.error(`Build failed for 'main' package`);
  process.exit(mainResult.status);
}

// build charts package
const chartResult = spawnSync('npm', ['run', 'build'], {
  stdio: [0, 1, 2],
  cwd: join(PATHS.packages, 'charts')
});

if (chartResult.status !== 0) {
  console.error(`Build failed for 'charts' package`);
  process.exit(chartResult.status);
}

process.exit(0);
