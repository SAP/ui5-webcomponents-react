#!/usr/bin/env bash

# make sure we are on the master branch
git checkout master

# install dependencies
yarn install --mutex network

# run tests
yarn test

# trigger lerna release and create new storybook
./node_modules/.bin/lerna version \
		--conventional-commits \
		--exact \
        --github-release \
        --yes

# build the project with the new version after lerna version
yarn build

# if we came to that point we are ready for publish

# create npmrc with auth
bash $WORKSPACE/scripts/ci/setup-npm.sh

# now start publishing each package
cd $WORKSPACE/build/node_modules/charts && npm publish --access public
cd $WORKSPACE/build/node_modules/fiori3 && npm publish --access public
cd $WORKSPACE/build/node_modules/styles && npm publish --access public
cd $WORKSPACE/build/node_modules/utils && npm publish --access public

# all packages are now released, clear npm-session
rm ~/.npmrc
