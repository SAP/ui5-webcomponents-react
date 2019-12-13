#! /bin/bash

${GITHUB_WORKSPACE}/node_modules/.bin/lerna publish prerelease \
  --canary \
  --conventional-prerelease \
  --dist-tag dev \
  --preid dev
