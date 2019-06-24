'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/base.production.min.js');
} else {
  module.exports = require('./cjs/base.development.js');
}
