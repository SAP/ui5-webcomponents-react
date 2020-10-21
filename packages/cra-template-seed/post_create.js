const fs = require('fs');

const PACKAGE_FILE = 'package.json';
const UTF_8 = 'utf-8';

const husky = {
  husky: {
    hooks: {
      'pre-push': 'npm run push:pre',
      'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
      'prepare-commit-msg': 'exec < /dev/tty && true',
    },
  },
};

const DEV_DEPENDENCIES = [
  '@babel/plugin-proposal-class-properties',
  '@commitlint/cli',
  '@commitlint/config-conventional',
  '@testing-library/jest-dom',
  '@testing-library/react',
  '@testing-library/user-event',
  '@types/jest',
  'env-cmd',
  'eslint-config-prettier',
  'eslint-plugin-prettier',
  'husky',
  'jest-environment-jsdom-sixteen',
  'json-server',
  'msw',
  'nodemon',
  'npm-run-all',
  'prettier',
];

const deleteThisScript = () => {
  console.log('\nAuto deleting this script');
  fs.unlink('post_create.js', (err) => {
    if (err) throw err;
  });
};

const moveDevDependencies = (oldContent, devDependencies = {}) => {
  for (let dependency in oldContent.dependencies) {
    if (DEV_DEPENDENCIES.includes(dependency)) {
      console.log(`Moving ${dependency} to devDependencies`);
      devDependencies[dependency] = oldContent.dependencies[dependency];
      delete oldContent.dependencies[dependency];
    }
  }
  return devDependencies;
};

fs.readFile(PACKAGE_FILE, UTF_8, (err, data) => {
  if (err) throw err;

  const oldContent = JSON.parse(data);
  if (oldContent.husky && oldContent.devDependencies) {
    console.log(`Your ${PACKAGE_FILE} is already correct.`);
    deleteThisScript();
    return;
  }

  const devDependencies = moveDevDependencies(oldContent);

  console.log(`\nAdding husky and devDependencies to new ${PACKAGE_FILE}`);
  const newContent = { ...oldContent, husky, devDependencies };
  const newFileContent = JSON.stringify(newContent, null, 2);

  console.log(`\nWriting ${PACKAGE_FILE} to disk`);
  fs.writeFile(PACKAGE_FILE, newFileContent, UTF_8, (err) => {
    if (err) throw err;
    deleteThisScript();
  });
});
