const rollupConfigFactory = require('../../shared/rollup/configFactory');

const config = rollupConfigFactory('base', ['@ui5/webcomponents-base']);
module.exports = config;
