/* eslint-disable @typescript-eslint/no-var-requires */
const mainWebComponentsSpec = require('@ui5/webcomponents/dist/api.json');
const fioriWebComponentsSpec = require('@ui5/webcomponents-fiori/dist/api.json');
const dedent = require('dedent');
const prettier = require('prettier');
const prettierConfigRaw = require('../../../prettier.config');
const path = require('path');
const PATHS = require('../../../config/paths');
const fs = require('fs');

const prettierConfig = {
  ...prettierConfigRaw,
  parser: 'typescript'
};

const WEB_COMPONENTS_ROOT_DIR = path.join(PATHS.packages, 'main', 'src', 'webComponents');
const LIB_DIR = path.join(PATHS.packages, 'main', 'src', 'lib');

const PRIVATE_COMPONENTS = new Set([
  'CalendarHeader',
  'DefaultTheme',
  'DayPicker',
  'ListItem',
  'ListItemBase',
  'MessageBundleAssets',
  'MonthPicker',
  'NotificationListItemBase',
  'NotificationOverflowAction',
  'Popup',
  'TabBase',
  'ThemePropertiesProvider',
  'TreeListItem',
  'YearPicker',
  'WheelSlider'
]);

const COMPONENTS_WITHOUT_DEMOS = new Set(PRIVATE_COMPONENTS);
COMPONENTS_WITHOUT_DEMOS.add('CustomListItem');
COMPONENTS_WITHOUT_DEMOS.add('GroupHeaderListItem');
COMPONENTS_WITHOUT_DEMOS.add('Option');
COMPONENTS_WITHOUT_DEMOS.add('ShellBarItem');
COMPONENTS_WITHOUT_DEMOS.add('StandardListItem');
COMPONENTS_WITHOUT_DEMOS.add('Tab');
COMPONENTS_WITHOUT_DEMOS.add('TableCell');
COMPONENTS_WITHOUT_DEMOS.add('TableColumn');
COMPONENTS_WITHOUT_DEMOS.add('TableRow');
COMPONENTS_WITHOUT_DEMOS.add('TabSeparator');
COMPONENTS_WITHOUT_DEMOS.add('TimelineItem');
COMPONENTS_WITHOUT_DEMOS.add('TreeItem');
COMPONENTS_WITHOUT_DEMOS.add('ProductSwitchItem');
COMPONENTS_WITHOUT_DEMOS.add('ComboBoxItem');
COMPONENTS_WITHOUT_DEMOS.add('MultiComboBoxItem');
COMPONENTS_WITHOUT_DEMOS.add('SuggestionItem');
COMPONENTS_WITHOUT_DEMOS.add('UploadCollectionItem');

const componentsFromFioriPackage = new Set(fioriWebComponentsSpec.symbols.map((componentSpec) => componentSpec.module));

const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const snakeToCamel = (str) => str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
const filterNonPublicAttributes = (prop) =>
  prop.visibility === 'public' && prop.readonly !== 'true' && prop.static !== true;

