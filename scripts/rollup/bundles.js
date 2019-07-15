const bundleTypes = {
  UMD_DEV: 'UMD_DEV',
  UMD_PROD: 'UMD_PROD',
  NODE_DEV: 'NODE_DEV',
  NODE_PROD: 'NODE_PROD',
  NODE_ES_DEV: 'NODE_ES_DEV',
  NODE_ES_PROD: 'NODE_ES_PROD'
};

const bundles = [
  {
    label: 'main',
    bundleTypes: [bundleTypes.NODE_DEV, bundleTypes.NODE_PROD, bundleTypes.NODE_ES_DEV, bundleTypes.NODE_ES_PROD],
    entry: 'main',
    global: 'FioriForReact',
    externals: [
      'react',
      'react-dom',
      'react-jss',
      '@ui5/webcomponents-base',
      '@ui5/webcomponents-react-base',
      'react-table'
    ]
  },
  {
    label: 'base',
    bundleTypes: [bundleTypes.NODE_DEV, bundleTypes.NODE_PROD, bundleTypes.NODE_ES_DEV, bundleTypes.NODE_ES_PROD],
    entry: 'base',
    global: 'FioriForReactBase',
    externals: ['react']
  },
  {
    label: 'charts',
    bundleTypes: [bundleTypes.NODE_DEV, bundleTypes.NODE_PROD, bundleTypes.NODE_ES_DEV, bundleTypes.NODE_ES_PROD],
    entry: 'charts',
    global: 'FioriForReactCharts',
    externals: ['react', 'react-dom']
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
