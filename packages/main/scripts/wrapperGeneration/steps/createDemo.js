const fs = require('fs');
const path = require('path');
const dedent = require('dedent');
const prettier = require('prettier');
const PATHS = require('../../../../../config/paths');

const WEB_COMPONENTS_ROOT_DIR = path.join(PATHS.packages, 'main', 'src', 'webComponents');

const COMPONENT_DEMO_BLACKLIST = [
  'CalendarHeader',
  'CustomListItem',
  'DayPicker',
  'GroupHeaderListItem',
  'ListItem',
  'ListItemBase',
  'MonthPicker',
  'Option',
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
  icon: "'add'"
};

function getStringValue(key, meta) {
  const knownString = knownStrings[key];
  return knownString ? knownString : checkForDefaultProp(meta, "'generatedString'");
}

function buildPropWithKnob(knob, meta, key, alt) {
  return `${knob}('${key}', ${checkForDefaultProp(meta, alt)})`;
}

function createDemoForComponent(dto) {
  const componentName = dto.componentName;

  if (COMPONENT_DEMO_BLACKLIST.includes(componentName)) {
    console.warn(`Skip demo generation for ${componentName} because it is blacklisted.`);
    return;
  }

  const demoPath = path.resolve(WEB_COMPONENTS_ROOT_DIR, componentName, 'demo.stories.tsx');

  if (fs.existsSync(demoPath)) {
    return;
  }

  const storyBookImports = {};
  let importStorybookActions = false;
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
    } else if (meta.tsType === '(event : Event) => void') {
      importStorybookActions = true;
      return `action('${key}')`;
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

  const getStorybookImports = () => {
    let storybookImportStatements = '';
    if (Object.keys(storyBookImports).length > 0) {
      storybookImportStatements += `import { ${Object.keys(storyBookImports).join(
        ', '
      )} } from '@storybook/addon-knobs'`;
    }
    if (importStorybookActions) {
      if (storybookImportStatements.length > 0) storybookImportStatements += '\n';
      storybookImportStatements += "import { action } from '@storybook/addon-actions';";
    }
    return storybookImportStatements;
  };

  const tsxContent = dedent`
  import React from 'react';
  ${Object.keys(imports).join('\n')}
  ${getStorybookImports()}
  import { ${componentName} } from '@ui5/webcomponents-react/lib/${componentName}';
  import notes from './${componentName}.md';

  export default {
    title: 'UI5 Web Components / ${componentName}',
    component: ${componentName},
    parameters: {
      notes
    }
  };

  export const generatedDefaultStory = () => (
    <${componentName}${hasProps ? '' : hasChildren ? ' />' : '>'}
    ${Object.entries(props)
      .map(([key, string]) => (key === 'children' ? '' : string))
      .join('')}
    ${hasProps ? (hasChildren ? '\t>' : '\t/>') : ''}
    ${hasChildren ? `\t\t${props.children}` : ''}
    ${hasChildren ? `\t</${componentName}>` : ''}
  );

  generatedDefaultStory.story = {
    name: 'Generated Default Story'
  };

  `;

  fs.writeFileSync(demoPath, prettier.format(tsxContent));
  console.log(`Demo created for component ${componentName}`);
}

module.exports = {
  createDemoForComponent
};
