#! /bin/bash

if [ "${TRAVIS_PULL_REQUEST}" != "false" ]
then
    echo "This is a pull request build - skip version bump"
    exit 0
fi

git config --global user.name "ui5-webcomponents-react-bot"

export FIORI_FOR_REACT_SNAPSHOT_BUILD='true'

# trigger lerna release
PACKAGE_VERSION=$(node -p -e "require('./lerna.json').version")
BUILD_GIT_HASH=$(git rev-parse --short HEAD)
${TRAVIS_BUILD_DIR}/node_modules/.bin/lerna version "${PACKAGE_VERSION}-${BUILD_GIT_HASH}" \
        --no-git-tag-version \
        --allow-branch ${TRAVIS_BRANCH} \
        --no-push
