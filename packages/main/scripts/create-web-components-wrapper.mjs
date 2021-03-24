/* eslint-disable @typescript-eslint/no-var-requires */
import mainWebComponentsSpec from '@ui5/webcomponents/dist/api.json';
import fioriWebComponentsSpec from '@ui5/webcomponents-fiori/dist/api.json';
import dedent from 'dedent';
import prettier from 'prettier';
import prettierConfigRaw from '../../../prettier.config.cjs';
import path from 'path';
import PATHS from '../../../config/paths.js';
import fs from 'fs';
import TurndownService from 'turndown';
import Handlebars from 'handlebars';
import * as Utils from '../../../scripts/web-component-wrappers/utils.js';

Handlebars.registerPartial(
  'methodParameters',
  fs.readFileSync(path.join(PATHS.root, 'scripts', 'web-component-wrappers', 'MethodParameters.hbs')).toString()
);

const methodsTemplate = Handlebars.compile(
  fs.readFileSync(path.join(PATHS.root, 'scripts', 'web-component-wrappers', 'Methods.hbs')).toString()
);

const testTemplate = Handlebars.compile(
    fs.readFileSync(path.join(PATHS.root, 'scripts', 'web-component-wrappers', 'TestTemplate.hbs')).toString()
);

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});
turndownService.keep(['ui5-link']);

// To only create a single component, replace "false" with the component (module) name
// or execute the following command: "yarn create-webcomponents-wrapper [name]"
const CREATE_SINGLE_COMPONENT = process.argv[2] || false;

const EXCLUDE_LIST = [];

const prettierConfig = {
  ...prettierConfigRaw,
  parser: 'typescript'
};

const WEB_COMPONENTS_ROOT_DIR = path.join(PATHS.packages, 'main', 'src', 'webComponents');
const DIST_DIR = path.join(PATHS.packages, 'main', 'src', 'dist');

const KNOWN_EVENTS = new Set(['click', 'input', 'submit', 'change', 'select', 'drop']);

const PRIVATE_COMPONENTS = new Set([
  'CalendarHeader',
  'CalendarPart',
  'DefaultTheme',
  'DayPicker',
  'DateComponentBase',
  'ListItem',
  'ListItemBase',
  'MessageBundleAssets',
  'MonthPicker',
  'NotificationListItemBase',
  'Popup',
  'PickerBase',
  'SliderBase',
  'TabBase',
  'ThemePropertiesProvider',
  'TimePickerBase',
  'TreeListItem',
  'YearPicker',
  'WheelSlider'
]);

const EXTENDED_PROP_DESCRIPTION = {
  primaryCalendarType: `<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />\`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";\``
};

