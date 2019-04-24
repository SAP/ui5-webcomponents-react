'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/fiori3.production.min.js');
} else {
  module.exports = require('./cjs/fiori3.development.js');
}
