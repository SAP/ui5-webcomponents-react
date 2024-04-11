// copied from https://github.com/SAP/ui5-webcomponents/blob/main/packages/tools/lib/postcss-css-to-esm/index.js
import versionInfo from '@ui5/webcomponents-base/dist/generated/VersionInfo.js';
import fs from 'node:fs';
import path, { basename } from 'node:path';

// patched version of: import scopeVariables from '@ui5/webcomponents-tools/lib/css-processors/scope-variables.mjs';
function scopeVariables(cssText, packageJSON) {
  const escapeVersion = (version) => 'v' + version?.replaceAll(/[^0-9A-Za-z\-_]/g, '-');
  const versionStr = escapeVersion(packageJSON.version);

  const expr = /(--_?ui5_)([^\,\:\)\s]+)/g;

  return cssText.replaceAll(expr, `$1-${versionStr}$2`);
}

const getTSContent = (targetFile, packageName, css, exportTokens) => {
  const typeImport = `import type { StyleDataCSP } from '@ui5/webcomponents-base/dist/types.js';`;

  // tabs are intentionally mixed to have proper identation in the produced file
  return `${typeImport}
export const styleData: StyleDataCSP = {packageName:'${packageName}',fileName:'${basename(targetFile)}',content:${css}};

export const classNames = ${JSON.stringify(exportTokens)} as const;
`;
};

const proccessCSS = (css) => {
  css = css.replace(/\.sapThemeMeta[\s\S]*?:root/, ':root');
  css = css.replace(/\.background-image.*{.*}/, '');
  css = css.replace(/\.sapContrast[ ]*:root[\s\S]*?}/, '');
  css = css.replace(/--sapFontUrl.*\);?/, '');
  css = scopeVariables(css, versionInfo);
  return JSON.stringify(css);
};

function cssToEsmPostcssPlugin(opts) {
  opts = opts || {};

  const packageName = opts.packageName;
  const toReplace = opts.toReplace;

  return {
    postcssPlugin: 'postcss-css-to-esm',
    OnceExit(root, { result }) {
      const css = proccessCSS(root.toString());
      const { exportTokens } = result.messages.find(
        (message) => message.type === 'export' && message.plugin === 'postcss-modules'
      );

      const targetFile = root.source.input.from
        .replace(`/${toReplace}/`, '/src/')
        .replace(`\\${toReplace}\\`, '\\src\\');
      fs.mkdirSync(path.dirname(targetFile), { recursive: true });

      const filePath = `${targetFile}.ts`;

      // it seems slower to read the old content, but writing the same content with no real changes
      // (as in initial build and then watch mode) will cause an unnecessary dev server refresh
      let oldContent = '';
      if (fs.existsSync(filePath)) {
        oldContent = fs.readFileSync(filePath).toString();
      }

      const content = getTSContent(targetFile, packageName, css, exportTokens);
      if (content !== oldContent) {
        fs.writeFileSync(filePath, content);
      }
    }
  };
}

cssToEsmPostcssPlugin.postcss = true;

export default cssToEsmPostcssPlugin;
