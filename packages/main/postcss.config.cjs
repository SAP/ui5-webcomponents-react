const fs = require('node:fs');
const path = require('node:path');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const postcssModules = require('postcss-modules');
const postcssNesting = require('postcss-nesting');
const stringHash = require('string-hash');
const postcssCSStoESM = require('../../scripts/postcss-css-to-esm.cjs');

const packageName = JSON.parse(fs.readFileSync('./package.json').toString()).name;

module.exports = {
  plugins: [
    postcssImport(),
    postcssNesting(),
    postcssModules({
      // generateScopedName: '[name]__[local]___[hash:base64:5]',
      generateScopedName: function (name, filename, css) {
        const file = path.basename(filename, '.module.css');
        const i = css.indexOf(`.${name}`);
        const lineNumber = css.substring(0, i).split(/[\r\n]/).length;
        const hash = stringHash(css).toString(36).substring(0, 5);

        return `${file}_${name}_${hash}_${lineNumber}`;
      },
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
