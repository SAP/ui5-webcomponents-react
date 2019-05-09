require('./parseComponentNames');
const PATHS = require('../../../../config/paths');
const path = require('path');
const rimraf = require('rimraf');

// TODO Maybe we can remove this with the next update
// DELETE EVIL FILES
const evilFiles = [path.join(PATHS.nodeModules, '@ui5', 'webcomponents', 'dist', 'webcomponentsjs')];

evilFiles.forEach((file) => rimraf.sync(file));

module.exports = {
  entry: __dirname + '/puppeteerScript.js',
  output: {
    path: __dirname + '/dist',
    filename: 'build.js'
  },
  mode: 'development',
  bail: true,
  externals: {
    qunit: 'qunit'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: {
          test: [/types\/CustomListItem.js/, /test-resources/, /entrypoints/]
        },
        options: {
          plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-object-rest-spread']
        }
      },
      {
        test: /\.properties$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: {
          test: [/test-resources/]
        }
      }
    ]
  }
};
