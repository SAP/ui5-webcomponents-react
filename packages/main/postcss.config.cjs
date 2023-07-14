const fs = require('node:fs');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const postcssModules = require('postcss-modules');
const postcssCSStoESM = require('../../scripts/postcss-css-to-esm.cjs');

const packageName = JSON.parse(fs.readFileSync('./package.json').toString()).name;

module.exports = {
  plugins: [
    postcssImport(),
    postcssModules({
      // generateScopedName: '[name]__[local]___[hash:base64:5]',
      getJSON: (cssFileName, json) => {
        return null;
      },
      globalModulePaths: [/\/\w+(?!\.module)\.css$/]
    }),
    cssnano({
      preset: [
        'default',
        {
          mergeLonghand: false, // https://github.com/cssnano/cssnano/issues/675
          mergeRules: false // https://github.com/cssnano/cssnano/issues/730
        }
      ]
    }),
    postcssCSStoESM({ toReplace: 'src', packageName })
  ]
};
