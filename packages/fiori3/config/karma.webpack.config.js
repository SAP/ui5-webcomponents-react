const path = require('path');
const PATHS = require('./paths');

module.exports = function() {
  return {
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      stats: 'errors-only',
      performance: {
        hints: false
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs', '.esm'],
        alias: {
          '@fiori-for-react/styles': path.join(PATHS.packageRoot, 'styles', 'src', 'index.ts'),
          '@fiori-for-react/utils': path.join(PATHS.packageRoot, 'utils', 'src', 'index.ts'),
          '@shared': path.join(PATHS.packageRoot, '..', 'shared')
        }
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: ['/node_modules/'],
            options: {
              transpileOnly: true,
              compilerOptions: {
                emitDeclarationOnly: false
              }
            }
          },
          {
            test: /\.js[x]$/,
            loader: 'babel-loader',
            exclude: {
              test: [/types\/CustomListItem.js/, /test-resources/]
            },
            options: {
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-object-rest-spread'
                // 'require-context-hook'
              ],
              presets: ['@babel/preset-react']
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
            test: /\.less$/,
            loader: 'less-loader' // compiles Less to CSS
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            exclude: {
              test: [/test-resources/]
            }
          },
          {
            test: /\.tsx?/,
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            },
            // Need this since it's supposed to work after the compilation of .ts
            enforce: 'post',
            include: PATHS.src,
            exclude: [/node_modules|\.karma\.tsx?/, /jss.ts/, /stories/, /enums/, /test/]
          }
        ]
      }
    },
    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    }
  };
};
