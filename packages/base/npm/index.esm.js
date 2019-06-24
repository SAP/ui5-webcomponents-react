'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./esm/base.production.min.js');
} else {
  module.exports = require('./esm/base.development.js');
}
