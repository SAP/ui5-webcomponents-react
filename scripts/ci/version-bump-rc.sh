#! /bin/bash

if [ "${TRAVIS_PULL_REQUEST}" != "false" ]
then
    echo "This is a pull request build - skip version bump"
    exit 0
fi

git config --global user.name "ui5-webcomponents-react-bot"

export FIORI_FOR_REACT_SNAPSHOT_BUILD='true'

# trigger lerna release
${TRAVIS_BUILD_DIR}/node_modules/.bin/lerna version prerelease \
        --conventional-prerelease \
        --allow-branch ${TRAVIS_BRANCH} \
        --no-push
