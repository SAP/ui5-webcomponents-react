#! /bin/bash

export FIORI_FOR_REACT_SNAPSHOT_BUILD='true'
RELEASE_VERSION=$(node -p "require('./lerna.json').version")-$(git rev-parse --short HEAD)
# trigger lerna release
${TRAVIS_BUILD_DIR}/node_modules/.bin/lerna version ${RELEASE_VERSION} \
        --allow-branch ${TRAVIS_BRANCH} \
		--exact \
		--no-push \
		--yes