const getTypeScriptTypeForProperty = (property) => {
  switch (property.type) {
    // native ts types
    case 'string':
    case 'String':
      return {
        importStatement: null,
        tsType: 'string'
      };
    case 'undefined':
      return {
        importStatement: null,
        tsType: 'unknown'
      };
    case 'number':
    case 'Number':
    case 'Integer':
    case 'Float':
      return {
        importStatement: null,
        tsType: 'number'
      };
    case 'boolean':
    case 'Boolean':
      return {
        importStatement: null,
        tsType: 'boolean'
      };
    case 'Array':
      return {
        importStatement: null,
        tsType: 'unknown[]'
      };
    case 'File': {
      return {
        importStatement: null,
        tsType: 'File'
      };
    }
    case 'FileList': {
      return {
        importStatement: null,
        tsType: 'FileList'
      };
    }

    // react ts types
    case 'Node[]':
    case 'HTMLElement[]':
      return {
        tsType: 'ReactNode | ReactNode[]',
        importStatement: "import { ReactNode } from 'react';"
      };
    case 'HTMLElement':
      return {
        tsType: 'ReactNode',
        importStatement: "import { ReactNode } from 'react';"
      };
    // UI5 Web Component Enums
    case 'AvatarBackgroundColor':
      return {
        importStatement: "import { AvatarBackgroundColor } from '@ui5/webcomponents-react/lib/AvatarBackgroundColor';",
        tsType: 'AvatarBackgroundColor',
        isEnum: true
      };
    case 'AvatarFitType':
      return {
        importStatement: "import { AvatarFitType } from '@ui5/webcomponents-react/lib/AvatarFitType';",
        tsType: 'AvatarFitType',
        isEnum: true
      };
    case 'AvatarShape':
      return {
        importStatement: "import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';",
        tsType: 'AvatarShape',
        isEnum: true
      };
    case 'AvatarSize':
      return {
        importStatement: "import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';",
        tsType: 'AvatarSize',
        isEnum: true
      };
    case 'BusyIndicatorSize':
      return {
        importStatement: "import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';",
        tsType: 'BusyIndicatorSize',
        isEnum: true
      };
    case 'ButtonDesign':
      return {
        importStatement: "import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';",
        tsType: 'ButtonDesign',
        isEnum: true
      };
    case 'CalendarType':
      return {
        importStatement: "import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';",
        tsType: 'CalendarType',
        isEnum: true
      };
    case 'CarouselArrowsPlacement':
      return {
        importStatement:
          "import { CarouselArrowsPlacement } from '@ui5/webcomponents-react/lib/CarouselArrowsPlacement';",
        tsType: 'CarouselArrowsPlacement',
        isEnum: true
      };
    case 'FCLLayout':
      return {
        importStatement: "import { FCLLayout } from '@ui5/webcomponents-react/lib/FCLLayout';",
        tsType: 'FCLLayout',
        isEnum: true
      };
    case 'InputType':
      return {
        importStatement: "import { InputType } from '@ui5/webcomponents-react/lib/InputType';",
        tsType: 'InputType',
        isEnum: true
      };
    case 'LinkDesign':
      return {
        importStatement: "import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';",
        tsType: 'LinkDesign',
        isEnum: true
      };
    case 'ListItemType': {
      // TODO Should we use the singular ListItemType here?
      return {
        importStatement: "import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';",
        tsType: 'ListItemTypes',
        isEnum: true
      };
    }
    case 'ListMode': {
      return {
        importStatement: "import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';",
        tsType: 'ListMode',
        isEnum: true
      };
    }
    case 'ListSeparators':
      return {
        importStatement: "import { ListSeparators } from '@ui5/webcomponents-react/lib/ListSeparators';",
        tsType: 'ListSeparators',
        isEnum: true
      };
    case 'MessageStripType':
      return {
        importStatement: "import { MessageStripType } from '@ui5/webcomponents-react/lib/MessageStripType';",
        tsType: 'MessageStripType',
        isEnum: true
      };
    case 'PanelAccessibleRole':
      return {
        importStatement: "import { PanelAccessibleRoles } from '@ui5/webcomponents-react/lib/PanelAccessibleRoles';",
        tsType: 'PanelAccessibleRoles',
        isEnum: true
      };
    case 'PopoverHorizontalAlign':
      return {
        importStatement:
          "import { PopoverHorizontalAlign } from '@ui5/webcomponents-react/lib/PopoverHorizontalAlign';",
        tsType: 'PopoverHorizontalAlign',
        isEnum: true
      };
    case 'PopoverPlacementType':
      return {
        importStatement: "import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';",
        tsType: 'PlacementType',
        isEnum: true
      };
    case 'PopoverVerticalAlign':
      return {
        importStatement: "import { PopoverVerticalAlign } from '@ui5/webcomponents-react/lib/PopoverVerticalAlign';",
        tsType: 'PopoverVerticalAlign',
        isEnum: true
      };
    case 'Priority':
      return {
        importStatement: "import { Priority } from '@ui5/webcomponents-react/lib/Priority';",
        tsType: 'Priority',
        isEnum: true
      };
    case 'SemanticColor':
      return {
        importStatement: "import { SemanticColor } from '@ui5/webcomponents-react/lib/SemanticColor';",
        tsType: 'SemanticColor',
        isEnum: true
      };
    case 'TabLayout':
      return {
        importStatement: "import { TabLayout } from '@ui5/webcomponents-react/lib/TabLayout';",
        tsType: 'TabLayout',
        isEnum: true
      };
    case 'TabContainerTabsPlacement':
      return {
        importStatement:
          "import { TabContainerTabsPlacement } from '@ui5/webcomponents-react/lib/TabContainerTabsPlacement';",
        tsType: 'TabContainerTabsPlacement',
        isEnum: true
      };
    case 'TitleLevel':
      return {
        importStatement: "import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';",
        tsType: 'TitleLevel',
        isEnum: true
      };
    case 'ToastPlacement':
      return {
        importStatement: "import { ToastPlacement } from '@ui5/webcomponents-react/lib/ToastPlacement';",
        tsType: 'ToastPlacement',
        isEnum: true
      };
    case 'UploadState':
      return {
        importStatement: "import { UploadState } from '@ui5/webcomponents-react/lib/UploadState';",
        tsType: 'UploadState',
        isEnum: true
      };
    case 'ValueState':
      return {
        importStatement: "import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';",
        tsType: 'ValueState',
        isEnum: true
      };
    default:
      throw new Error(`Unknown type ${JSON.stringify(property)}`);
  }
};

