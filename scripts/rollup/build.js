const { rollup } = require('rollup');
const stripBanner = require('rollup-plugin-strip-banner');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const prettier = require('rollup-plugin-prettier');
const replace = require('rollup-plugin-replace');
const resolve = require('rollup-plugin-node-resolve');
const closure = require('./plugins/closure-plugin');
const sizes = require('./plugins/sizes-plugin');
const typescriptPlugin = require('rollup-plugin-typescript');
const typescript = require('typescript');
const postcss = require('rollup-plugin-postcss');
const stripUnusedImports = require('./plugins/strip-unused-imports');
const Bundles = require('./bundles');
const Stats = require('./stats');
const { asyncCopyTo, asyncRimRaf, highlightLog, asyncExecuteCommand } = require('../utils');
const argv = require('minimist')(process.argv.slice(2));
const codeFrame = require('babel-code-frame');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const Packaging = require('./packaging');
const Modules = require('./modules');
const { createDeclarationFiles } = require('./declarations');
const forcePrettyOutput = argv.pretty;
const shouldExtractErrors = argv['extract-errors'];

// Errors in promises should be fatal.
let loggedErrors = new Set();
process.on('unhandledRejection', (err) => {
  if (loggedErrors.has(err)) {
    // No need to print it twice.
    process.exit(1);
  }
  throw err;
});

const { UMD_DEV, UMD_PROD, NODE_DEV, NODE_PROD, NODE_ES_DEV, NODE_ES_PROD } = Bundles.bundleTypes;

const closureOptions = {
  compilation_level: 'SIMPLE',
  language_in: 'ECMASCRIPT5_STRICT',
  language_out: 'ECMASCRIPT5_STRICT',
  env: 'CUSTOM',
  warning_level: 'QUIET',
  apply_input_source_maps: false,
  use_types_for_optimization: false,
  process_common_js_modules: false,
  rewrite_polyfills: false
};

function handleRollupWarning(warning) {
  if (warning.code === 'UNUSED_EXTERNAL_IMPORT') {
    const match = warning.message.match(/external module '([^']+)'/);
    if (!match || typeof match[1] !== 'string') {
      throw new Error('Could not parse a Rollup warning. ' + 'Fix this method.');
    }
    // Don't warn. We will remove side effectless require() in a later pass.
    return;
  }

  if (typeof warning.code === 'string') {
    // This is a warning coming from Rollup itself.
    // These tend to be important (e.g. clashes in namespaced exports)
    // so we'll fail the build on any of them.
    console.error();
    console.error(warning.message || warning);
    console.error();
    // process.exit(1);
  } else {
    // The warning is from one of the plugins.
    // Maybe it's not important, so just print it.
    console.warn(warning.message || warning);
  }
}

function handleRollupError(error) {
  loggedErrors.add(error);
  if (!error.code) {
    console.error(error);
    return;
  }
  console.error(`\x1b[31m-- ${error.code}${error.plugin ? ` (${error.plugin})` : ''} --`);
  console.error(error.stack);
  if (error.loc && error.loc.file) {
    const { file, line, column } = error.loc;
    // This looks like an error from Rollup, e.g. missing export.
    // We'll use the accurate line numbers provided by Rollup but
    // use Babel code frame because it looks nicer.
    const rawLines = fs.readFileSync(file, 'utf-8');
    // column + 1 is required due to rollup counting column start position from 0
    // whereas babel-code-frame counts from 1
    const frame = codeFrame(rawLines, line, column + 1, {
      highlightCode: true
    });
    console.error(frame);
  } else if (error.codeFrame) {
    // This looks like an error from a plugin (e.g. Babel).
    // In this case we'll resort to displaying the provided code frame
    // because we can't be sure the reported location is accurate.
    console.error(error.codeFrame);
  }
}

function getFilename(name, globalName, bundleType) {
  // we do this to replace / to -, for react-dom/server
  name = name.replace('/', '-');
  switch (bundleType) {
    case UMD_DEV:
      return `${name}.development.js`;
    case UMD_PROD:
      return `${name}.production.min.js`;
    case NODE_DEV:
    case NODE_ES_DEV:
      return `${name}.development.js`;
    case NODE_PROD:
    case NODE_ES_PROD:
      return `${name}.production.min.js`;
  }
}

function getFormat(bundleType) {
  switch (bundleType) {
    case UMD_DEV:
    case UMD_PROD:
      return `umd`;
    case NODE_DEV:
    case NODE_PROD:
      return `cjs`;
    case NODE_ES_DEV:
    case NODE_ES_PROD:
      return `es`;
  }
}

