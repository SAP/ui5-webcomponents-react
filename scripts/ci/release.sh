#!/usr/bin/env bash

# setup git
git config user.email ${GITHUB_EMAIL}
git config user.name ${GITHUB_USER}
git remote set-url origin "https://${GH_TOKEN}@github.com/SAP/ui5-webcomponents-react.git" > /dev/null 2>&1

export UI5_WEBCOMPONENTS_FOR_REACT_RELEASE_BUILD="true"

# make sure we are on the master branch
git checkout master

# install dependencies
yarn install --mutex network

# run tests
yarn test

# build the project with the new version after lerna version
yarn build

# create npmrc with auth
bash ${WORKSPACE}/scripts/ci/setup-npm.sh

# trigger lerna release and create new storybook
${WORKSPACE}/node_modules/.bin/lerna publish patch --conventional-graduate \
  --create-release github

# all packages are now released, clear npm-session
rm ~/.npmrc
