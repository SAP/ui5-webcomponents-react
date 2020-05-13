const rollupConfigFactory = require('../../scripts/rollup/configFactory');

const config = rollupConfigFactory('charts', ['@ui5/webcomponents', '@ui5/webcomponents-base', 'lodash', 'classnames']);
module.exports = config;
