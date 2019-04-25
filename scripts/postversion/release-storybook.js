#!/usr/bin/env node
const shell = require('shelljs');
const { highlightLog } = require('../utils');

module.exports = new Promise((resolve) => {
  highlightLog('Prepare Storybook');

  const storybooksGenerated =
    shell.exec('node_modules/.bin/build-storybook -c packages/docs/.storybook -o .out').code === 0;
  if (!storybooksGenerated) {
    console.error('Generating storybook failed!');
    process.exit(1);
  }
  highlightLog('Deploy Storybook');

  shell.exec('node_modules/.bin/storybook-to-ghpages --existing-output-dir .out');

  highlightLog('Storybooks deployed successfully');
  resolve();
});
