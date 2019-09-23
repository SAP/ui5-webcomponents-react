const rollupConfigFactory = require('../../shared/rollup/configFactory');

const config = rollupConfigFactory('charts', [
  'react',
  'react-jss',
  '@ui5/webcomponents',
  '@ui5/webcomponents-react-charts'
]);
module.exports = config;
