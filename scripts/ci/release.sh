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

# trigger lerna release and create new storybook
./node_modules/.bin/lerna version --conventional-graduate

# These steps are only required in case we don't a user with admin privileges
# get the new version number
#RELEASE_VERSION=$(node -p "require('./lerna.json').version")
# get the new version number
#git checkout -b releases/${RELEASE_VERSION}
#git push --set-upstream origin releases/${RELEASE_VERSION}

# build the project with the new version after lerna version
yarn build

# if we came to that point we are ready for publish

# create npmrc with auth
bash ${WORKSPACE}/scripts/ci/setup-npm.sh

# now start publishing each package
cd ${WORKSPACE}/build/node_modules/charts && npm publish --access public
cd ${WORKSPACE}/build/node_modules/main && npm publish --access public
cd ${WORKSPACE}/build/node_modules/base && npm publish --access public


# all packages are now released, clear npm-session
rm ~/.npmrc
