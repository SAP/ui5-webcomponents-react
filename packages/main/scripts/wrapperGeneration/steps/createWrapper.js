const path = require('path');
const chalk = require('chalk');
const fs = require('fs');
const showOptions = require('../showOptions');
const generateTypingStatements = require('../generateTypingStatements');
const PATHS = require('../../../../../config/paths');

const PKG_SRC = path.join(PATHS.packages, 'main', 'src');
const WEB_COMPONENTS_ROOT_DIR = path.join(PKG_SRC, 'webComponents');

async function createWrapperForComponent(dto, options = {}) {
  const componentName = dto.componentName;
  const ui5ComponentName = `UI5${componentName}`;
  const { onlyStopForMerge } = options;

  const folderName = path.resolve(WEB_COMPONENTS_ROOT_DIR, componentName);
  const libFolder = path.resolve(PKG_SRC, 'lib');

  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }

  const tsTypings = generateTypingStatements(dto.typings, dto.componentName);
  const indexPath = path.resolve(folderName, 'index.tsx');

  const jsxContent = ''.concat(
    tsTypings.importStatements,
    `import ${ui5ComponentName} from '@ui5/webcomponents/dist/${componentName}';\n`,
    "import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';",
    '\n\n',
    tsTypings.interfaceStatement,
    '\n\n',
    `const ${componentName}: FC<${tsTypings.interfaceName}> = withWebComponent<${tsTypings.interfaceName}>(${ui5ComponentName});`,
    '\n\n',
    `${componentName}.displayName = '${componentName}';`,
    '\n\n',
    tsTypings.defaultPropsStatement,
    `export { ${componentName} };\n`
  );

  const libContent = `import { ${componentName} } from '../webComponents/${componentName}';
  
  export { ${componentName} };
  
  `;

  if (fs.existsSync(indexPath)) {
    // update interface and defaultProps
    return showOptions(componentName, tsTypings, indexPath, jsxContent, onlyStopForMerge);
  } else {
    fs.writeFileSync(indexPath, jsxContent);
    fs.writeFileSync(path.resolve(libFolder, `${componentName}.ts`), libContent);
    console.log(chalk.green(`Wrapper for ${componentName} created`));
  }
}

module.exports = {
  createWrapperForComponent
};