const CUSTOM_DESCRIPTION_REPLACE = {
  Avatar: {
    icon: (desc) => {
      return desc.replace(
        `   * import "@ui5/webcomponents-icons/dist/{icon\\_name}.js"  
   * 
   * <ui5-avatar icon-src="employee">`,
        `   * \`import "@ui5/webcomponents-icons/dist/{icon\\_name}.js"\`
   *
   * \`<Avatar icon="employee">\``
      );
    }
  },
  ComboBox: {
    children: (desc) => {
      return desc.replace(
        `   * Example:  
   * <ui5-combobox>  
   *     <ui5-li>Item #1</ui5-li>  
   *     <ui5-li>Item #2</ui5-li>  
   * </ui5-combobox>`,
        `   * Example:
   *
   * <pre>
   *   <code>
   *    &lt;ComboBox><br />
   *    &nbsp;&nbsp;&lt;StandardListItem>Item #1&lt;/StandardListItem><br />
   *    &nbsp;&nbsp;&lt;StandardListItem>Item #2&lt;/StandardListItem><br />
   *    &lt;/ComboBox>
   *  </code>
   * </pre>`
      );
    }
  },
  Input: {
    children: (description) => {
      const formatExample = description.replace(
        `   * Example:  
   *   
   * <ui5-input show-suggestions>  
   *     <ui5-suggestion-item text="Item #1"></ui5-suggestion-item>  
   *     <ui5-suggestion-item text="Item #2"></ui5-suggestion-item>  
   * </ui5-input>  `,
        `   * Example:
   *
   * <pre>
   *   <code>
   *    &lt;Input showSuggestions><br />
   *    &nbsp;&nbsp;&lt;SuggestionItem text="Item #1" /><br />
   *    &nbsp;&nbsp;&lt;SuggestionItem text="Item #2" /><br />
   *    &lt;/Input>
   *  </code>
   * </pre>`
      );
      return formatExample.replace(/<ui5-suggestion-item>/g, '`<SuggestionItem>`');
    }
  },
  MultiComboBox: {
    children: (desc) => {
      return desc.replace(
        `   * Example:  
   * <ui5-multi-combobox>  
   *     <ui5-li>Item #1</ui5-li>  
   *     <ui5-li>Item #2</ui5-li>  
   * </ui5-multi-combobox>`,
        `   * Example:
   *
   * <pre>
   *   <code>
   *    &lt;MultiComboBox><br />
   *    &nbsp;&nbsp;&lt;StandardListItem>Item #1&lt;/StandardListItem><br />
   *    &nbsp;&nbsp;&lt;StandardListItem>Item #2&lt;/StandardListItem><br />
   *    &lt;/MultiComboBox>
   *  </code>
   * </pre>`
      );
    }
  },
  MultiInput: {
    children: (description) => {
      const formatExample = description.replace(
        `   * Example:  
   *   
   * <ui5-input show-suggestions>  
   *     <ui5-suggestion-item text="Item #1"></ui5-suggestion-item>  
   *     <ui5-suggestion-item text="Item #2"></ui5-suggestion-item>  
   * </ui5-input>  `,
        `   * Example:
   *
   * <pre>
   *   <code>
   *    &lt;MultiInput showSuggestions><br />
   *    &nbsp;&nbsp;&lt;SuggestionItem text="Item #1" /><br />
   *    &nbsp;&nbsp;&lt;SuggestionItem text="Item #2" /><br />
   *    &lt;/MultiInput>
   *  </code>
   * </pre>`
      );
      return formatExample.replace(/<ui5-suggestion-item>/g, '`<SuggestionItem>`');
    },
    tokens: (description) => {
      return description.replace(
        `   * Example:  
   * <ui5-multi-input>  
   *     <ui5-token slot="tokens" text="Token 1"></ui5-token>  
   *     <ui5-token slot="tokens" text="Token 2"></ui5-token>  
   * </ui5-multi-input>`,
        `   * Example:
   *
   * <pre>
   *   <code>
   *    &lt;MultiInput<br />
   *    &nbsp;tokens={<br />
   *    &nbsp;&nbsp;&lt;><br />
   *    &nbsp;&nbsp;&nbsp;&lt;Token text="Token 1" /><br />
   *    &nbsp;&nbsp;&nbsp;&lt;Token text="Token 1" /><br />
   *    &nbsp;&nbsp;&lt;/><br />
   *    &nbsp;}<br />
   *    />
   *  </code>
   * </pre>`
      );
    }
  },
  ShellBar: {
    children: (desc) => {
      return desc.replace('<ui5-shellbar-item></ui5-shellbar-item>', '`ShellBarItem`');
    },
    menuItems: (desc) => {
      return desc.replace('<ui5-li></ui5-li>', '`StandardListItem`');
    }
  }
};

