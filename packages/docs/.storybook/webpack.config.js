const { highlightLog } = require('../../../scripts/utils');
const path = require('path');
const PATHS = require('../../../config/paths');
require('dotenv').config({
  path: path.join(PATHS.root, '.env')
});

module.exports = ({ config }) => {
  const tsLoader = {
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
        options: {
          errorsAsWarnings: true
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
    tsLoader.use.push({ loader: require.resolve('./styleInfoLoader.js') });
    tsLoader.use.push({ loader: require.resolve('react-docgen-typescript-loader') });
  }
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        tsLoader,
        {
          test: [/cldr\/.*\.json$/, /i18n\/.*\.json$/],
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]'
          },
          type: 'javascript/auto'
        },
        {
          test: /\.properties$/,
          use: 'file-loader'
        }
      ]
    },
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, '.ts', '.tsx', '.jsx'],
      alias: {
        ...config.resolve.alias,
        '@shared': path.join(PATHS.root, 'shared'),
        '@ui5-webcomponents-react/fiori3': path.join(PATHS.root, 'packages', 'fiori3', 'src', 'index.ts'),
        '@ui5-webcomponents-react/charts': path.join(PATHS.root, 'packages', 'charts', 'src', 'index.ts'),
        '@ui5-webcomponents-react/base': path.join(PATHS.root, 'packages', 'base', 'src', 'index.ts')
      }
    }
  };
};
