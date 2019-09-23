const bundleTypes = {
  UMD_DEV: 'UMD_DEV',
  UMD_PROD: 'UMD_PROD',
  NODE_DEV: 'NODE_DEV',
  NODE_PROD: 'NODE_PROD',
  NODE_ES: 'NODE_ES'
};

const bundles = [
  {
    label: 'main',
    bundleTypes: [bundleTypes.NODE_DEV, bundleTypes.NODE_PROD, bundleTypes.NODE_ES],
    entry: 'main',
    externals: [
      'react',
      'react-dom',
      'react-jss',
      '@ui5/webcomponents-react',
      '@ui5/webcomponents-base',
      '@ui5/webcomponents-react-base',
      'react-table'
    ]
  },
  {
    label: 'base',
    bundleTypes: [bundleTypes.NODE_DEV, bundleTypes.NODE_PROD, bundleTypes.NODE_ES],
    entry: 'base',
    externals: ['react']
  },
  {
    label: 'charts',
    bundleTypes: [bundleTypes.NODE_DEV, bundleTypes.NODE_PROD, bundleTypes.NODE_ES],
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
