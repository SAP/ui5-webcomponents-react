'use strict';

const { existsSync, readdirSync, unlinkSync } = require('fs');
const Bundles = require('./bundles');
const { asyncCopyTo, asyncExecuteCommand, asyncExtractTar, asyncRimRaf } = require('../utils');

const { UMD_DEV, UMD_PROD, NODE_DEV, NODE_PROD, NODE_ES_DEV, NODE_ES_PROD } = Bundles.bundleTypes;

function getPackageName(name) {
  return name;
}

function getBundleOutputPaths(bundleType, filename, packageName) {
  switch (bundleType) {
    case NODE_DEV:
    case NODE_PROD:
      return [`build/node_modules/${packageName}/cjs/${filename}`];
    case NODE_ES_DEV:
    case NODE_ES_PROD:
      return [`build/node_modules/${packageName}/esm/${filename}`];
    case UMD_DEV:
    case UMD_PROD:
      return [`build/node_modules/${packageName}/umd/${filename}`, `build/dist/${filename}`];
    default:
      throw new Error('Unknown bundle type.');
  }
}

async function prepareNpmPackage(name) {
  await Promise.all([
    asyncCopyTo('LICENSE', `build/node_modules/${name}/LICENSE`),
    asyncCopyTo('NOTICE.txt', `build/node_modules/${name}/NOTICE.txt`),
    asyncCopyTo(`packages/${name}/package.json`, `build/node_modules/${name}/package.json`),
    asyncCopyTo(`packages/${name}/README.md`, `build/node_modules/${name}/README.md`),
    asyncCopyTo(`packages/${name}/npm`, `build/node_modules/${name}`)
  ]);
}

async function prepareNpmPackages() {
  if (!existsSync('build/node_modules')) {
    // We didn't build any npm packages.
    return;
  }
  const builtPackageFolders = readdirSync('build/node_modules').filter((dir) => dir.charAt(0) !== '.');
  await Promise.all(builtPackageFolders.map(prepareNpmPackage));
  // create main lib
  await asyncExecuteCommand(`node_modules/.bin/lerna run postbuild --stream`);
}

module.exports = {
  getPackageName,
  getBundleOutputPaths,
  prepareNpmPackages
};
