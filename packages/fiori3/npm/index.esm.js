'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./esm/fiori3.production.min.js');
} else {
  module.exports = require('./esm/fiori3.development.js');
}
