const fs = require('fs');
const path = require('path');
const dedent = require('dedent');
const prettier = require('prettier');
const PATHS = require('../../../../../config/paths');

const WEB_COMPONENTS_ROOT_DIR = path.join(PATHS.packages, 'main', 'src', 'webComponents');

const UI5_PLAYGROUND_WHITELIST = [
  'Badge',
  'BusyIndicator',
  'Button',
  'Card',
  'CheckBox',
  'DatePicker',
  'Dialog',
  'Icon',
  'Input',
  'Label',
  'Link',
  'List',
  'MessageStrip',
  'MultiComboBox',
  'Panel',
  'RadioButton',
  'Select',
  'ShellBar',
  'Switch',
  'TabContainer',
  'Table',
  'TextArea',
  'Timeline',
  'Title',
  'ToggleButton'
];

function createDocForComponent(dto) {
  const componentName = dto.componentName;

  const docPath = path.resolve(WEB_COMPONENTS_ROOT_DIR, componentName, `${componentName}.md`);

  if (fs.existsSync(docPath)) {
    return;
  }

  const mdContent = dedent`
  ${
    UI5_PLAYGROUND_WHITELIST.includes(componentName)
      ? `[Link to UI5 Web Components Playground](https://sap.github.io/ui5-webcomponents/playground/components/${componentName}/)`
      : ''
  }

  \`\`\`jsx
  import { ${componentName} } from '@ui5/webcomponents-react/lib/${componentName}';
  \`\`\`

  `;

  fs.writeFileSync(docPath, mdContent);
  console.log(`Docs created for component ${componentName}`);
}

module.exports = {
  createDocForComponent
};