const COMPONENTS_WITHOUT_DEMOS = new Set(PRIVATE_COMPONENTS);
COMPONENTS_WITHOUT_DEMOS.add('CustomListItem');
COMPONENTS_WITHOUT_DEMOS.add('CalendarDate');
COMPONENTS_WITHOUT_DEMOS.add('ColorPaletteItem');
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
COMPONENTS_WITHOUT_DEMOS.add('SideNavigationItem');
COMPONENTS_WITHOUT_DEMOS.add('SideNavigationSubItem');
COMPONENTS_WITHOUT_DEMOS.add('SuggestionItem');
COMPONENTS_WITHOUT_DEMOS.add('UploadCollectionItem');
COMPONENTS_WITHOUT_DEMOS.add('NotificationAction');
COMPONENTS_WITHOUT_DEMOS.add('WizardStep');

const componentsFromFioriPackage = new Set(fioriWebComponentsSpec.symbols.map((componentSpec) => componentSpec.module));

const allWebComponents = [
  ...mainWebComponentsSpec.symbols.filter((spec) => !spec.module.startsWith('types/')),
  ...fioriWebComponentsSpec.symbols.filter((spec) => !spec.module.startsWith('types/'))
];

const htmlTagToModuleNameMap = new Map();
for (const spec of allWebComponents) {
  htmlTagToModuleNameMap.set(spec.tagname, spec.module);
}

const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const snakeToCamel = (str) => str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
const filterNonPublicAttributes = (prop) =>
  prop.visibility === 'public' && prop.readonly !== 'true' && prop.static !== true;

const replaceTagNameWithModuleName = (description) => {
  let parsedDescription = description.replace(/(ui5-[\w-]+)/g, (fullMatch, tag, ...args) => {
    if (tag === 'ui5-link') return tag;
    if (tag === 'ui5-webcomponents-react') return tag;
    return htmlTagToModuleNameMap.get(tag);
  });

  parsedDescription = parsedDescription.replace(/`ui5-link/g, `\`${htmlTagToModuleNameMap.get('ui5-link')}`);

  // replace all tag occurrences in description with module name
  [...parsedDescription.matchAll(new RegExp(`<code>ui5-`, 'g'))].forEach(() => {
    const start = description.indexOf(`<code>ui5-`) + 6;
    const end = description.indexOf(`</code>`, start);
    const tagName = description.slice(start, end);
    if (htmlTagToModuleNameMap.has(tagName)) {
      description = description.replace(tagName, htmlTagToModuleNameMap.get(tagName));
    }
  });

  return parsedDescription;
};

