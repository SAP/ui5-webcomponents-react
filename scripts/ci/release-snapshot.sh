#! /bin/bash

CURRENT_LERNA_VERSION=$(node -p -e "require('./lerna.json').version")
IS_IN_RC_STATUS=$(echo "${CURRENT_LERNA_VERSION}" | awk '/rc\.[0-9]+$/')

if [ ! -z "${IS_IN_RC_STATUS}" ]
then
  echo "Current Version is already in release candidate status. Skipping snapshot release."
  exit 0
fi

${GITHUB_WORKSPACE}/node_modules/.bin/lerna publish prerelease \
  --canary \
  --conventional-prerelease \
  --dist-tag dev \
  --preid dev
