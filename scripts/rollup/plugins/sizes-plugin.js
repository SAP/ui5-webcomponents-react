/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const gzip = require('gzip-size');

module.exports = function sizes(options) {
  return {
    name: 'scripts/rollup/plugins/sizes-plugin',
    generateBundle(output, bundle) {
      const file = bundle[Object.keys(bundle)[0]];
      const size = Buffer.byteLength(file.code);
      const gzipSize = gzip.sync(file.code);

      options.getSize(size, gzipSize);
    }
  };
};
