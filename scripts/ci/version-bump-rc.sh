#! /bin/bash

export FIORI_FOR_REACT_SNAPSHOT_BUILD='true'
git checkout ${TRAVIS_BRANCH}

# create a new version using standard version
${TRAVIS_BUILD_DIR}/node_modules/.bin/standard-version --prerelease rc
PACKAGE_VERSION=$(node -p -e "require('./package.json').version")

# trigger lerna release
${TRAVIS_BUILD_DIR}/node_modules/.bin/lerna version ${PACKAGE_VERSION} \
        --conventional-commits \
        --allow-branch ${TRAVIS_BRANCH} \
		--exact \
		--no-push \
		--yes
