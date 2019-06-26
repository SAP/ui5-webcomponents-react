const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const typescriptPlugin = require('rollup-plugin-typescript');
const jsonPlugin = require('rollup-plugin-json');
const postcss = require('rollup-plugin-postcss');
const typescript = require('typescript');
const path = require('path');
const fs = require('fs');
const pkg = require('./package.json');
const PATHS = require('../../config/paths');

const LIB_BASE_PATH = path.resolve(PATHS.packages, 'main', 'src', 'lib');

const allLibFiles = fs.readdirSync(LIB_BASE_PATH).filter((file) => fs.statSync(`${LIB_BASE_PATH}/${file}`).isFile());

const plugins = [
  typescriptPlugin({
    typescript,
    importHelpers: true,
    declarationDir: path.join(PATHS.root, 'typings')
  }),
  resolve(),
  jsonPlugin(),
  postcss(),
  commonjs({
    namedExports: {
      'react-jss': ['ThemeProvider', 'jss', 'withTheme']
    }
  })
];

const EXTERNAL_MODULE_REGEX = new RegExp(
  `${Object.keys(pkg.dependencies)
    .map((item) => item.replace('/', '/'))
    .join('|')}|react$|react-jss|react-dom$`
);

module.exports = allLibFiles.map((file) => ({
  input: `${LIB_BASE_PATH}/${file}`,
  external: (id) => EXTERNAL_MODULE_REGEX.test(id),
  output: [
    {
      file: path.resolve(PATHS.root, 'build', 'node_modules', 'main', 'lib', file.replace(/\.ts$/, '.js')),
      format: 'es'
    }
  ],
  plugins
}));
