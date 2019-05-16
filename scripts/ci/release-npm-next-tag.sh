#! /bin/bash

#CHANGED_PACKAGES=$(git diff-tree --no-commit-id --name-only -r -m  ${TRAVIS_COMMIT} | \
#    grep -e "^packages/" | \
#    grep -v -e "packages/docs")
#
#if [ -n ${CHANGED_PACKAGES} ]
#then
#    echo "No npm relevant packages changed - skip npm release"
#    exit 0
#fi
#
#if [ "$TRAVIS_PULL_REQUEST" != "false" ]
#then
#    echo "This is a pull request build - skip npm release"
#    exit 0
#fi

TRAVIS_BUILD_DIR=$(pwd)
TRAVIS_BRANCH='ci/snapshot-release'

export FIORI_FOR_REACT_SNAPSHOT_BUILD='true'
RELEASE_VERSION=$(node -p "require('./lerna.json').version")-$(git rev-parse --short HEAD)
# trigger lerna release and create new storybook
./node_modules/.bin/lerna version ${RELEASE_VERSION} \
        --allow-branch ${TRAVIS_BRANCH} \
		--exact \
		--no-push \
		--yes

exit 0

cd ${TRAVIS_BUILD_DIR}/build/node_modules/charts && npm publish --access public --tag next
cd ${TRAVIS_BUILD_DIR}/build/node_modules/fiori3 && npm publish --access public --tag next
cd ${TRAVIS_BUILD_DIR}/build/node_modules/styles && npm publish --access public --tag next
cd ${TRAVIS_BUILD_DIR}/build/node_modules/utils && npm publish --access public --tag next
