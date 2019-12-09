const bundleTypes = {
  NODE_DEV: 'NODE_DEV',
  NODE_PROD: 'NODE_PROD',
  NODE_ES: 'NODE_ES'
};

const bundles = [
  {
    label: 'main',
    bundleTypes: [bundleTypes.NODE_DEV, bundleTypes.NODE_PROD],
    entry: 'main',
    externals: ['react', 'react-dom', 'react-jss', '@ui5/webcomponents-react', '@ui5/webcomponents-base', 'react-table']
  },
  {
    label: 'base',
    bundleTypes: [bundleTypes.NODE_DEV, bundleTypes.NODE_PROD],
    entry: 'base',
    externals: ['react', '@ui5/webcomponents-core', '@ui5/webcomponents-react-base']
  },
  {
    label: 'charts',
    bundleTypes: [bundleTypes.NODE_DEV, bundleTypes.NODE_PROD],
    entry: 'charts',
    externals: ['react', 'react-jss', '@ui5/webcomponents', '@ui5/webcomponents-react-charts']
  }
];

// Copied from facebook/react build setup
// Based on deep-freeze by substack (public domain)
function deepFreeze(o) {
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function(prop) {
    if (
      o[prop] !== null &&
      (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
      !Object.isFrozen(o[prop])
    ) {
      deepFreeze(o[prop]);
    }
  });
  return o;
}

// Don't accidentally mutate config as part of the build
deepFreeze(bundles);

module.exports = {
  bundleTypes,
  bundles
};
