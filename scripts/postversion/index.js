const shell = require('shelljs');
const { highlightLog } = require('../utils');

const postversion = async () => {
  highlightLog('Postversion task');

  await require('./release-storybook');
  highlightLog('Update Changelog');
  shell.exec('node_modules/.bin/lerna-changelog --from=v4.0.0 --write-to-file=CHANGELOG.md');
  shell.exec('git add CHANGELOG.md');
  shell.exec('git add README.md');
  shell.exec('git commit -m "Updated Readme"');
  shell.exec('git push');
  highlightLog('Create GitHub Release');
  require('./create-github-release');
};

postversion();