const getEventParameters = (parameters) => {
  const resolvedEventParameters = parameters.map((property) => {
    return {
      ...property,
      ...Utils.getTypeDefinitionForProperty(property)
    };
  });

  const importStatements = [];

  if (resolvedEventParameters.length === 0) {
    return {
      tsType: `(event: CustomEvent) => void`,
      importStatements
    };
  }

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
  description,
  types,
  importStatements,
  defaultProps,
  regularProps,
  booleanProps,
  slotProps,
  eventProps
) => {
  const eventsToBeOmitted = eventProps.filter((eventName) => KNOWN_EVENTS.has(eventName));
  let tsExtendsStatement = 'WithWebComponentPropTypes';
  if (eventsToBeOmitted.length > 0) {
    tsExtendsStatement = `Omit<WithWebComponentPropTypes, ${eventsToBeOmitted
      .map((eventName) => `'on${capitalizeFirstLetter(snakeToCamel(eventName))}'`)
      .join(' | ')}>`;
  }
  let componentDescription;
  try {
    componentDescription = turndownService.turndown(description).replace(/\n/g, '\n * ');
  } catch (e) {
    console.warn(
      `----------------------\nHeader description of ${name} couldn't be generated. \nThere is probably a syntax error in the associated description that can't be fixed automatically.\n----------------------`
    );
    componentDescription = '';
  }

  const regularImports = importStatements
    .filter((imp) => !imp.includes("from 'react'"))
    .sort((a, b) => {
      const importNameA = /import \{ (\w+) \}/.exec(a)[1];
      const importNameB = /import \{ (\w+) \}/.exec(b)[1];
      return importNameA.localeCompare(importNameB);
    });
  const reactImports = [
    'FC',
    ...importStatements
      .filter((imp) => imp.includes("from 'react'"))
      .map((imp) => {
        const match = /import \{ (\w+) \}/.exec(imp);
        return match[1];
      })
  ].sort((a, b) => a.localeCompare(b));

  return prettier.format(
    `
    ${regularImports.join('\n')}
    import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/dist/withWebComponent';
    import '@ui5/webcomponents${componentsFromFioriPackage.has(name) ? '-fiori' : ''}/dist/${name}';
    import { ${reactImports.join(', ')} } from 'react';

    export interface ${name}PropTypes extends ${tsExtendsStatement} {
      ${types.join('\n')}
    }
    
    /**
     * ${componentDescription}     
     * 
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

const createWebComponentDemo = (componentSpec, componentProps, description) => {
  const componentName = componentSpec.module;
  const enumImports = [];
  const selectArgTypes = [];
  const args = [];
  const customArgTypes = [];

  console.warn(`Story created for ${componentName}!\nPlease remember to add the story to an existing group.`);

  const additionalComponentDocs = componentSpec.hasOwnProperty('appenddocs') ? componentSpec.appenddocs.split(' ') : [];
  const additionalComponentImports = additionalComponentDocs.map(
    (component) => `import { ${component} } from '@ui5/webcomponents-react/dist/${component}';`
  );

  componentProps.forEach((prop) => {
    if (prop.importStatement && prop.importStatement !== `import { ReactNode } from 'react';`) {
      enumImports.push(prop.importStatement);
    }
    if (componentSpec.module === 'Icon' && prop.name === 'name') {
      enumImports.push(`import "@ui5/webcomponents-icons/dist/employee.js";`);
      args.push(`name: 'employee'`);
    }
    if (prop.name === 'primaryCalendarType') {
      enumImports.push(`import "@ui5/webcomponents-localization/dist/features/calendar/Gregorian.js";`);
      enumImports.push(`import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";`);
      enumImports.push(`import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";`);
      enumImports.push(`import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";`);
      enumImports.push(`import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";`);
    }
    if (prop.name === 'children') {
      if (
        prop.description.includes(
          'Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.'
        )
      ) {
        args.push(`children: "${componentName} Text"`);
        customArgTypes.push(`children: {control: 'text'}`);
      } else {
        customArgTypes.push(`children: {control: {disable:true}}`);
      }
    } else if (prop.name === 'icon') {
      enumImports.push(`import "@ui5/webcomponents-icons/dist/employee.js";`);
      enumImports.push(`import { Icon } from '@ui5/webcomponents-react/dist/Icon';`);
      if (prop.tsType === 'string') {
        args.push(`icon: 'employee'`);
      }
      if (prop.tsType.includes('ReactNode')) {
        customArgTypes.push(`icon: {control: {disable: true}}`);
        args.push(`icon: <Icon name="employee" />`);
      }
    } else if (prop.tsType.includes('ReactNode') || prop.tsType === 'unknown') {
      customArgTypes.push(`${prop.name}: {control: {disable:true}}`);
    }
    if (prop.isEnum) {
      selectArgTypes.push(`${prop.name}: ${prop.tsType}`);
      const defaultValue = prop.defaultValue ? `.${prop.defaultValue.replace(/['"]/g, '')}` : '';
      args.push(`${prop.name}: ${prop.tsType}${defaultValue}`);
    }
  });
  //todo remove after 'react-docgen' can handle this
  args.push(`style: {}`);
  args.push(`className: ''`);
  args.push(`tooltip: ''`);
  args.push(`slot: ''`);
  args.push(`ref: null`);
  enumImports.push(`import { CSSProperties, Ref } from 'react';`);

  let formattedDescription = description
    .replace(/<br>/g, `<br/>`)
    .replace(/\s\s+/g, ' ')
    .replace(/h3/g, 'h2')
    .replace(/h4/g, 'h3');

  try {
    if (formattedDescription) {
      formattedDescription = turndownService.turndown(formattedDescription);
    }
  } catch (e) {
    formattedDescription = '';
    console.warn(
      `----------------------\nDescription of ${componentSpec.module} couldn't be generated. \nThere is probably a syntax error in the associated description that can't be fixed automatically.\n----------------------`
    );
  }

  return `${prettier.format(
    dedent`
    import { Meta, Story, Canvas, ArgsTable } from '@storybook/addon-docs/blocks';
    import { ${componentName} } from '@ui5/webcomponents-react/dist/${componentName}';
    ${enumImports.join('\n')}
    ${additionalComponentImports.join('\n')}
    import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
    import { DocsHeader } from '@shared/stories/DocsHeader';
    import { DocsCommonProps } from '@shared/stories/DocsCommonProps';
    
    <Meta
     title="Components / ${componentName}"
     component={${componentName}}
     ${additionalComponentDocs.length > 0 ? `subcomponents={{ ${additionalComponentDocs.join(', ')} }}` : ''}
     argTypes={{
       ...createSelectArgTypes({${selectArgTypes.join(', ')}}),
       ...DocsCommonProps,
       ${customArgTypes.join(',\n')}
     }}
     args={{
       ${args.join(',\n')}
     }}
    />

    <DocsHeader />
    
    <br />
    
    ## Example

    <Canvas>
      <Story name="Default">
        {(args) => {
          return (
            <${componentName} {...args} />
          );
        }}
      </Story>
    </Canvas>
    
    ## Properties
    
    <ArgsTable story="." />
    
    ${methodsTemplate({ methods: componentSpec.methods?.filter((item) => item.visibility === 'public') ?? [] })}
    
    `,
    { ...prettierConfigRaw, parser: 'mdx' }
  )}\n${formattedDescription}`;
};

