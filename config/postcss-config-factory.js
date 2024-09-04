import path from 'node:path';
import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import postcssModules from 'postcss-modules';
import postcssNesting from 'postcss-nesting';
import stringHash from 'string-hash';
import postcssCSStoESM from '../scripts/postcss-css-to-esm.mjs';
import cssLayersPlugin from './layers-plugin.js';

export function postcssConfigFactory(packageName) {
  return {
    plugins: [
      postcssImport(),
      postcssNesting(),
      cssLayersPlugin(),
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
}
