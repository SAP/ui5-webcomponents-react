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
${TRAVIS_BUILD_DIR}/node_modules/.bin/lerna version "${PACKAGE_VERSION}-${TRAVIS_COMMIT}" \
        --no-git-tag-version \
        --no-push
