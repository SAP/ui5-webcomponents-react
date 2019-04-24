'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/charts.production.min.js');
} else {
  module.exports = require('./cjs/charts.development.js');
}
