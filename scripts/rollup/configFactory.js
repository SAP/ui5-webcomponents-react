import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import Babel from '@rollup/plugin-babel';
import path from 'path';
import fs from 'fs';
import json from '@rollup/plugin-json';
import micromatch from 'micromatch';
import PATHS from '../../config/paths.js';
import { asyncCopyTo, highlightLog } from '../utils.js';
import replace from '@rollup/plugin-replace';
import glob from 'glob';
import { terser } from 'rollup-plugin-terser';

const { babel } = Babel;

process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const rollupConfigFactory = (pkgName, externals = []) => {
  const PKG_BASE_PATH = path.resolve(PATHS.packages, pkgName);
  const LIB_BASE_PATH = path.resolve(PKG_BASE_PATH, 'src', 'lib');

  const allFilesAndFolders = glob.sync(`${LIB_BASE_PATH}/**/*`);

  const allLibFiles = allFilesAndFolders.filter((file) =>
    fs.statSync(file).isFile()
  );
  const plugins = [
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.jsx', '.ts', '.tsx'],
    }),
    commonjs(),
    json(),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'runtime',
      configFile: path.resolve(PATHS.root, 'babel.config.cjs'),
    }),
    // Turn __DEV__ and process.env checks into constants.
    replace({
      exclude: 'node_modules/**',
      values: {
        __DEV__: 'false',
        'process.env.NODE_ENV': "'production'",
      },
    }),
  ];

  const packageJson = JSON.parse(
    fs.readFileSync(path.resolve(PKG_BASE_PATH, 'package.json'), 'utf8')
  );
  const externalModules = Array.from(
    new Set([
      'react',
      'react-dom',
      'react-jss',
      packageJson.name,
      ...Object.keys(packageJson.dependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {}),
      ...externals,
    ])
  );

  highlightLog(`Build lib folder for ${pkgName}`);

  console.info('Copy License');
  fs.copyFileSync(
    path.resolve(PATHS.root, 'LICENSE'),
    path.resolve(PKG_BASE_PATH, `LICENSE`)
  );

  console.info('Copy index file');
  asyncCopyTo(
    path.resolve(PKG_BASE_PATH, 'src', 'index.ts'),
    path.resolve(PKG_BASE_PATH, `index.esm.js`)
  );

  const external = (id) => {
    const containsThisModule = (pkg) => id === pkg || id.startsWith(pkg + '/');
    return externalModules.some(containsThisModule);
  };
  const treeshake = {
    moduleSideEffects:
      packageJson.sideEffects === false
        ? false
        : (id) => micromatch.isMatch(id, packageJson.sideEffects),
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
            file
              .replace(`${LIB_BASE_PATH}${path.sep}`, '')
              .replace(/\.ts$/, '.js')
          ),
          format: 'es',
          sourcemap: true,
        },
      ],
      plugins,
    })),
    {
      input: path.resolve(PKG_BASE_PATH, 'src', 'index.ts'),
      external,
      treeshake,
      plugins,
      output: [
        {
          file: path.resolve(PKG_BASE_PATH, 'cjs', `${pkgName}.development.js`),
          format: 'cjs',
        },
        {
          file: path.resolve(
            PKG_BASE_PATH,
            'cjs',
            `${pkgName}.production.min.js`
          ),
          format: 'cjs',
          plugins: [terser()],
        },
      ],
    },
  ];
};

export default rollupConfigFactory;
