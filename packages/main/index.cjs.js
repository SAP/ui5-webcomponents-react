'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/main.production.min.js');
} else {
  module.exports = require('./cjs/main.development.js');
}
