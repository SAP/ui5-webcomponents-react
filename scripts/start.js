#!/usr/bin/env node
const path = require('path');
const PATHS = require('../config/paths');
const { execSync } = require('child_process');

const packageName = process.argv[2];

const workingDirectory = path.resolve(PATHS.root, 'packages', packageName);
try {
  process.chdir(workingDirectory);
  console.log('Switch to directory: ' + process.cwd());
} catch (err) {
  console.log('chdir: ' + err);
  process.exit(1);
}

execSync('yarn start', {
  stdio: [0, 1, 2]
});
