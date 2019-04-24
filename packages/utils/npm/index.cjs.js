'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/utils.production.min.js');
} else {
  module.exports = require('./cjs/utils.development.js');
}
