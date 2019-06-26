const fs = require('fs');
const path = require('path');

const COMPONENT_DEMO_BLACKLIST = [
  'CalendarHeader',
  'CustomListItem',
  'DayPicker',
  'GroupHeaderListItem',
  'ListItem',
  'ListItemBase',
  'MonthPicker',
  'Popup',
  'ShellBarItem',
  'StandardListItem',
  'Tab',
  'TabBase',
  'TableCell',
  'TableColumn',
  'TableRow',
  'TabSeparator',
  'TimelineItem',
  'YearPicker'
];

function checkForDefaultProp(meta, alt) {
  return meta.hasOwnProperty('defaultProp') ? meta.defaultProp : alt;
}

const knownNumbers = {
  timestamp: +new Date()
};

function getKnownNumber(key, meta) {
  const knownNumber = knownNumbers[key];
  return knownNumber ? knownNumber : checkForDefaultProp(meta, 42);
}

const knownStrings = {
  icon: "'sap-icon://add'"
};

function getStringValue(key, meta) {
  const knownString = knownStrings[key];
  return knownString ? knownString : checkForDefaultProp(meta, "'generatedString'");
}

function buildPropWithKnob(knob, meta, key, alt) {
  return `${knob}('${key}', ${checkForDefaultProp(meta, alt)})`;
}

function generateComponentDemos(dto) {
  const componentName = dto.componentName;

  if (COMPONENT_DEMO_BLACKLIST.includes(componentName)) {
    console.warn(`Skip demo generation for ${componentName} because it is blacklisted.`);
    return;
  }

  const srcFolder = path.resolve(__dirname, '..', '..', 'src');
  const folderName = path.resolve(srcFolder, 'webComponents', componentName);
  const demoPath = path.resolve(folderName, 'demo.stories.tsx');

  if (fs.existsSync(demoPath)) {
    return;
  }

  const storyBookImports = {};
  const imports = {};
  const props = {};

  function getPropValue(key, meta) {
    if (meta.tsType === 'boolean') {
      storyBookImports['boolean'] = true;
      return buildPropWithKnob('boolean', meta, key, false);
    } else if (meta.tsType === 'number') {
      return '42';
    } else if (meta.tsType === 'string') {
      return getStringValue(key, meta);
    } else if (meta.isEnum) {
      storyBookImports['select'] = true;
      return `select('${key}', ${meta.tsType}, ${checkForDefaultProp(meta, 'null')})`;
    } else {
      return 'null';
    }
  }

  Object.entries(dto.typings).forEach(([key, meta]) => {
    let propStatement = '';
    if (key === 'children') {
      if (meta.tsType === 'string') {
        propStatement = 'Some Content';
      } else {
        propStatement = 'null';
      }
    } else {
      propStatement += `\t\t${key}={`;
      let valueString = meta.multiple ? '[' : '';

      valueString += getPropValue(key, meta);

      if (meta.importStatement) {
        imports[meta.importStatement] = true;
      }
      valueString += meta.multiple ? ']' : '';
      propStatement += valueString;
      propStatement += '}\n';
    }
    props[key] = propStatement;
  });

  const hasProps = !!Object.keys(props).filter((prop) => !prop.children);
  const hasChildren = !!props.children;

  const storyBookImportStatement =
    Object.keys(storyBookImports).length > 0
      ? `\nimport { ${Object.keys(storyBookImports).join(', ')} } from '@storybook/addon-knobs'\n`
      : '';

  const tsxContent = ''.concat(
    "import React from 'react';\n",
    "import { storiesOf } from '@storybook/react';\n",
    Object.keys(imports).join(''),
    storyBookImportStatement,
    `import { ${componentName} } from './index';\n\n`,
    `storiesOf('UI5 Web Components | ${componentName}', module)\n`,
    "\t.add('Generated default story', () => (\n",
    `\t<${componentName}${hasProps ? '\n' : hasChildren ? ' />' : '>'}`,
    Object.entries(props)
      .map(([key, string]) => (key === 'children' ? '' : string))
      .join(''),
    hasProps ? (hasChildren ? '\t>\n' : '\t/>\n') : '',
    hasChildren ? `\t\t${props.children}` : '',
    hasChildren ? `\n\t</${componentName}>` : '',
    '\n));\n'
  );

  fs.writeFileSync(demoPath, tsxContent);
  console.log(`Demo created for component ${componentName}`);
}

module.exports = generateComponentDemos;
