'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./esm/styles.production.min.js');
} else {
  module.exports = require('./esm/styles.development.js');
}
