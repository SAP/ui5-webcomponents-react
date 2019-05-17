#! /bin/bash

set -e

if [ "${TRAVIS_PULL_REQUEST}" != "false" ]
then
    echo "This is a pull request build - skip version bump"
    exit 0
fi

#if [ "${TRAVIS_BRANCH}" != "master" ]
#then
#    echo "This is a not on the master branch - skip version bump"
#    exit 0
#fi


echo "Set Git User Name"
git config --global user.name "ui5-webcomponents-react-bot"

export FIORI_FOR_REACT_SNAPSHOT_BUILD='true'
git checkout ${TRAVIS_BRANCH}

# create a new version using standard version
echo "Version Bump with standard version"
${TRAVIS_BUILD_DIR}/node_modules/.bin/standard-version --prerelease rc --no-verify
PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
echo "New Version after bump ${PACKAGE_VERSION}"

# trigger lerna release
${TRAVIS_BUILD_DIR}/node_modules/.bin/lerna version ${PACKAGE_VERSION} \
        --conventional-commits \
        --allow-branch ${TRAVIS_BRANCH} \
		--exact \
		--amend \
		--yes
