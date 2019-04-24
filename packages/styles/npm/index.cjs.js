'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/styles.production.min.js');
} else {
  module.exports = require('./cjs/styles.development.js');
}
