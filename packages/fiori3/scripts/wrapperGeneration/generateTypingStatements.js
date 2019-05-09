// require('ts-node').register({
//   TS_NODE_TRANSPILE_ONLY: true,
//   TS_NODE_CACHE: false,
//   preserveConstEnums: true
// });
import { ListItemTypes } from '../../src/enums/ListItemTypes';
import { PlacementType } from '../../../core/enums/PlacementType';
import { PopoverVerticalAlign } from '../../../core/enums/PopoverVerticalAlign';
import { PopoverHorizontalAlign } from '../../../core/enums/PopoverHorizontalAlign';

const path = require('path');

const enumsFolder = path.resolve(__dirname, '..', '..', '..', 'core', 'enums');
const fiori3Enums = path.resolve(__dirname, '..', '..', 'src', 'enums');

const f4rEnums = {
  ValueState: require(path.resolve(fiori3Enums, 'ValueState.ts')).ValueState,
  ButtonType: require(path.resolve(fiori3Enums, 'ButtonType.ts')).ButtonType,
  MessageStripType: require(path.resolve(fiori3Enums, 'MessageStripType.ts')).MessageStripType,
  CalendarType: require(path.resolve(enumsFolder, 'CalendarType.ts')).CalendarType,
  PopoverHorizontalAlign: require(path.resolve(enumsFolder, 'PopoverHorizontalAlign.ts')).PopoverHorizontalAlign,
  InputType: require(path.resolve(enumsFolder, 'InputType.ts')).InputType,
  LinkType: require(path.resolve(enumsFolder, 'LinkType.ts')).LinkType,
  BackgroundDesign: require(path.resolve(enumsFolder, 'BackgroundDesign.ts')).BackgroundDesign,
  ListMode: require(path.resolve(fiori3Enums, 'ListMode.ts')).ListMode,
  ListItemTypes: require(path.resolve(fiori3Enums, 'ListItemTypes.ts')).ListItemTypes,
  ListSeparators: require(path.resolve(enumsFolder, 'ListSeparators.ts')).ListSeparators,
  PanelAccessibleRoles: require(path.resolve(enumsFolder, 'PanelAccessibleRoles.ts')).PanelAccessibleRoles,
  PlacementType: require(path.resolve(enumsFolder, 'PlacementType.ts')).PlacementType,
  PopoverVerticalAlign: require(path.resolve(enumsFolder, 'PopoverVerticalAlign.ts')).PopoverVerticalAlign,
  IconColor: require(path.resolve(enumsFolder, 'IconColor.ts')).IconColor,
  TitleLevel: require(path.resolve(fiori3Enums, 'TitleLevel.ts')).TitleLevel
};

function getDefaultPropValue(meta) {
  if (meta.isEnum) {
    if (f4rEnums[meta.tsType][meta.defaultValue]) {
      // f4r enum exists and contains default Value
      return `${meta.tsType}.${meta.defaultValue}`;
    } else {
      // f4r enum exists but does not contain default Value
      return `'${meta.defaultValue}' as any`;
    }
  }
  // primitives
  return meta.defaultPropAsString ? `'${meta.defaultValue}'` : meta.defaultValue;
}

function generateImportStatements(imports, reactImports) {
  // "import React from 'react';\n",
  let importStatements = Object.keys(imports).length > 0 ? Object.keys(imports).join('\n') : '';
  const reactImport = `import React${
    Object.keys(reactImports).length > 0 ? ', { ' + Object.keys(reactImports).join(', ') + ' }' : ''
  } from 'react';`;

  return `${reactImport}\n${importStatements}`;
}

function generateTypingStatements(typingMeta, componentName) {
  const imports = {};
  const reactImports = {
    FC: true
  };
  let defaultPropsStatement = `${componentName}.defaultProps = {\n`;
  let hasDefaultProps = false;
  let firstDefaultProp = true;
  const interfaceName = `${componentName}PropTypes`;

  let interfaceStatement = `export interface ${interfaceName} extends WithWebComponentPropTypes {\n`;

  Object.entries(typingMeta).forEach(([key, meta]) => {
    if (meta.importStatement) {
      imports[meta.importStatement] = true;
    }

    if (meta.reactImport) {
      reactImports[meta.reactImport] = true;
    }

    // console.log(meta);
    interfaceStatement = interfaceStatement.concat(
      !interfaceStatement.endsWith('\n') ? '\n' : '',
      `\t${key}?: ${meta.tsType}${meta.originalProp && meta.originalProp.multiple ? '[]' : ''}; // @generated\n`
    );

    if (Object.keys(meta).includes('defaultValue')) {
      // console.log(meta);
      hasDefaultProps = true;
      const defaultPropValue = getDefaultPropValue(meta);
      defaultPropsStatement = defaultPropsStatement.concat(
        `${firstDefaultProp ? '' : ', // @generated\n'}\t${key}: ${defaultPropValue}`
      );
      firstDefaultProp = false;
    }
  });

  interfaceStatement += '}';
  defaultPropsStatement += ' // @generated\n};\n\n';
  return {
    importStatements: generateImportStatements(imports, reactImports),
    interfaceStatement,
    interfaceName,
    defaultPropsStatement: hasDefaultProps ? defaultPropsStatement : ''
  };
}

module.exports = generateTypingStatements;
