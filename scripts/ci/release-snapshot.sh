#! /bin/bash

if [ "${TRAVIS_PULL_REQUEST}" != "false" ]
then
    echo "This is a pull request build - skip npm release"
    exit 0
fi

${TRAVIS_BUILD_DIR}/node_modules/.bin/lerna publish --canary \
  --dist-tag dev \
  --preid dev


cd ${TRAVIS_BUILD_DIR}/build/node_modules/charts && npm publish --access public --tag dev
cd ${TRAVIS_BUILD_DIR}/build/node_modules/main && npm publish --access public --tag dev
cd ${TRAVIS_BUILD_DIR}/build/node_modules/base && npm publish --access public --tag dev
