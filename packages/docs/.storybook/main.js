const { highlightLog } = require('../../../scripts/utils');
const path = require('path');
const PATHS = require('../../../config/paths');
const dedent = require('dedent');
require('dotenv').config({
  path: path.join(PATHS.root, '.env')
});

module.exports = {
  stories: ['../../**/*.stories.mdx', '../../**/*.stories.[tj]sx'],
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
            presets: [[require.resolve('babel-preset-react-app'), { flow: false, typescript: true }]]
          }
        }
      ]
    };

    if (process.env.UI5_WEBCOMPONENTS_FOR_REACT_RELEASE_BUILD === 'true') {
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

    if (process.env.UI5_WEBCOMPONENTS_FOR_REACT_RELEASE_BUILD === 'true' && configType === 'PRODUCTION') {
      config.module.rules.push({
        test: /\.(js|mjs)$/,
        include: /node_modules\/@ui5\/(webcomponents|webcomponents-base)\//,
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          configFile: false,
          compact: false,
          presets: [[require.resolve('babel-preset-react-app/dependencies'), { helpers: true }]],
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
      '@ui5/webcomponents-react': path.join(PATHS.root, 'packages', 'main', 'src'),
      '@ui5/webcomponents-react-charts': path.join(PATHS.root, 'packages', 'charts', 'src'),
      '@ui5/webcomponents-react-base/third-party': path.join(PATHS.root, 'packages', 'base', 'third-party'),
      '@ui5/webcomponents-react-base': path.join(PATHS.root, 'packages', 'base', 'src')
    };

    return config;
  }
};
