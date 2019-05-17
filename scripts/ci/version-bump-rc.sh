#! /bin/bash

if [ "${TRAVIS_PULL_REQUEST}" != "false" ]
then
    echo "This is a pull request build - skip version bump"
    exit 0
fi

echo "Set Git User Name"
git config --global user.name "ui5-webcomponents-react-bot"

export FIORI_FOR_REACT_SNAPSHOT_BUILD='true'

ls
cat package.json

# create a new version using standard version
echo "Version Bump with standard version"
npm run std-version -- --prerelease rc --no-verify
PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
echo "New Version after bump ${PACKAGE_VERSION}"

# trigger lerna release
${TRAVIS_BUILD_DIR}/node_modules/.bin/lerna version ${PACKAGE_VERSION} \
        --conventional-commits \
        --allow-branch ${TRAVIS_BRANCH} \
		--exact \
		--amend \
		--yes
