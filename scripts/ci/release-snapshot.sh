#!/bin/bash

git_hash=$(git rev-parse --short "$GITHUB_SHA")

${GITHUB_WORKSPACE}/node_modules/.bin/lerna publish "0.0.0-${git_hash}" \
  --no-push \
  --no-git-tag-version \
  --dist-tag dev \