const getEventParameters = (parameters) => {
  const resolvedEventParameters = parameters.map((property) => {
    return {
      ...property,
      ...getTypeScriptTypeForProperty(property)
    };
  });

  const importStatements = [];

  const detailPayload = resolvedEventParameters.map((parameter) => {
    if (parameter.importStatement) {
      importStatements.push(parameter.importStatement);
    }
    return `${parameter.name}: ${parameter.tsType}`;
  });

  return {
    tsType: `(event: CustomEvent<{${detailPayload.join('; ')}}>) => void`,
    importStatements
  };
};

const createWebComponentWrapper = (
  name,
  tag,
  types,
  importStatements,
  defaultProps,
  regularProps,
  booleanProps,
  slotProps,
  eventProps
) => {
  return prettier.format(
    `
    import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
    import '@ui5/webcomponents${componentsFromFioriPackage.has(name) ? '-fiori' : ''}/dist/${name}';
    import React, { FC } from 'react';
    import { WithWebComponentPropTypes } from '../../internal/withWebComponent';
    ${importStatements.join('\n')}
    
    export interface ${name}PropTypes extends WithWebComponentPropTypes {
      ${types.join('\n')}
    }
    
    /**
     * <code>import { ${name} } from '@ui5/webcomponents-react/lib/${name}';</code>
     * <br />
     * <a href="https://sap.github.io/ui5-webcomponents/playground/components/${name}" target="_blank">UI5 Web Components Playground</a>
     */
    const ${name}: FC<${name}PropTypes> = withWebComponent<${name}PropTypes>(
      '${tag}', 
      [${regularProps.map((v) => `'${v}'`).join(', ')}], 
      [${booleanProps.map((v) => `'${v}'`).join(', ')}],  
      [${slotProps
        .filter((name) => name !== 'children')
        .map((v) => `'${v}'`)
        .join(', ')}],
      [${eventProps.map((v) => `'${v}'`).join(', ')}]
    );
    
    ${name}.displayName = '${name}';
    
    ${name}.defaultProps = {
      ${defaultProps.join(',\n')}
    };
    
    export { ${name} };
    
    `,
    prettierConfig
  );
};

const createWebComponentTest = (name) => {
  return prettier.format(
    `
    import { mount } from 'enzyme';
    import React from 'react';
    import { ${name} } from '@ui5/webcomponents-react/lib/${name}';
    
    describe('${name}', () => {
      test('Basic Test (generated)', () => {
        const wrapper = mount(<${name} />);
        expect(wrapper.render()).toMatchSnapshot();
      });
    });
    
    `,
    prettierConfig
  );
};

