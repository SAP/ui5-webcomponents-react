const path = require('path');

const root = path.resolve(__dirname, '..');
require('dotenv').config({
  path: path.join(root, '.env')
});

const BUILD_FOR_IE11 = process.env.UI5_WEBCOMPONENTS_FOR_REACT_BUILD_IE11 === 'true';

const DEPENDENCY_REGEX = BUILD_FOR_IE11
  ? /node_modules/
  : /node_modules\/(@ui5\/webcomponents(-(base|core|fiori|icons|theme-base))?|lit-html)\//;

module.exports = {
  stories: ['../docs/**/*.stories.mdx', '../packages/**/*.stories.@(tsx|jsx|mdx)'],
  addons: [
    '@storybook/addon-toolbars',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions'
  ],
  webpack: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules.push({
      test: /assets\/.*\.json$/,
      use: 'file-loader',
      type: 'javascript/auto'
    });

    if (configType === 'PRODUCTION' || BUILD_FOR_IE11) {
      config.module.rules.push({
        test: /\.(js|mjs)$/,
        include: DEPENDENCY_REGEX,
        loader: 'babel-loader',
        options: {
          sourceType: 'unambiguous',
          babelrc: false,
          configFile: false,
          compact: false,
          presets: [
            [
              '@babel/preset-env',
              {
                // Allow importing core-js in entrypoint and use browserlist to select polyfills
                useBuiltIns: 'entry',
                // Set the corejs version we are using to avoid warnings in console
                // This will need to change once we upgrade to corejs@3
                corejs: 3,
                // Do not transform modules to CJS
                modules: false,
                // Exclude transforms that make all code slower
                exclude: ['transform-typeof-symbol']
              }
            ]
          ],
          plugins: [
            [
              '@babel/plugin-transform-runtime',
              {
                version: require('@babel/runtime/package.json').version,
                useESModules: true
              }
            ]
          ],
          cacheDirectory: true,
          cacheCompression: false,

          // If an error happens in a package, it's possible to be
          // because it was compiled. Thus, we don't want the browser
          // debugger to show the original code. Instead, the code
          // being evaluated would be much more helpful.
          sourceMaps: false
        }
      });
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@shared': path.join(root, 'shared'),
      '@ui5/webcomponents-react/dist': path.join(root, 'packages', 'main', 'dist'),
      '@ui5/webcomponents-react': path.join(root, 'packages', 'main', 'src'),
      '@ui5/webcomponents-react-charts': path.join(root, 'packages', 'charts', 'src'),
      '@ui5/webcomponents-react-base/types': path.join(root, 'packages', 'base', 'types'),
      '@ui5/webcomponents-react-base': path.join(root, 'packages', 'base', 'src')
    };

    return config;
  }
};
