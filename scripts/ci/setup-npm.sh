#!/bin/bash

set -o nounset
set -o errexit

if [ "$TRAVIS_PULL_REQUEST" != "false" ];
then
    echo "//registry.npmjs.org/:username=${NPM_USERNAME}" > ~/.npmrc
    echo "//registry.npmjs.org/:email=${NPM_EMAIL}" >> ~/.npmrc
    echo "//registry.npmjs.org/:_authToken=${NPM_AUTH_TOKEN}" >> ~/.npmrc
    npm whoami
fi