const createWebComponentDemo = (componentSpec, componentProps) => {
  const componentName = componentSpec.module;

  const enumImports = [];

  const selectArgTypes = [];
  const args = [];

  const additionalComponentDocs = componentSpec.hasOwnProperty('appenddocs') ? componentSpec.appenddocs.split(' ') : [];
  const additionalComponentImports = additionalComponentDocs.map(
    (component) => `import { ${component} } from '@ui5/webcomponents-react/lib/${component}';`
  );

  componentProps
    .filter((prop) => prop.name !== 'children')
    .forEach((prop) => {
      if (prop.importStatement) {
        enumImports.push(prop.importStatement);
      }
      if (prop.isEnum) {
        selectArgTypes.push(`${prop.name}: ${prop.tsType}`);
        args.push(`${prop.name}: ${prop.tsType}.${prop.defaultValue.replace(/['"]/g, '')}`);
      }
    });

  return prettier.format(
    dedent`
    import { Title, Subtitle, Description, Meta, Story, Preview, Props } from '@storybook/addon-docs/blocks';
    import { ${componentName} } from '@ui5/webcomponents-react/lib/${componentName}';
    ${enumImports.join('\n')}
    ${additionalComponentImports.join('\n')}
    import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
     
    <Meta
     title="UI5 Web Components / ${componentName}"
     component={${componentName}}
     ${additionalComponentDocs.length > 0 ? `subcomponents={{ ${additionalComponentDocs.join(', ')} }}` : ''}
     argTypes={{
       ...createSelectArgTypes({${selectArgTypes.join(', ')}})
     }}
     args={{
       ${args.join(',\n')}
     }}
    />
    
    <Title />
    <Subtitle />
    <Description />
    
    <Preview>
      <Story name="Default">
        {(args) => {
          return (
            <${componentName} {...args} />
          );
        }}
      </Story>
    </Preview>
    
    <Props story="Default" components={{ ${[componentName].concat(additionalComponentDocs).join(', ')} }} />

    `,
    { ...prettierConfigRaw, parser: 'mdx' }
  );
};

const allWebComponents = [
  ...mainWebComponentsSpec.symbols.filter((spec) => !spec.module.startsWith('types/')),
  ...fioriWebComponentsSpec.symbols.filter((spec) => !spec.module.startsWith('types/'))
];

const assignComponentPropertiesToMaps = (componentSpec, { properties, slots, events }) => {
  (componentSpec.properties || []).forEach((prop) => {
    if (!properties.has(prop.name)) {
      properties.set(prop.name, prop);
    }
  });
  (componentSpec.slots || []).forEach((slot) => {
    if (!slots.has(slot.name)) {
      slots.set(slot.name, slot);
    }
  });
  (componentSpec.events || []).forEach((event) => {
    if (!events.has(event.name)) {
      events.set(event.name, event);
    }
  });
};

const recursivePropertyResolver = (componentSpec, { properties, slots, events }) => {
  assignComponentPropertiesToMaps(componentSpec, { properties, slots, events });
  if (
    componentSpec.extends === 'UI5Element' ||
    componentSpec.extends === 'sap.ui.webcomponents.base.UI5Element' ||
    componentSpec.extends === 'TabBase' // not longer existing but wrong docs, treat as UI5 Element
  ) {
    return { properties, slots, events };
  }

  const parentComponent = allWebComponents.find((c) => c.module === componentSpec.extends);
  if (parentComponent) {
    return recursivePropertyResolver(parentComponent, { properties, slots, events });
  }
  throw new Error('Unknown Parent Component!');
};

const resolveInheritedAttributes = (componentSpec) => {
  if (componentSpec.extends === 'UI5Element' || componentSpec.extends === 'sap.ui.webcomponents.base.UI5Element') {
    // no inheritance, just return the component
    return componentSpec;
  }

  const properties = new Map();
  const slots = new Map();
  const events = new Map();
  recursivePropertyResolver(componentSpec, { properties, slots, events });

  componentSpec.properties = Array.from(properties.values());
  componentSpec.slots = Array.from(slots.values());
  componentSpec.events = Array.from(events.values());

  return componentSpec;
};

const resolvedWebComponents = allWebComponents
  .filter((spec) => spec.visibility === 'public')
  .filter((spec) => !PRIVATE_COMPONENTS.has(spec.module))
  .map(resolveInheritedAttributes);

