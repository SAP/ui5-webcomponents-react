#!/usr/bin/env bash

# setup git
git config user.email ${GITHUB_EMAIL}
git config user.name ${GITHUB_USER}
git remote set-url origin "https://${GH_TOKEN}@github.com/SAP/ui5-webcomponents-react.git" > /dev/null 2>&1

# make sure we are on the master branch
git checkout rel/0.100.x

# install dependencies
yarn install --mutex network

# run tests
yarn test

# build the project with the new version after lerna version
yarn build

# create npmrc with auth
bash ${WORKSPACE}/scripts/ci/setup-npm.sh

# trigger lerna release and create new storybook
${WORKSPACE}/node_modules/.bin/lerna publish 0.100.0 --conventional-graduate \
  --dist-tag next \
  --pre-dist-tag next

# all packages are now released, clear npm-session
rm ~/.npmrc
