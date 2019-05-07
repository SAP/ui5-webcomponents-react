#! /bin/bash
RELEASE_VERSION=$(node -p "require('./lerna.json').version")-$(git rev-parse --short HEAD)
cd build/node_modules/charts && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
cd build/node_modules/core && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
cd build/node_modules/fiori3 && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
cd build/node_modules/styles && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
cd build/node_modules/utils && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
