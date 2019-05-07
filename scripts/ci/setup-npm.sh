#!/bin/bash

set -o nounset
set -o errexit

echo "//registry.npmjs.org/:username=${NPM_USERNAME}" > ~/.npmrc
echo "//registry.npmjs.org/:email=${NPM_EMAIL}" >> ~/.npmrc
echo "//registry.npmjs.org/:_authToken=${$NPM_AUTH_TOKEN}" >> ~/.npmrc

npm whoami
