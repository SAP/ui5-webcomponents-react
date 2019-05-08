#! /bin/bash
if [ "$TRAVIS_PULL_REQUEST" != "false" ];
then
    RELEASE_VERSION=$(node -p "require('./lerna.json').version")-$(git rev-parse --short HEAD)
    cd ${TRAVIS_BUILD_DIR}/build/node_modules/charts && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
    cd ${TRAVIS_BUILD_DIR}/build/node_modules/core && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
    cd ${TRAVIS_BUILD_DIR}/build/node_modules/fiori3 && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
    cd ${TRAVIS_BUILD_DIR}/build/node_modules/styles && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
    cd ${TRAVIS_BUILD_DIR}/build/node_modules/utils && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
fi
