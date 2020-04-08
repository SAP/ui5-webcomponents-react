'use strict';

const { existsSync, readdirSync, unlinkSync } = require('fs');
const Bundles = require('./bundles');
const { asyncCopyTo, asyncExecuteCommand, asyncExtractTar, asyncRimRaf } = require('../utils');

const { NODE_DEV, NODE_PROD } = Bundles.bundleTypes;

function getPackageName(name) {
  return name;
}

function getBundleOutputPaths(bundleType, filename, packageName) {
  switch (bundleType) {
    case NODE_DEV:
    case NODE_PROD:
      return `packages/${packageName}/cjs/${filename}`;
    default:
      throw new Error('Unknown bundle type.');
  }
}

async function prepareNpmPackage(name) {
  await Promise.all([
    asyncCopyTo('LICENSE', `packages/${name}/LICENSE`),
    asyncCopyTo('NOTICE.txt', `packages/${name}/NOTICE.txt`)
  ]);
}

async function prepareNpmPackages() {
  const builtPackageFolders = readdirSync('packages').filter((dir) => dir.charAt(0) !== '.');
  await Promise.all(builtPackageFolders.map(prepareNpmPackage));
}

module.exports = {
  getPackageName,
  getBundleOutputPaths,
  prepareNpmPackages
};
