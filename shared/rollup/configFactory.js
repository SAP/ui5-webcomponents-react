const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const typescriptPlugin = require('rollup-plugin-typescript');
const jsonPlugin = require('rollup-plugin-json');
const postcss = require('rollup-plugin-postcss');
const typescript = require('typescript');
const path = require('path');
const fs = require('fs');
const PATHS = require('../../config/paths');

const rollupConfigFactory = (pkgName) => {
  const LIB_BASE_PATH = path.resolve(PATHS.packages, pkgName, 'src', 'lib');

  const allLibFiles = fs.readdirSync(LIB_BASE_PATH).filter((file) => fs.statSync(`${LIB_BASE_PATH}/${file}`).isFile());

  const plugins = [
    typescriptPlugin({
      typescript,
      tsconfig: path.resolve(PATHS.root, 'tsconfig.json'),
      importHelpers: true
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

  const pkg = require(path.resolve(PATHS.packages, pkgName, 'package.json'));
  const EXTERNAL_MODULE_REGEX = new RegExp(
    `${Object.keys(pkg.dependencies)
      .map((item) => item.replace('/', '/'))
      .join('|')}|react$|react-jss|react-dom$`
  );

  return allLibFiles.map((file) => ({
    input: `${LIB_BASE_PATH}/${file}`,
    external: (id) => EXTERNAL_MODULE_REGEX.test(id),
    output: [
      {
        file: path.resolve(PATHS.build, 'node_modules', pkgName, 'lib', file.replace(/\.ts$/, '.js')),
        format: 'es',
        sourcemap: true
      }
    ],
    plugins
  }));
};

module.exports = rollupConfigFactory;
