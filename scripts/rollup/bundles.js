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
    label: 'core',
    bundleTypes: [bundleTypes.NODE_DEV, bundleTypes.NODE_PROD],
    entry: 'core',
    global: 'Core',
    externals: ['react', '@fiori-for-react/utils', '@fiori-for-react/styles']
  },
  {
    label: 'fiori3',
    bundleTypes: [bundleTypes.NODE_DEV, bundleTypes.NODE_PROD, bundleTypes.NODE_ES_DEV, bundleTypes.NODE_ES_PROD],
    entry: 'fiori3',
    global: 'FioriForReact',
    externals: ['react', 'react-dom', 'react-jss']
  },
  {
    label: 'styles',
    bundleTypes: [bundleTypes.NODE_DEV, bundleTypes.NODE_PROD, bundleTypes.NODE_ES_DEV, bundleTypes.NODE_ES_PROD],
    entry: 'styles',
    global: 'FioriForReactStyles',
    externals: []
  },
  {
    label: 'utils',
    bundleTypes: [bundleTypes.NODE_DEV, bundleTypes.NODE_PROD, bundleTypes.NODE_ES_DEV, bundleTypes.NODE_ES_PROD],
    entry: 'utils',
    global: 'FioriForReactUtils',
    externals: []
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
