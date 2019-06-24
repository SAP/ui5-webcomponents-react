const fs = require('fs');
const puppeteer = require('puppeteer');
const fileUrl = require('file-url');
const path = require('path');
const chalk = require('chalk');
const generateTypingStatements = require('./generateTypingStatements');
const generateComponentDemos = require('./generateComponentDemos');
const showOptions = require('./showOptions');

let pattern;
let onlyStopForMerge = false;
const queue = [];

process.argv.forEach((val) => {
  if (val.startsWith('-pattern') || val.startsWith('--pattern')) {
    pattern = val.split('=')[1];
  } else if (val.indexOf('onlyStopForMerge') !== -1) {
    onlyStopForMerge = true;
  }
});

async function generateWebComponentWrapper(dto) {
  const componentName = dto.componentName;
  const ui5ComponentName = `UI5${componentName}`;

  const folderName = path.resolve(__dirname, '..', '..', 'src', 'webComponents', componentName);
  const libFolder = path.resolve(__dirname, '..', '..', 'src', 'lib');

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

function executeQueue() {
  const msg = queue.shift();

  if (!msg) {
    return;
  }
  try {
    const dto = JSON.parse(msg.text());
    if (!pattern || dto.componentName.indexOf(pattern) !== -1) {
      generateWebComponentWrapper(dto).then(executeQueue);
      generateComponentDemos(dto);
    } else {
      executeQueue();
    }
  } catch (e) {
    console.error(e.message);
    executeQueue();
  }
}

(async () => {
  const browser = await puppeteer.launch(); //{devtools: true}
  const page = await browser.newPage();
  page.on('console', (msg) => {
    // console.log(msg.text());
    queue.push(msg);
  });
  await page.goto(fileUrl('./scripts/wrapperGeneration/puppeteer.html'));
  // await browser.waitForFunction('false');
  await browser.close().then(executeQueue);
  require('./generateWebComponentTests');
})();
