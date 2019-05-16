#! /bin/bash

CHANGED_PACKAGES=$(git diff-tree --no-commit-id --name-only -r -m  ${TRAVIS_COMMIT} | \
    grep -e "^packages/" | \
    grep -v -e "packages/docs")

if [ -n ${CHANGED_PACKAGES} ]
then
    echo "No npm relevant packages changed - skip npm release"
    exit 0
fi

if [ "$TRAVIS_PULL_REQUEST" != "false" ]
then
    echo "This is a pull request build - skip npm release"
    exit 0
fi


RELEASE_VERSION=$(node -p "require('./lerna.json').version")-$(git rev-parse --short HEAD)
cd ${TRAVIS_BUILD_DIR}/build/node_modules/charts && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
cd ${TRAVIS_BUILD_DIR}/build/node_modules/fiori3 && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
cd ${TRAVIS_BUILD_DIR}/build/node_modules/styles && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
cd ${TRAVIS_BUILD_DIR}/build/node_modules/utils && npm version ${RELEASE_VERSION} && npm publish --access public --tag next
