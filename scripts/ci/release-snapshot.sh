#! /bin/bash

ls -l ${GITHUB_WORKSPACE}


exit 1;

${GITHUB_WORKSPACE}/node_modules/.bin/lerna publish prerelease \
  --canary \
  --conventional-prerelease \
  --dist-tag dev \
  --preid dev
