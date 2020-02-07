#! /bin/bash

# reset potential changes in sizes
git checkout scripts/rollup/results.json

${GITHUB_WORKSPACE}/node_modules/.bin/lerna publish prerelease \
  --canary \
  --conventional-prerelease \
  --dist-tag dev \
  --preid dev
