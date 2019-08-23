const PATHS = require('../config/paths');
const path = require('path');

const tsLoader = {
  test: /\.[tj]sx?$/,
  use: [
    {
      loader: require.resolve('babel-loader'),
      options: {
        presets: [[require.resolve('babel-preset-react-app'), { flow: false, typescript: true }]]
      }
    }
  ]
};

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [
      tsLoader,
      {
        test: /\.png$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: {
          test: [/test-resources/]
        }
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs', '.esm'],
    alias: {
      '@ui5/webcomponents-react/lib': path.join(PATHS.root, 'packages', 'main', 'src', 'lib')
    }
  }
};
