const { highlightLog } = require('../../../scripts/utils');
const path = require('path');
const PATHS = require('../../../config/paths');
require('dotenv').config({
  path: path.join(PATHS.root, '.env')
});

module.exports = ({ config }) => {
  const tsLoaders = [
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('ts-loader'),
      options: {
        compilerOptions: {
          emitDeclarationOnly: false
        }
      }
    }
  ];

  if (!process.env.SKIP_DOC_GENERATION) {
    highlightLog('Warning: Prop Types Table Generation is active');
    console.log(`
    
This is slowing down your build tremendously. 
If you don't need the prop tables we strongly recommend to turn it off by adding a '.env' file to the root of the project with the following content:
SKIP_DOC_GENERATION=true
    
`);

    tsLoaders.push({
      test: /\.(ts|tsx)$/,
      use: [require.resolve('./styleInfoLoader.js'), require.resolve('react-docgen-typescript-loader')]
    });
  } else {
  }
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        ...tsLoaders,
        {
          test: /\.jsx/,
          exclude: /node_modules/,
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('@babel/preset-env'), require.resolve('@babel/preset-react')],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          }
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
        '@shared': path.join(PATHS.root, 'shared')
      }
    }
  };
};
