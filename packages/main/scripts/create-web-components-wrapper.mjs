/* eslint-disable @typescript-eslint/no-var-requires */
import fioriWebComponentsSpec from '@ui5/webcomponents-fiori/dist/api.json' assert { type: 'json' };
import mainWebComponentsSpec from '@ui5/webcomponents/dist/api.json' assert { type: 'json' };
import dedent from 'dedent';
import fs from 'node:fs';
import path from 'node:path';
import prettier from 'prettier';
import PATHS from '../../../config/paths.js';
import {
  COMPONENTS_WITHOUT_DEMOS,
  KNOWN_ATTRIBUTES,
  KNOWN_EVENTS,
  PRIVATE_COMPONENTS
} from '../../../scripts/web-component-wrappers/config.js';
import { createDocumentation, createStory } from '../../../scripts/web-component-wrappers/StoryFactory.js';
import { renderComponentWrapper, renderTest } from '../../../scripts/web-component-wrappers/templates/index.js';
import * as Utils from '../../../scripts/web-component-wrappers/utils.js';
import {
  formatDemoDescription,
  getCommonPropsToBeOmitted,
  getDomRefGetters,
  getDomRefMethods,
  getDomRefObjects
} from '../../../scripts/web-component-wrappers/utils.js';
import versionInfo from '../../../scripts/web-component-wrappers/version-info.json' assert { type: 'json' };

// To only create a single component, replace "false" with the component (module) name
// or execute the following command: "yarn create-webcomponents-wrapper [name]"
const CREATE_SINGLE_COMPONENT = process.argv[2] || false;

const EXCLUDE_LIST = [];

const WEB_COMPONENTS_ROOT_DIR = path.join(PATHS.packages, 'main', 'src', 'webComponents');
const ENUMS_DIR = path.join(PATHS.packages, 'main', 'src', 'enums');

const EXTENDED_PROP_DESCRIPTION = {
  primaryCalendarType: `<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />\`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";\``
};

// use JSDoc syntax here
const CUSTOM_MAIN_DESCRIPTION = {
  IllustratedMessage: (desc) => {
    return dedent`
${desc}
* 
*__Note:__ The \`title\` slot collides with the native HTML \`title\` attribute, so to customize the title (heading) of the component you need to pass it as slot. You can find out more about this [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/user-feedback-illustratedmessage--default-story#fully-customizable-title).
`;
  }
};

