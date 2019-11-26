const rollupConfigFactory = require('../../shared/rollup/configFactory');

const config = rollupConfigFactory('base', ['@ui5/webcomponents-core']);
module.exports = config;
