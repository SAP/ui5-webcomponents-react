'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./esm/charts.production.min.js');
} else {
  module.exports = require('./esm/charts.development.js');
}