const assignComponentPropertiesToMaps = (componentSpec, { properties, slots, events, methods }) => {
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
  (componentSpec.methods || []).forEach((method) => {
    if (!methods.has(method.name)) {
      methods.set(method.name, method);
    }
  });
};

const recursivePropertyResolver = (componentSpec, { properties, slots, events, methods }) => {
  assignComponentPropertiesToMaps(componentSpec, { properties, slots, events, methods });
  if (
    componentSpec.extends === 'UI5Element' ||
    componentSpec.extends === 'sap.ui.webcomponents.base.UI5Element' ||
    componentSpec.extends === 'TabBase' // not longer existing but wrong docs, treat as UI5 Element
  ) {
    return { properties, slots, events, methods };
  }

  const parentComponent = allWebComponents.find((c) => {
    if (componentSpec.extends.includes('.')) {
      return c.name === componentSpec.extends;
    }
    return c.module === componentSpec.extends;
  });
  if (parentComponent) {
    return recursivePropertyResolver(parentComponent, {
      properties,
      slots,
      events,
      methods
    });
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
  const methods = new Map();
  recursivePropertyResolver(componentSpec, { properties, slots, events, methods });

  componentSpec.properties = Array.from(properties.values());
  componentSpec.slots = Array.from(slots.values());
  componentSpec.events = Array.from(events.values());
  componentSpec.methods = Array.from(methods.values());

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
      const tsType = Utils.getTypeDefinitionForProperty(property);
      if (tsType.importStatement) {
        importStatements.push(tsType.importStatement);
      }

      if (property.name === 'default') {
        property.name = 'children';
      }
      const propDescription = () => {
        if (!componentSpec.tagname) {
          return property.description || '';
        }
        let formattedDescription = turndownService
          .turndown((property.description || '').trim())
          .replace(/\n/g, '\n   * ');

        const customDescriptionReplace = CUSTOM_DESCRIPTION_REPLACE[componentSpec.module];
        if (customDescriptionReplace && customDescriptionReplace[property.name]) {
          formattedDescription = customDescriptionReplace[property.name](formattedDescription);
        }

        const extendedDescription = EXTENDED_PROP_DESCRIPTION[property.name];

        if (property.name !== 'children' && componentSpec?.slots?.some((item) => item.name === property.name)) {
          formattedDescription += `
          *
          * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
          * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).`;
        }

        if (extendedDescription) {
          return replaceTagNameWithModuleName(`${formattedDescription}${extendedDescription}`);
        }
        return replaceTagNameWithModuleName(formattedDescription);
      };

      propTypes.push(dedent`
    /**
     * ${propDescription()}
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
       * ${replaceTagNameWithModuleName(
         turndownService.turndown((eventSpec.description || '').trim()).replace(/\n/g, '\n   * ')
       )}
       */
       on${capitalizeFirstLetter(snakeToCamel(eventSpec.name))}?: ${eventParameters.tsType};
      `);
    });

  const uniqueAdditionalImports = [...new Set(importStatements)];

  const formatDescription = () => {
    let description = componentSpec.description;
    if (!description) {
      return ['', ''];
    }
    //strip overview heading
    description = description.replace(`<h3 class="comment-api-title">Overview</h3>`, '');
    //strip ES6 Module import
    description = description.slice(0, description.indexOf(`<h3>ES6 Module Import</h3>`));
    if (!componentSpec.tagname) {
      return description.split(/(?=<h3>)/, 2);
    }
    //replace tag-name with module-name
    description = description.replace(new RegExp(componentSpec.tagname, 'g'), `${componentSpec.module}`);
    //replace other ui5 tag-names
    description = replaceTagNameWithModuleName(description);
    const [mainDescription, ...rest] = description.split(/(?=<h3>)/);
    return [mainDescription, rest.join('<h3>')];
  };

  const [mainDescription, description = ''] = formatDescription();

  if (EXCLUDE_LIST.includes(componentSpec.module)) {
    console.warn(
      `----------------------\n${componentSpec.module} has been excluded from component generation. To include it again remove the component name from the "EXCLUDE_LIST".\n----------------------`
    );
  }

  if (
    (CREATE_SINGLE_COMPONENT === componentSpec.module || !CREATE_SINGLE_COMPONENT) &&
    !EXCLUDE_LIST.includes(componentSpec.module)
  ) {
    const webComponentWrapper = createWebComponentWrapper(
      componentSpec.module,
      componentSpec.tagname,
      mainDescription,
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
    const libContent = prettier.format(
      `
    import { ${componentSpec.module} } from '../webComponents/${componentSpec.module}';
    import type { ${componentSpec.module}PropTypes } from '../webComponents/${componentSpec.module}';

    export { ${componentSpec.module} };
    export type { ${componentSpec.module}PropTypes };`,
      prettierConfig
    );
    fs.writeFileSync(path.join(DIST_DIR, `${componentSpec.module}.ts`), libContent);

    // create test
    if (!fs.existsSync(path.join(webComponentFolderPath, `${componentSpec.module}.test.tsx`))) {
      const webComponentTest = prettier.format(testTemplate({ name: componentSpec.module}), prettierConfig);
      fs.writeFileSync(path.join(webComponentFolderPath, `${componentSpec.module}.test.tsx`), webComponentTest);
    }

    // create demo
    if (
      CREATE_SINGLE_COMPONENT === componentSpec.module ||
      (!fs.existsSync(path.join(webComponentFolderPath, `${componentSpec.module}.stories.mdx`)) &&
        !COMPONENTS_WITHOUT_DEMOS.has(componentSpec.module))
    ) {
      const webComponentDemo = createWebComponentDemo(componentSpec, allComponentProperties, description);
      fs.writeFileSync(path.join(webComponentFolderPath, `${componentSpec.module}.stories.mdx`), webComponentDemo);
    }
  }
});
