const { highlightLog } = require('../scripts/utils');
const path = require('path');
const PATHS = require('../config/paths');
const dedent = require('dedent');
require('dotenv').config({
  path: path.join(PATHS.root, '.env')
});

const IS_RELEASE_BUILD = process.env.UI5_WEBCOMPONENTS_FOR_REACT_RELEASE_BUILD === 'true';
const BUILD_FOR_IE11 = process.env.UI5_WEBCOMPONENTS_FOR_REACT_BUILD_IE11 === 'true';

const DEPENDENCY_REGEX = BUILD_FOR_IE11
  ? /node_modules/
  : /node_modules\/(@ui5\/webcomponents(-(base|core|fiori|icons|theme-base))?|lit-html)\//;

module.exports = {
  stories: ['../docs/**/*.stories.mdx', '../packages/**/*.stories.mdx', '../packages/**/*.stories.[tj]sx'],
  addons: ['@storybook/addon-knobs', '@storybook/addon-docs', '@storybook/addon-actions'],
  webpack: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    const tsLoader = {
      test: /\.tsx?$/,
      include: PATHS.packages,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            envName: 'esm',
            configFile: path.resolve(PATHS.root, 'babel.config.js')
          }
        }
      ]
    };

    if (IS_RELEASE_BUILD) {
      highlightLog('Warning: Prop Types Table Generation is active');
      tsLoader.use.push(require.resolve('react-docgen-typescript-loader'));
    } else {
      highlightLog('Info: Prop Types Table Generation is disabled');
      console.log(dedent`
          The Prop Table Generation is very expensive during build-time and therefore disabled by default. 
          If you need Prop-Tables, you can activate it by adding a '.env' file to the root of the project with the following content:
          
          UI5_WEBCOMPONENTS_FOR_REACT_RELEASE_BUILD=true\n\n 
      `);
    }

    config.module.rules.push(tsLoader);

    if ((IS_RELEASE_BUILD && configType === 'PRODUCTION') || BUILD_FOR_IE11) {
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

    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = {
      ...config.resolve.alias,
      '@shared': path.join(PATHS.root, 'shared'),
      '@ui5/webcomponents-react/dist': path.join(PATHS.root, 'packages', 'main', 'dist'),
      '@ui5/webcomponents-react': path.join(PATHS.root, 'packages', 'main', 'src'),
      '@ui5/webcomponents-react-charts': path.join(PATHS.root, 'packages', 'charts', 'src'),
      '@ui5/webcomponents-react-base/third-party': path.join(PATHS.root, 'packages', 'base', 'third-party'),
      '@ui5/webcomponents-react-base': path.join(PATHS.root, 'packages', 'base', 'src')
    };

    return config;
  }
};
