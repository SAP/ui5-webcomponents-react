const mainWebComponentsSpec = require('@ui5/webcomponents/dist/api.json');
const fioriWebComponentsSpec = require('@ui5/webcomponents-fiori/dist/api.json');
const dedent = require('dedent');
const prettier = require('prettier');
const prettierConfig = require('../../../prettier.config');
const path = require('path');
const PATHS = require('../../../config/paths');
const fs = require('fs');

const WEB_COMPONENTS_ROOT_DIR = path.join(PATHS.packages, 'main', 'src', 'webComponents');

const PRIVATE_COMPONENTS = new Set([
  'CalendarHeader',
  'DefaultTheme',
  'DayPicker',
  'ListItem',
  'ListItemBase',
  'MessageBundleAssets',
  'MonthPicker',
  'Popup',
  'TabBase',
  'ThemePropertiesProvider',
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
COMPONENTS_WITHOUT_DEMOS.add('ProductSwitchItem');
COMPONENTS_WITHOUT_DEMOS.add('ComboBoxItem');
COMPONENTS_WITHOUT_DEMOS.add('MultiComboBoxItem');
COMPONENTS_WITHOUT_DEMOS.add('SuggestionItem');

const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const getTypeScriptTypeForProperty = (property) => {
  switch (property.type) {
    case 'String':
    case 'string':
      return {
        importStatement: null,
        tsType: 'string'
      };
    case 'undefined':
      return {
        importStatement: null,
        tsType: 'unknown'
      };
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
    case 'Array':
      return {
        importStatement: null,
        tsType: 'unknown[]'
      };
    case 'Integer':
    case 'number':
      return {
        importStatement: null,
        tsType: 'number'
      };
    case 'CarouselArrowsPlacement':
      return {
        importStatement:
          "import { CarouselArrowsPlacement } from '@ui5/webcomponents-react/lib/CarouselArrowsPlacement';",
        tsType: 'CarouselArrowsPlacement',
        isEnum: true
      };
    case 'boolean':
    case 'Boolean':
      return {
        importStatement: null,
        tsType: 'boolean'
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
  }
  // const mappings = {

  //   [UI5LinkDesign]: {
  //     importStatement: "import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';",
  //     tsType: 'LinkDesign',
  //     isEnum: true
  //   },
  //   [UI5SemanticColors]: {
  //     importStatement: "import { SemanticColor } from '@ui5/webcomponents-react/lib/SemanticColor';",
  //     tsType: 'SemanticColor',
  //     isEnum: true
  //   },
  //   [UI5ListItemTypes]: {
  //     importStatement: "import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';",
  //     tsType: 'ListItemTypes',
  //     isEnum: true
  //   },
  //   [UI5PanelAccessibleRoles]: {

  //   },
  //   [UI5ListSeparators]: {
  //     importStatement: "import { ListSeparators } from '@ui5/webcomponents-react/lib/ListSeparators';",
  //     tsType: 'ListSeparators',
  //     isEnum: true
  //   },
  //   [UI5ListMode]: {
  //     importStatement: "import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';",
  //     tsType: 'ListMode',
  //     isEnum: true
  //   },
  //   [UI5TitleLevel]: {
  //     importStatement: "import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';",
  //     tsType: 'TitleLevel',
  //     isEnum: true
  //   },
  //   [UI5InputType]: {
  //     importStatement: "import { InputType } from '@ui5/webcomponents-react/lib/InputType';",
  //     tsType: 'InputType',
  //     isEnum: true
  //   },
  //   [UI5Icon]: {
  //     tsType: 'any',
  //     comment: 'UI5 Icon Web Component'
  //   },
  //   [UI5CalendarType]: {
  //     importStatement: "import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';",
  //     tsType: 'CalendarType',
  //     isEnum: true
  //   },
  //   [UI5ValueState]: {
  //     importStatement: "import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';",
  //     tsType: 'ValueState',
  //     isEnum: true
  //   },
  //   [UI5MessageStripType]: {

  //   },
  //   [Boolean]: {
  //     tsType: 'boolean',
  //     defaultPropAsString: false
  //   },
  //   [CSSSize]: {
  //     tsType: "CSSProperties['width'] | CSSProperties['height']",
  //     reactImport: 'CSSProperties'
  //   },
  //   [String]: {
  //     tsType: 'string'
  //   },
  //   [Integer]: {
  //     tsType: 'number',
  //     defaultPropAsString: false
  //   },
  //   [HTMLElement]: {
  //     tsType: 'HTMLElement'
  //   },
  //   [TimelineItem]: {
  //     tsType: 'ReactNode',
  //     reactImport: 'ReactNode'
  //   }
  // };
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

const createWebComponentWrapper = (name, types, importStatements, defaultProps) => {
  return prettier.format(
    `
    import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
    import UI5${name} from '@ui5/webcomponents/dist/${name}';
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
    const ${name}: FC<${name}PropTypes> = withWebComponent<${name}PropTypes>(UI5${name});
    
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

  const storybookImports = [];
  const storybookKnobImports = new Set();
  const enumImports = [];
  const storybookProps = [];

  const componentFiresEvents = componentSpec.events && componentSpec.events.length > 0;
  if (componentFiresEvents) {
    storybookImports.push("import { action } from '@storybook/addon-actions';");
  }

  const childrenProp = componentProps.find((prop) => prop.name === 'children');

  componentProps
    .filter((prop) => prop.name !== 'children')
    .forEach((prop) => {
      if (prop.importStatement) {
        enumImports.push(prop.importStatement);
      }
      let storybookKnob = `${prop.name}={`;
      if (prop.isEnum) {
        storybookKnobImports.add('select');
        storybookKnob += `select('${prop.name}', ${prop.tsType}, ${prop.tsType}[${prop.defaultValue}])`;
      } else if (prop.tsType === 'number') {
        storybookKnobImports.add('number');
        storybookKnob += `number('${prop.name}', ${prop.defaultValue})`;
      } else if (prop.tsType === 'boolean') {
        storybookKnobImports.add('boolean');
        storybookKnob += `boolean('${prop.name}', ${Boolean(prop.defaultValue)})`;
      } else if (prop.tsType === 'string') {
        storybookKnobImports.add('text');
        storybookKnob += `text('${prop.name}', ${prop.defaultValue})`;
      } else {
        console.warn(`Warning: Unknown Type for demo ${prop.name}: ${prop.tsType}`);
        storybookKnob += 'null';
      }

      storybookKnob += '}';
      storybookProps.push(storybookKnob);
    });

  const eventProps = (componentSpec.events || []).map(
    (event) => `on${capitalizeFirstLetter(event.name)}={action('on${capitalizeFirstLetter(event.name)}')}`
  );

  const componentBody = childrenProp ? `>Some Content</${componentName}>` : ' />';

  return prettier.format(
    `import React from 'react';
     import { ${componentName} } from '@ui5/webcomponents-react/lib/${componentName}';
     ${storybookImports.join('\n')}
     import { ${[...storybookKnobImports].join(', ')} } from '@storybook/addon-knobs';
     ${enumImports.join('\n')};
     
     
     export default {
       title: 'UI5 Web Components / ${componentName}',
       component: ${componentName}
     };
     
     export const generatedDefaultStory = () => (
       <${componentName}
         ${storybookProps.join('\n')}
         ${eventProps.join('\n')}
         ${componentBody}
     );
     
     generatedDefaultStory.story = {
       name: 'Generated default story'
     };

  `,
    prettierConfig
  );
};

const allWebComponents = [
  ...mainWebComponentsSpec.symbols.filter((spec) => !spec.module.startsWith('types/')),
  ...fioriWebComponentsSpec.symbols.filter((spec) => !spec.module.startsWith('types/'))
]
  .filter((spec) => spec.visibility === 'public')
  .filter((spec) => !PRIVATE_COMPONENTS.has(spec.module));

allWebComponents.forEach((componentSpec) => {
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
     * ${property.description}
     */
     ${property.name}?: ${tsType.tsType};
    `);

      if (property.hasOwnProperty('defaultValue')) {
        defaultProps.push(`${property.name}: ${property.defaultValue}`);
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
       on${capitalizeFirstLetter(eventSpec.name)}?: ${eventParameters.tsType};
      `);
    });

  const uniqueAdditionalImports = [...new Set(importStatements)];

  const webComponentWrapper = createWebComponentWrapper(
    componentSpec.module,
    propTypes,
    uniqueAdditionalImports,
    defaultProps
  );

  // check if folder exists and create it if necessary
  if (!fs.existsSync(path.join(WEB_COMPONENTS_ROOT_DIR, componentSpec.module))) {
    fs.mkdirSync(path.join(WEB_COMPONENTS_ROOT_DIR, componentSpec.module));
  }
  if (!fs.existsSync(path.join(WEB_COMPONENTS_ROOT_DIR, componentSpec.module, 'index.tsx'))) {
    fs.writeFileSync(path.join(WEB_COMPONENTS_ROOT_DIR, componentSpec.module, 'index.tsx'), webComponentWrapper);
  }

  // create test
  if (!fs.existsSync(path.join(WEB_COMPONENTS_ROOT_DIR, componentSpec.module, `${componentSpec.module}.test.tsx`))) {
    const webComponentTest = createWebComponentTest(componentSpec.module);
    fs.writeFileSync(
      path.join(WEB_COMPONENTS_ROOT_DIR, componentSpec.module, `${componentSpec.module}.test.tsx`),
      webComponentTest
    );
  }

  // create demo
  if (
    !fs.existsSync(path.join(WEB_COMPONENTS_ROOT_DIR, componentSpec.module, `demo.stories.tsx`)) &&
    !COMPONENTS_WITHOUT_DEMOS.has(componentSpec.module)
  ) {
    const webComponentDemo = createWebComponentDemo(componentSpec, allComponentProperties);
    fs.writeFileSync(
      path.join(WEB_COMPONENTS_ROOT_DIR, componentSpec.module, `${componentSpec.module}.stories.tsx`),
      webComponentDemo
    );
  }
});
