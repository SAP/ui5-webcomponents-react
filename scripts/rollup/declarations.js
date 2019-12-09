const sh = require('shelljs');
const path = require('path');

const createDeclarationFiles = (bundle) => {
  if (sh.test('-e', `packages/${bundle.entry}/tsconfig.json`)) {
    sh.exec(
      `node_modules/.bin/tsc --project packages/${bundle.entry}/tsconfig.json --declaration --declarationMap --emitDeclarationOnly --declarationDir "packages/${bundle.entry}/dts/"`
    );

    sh.exec(`../../node_modules/.bin/api-extractor run --verbose`, {
      cwd: path.resolve('packages', bundle.entry)
    });
  }
};

module.exports = {
  createDeclarationFiles
};
