'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./esm/main.production.min.js');
} else {
  module.exports = require('./esm/main.development.js');
}
