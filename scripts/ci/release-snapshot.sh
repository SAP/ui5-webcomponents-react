#! /bin/bash

if [ "${TRAVIS_PULL_REQUEST}" != "false" ]
then
    echo "This is a pull request build - skip npm release"
    exit 0
fi

# make sure we are on the master branch
git checkout master

${TRAVIS_BUILD_DIR}/node_modules/.bin/lerna publish prerelease \
  --canary \
  --conventional-prerelease \
  --dist-tag dev \
  --preid dev