resolvedWebComponents.forEach((componentSpec) => {
  const propTypes = [];
  const importStatements = [];
  const defaultProps = [];
  const allComponentProperties = [...(componentSpec.properties || []), ...(componentSpec.slots || [])]
    .filter((prop) => prop.visibility === 'public' && prop.readonly !== 'true' && prop.static !== true)
    .map((property) => {
      const tsType = getTypeScriptTypeForProperty(property);
      if (tsType.importStatement) {
        importStatements.push(tsType.importStatement);
      }

      if (property.name === 'default') {
        property.name = 'children';
      }

      propTypes.push(dedent`
    /**
     * ${(property.description || '')
       .replace(/\n\n<br><br> /g, '<br/><br/>\n  *\n  * ')
       .replace(/\n\n/g, '<br/><br/>\n  *\n  * ')}
     */
     ${property.name}?: ${tsType.tsType};
    `);

      if (property.hasOwnProperty('defaultValue')) {
        if (tsType.tsType === 'boolean') {
          defaultProps.push(`${property.name}: ${property.defaultValue === 'true'}`);
        } else if (tsType.isEnum === true) {
          defaultProps.push(`${property.name}: ${tsType.tsType}.${property.defaultValue.replace(/['"]/g, '')}`);
        } else if (tsType.tsType !== 'string' || (tsType.tsType === 'string' && property.defaultValue !== '""')) {
          defaultProps.push(`${property.name}: ${property.defaultValue}`);
        }
      }

      return {
        ...property,
        ...tsType
      };
    });

  (componentSpec.events || [])
    .filter((eventSpec) => eventSpec.visibility === 'public')
    .forEach((eventSpec) => {
      const eventParameters = getEventParameters(eventSpec.parameters || []);
      importStatements.push(...eventParameters.importStatements);
      propTypes.push(dedent`
      /**
       * ${eventSpec.description}
       */
       on${capitalizeFirstLetter(snakeToCamel(eventSpec.name))}?: ${eventParameters.tsType};
      `);
    });

  const uniqueAdditionalImports = [...new Set(importStatements)];

  const webComponentWrapper = createWebComponentWrapper(
    componentSpec.module,
    componentSpec.tagname,
    propTypes,
    uniqueAdditionalImports,
    defaultProps,
    (componentSpec.properties || [])
      .filter(filterNonPublicAttributes)
      .filter(({ type }) => type !== 'boolean' && type !== 'Boolean')
      .map(({ name }) => name),
    (componentSpec.properties || [])
      .filter(filterNonPublicAttributes)
      .filter(({ type }) => type === 'boolean' || type === 'Boolean')
      .map(({ name }) => name),
    (componentSpec.slots || []).filter(filterNonPublicAttributes).map(({ name }) => name),
    (componentSpec.events || []).filter(filterNonPublicAttributes).map(({ name }) => name)
  );

  // check if folder exists and create it if necessary
  const webComponentFolderPath = path.join(WEB_COMPONENTS_ROOT_DIR, componentSpec.module);
  if (!fs.existsSync(webComponentFolderPath)) {
    fs.mkdirSync(webComponentFolderPath);
  }

  fs.writeFileSync(path.join(webComponentFolderPath, 'index.tsx'), webComponentWrapper);

  // create lib export
  if (!fs.existsSync(path.join(LIB_DIR, `${componentSpec.module}.ts`))) {
    const libContent = prettier.format(
      `
import { ${componentSpec.module} } from '../webComponents/${componentSpec.module}';

export { ${componentSpec.module} };`,
      prettierConfig
    );
    fs.writeFileSync(path.join(LIB_DIR, `${componentSpec.module}.ts`), libContent);
  }

  // create test
  if (!fs.existsSync(path.join(webComponentFolderPath, `${componentSpec.module}.test.tsx`))) {
    const webComponentTest = createWebComponentTest(componentSpec.module);
    fs.writeFileSync(path.join(webComponentFolderPath, `${componentSpec.module}.test.tsx`), webComponentTest);
  }

  // create demo
  if (
    !fs.existsSync(path.join(webComponentFolderPath, `${componentSpec.module}.stories.tsx`)) &&
    !fs.existsSync(path.join(webComponentFolderPath, `${componentSpec.module}.stories.mdx`)) &&
    !COMPONENTS_WITHOUT_DEMOS.has(componentSpec.module)
  ) {
    const webComponentDemo = createWebComponentDemo(componentSpec, allComponentProperties);
    fs.writeFileSync(path.join(webComponentFolderPath, `${componentSpec.module}.stories.mdx`), webComponentDemo);
  }
});
