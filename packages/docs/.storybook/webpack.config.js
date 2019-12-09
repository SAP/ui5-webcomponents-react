const { highlightLog } = require('../../../scripts/utils');
const path = require('path');
const PATHS = require('../../../config/paths');
require('dotenv').config({
  path: path.join(PATHS.root, '.env')
});

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

module.exports = ({ config }) => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [[require.resolve('babel-preset-react-app'), { flow: false, typescript: true }]]
        }
      }
    ]
  };

  if (!process.env.SKIP_DOC_GENERATION) {
    highlightLog('Warning: Prop Types Table Generation is active');
    console.log(`
    
This is slowing down your build tremendously. 
If you don't need the prop tables we strongly recommend to turn it off by adding a '.env' file to the root of the project with the following content:
SKIP_DOC_GENERATION=true
    
`);
    tsLoader.use.push({ loader: require.resolve('react-docgen-typescript-loader') });
  }

  config.module.rules.unshift(tsLoader);

  config.module.rules.push(tsLoader, {
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

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    ...config.resolve.alias,
    '@shared': path.join(PATHS.root, 'shared'),
    '@ui5/webcomponents-react/lib': path.join(PATHS.root, 'packages', 'main', 'src', 'lib'),
    '@ui5/webcomponents-react-charts/lib': path.join(PATHS.root, 'packages', 'charts', 'src', 'lib'),
    '@ui5/webcomponents-react-base/lib': path.join(PATHS.root, 'packages', 'base', 'src', 'lib'),
    '@ui5/webcomponents-react-base/polyfill': path.join(PATHS.root, 'packages', 'base', 'npm', 'polyfill')
  };

  return config;
};
