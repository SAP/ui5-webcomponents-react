#!/usr/bin/env node
const shell = require('shelljs');
const { highlightLog } = require('../utils');

module.exports = new Promise((resolve) => {
  if (process.env.UI5_WEBCOMPONENTS_FOR_REACT_RELEASE_BUILD === 'true') {
    highlightLog('Prepare Storybook');

    const storybooksGenerated =
      shell.exec('node_modules/.bin/build-storybook -c packages/docs/.storybook -o .out').code === 0;
    if (!storybooksGenerated) {
      console.error('Generating storybook failed!');
      process.exit(1);
    }
    highlightLog('Deploy Storybook');

    shell.exec('node_modules/.bin/storybook-to-ghpages --ci --existing-output-dir .out');

    highlightLog('Storybooks deployed successfully');
  }
  resolve();
});
