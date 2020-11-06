import rollupConfigFactory from '../../scripts/rollup/configFactory.js';

const config = rollupConfigFactory('charts', ['@ui5/webcomponents', '@ui5/webcomponents-base']);
export default config;