function isProductionBundleType(bundleType) {
  switch (bundleType) {
    case UMD_DEV:
    case NODE_DEV:
    case NODE_ES_DEV:
      return false;
    case UMD_PROD:
    case NODE_PROD:
    case NODE_ES_PROD:
      return true;
    default:
      throw new Error(`Unknown type: ${bundleType}`);
  }
}

function getPlugins(
  entry,
  externals,
  updateBabelOptions,
  filename,
  packageName,
  bundleType,
  globalName,
  moduleType,
  modulesToStub
) {
  const isProduction = isProductionBundleType(bundleType);
  const isUMDBundle = bundleType === UMD_DEV || bundleType === UMD_PROD;
  const isES6Bundle = bundleType === NODE_ES_DEV || bundleType === NODE_ES_PROD;
  const shouldStayReadable = forcePrettyOutput;
  return [
    // Use Node resolution mechanism.
    resolve(),
    // Remove license headers from individual modules
    stripBanner({
      exclude: 'node_modules/**/*'
    }),
    typescriptPlugin({
      typescript,
      importHelpers: true
    }),
    // Compile to ES5.
    babel(getBabelConfig(updateBabelOptions, bundleType)),
    // Remove 'use strict' from individual source files.
    {
      transform(source) {
        return source.replace(/['"]use strict['"']/g, '');
      }
    },
    // Turn __DEV__ and process.env checks into constants.
    replace({
      exclude: 'node_modules/**',
      values: {
        __DEV__: isProduction ? 'false' : 'true',
        __UMD__: isUMDBundle ? 'true' : 'false',
        'process.env.NODE_ENV': isProduction ? "'production'" : "'development'"
      }
    }),
    // We still need CommonJS for external deps like object-assign.
    commonjs({
      namedExports: {
        'react-jss': ['ThemeProvider', 'jss', 'withTheme'],
        'prop-types': ['array', 'arrayOf', 'func', 'number', 'object', 'oneOf', 'oneOfType', 'string']
      }
    }),
    postcss(),
    // Apply dead code elimination and/or minification.
    isProduction &&
      !isES6Bundle &&
      closure(
        Object.assign({}, closureOptions, {
          // Don't let it create global variables in the browser.
          // https://github.com/facebook/react/issues/10909
          assume_function_wrapper: !isUMDBundle,
          // Works because `google-closure-compiler-js` is forked in Yarn lockfile.
          // We can remove this if GCC merges my PR:
          // https://github.com/google/closure-compiler/pull/2707
          // and then the compiled version is released via `google-closure-compiler-js`.
          renaming: !shouldStayReadable
        })
      ),
    // HACK to work around the fact that Rollup isn't removing unused, pure-module imports.
    // Note that this plugin must be called after closure applies DCE.
    isProduction && stripUnusedImports([]),
    // Add the whitespace back if necessary.
    shouldStayReadable && prettier({ parser: 'babylon' }),
    // Record bundle size.
    sizes({
      getSize: (size, gzip) => {
        const currentSizes = Stats.currentBuildResults.bundleSizes;
        const recordIndex = currentSizes.findIndex(
          (record) => record.filename === filename && record.bundleType === bundleType
        );
        const index = recordIndex !== -1 ? recordIndex : currentSizes.length;
        currentSizes[index] = {
          filename,
          bundleType,
          packageName,
          size,
          gzip
        };
      }
    })
  ].filter(Boolean);
}

function shouldSkipBundle(bundle, bundleType) {
  const shouldSkipBundleType = bundle.bundleTypes.indexOf(bundleType) === -1;
  if (shouldSkipBundleType) {
    return true;
  }
  // if (requestedBundleTypes.length > 0) {
  //   const isAskingForDifferentType = requestedBundleTypes.every(
  //     requestedType => bundleType.indexOf(requestedType) === -1
  //   );
  //   if (isAskingForDifferentType) {
  //     return true;
  //   }
  // }
  // if (requestedBundleNames.length > 0) {
  //   const isAskingForDifferentNames = requestedBundleNames.every(
  //     requestedName => bundle.label.indexOf(requestedName) === -1
  //   );
  //   if (isAskingForDifferentNames) {
  //     return true;
  //   }
  // }
  return false;
}

function getBabelConfig(updateBabelOptions, bundleType, filename) {
  let options = {
    exclude: '/**/node_modules/**',
    presets: [],
    plugins: []
  };
  if (updateBabelOptions) {
    options = updateBabelOptions(options);
  }

  switch (bundleType) {
    case UMD_DEV:
    case UMD_PROD:
    case NODE_DEV:
    case NODE_PROD:
    case NODE_ES_DEV:
    case NODE_ES_PROD:
      return Object.assign({}, options, {
        // plugins: options.plugins.concat([
        //   // Use object-assign polyfill in open source
        //   path.resolve('./scripts/babel/transform-object-assign-require'),
        //   // Minify invariant messages
        //   require('../error-codes/replace-invariant-error-codes'),
        //   // Wrap warning() calls in a __DEV__ check so they are stripped from production.
        //   require('../babel/wrap-warning-with-env-check'),
        // ]),
      });
    default:
      return options;
  }
}

function getRollupOutputOptions(outputPath, format, globals, globalName, bundleType) {
  const isProduction = isProductionBundleType(bundleType);

  return Object.assign(
    {},
    {
      file: outputPath,
      format,
      globals,
      freeze: !isProduction,
      interop: false,
      name: globalName,
      sourcemap: false
    }
  );
}

async function createBundle(bundle, bundleType) {
  if (shouldSkipBundle(bundle, bundleType)) {
    return;
  }

  const filename = getFilename(bundle.entry, bundle.global, bundleType);
  const logKey = chalk.white.bold(filename) + chalk.dim(` (${bundleType.toLowerCase()})`);
  const format = getFormat(bundleType);
  const packageName = Packaging.getPackageName(bundle.entry);

  let resolvedEntry = path.resolve(__dirname, '..', '..', 'packages', bundle.entry, 'index.ts'); //require.resolve(bundle.entry);

  const shouldBundleDependencies = bundleType === UMD_DEV || bundleType === UMD_PROD;
  const peerGlobals = Modules.getPeerGlobals(bundle.externals, bundleType);
  let externals = Object.keys(peerGlobals);
  if (!shouldBundleDependencies) {
    const deps = Modules.getDependencies(bundleType, bundle.entry);
    externals = externals.concat(deps);
  }

  const rollupConfig = {
    input: resolvedEntry,
    external(id) {
      const containsThisModule = (pkg) => id === pkg || id.startsWith(pkg + '/');
      const isProvidedByDependency = externals.some(containsThisModule);
      if (!shouldBundleDependencies && isProvidedByDependency) {
        return true;
      }
      return !!peerGlobals[id];
    },
    onwarn: handleRollupWarning,
    plugins: getPlugins(
      bundle.entry,
      externals,
      bundle.babel,
      filename,
      packageName,
      bundleType,
      bundle.global,
      bundle.moduleType,
      bundle.modulesToStub
    )
  };
  const [mainOutputPath, ...otherOutputPaths] = Packaging.getBundleOutputPaths(bundleType, filename, packageName);
  const rollupOutputOptions = getRollupOutputOptions(mainOutputPath, format, peerGlobals, bundle.global, bundleType);

  console.log(`${chalk.bgYellow.black(' BUILDING ')} ${logKey}`);
  try {
    const result = await rollup(rollupConfig);
    await result.write(rollupOutputOptions);
  } catch (error) {
    console.log(`${chalk.bgRed.black(' OH NOES! ')} ${logKey}\n`);
    handleRollupError(error);
    throw error;
  }
  for (let i = 0; i < otherOutputPaths.length; i++) {
    await asyncCopyTo(mainOutputPath, otherOutputPaths[i]);
  }
  console.log(`${chalk.bgGreen.black(' COMPLETE ')} ${logKey}\n`);
}

async function buildEverything() {
  await asyncRimRaf('build');
  await asyncRimRaf('packages/*/npm/**/*.d.ts');

  // highlightLog('Prettier');
  // await asyncExecuteCommand('node scripts/prettier/index.js check');

  // Run them serially for better console output
  // and to avoid any potential race conditions.
  // eslint-disable-next-line no-for-of-loops/no-for-of-loops
  for (const bundle of Bundles.bundles) {
    await createBundle(bundle, UMD_DEV);
    await createBundle(bundle, UMD_PROD);
    await createBundle(bundle, NODE_ES_DEV);
    await createBundle(bundle, NODE_ES_PROD);
    await createBundle(bundle, NODE_DEV);
    await createBundle(bundle, NODE_PROD);
    createDeclarationFiles(bundle);
  }

  // await Packaging.copyAllShims();
  await Packaging.prepareNpmPackages();

  // if (syncFBSourcePath) {
  //   await Sync.syncReactNative(syncFBSourcePath);
  // } else if (syncWWWPath) {
  //   await Sync.syncReactDom('build/facebook-www', syncWWWPath);
  // }

  console.log(Stats.printResults());
  if (!forcePrettyOutput) {
    Stats.saveResults();
  }

  if (shouldExtractErrors) {
    console.warn(
      '\nWarning: this build was created with --extract-errors enabled.\n' +
        'this will result in extremely slow builds and should only be\n' +
        'used when the error map needs to be rebuilt.\n'
    );
  }
}

buildEverything();
