const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const { babel } = require('@rollup/plugin-babel');
const path = require('path');
const fs = require('fs');
const json = require('@rollup/plugin-json');
const micromatch = require('micromatch');
const PATHS = require('../../config/paths');
const { asyncCopyTo, highlightLog } = require('../utils');
const replace = require('@rollup/plugin-replace');
const glob = require('glob');
const { terser } = require('rollup-plugin-terser');
const { spawnSync } = require('child_process');

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const rollupConfigFactory = (pkgName, externals = []) => {
  const PKG_BASE_PATH = path.resolve(PATHS.packages, pkgName);
  const LIB_BASE_PATH = path.resolve(PKG_BASE_PATH, 'src', 'lib');

  const allFilesAndFolders = glob.sync(`${LIB_BASE_PATH}/**/*`);

  const allLibFiles = allFilesAndFolders.filter((file) => fs.statSync(file).isFile());

  const plugins = [
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.jsx', '.ts', '.tsx']
    }),
    commonjs(),
    json(),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'runtime',
      configFile: path.resolve(PATHS.root, 'babel.config.js')
    }),
    // Turn __DEV__ and process.env checks into constants.
    replace({
      exclude: 'node_modules/**',
      values: {
        __DEV__: 'false',
        'process.env.NODE_ENV': "'production'"
      }
    })
  ];

  const packageJson = require(path.resolve(PKG_BASE_PATH, 'package.json'));
  const externalModules = Array.from(
    new Set([
      'react',
      'react-dom',
      'react-jss',
      packageJson.name,
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {}),
      ...externals
    ])
  );

  highlightLog(`Build lib folder for ${pkgName}`);

  console.info('Copy License');
  fs.copyFileSync(path.resolve(PATHS.root, 'LICENSE'), path.resolve(PKG_BASE_PATH, `LICENSE`));

  console.info('Copy index file');
  asyncCopyTo(path.resolve(PKG_BASE_PATH, 'src', 'index.ts'), path.resolve(PKG_BASE_PATH, `index.esm.js`));

  console.info('Create TS Types');
  const tsConfigPath = path.resolve(PKG_BASE_PATH, 'tsconfig.json');
  if (fs.existsSync(tsConfigPath)) {
    spawnSync(
      path.resolve(PATHS.nodeModules, '.bin', 'tsc'),
      [
        '--project',
        tsConfigPath,
        '--declaration',
        '--emitDeclarationOnly',
        '--declarationDir',
        PKG_BASE_PATH,
        '--removeComments',
        'false'
      ],
      { stdio: 'inherit' }
    );
  }

  const external = (id) => {
    const containsThisModule = (pkg) => id === pkg || id.startsWith(pkg + '/');
    return externalModules.some(containsThisModule);
  };
  const treeshake = {
    moduleSideEffects:
      packageJson.sideEffects === false ? false : (id) => micromatch.isMatch(id, packageJson.sideEffects)
  };
  return [
    ...allLibFiles.map((file) => ({
      input: file,
      external,
      treeshake,
      output: [
        {
          file: path.resolve(
            PKG_BASE_PATH,
            'lib',
            file.replace(`${LIB_BASE_PATH}${path.sep}`, '').replace(/\.ts$/, '.js')
          ),
          format: 'es',
          sourcemap: true
        }
      ],
      plugins
    })),
    {
      input: path.resolve(PKG_BASE_PATH, 'src', 'index.ts'),
      external,
      treeshake,
      plugins,
      output: [
        {
          file: path.resolve(PKG_BASE_PATH, 'cjs', `${pkgName}.development.js`),
          format: 'cjs'
        },
        {
          file: path.resolve(PKG_BASE_PATH, 'cjs', `${pkgName}.production.min.js`),
          format: 'cjs',
          plugins: [terser()]
        }
      ]
    }
  ];
};

module.exports = rollupConfigFactory;
