'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./esm/utils.production.min.js');
} else {
  module.exports = require('./esm/utils.development.js');
}
