import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import postcssModules from 'postcss-modules';
import postcssNesting from 'postcss-nesting';
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
        getJSON: () => {
          return null;
        },
        globalModulePaths: [/\/\w+(?!\.module)\.css$/],
      }),
      cssnano({
        preset: [
          'default',
          {
            mergeLonghand: false, // https://github.com/cssnano/cssnano/issues/675
            mergeRules: false, // https://github.com/cssnano/cssnano/issues/730
          },
        ],
      }),
      postcssCSStoESM({ toReplace: 'src', packageName }),
    ],
  };
}