const CUSTOM_DESCRIPTION_REPLACE = {
  Avatar: {
    icon: (desc) => desc.replace(`<ui5-avatar icon="employee">`, `\`<Avatar icon="employee">\``)
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
      return formatExample.replace(/<ui5-suggestion-item>/g, '<SuggestionItem>');
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
      return formatExample.replace(/<ui5-suggestion-item>/g, '<SuggestionItem>');
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
// todo: add StepInput when `onInput` is available (https://github.com/SAP/ui5-webcomponents/issues/5177)
const INPUT_COMPONENTS = new Set([
  'ComboBox',
  'DatePicker',
  'DateRangePicker',
  'DateTimePicker',
  'Input',
  'MultiComboBox',
  'MultiInput',
  'TextArea',
  'TimePicker'
]);

const componentsFromFioriPackage = new Set(fioriWebComponentsSpec.symbols.map((componentSpec) => componentSpec.module));

const interfaces = new Set();
const allWebComponents = [
  ...mainWebComponentsSpec.symbols.filter((spec) => !spec.module.startsWith('types/')),
  ...fioriWebComponentsSpec.symbols.filter((spec) => !spec.module.startsWith('types/'))
].filter((item) => {
  if (item.kind === 'interface') {
    interfaces.add(item.name);
    return false;
  }
  return true;
});

fs.writeFileSync(
  path.join(PATHS.root, 'scripts', 'web-component-wrappers', 'interfaces.json'),
  JSON.stringify(Array.from(interfaces))
);

const htmlTagToModuleNameMap = new Map();
for (const spec of allWebComponents) {
  htmlTagToModuleNameMap.set(spec.tagname, spec.module);
}

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

const getEventParameters = (name, parameters) => {
  const resolvedEventParameters = parameters.map((property) => {
    return {
      ...property,
      ...Utils.getTypeDefinitionForProperty(property, { event: true })
    };
  });

  const importStatements = [`import type { Ui5CustomEvent } from '../../interfaces/index.js';`];

  const eventTarget = `${name}DomRef`;

  if (resolvedEventParameters.length === 0) {
    return {
      tsType: `(event: Ui5CustomEvent<${eventTarget}>) => void`,
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
    tsType: `(event: Ui5CustomEvent<${eventTarget}, {${detailPayload.join('; ')}}>) => void`,
    importStatements
  };
};

const createWebComponentWrapper = async (
  componentSpec,
  description,
  attributes,
  slotsAndEvents,
  importStatements,
  defaultProps,
  regularProps,
  booleanProps,
  slotProps,
  eventProps
) => {
  const eventsToBeOmitted = eventProps
    .filter((eventName) => KNOWN_EVENTS.has(eventName))
    .map((eventName) => `'${Utils.eventNameToReactEventName(eventName)}'`);
  const attributesToBeOmitted = [...regularProps, ...booleanProps]
    .filter((attribute) => KNOWN_ATTRIBUTES.has(attribute))
    .map((a) => `'${a}'`);
  const commonPropsToBeOmitted = getCommonPropsToBeOmitted(componentSpec.module);

  let domRefExtends = 'Ui5DomRef';
  if (attributesToBeOmitted.length > 0) {
    domRefExtends = `Omit<Ui5DomRef, ${attributesToBeOmitted.join(' | ')}>`;
  }

  let tsExtendsStatement = 'CommonProps';
  if (eventsToBeOmitted.length > 0 || attributesToBeOmitted.length > 0 || commonPropsToBeOmitted.length > 0) {
    tsExtendsStatement = `Omit<CommonProps, ${[
      ...attributesToBeOmitted,
      ...eventsToBeOmitted,
      ...commonPropsToBeOmitted
    ].join(' | ')}>`;
  }
  let componentDescription;
  try {
    componentDescription = Utils.formatDescription(description, componentSpec);
    if (CUSTOM_MAIN_DESCRIPTION[componentSpec.module]) {
      componentDescription = CUSTOM_MAIN_DESCRIPTION[componentSpec.module](componentDescription);
    }
  } catch (e) {
    console.warn(
      `----------------------\nHeader description of ${componentSpec.module} couldn't be generated. \nThere is probably a syntax error in the associated description that can't be fixed automatically.\n----------------------`
    );
    componentDescription = '';
  }

  const domRef = Utils.createDomRef(componentSpec, importStatements);
  const importSpecifier = `@ui5/webcomponents${
    componentsFromFioriPackage.has(componentSpec.module) ? '-fiori' : ''
  }/dist/${componentSpec.module}.js`;

  const imports = [`import '${importSpecifier}';`, ...new Set(importStatements)];

  return await renderComponentWrapper({
    name: componentSpec.module,
    imports,
    importSpecifier,
    propTypesExtends: tsExtendsStatement,
    domRefExtends,
    attributes,
    slotsAndEvents,
    description: componentDescription,
    tagName: componentSpec.tagname,
    regularProps,
    booleanProps,
    slotProps: slotProps.filter((name) => name !== 'children'),
    eventProps,
    defaultProps,
    domRef,
    baseComponentName:
      typeof COMPONENTS_WITHOUT_DEMOS[componentSpec.module] === 'string'
        ? COMPONENTS_WITHOUT_DEMOS[componentSpec.module]
        : componentSpec.module
  });
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
  assignComponentPropertiesToMaps(componentSpec, {
    properties,
    slots,
    events,
    methods
  });

  if (
    componentSpec.extends === 'UI5Element' ||
    componentSpec.extends === 'sap.ui.webc.base.UI5Element' ||
    componentSpec.extends === 'TabBase' // not longer existing but wrong docs, treat as UI5 Element
  ) {
    return { properties, slots, events, methods };
  }

  const parentComponent = allWebComponents.find((c) => {
    if (!componentSpec.extends) {
      debugger;
    }
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
  if (componentSpec.extends === 'UI5Element' || componentSpec.extends === 'sap.ui.webc.base.UI5Element') {
    // no inheritance, just return the component
    return componentSpec;
  }

  const properties = new Map();
  const slots = new Map();
  const events = new Map();
  const methods = new Map();
  recursivePropertyResolver(componentSpec, {
    properties,
    slots,
    events,
    methods
  });

  componentSpec.properties = Array.from(properties.values());
  componentSpec.slots = Array.from(slots.values());
  componentSpec.events = Array.from(events.values());
  componentSpec.methods = Array.from(methods.values());

  return componentSpec;
};

[
  ...mainWebComponentsSpec.symbols.filter((spec) => spec.module.startsWith('types/') && spec.visibility === 'public'),
  ...fioriWebComponentsSpec.symbols.filter((spec) => spec.module.startsWith('types/') && spec.visibility === 'public')
].forEach((spec) => {
  const template = dedent`
  // Generated file - do not change manually! 
  
  import ${spec.basename} from '@ui5/webcomponents${componentsFromFioriPackage.has(spec.module) ? '-fiori' : ''}/dist/${
    spec.resource
  }';
  
  export { ${spec.basename} }
  
  `;

  fs.writeFileSync(path.join(ENUMS_DIR, `${spec.basename}.ts`), prettier.format(template, Utils.prettierConfig));
});

const propDescription = (componentSpec, property) => {
  if (!componentSpec.tagname) {
    return property.description || '';
  }
  let formattedDescription = Utils.formatDescription(property.description, componentSpec);

  const customDescriptionReplace = CUSTOM_DESCRIPTION_REPLACE[componentSpec.module];
  if (customDescriptionReplace && customDescriptionReplace[property.name]) {
    formattedDescription = customDescriptionReplace[property.name](formattedDescription);
  }

  const extendedDescription = EXTENDED_PROP_DESCRIPTION[property.name] ?? '';

  if (property.name !== 'children' && componentSpec?.slots?.some((item) => item.name === property.name)) {
    formattedDescription += `
          *
          * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="${property.name}"\`). 
          * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
          *
          * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
          * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`;
  }

  return replaceTagNameWithModuleName(`${formattedDescription}${extendedDescription}`);
};

allWebComponents
  .filter((spec) => spec.visibility === 'public')
  .filter((spec) => !PRIVATE_COMPONENTS[spec.module])
  .map(resolveInheritedAttributes)
  .forEach(async (componentSpec) => {
    const attributes = [];
    const slotsAndEvents = [];
    const importStatements = [];
    const defaultProps = [];
    const allComponentProperties = (componentSpec.properties || [])
      .filter(
        (prop) =>
          prop.visibility === 'public' && prop.readonly !== 'true' && prop.static !== true && prop.type !== 'object'
      )
      .map((property) => {
        const tsType = Utils.getTypeDefinitionForProperty(property);
        if (tsType.importStatement) {
          importStatements.push(tsType.importStatement);
        }

        attributes.push(dedent`
        /**
         * ${propDescription(componentSpec, property)}
         */
         ${property.name}?: ${tsType.tsType};
        `);

        if (
          property.hasOwnProperty('defaultValue') &&
          property.name !== 'wrappingType' &&
          property.defaultValue !== 'undefined'
        ) {
          if (tsType.tsType === 'boolean') {
            if (property.defaultValue === 'true') {
              defaultProps.push(`${property.name}: true`);
            }
          } else if (tsType.isEnum === true) {
            defaultProps.push(`${property.name}: ${tsType.enum}.${property.defaultValue.replace(/['"]/g, '')}`);
          } else if (tsType.tsType !== 'string' || (tsType.tsType === 'string' && property.defaultValue !== '""')) {
            defaultProps.push(`${property.name}: ${property.defaultValue}`);
          }
        }

        return {
          ...property,
          ...tsType
        };
      });
    allComponentProperties.push(
      ...(componentSpec.slots || [])
        .filter((prop) => prop.visibility === 'public' && prop.readonly !== 'true' && prop.static !== true)
        .map((property) => {
          const tsType = Utils.getTypeDefinitionForProperty(property, { slot: true });
          if (tsType.importStatement) {
            importStatements.push(tsType.importStatement);
          }

          if (property.name === 'default') {
            property.name = 'children';
          }

          slotsAndEvents.push(dedent`
        /**
         * ${propDescription(componentSpec, property)}
         */
         ${property.name}?: ${tsType.tsType};
        `);

          return {
            ...property,
            ...tsType
          };
        })
    );

    (componentSpec.events || [])
      .filter((eventSpec) => eventSpec.visibility === 'public')
      .forEach((eventSpec) => {
        let eventParameters;
        if (eventSpec.native === 'true') {
          const eventTarget = `${componentSpec.module}DomRef`;
          if (eventSpec.name === 'click') {
            eventParameters = {
              tsType: `MouseEventHandler<${eventTarget}>`,
              importStatements: ["import { MouseEventHandler } from 'react';"]
            };
          } else if (eventSpec.name === 'drop') {
            eventParameters = {
              tsType: `DragEventHandler<${eventTarget}>`,
              importStatements: ["import { DragEventHandler } from 'react';"]
            };
          } else {
            console.warn(
              `----------------------\n${componentSpec.module}: ${eventSpec.name} event didn't receive its type, please add it to the script! \n----------------------`
            );
          }
        } else {
          eventParameters = getEventParameters(componentSpec.module, eventSpec.parameters || []);
        }
        importStatements.push(...eventParameters.importStatements);
        let onChangeDescription;
        if (INPUT_COMPONENTS.has(componentSpec.module) && eventSpec.name === 'change') {
          onChangeDescription = `
      *
      *__Note:__ This event is NOT the same as the native \`onChange\` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use \`onInput\` instead. `;
        }
        slotsAndEvents.push(dedent`
      /**
       * ${replaceTagNameWithModuleName(Utils.formatDescription(eventSpec.description, componentSpec))}${
          onChangeDescription ?? ''
        }
       */
       ${Utils.eventNameToReactEventName(eventSpec.name)}?: ${eventParameters.tsType};
      `);
      });

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

    let [mainDescription, description = ''] = formatDescription();
    if (EXCLUDE_LIST.includes(componentSpec.module)) {
      console.warn(
        `----------------------\n${componentSpec.module} has been excluded from component generation. To include it again remove the component name from the "EXCLUDE_LIST".\n----------------------`
      );
    }

    // check if folder exists and create it if necessary
    const webComponentFolderPath = path.join(WEB_COMPONENTS_ROOT_DIR, componentSpec.module);
    if (!fs.existsSync(webComponentFolderPath)) {
      fs.mkdirSync(webComponentFolderPath);
    }

    // create empty index file for eslint
    const webComponentWrapperPath = path.join(webComponentFolderPath, 'index.tsx');
    if (!fs.existsSync(webComponentWrapperPath)) {
      fs.writeFileSync(webComponentWrapperPath, '');
    }

    // fill index
    if (
      (CREATE_SINGLE_COMPONENT === componentSpec.module || !CREATE_SINGLE_COMPONENT) &&
      !EXCLUDE_LIST.includes(componentSpec.module)
    ) {
      const regularPropsToOmit = new Set(['boolean', 'Boolean', 'object', 'Object']);
      const webComponentWrapper = await createWebComponentWrapper(
        componentSpec,
        mainDescription,
        attributes,
        slotsAndEvents,
        importStatements,
        defaultProps,
        (componentSpec.properties || [])
          .filter(filterNonPublicAttributes)
          .filter(({ type }) => !regularPropsToOmit.has(type))
          .map(({ name }) => name),
        (componentSpec.properties || [])
          .filter(filterNonPublicAttributes)
          .filter(({ type }) => type === 'boolean' || type === 'Boolean')
          .map(({ name }) => name),
        (componentSpec.slots || []).filter(filterNonPublicAttributes).map(({ name }) => name),
        (componentSpec.events || []).filter(filterNonPublicAttributes).map(({ name }) => name)
      );
      fs.writeFileSync(webComponentWrapperPath, webComponentWrapper);

      // create test
      if (!fs.existsSync(path.join(webComponentFolderPath, `${componentSpec.module}.cy.tsx`))) {
        const webComponentTest = renderTest({ name: componentSpec.module, tagname: componentSpec.tagname });
        fs.writeFileSync(path.join(webComponentFolderPath, `${componentSpec.module}.cy.tsx`), webComponentTest);
      }

      // create demo
      const componentWithoutDemo = COMPONENTS_WITHOUT_DEMOS[componentSpec.module];
      // create subcomponent description
      if (typeof componentWithoutDemo === 'string') {
        if (componentSpec.since) {
          mainDescription = `<b>Since:</b> ${versionInfo[componentSpec.since]}<br/><br/>` + mainDescription;
        }
        const subComponentDescription = `${formatDemoDescription(
          mainDescription,
          componentSpec,
          false
        )}\n${formatDemoDescription(description, componentSpec, false)}`;
        fs.writeFileSync(
          path.join(webComponentFolderPath, `${componentSpec.module}Description.md`),
          subComponentDescription
        );
      }
      if (!componentWithoutDemo) {
        const formattedDescription = formatDemoDescription(description, componentSpec);
        // create component description
        if (formattedDescription) {
          fs.writeFileSync(
            path.join(webComponentFolderPath, `${componentSpec.module}Description.md`),
            formattedDescription
          );
        }
        // create attributes & methods table
        const publicProperties = [
          ...getDomRefGetters(componentSpec),
          ...getDomRefObjects(componentSpec),
          ...getDomRefMethods(componentSpec)
        ];

        if (publicProperties.length) {
          fs.writeFileSync(
            path.join(webComponentFolderPath, `${componentSpec.module}DomRef.json`),
            prettier.format(JSON.stringify(publicProperties), {
              ...Utils.prettierConfig,
              parser: 'json'
            })
          );
          let hasMethodsTable = false;
          if (fs.existsSync(path.join(webComponentFolderPath, `${componentSpec.module}.stories.mdx`))) {
            hasMethodsTable = fs
              .readFileSync(path.join(webComponentFolderPath, `${componentSpec.module}.stories.mdx`))
              .toString()
              .includes(`<DomRefTable rows={${componentSpec.module}DomRef.json} />`);
          } else if (fs.existsSync(path.join(webComponentFolderPath, `${componentSpec.module}.mdx`))) {
            hasMethodsTable = fs
              .readFileSync(path.join(webComponentFolderPath, `${componentSpec.module}.mdx`))
              .toString()
              .includes(`<DomRefTable rows={${componentSpec.module}DomRef.json} />`);
          }
          if (hasMethodsTable) {
            console.warn(
              `----------------------\n${componentSpec.module} doesn't has a DomRef table yet. Don't forget to add it to the story.\n----------------------`
            );
          }
        }
        // create story file (demo)

        if (
          CREATE_SINGLE_COMPONENT === componentSpec.module ||
          (!fs.existsSync(path.join(webComponentFolderPath, `${componentSpec.module}.stories.mdx`)) &&
            !fs.existsSync(path.join(webComponentFolderPath, `${componentSpec.module}.stories.tsx`)))
        ) {
          await createStory(componentSpec, allComponentProperties);
          await createDocumentation(componentSpec, allComponentProperties, description);
        }
      }
    }
  });

// create index file for exporting all web components
fs.writeFileSync(
  path.join(WEB_COMPONENTS_ROOT_DIR, 'index.ts'),
  fs
    .readdirSync(WEB_COMPONENTS_ROOT_DIR)
    .filter((f) => fs.statSync(path.join(WEB_COMPONENTS_ROOT_DIR, f)).isDirectory())
    .map((folder) => `export * from './${folder}/index.js';`)
    .join('\n')
);
