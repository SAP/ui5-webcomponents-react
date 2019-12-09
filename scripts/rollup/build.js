const { rollup } = require('rollup');
const stripBanner = require('rollup-plugin-strip-banner');
const babel = require('rollup-plugin-babel');
const prettier = require('rollup-plugin-prettier');
const replace = require('rollup-plugin-replace');
const resolve = require('rollup-plugin-node-resolve');
const closure = require('./plugins/closure-plugin');
const sizes = require('./plugins/sizes-plugin');
const postcss = require('rollup-plugin-postcss');
const stripUnusedImports = require('./plugins/strip-unused-imports');
const Bundles = require('./bundles');
const Stats = require('./stats');
const { asyncCopyTo, asyncRimRaf } = require('../utils');
const codeFrame = require('babel-code-frame');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const Packaging = require('./packaging');
const Modules = require('./modules');
const { createDeclarationFiles } = require('./declarations');

const argv = require('minimist')(process.argv.slice(2));
const forcePrettyOutput = argv.pretty;
const shouldExtractErrors = argv['extract-errors'];

process.env.NODE_ENV = 'production';

// Errors in promises should be fatal.
let loggedErrors = new Set();
process.on('unhandledRejection', (err) => {
  if (loggedErrors.has(err)) {
    // No need to print it twice.
    process.exit(1);
  }
  throw err;
});

const { NODE_DEV, NODE_PROD, NODE_ES } = Bundles.bundleTypes;

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

function getFilename(name, bundleType) {
  // we do this to replace / to -, for react-dom/server
  name = name.replace('/', '-');
  switch (bundleType) {
    case NODE_DEV:
      return `${name}.development.js`;
    case NODE_PROD:
      return `${name}.production.min.js`;
    case NODE_ES:
      return `${name}.js`;
  }
}

function getFormat(bundleType) {
  switch (bundleType) {
    case NODE_DEV:
    case NODE_PROD:
      return `cjs`;
    case NODE_ES:
      return `es`;
  }
}

function isProductionBundleType(bundleType) {
  switch (bundleType) {
    case NODE_DEV:
    case NODE_PROD:
    case NODE_ES:
      return true;
    default:
      throw new Error(`Unknown type: ${bundleType}`);
  }
}

function getPlugins(entry, externals, updateBabelOptions, filename, packageName, bundleType) {
  const isProduction = isProductionBundleType(bundleType);
  const isES6Bundle = bundleType === NODE_ES;
  const shouldStayReadable = forcePrettyOutput;
  return [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    }),
    // Remove license headers from individual modules
    stripBanner({
      exclude: 'node_modules/**/*'
    }),
    // Compile to ES5.
    babel(getBabelConfig(updateBabelOptions, bundleType)),
    // Turn __DEV__ and process.env checks into constants.
    replace({
      exclude: 'node_modules/**',
      values: {
        __DEV__: isProduction ? 'false' : 'true',
        'process.env.NODE_ENV': isProduction ? "'production'" : "'development'"
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
          assume_function_wrapper: true,
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
  return bundle.bundleTypes.indexOf(bundleType) === -1;
}

function getBabelConfig(updateBabelOptions, bundleType, filename) {
  let options = {
    exclude: '/**/node_modules/**',
    presets: ['babel-preset-react-app/prod'],
    plugins: [],
    runtimeHelpers: true,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  };
  if (updateBabelOptions) {
    options = updateBabelOptions(options);
  }

  return options;
}

function getRollupOutputOptions(outputPath, format, globals, bundleType) {
  const isProduction = isProductionBundleType(bundleType);

  return Object.assign(
    {},
    {
      file: outputPath,
      format,
      globals,
      freeze: !isProduction,
      interop: false,
      sourcemap: false
    }
  );
}

async function createBundle(bundle, bundleType) {
  if (shouldSkipBundle(bundle, bundleType)) {
    return;
  }

  const filename = getFilename(bundle.entry, bundleType);
  const logKey = chalk.white.bold(filename) + chalk.dim(` (${bundleType.toLowerCase()})`);
  const format = getFormat(bundleType);
  const packageName = Packaging.getPackageName(bundle.entry);

  let resolvedEntry = path.resolve(__dirname, '..', '..', 'packages', bundle.entry, 'src', 'index.ts'); //require.resolve(bundle.entry);

  const peerGlobals = Modules.getPeerGlobals(bundle.externals, bundleType);
  let externals = Object.keys(peerGlobals);
  const deps = Modules.getDependencies(bundleType, bundle.entry);
  externals = externals.concat(deps);

  const rollupConfig = {
    input: resolvedEntry,
    external(id) {
      const containsThisModule = (pkg) => id === pkg || id.startsWith(pkg + '/');
      const isProvidedByDependency = externals.some(containsThisModule);
      if (isProvidedByDependency) {
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
      bundle.moduleType,
      bundle.modulesToStub
    )
  };
  const mainOutputPath = Packaging.getBundleOutputPaths(bundleType, filename, packageName);
  const rollupOutputOptions = getRollupOutputOptions(mainOutputPath, format, peerGlobals, bundleType);

  console.log(`${chalk.bgYellow.black(' BUILDING ')} ${logKey}`);
  try {
    const result = await rollup(rollupConfig);
    await result.write(rollupOutputOptions);
  } catch (error) {
    console.log(`${chalk.bgRed.black(' OH NOES! ')} ${logKey}\n`);
    handleRollupError(error);
    throw error;
  }
  console.log(`${chalk.bgGreen.black(' COMPLETE ')} ${logKey}\n`);
}

async function buildEverything() {
  // Run them serially for better console output
  // and to avoid any potential race conditions.
  // eslint-disable-next-line no-for-of-loops/no-for-of-loops
  for (const bundle of Bundles.bundles) {
    await createBundle(bundle, NODE_ES);
    await createBundle(bundle, NODE_DEV);
    await createBundle(bundle, NODE_PROD);
    createDeclarationFiles(bundle);
  }

  await Packaging.prepareNpmPackages();

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
