require('./parseComponentNames');

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
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      },
      {
        test: [/cldr\/.*\.json$/, /i18n\/.*\.json$/, /\.properties$/],
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[ext]'
        },
        type: 'javascript/auto'
      }
    ]
  }
};
