import dedent from 'dedent';
import { ESLint } from 'eslint';
import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import TurndownService from 'turndown';
import PATHS from '../../config/paths.js';
import { replaceTagNameWithModuleName } from '../../packages/main/scripts/create-web-components-wrapper.mjs';
import prettierConfigRaw from '../../prettier.config.cjs';
import versionInfo from './version-info.json' assert { type: 'json' };

const eslint = new ESLint({
  overrideConfig: {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: path.join(PATHS.packages, 'main', 'tsconfig.json'),
      ecmaFeatures: {
        jsx: true
      },
      tsconfigRootDir: PATHS.root
    },
    rules: {
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-empty-interface': 'off'
    }
  },
  fix: true
});

export const getTypeDefinitionForProperty = (property, options = {}) => {
  const isSlot = options.slot && property.name !== 'default' && property.name !== 'children';
  const canBeNull = property.defaultValue === 'null';
  const importStatementCanBeNull = canBeNull ? "import type { Nullable } from '../../types/index.js'" : null;

  const reactNodeType = isSlot ? 'UI5WCSlotsNode' : 'ReactNode';
  const importStatementReactNodeType = isSlot
    ? "import type { UI5WCSlotsNode } from '../../types/index.js'"
    : "import { ReactNode } from 'react';";

  const interfaces = new Set([
    ...JSON.parse(
      fs.readFileSync(path.join(PATHS.root, 'scripts', 'web-component-wrappers', 'interfaces.json')).toString()
    ),
    'ui5-suggestion-item',
    'ui5-segmented-button-item',
    'ui5-option'
  ]);

  if (interfaces.has(property.type.replace(/\[]$/, '').replace(/\|null/, ''))) {
    if (/\[]$/.test(property.type)) {
      return {
        tsType: `${reactNodeType} | ${reactNodeType}[]`,
        importStatement: importStatementReactNodeType
      };
    }
    return {
      tsType: reactNodeType,
      importStatement: importStatementReactNodeType
    };
  }

  if (property.type === 'sap.ui.webc.fiori.ISideNavigationItem|sap.ui.webc.fiori.ISideNavigationSubItem') {
    return {
      tsType: reactNodeType,
      importStatement: importStatementReactNodeType
    };
  }

  const typeWithoutNamespace = property.type.replace(/sap\.ui\.(webcomponents|webc)\.(main|fiori|base)\.types\./, '');

  switch (typeWithoutNamespace) {
    // native ts types
    case 'string':
    case 'String':
      return {
        importStatement: importStatementCanBeNull,
        tsType: canBeNull ? 'Nullable<string>' : 'string'
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
        importStatement: importStatementCanBeNull,
        tsType: canBeNull ? 'Nullable<number>' : 'number'
      };
    case 'boolean':
    case 'Boolean':
      return {
        importStatement: importStatementCanBeNull,
        tsType: canBeNull ? 'Nullable<boolean>' : 'boolean'
      };
    case 'Array':
    case 'array':
      return {
        importStatement: null,
        tsType: 'unknown[]'
      };
    case 'Date': {
      return {
        importStatement: null,
        tsType: 'Date'
      };
    }
    case 'File': {
      return {
        importStatement: importStatementCanBeNull,
        tsType: canBeNull ? 'Nullable<File>' : 'File'
      };
    }
    case 'FileList': {
      return {
        importStatement: null,
        tsType: 'FileList'
      };
    }
    case 'DataTransfer': {
      return {
        importStatement: null,
        tsType: 'DataTransfer'
      };
    }
    case 'object':
    case 'Object': {
      return {
        importStatement: null,
        tsType: 'Record<string, unknown>'
      };
    }

    // react ts types
    case 'Node[]':
    case 'HTMLElement[]':
      if (options.event) {
        return {
          tsType: 'HTMLElement[]'
        };
      }
      return {
        tsType: `${reactNodeType} | ${reactNodeType}[]`,
        importStatement: importStatementReactNodeType
      };
    case 'HTMLElement':
      if (options.event) {
        return {
          tsType: 'HTMLElement'
        };
      }
      return {
        tsType: reactNodeType,
        importStatement: importStatementReactNodeType
      };
    case 'CSSColor':
      return {
        tsType: "CSSProperties['color']",
        importStatement: "import { CSSProperties } from 'react';"
      };
    case 'AvatarColorScheme[]': {
      return {
        importStatement: `import { AvatarColorScheme } from '../../enums/index.js';`,
        tsType: `(AvatarColorScheme | keyof typeof AvatarColorScheme)[]`,
        enum: `AvatarColorScheme`,
        isEnum: true
      };
    }
    case 'DOMReference': {
      return {
        importStatement: null,
        tsType: `string | HTMLElement`
      };
    }

    // UI5 Web Component Enums
    case 'AvatarColorScheme':
    case 'AvatarGroupType':
    case 'AvatarShape':
    case 'AvatarSize':
    case 'BarDesign':
    case 'BackgroundDesign':
    case 'BusyIndicatorSize':
    case 'ButtonDesign':
    case 'ButtonType':
    case 'BorderDesign':
    case 'BreadcrumbsDesign':
    case 'BreadcrumbsSeparatorStyle':
    case 'CalendarType':
    case 'CalendarSelection':
    case 'CalendarSelectionMode':
    case 'CarouselArrowsPlacement':
    case 'CarouselPageIndicatorStyle':
    case 'ComboBoxFilter':
    case 'FCLLayout':
    case 'IconDesign':
    case 'IllustrationMessageSize':
    case 'IllustrationMessageType':
    case 'InputType':
    case 'LinkDesign':
    case 'ListItemType':
    case 'ListMode':
    case 'ListGrowingMode':
    case 'ListSeparators':
    case 'MediaGalleryLayout':
    case 'MediaGalleryItemLayout':
    case 'MediaGalleryMenuHorizontalAlign':
    case 'MediaGalleryMenuVerticalAlign':
    case 'MessageStripDesign':
    case 'PageBackgroundDesign':
    case 'PanelAccessibleRole':
    case 'PopupAccessibleRole':
    case 'PopoverHorizontalAlign':
    case 'PopoverPlacementType':
    case 'PopoverVerticalAlign':
    case 'Priority':
    case 'SegmentedButtonMode':
    case 'SemanticColor':
    case 'SideContentFallDown':
    case 'SideContentPosition':
    case 'SideContentVisibility':
    case 'SwitchDesign':
    case 'TabContainerBackgroundDesign':
    case 'TabContainerTabsPlacement':
    case 'TabLayout':
    case 'TabsOverflowMode':
    case 'TableColumnPopinDisplay':
    case 'TableGrowingMode':
    case 'TableMode':
    case 'TableRowType':
    case 'TimelineLayout':
    case 'TitleLevel':
    case 'ToastPlacement':
    case 'ToolbarAlign':
    case 'ToolbarItemOverflowBehavior':
    case 'UploadState':
    case 'ValueState':
    case 'ViewSettingsDialogMode':
    case 'WizardContentLayout':
    case 'WrappingType':
      return {
        importStatement: `import { ${typeWithoutNamespace} } from '../../enums/index.js';`,
        tsType: `${typeWithoutNamespace} | keyof typeof ${typeWithoutNamespace}`,
        enum: `${typeWithoutNamespace}`,
        isEnum: true
      };
    default:
      throw new Error(`Unknown type: ${typeWithoutNamespace}. ${JSON.stringify(property)}`);
  }
};

export const runEsLint = async (text, name) => {
  const [result] = await eslint.lintText(text, {
    filePath: `packages/main/src/webComponents/${name}/index.tsx`
  });
  if (result.messages.some((message) => message.severity === 2)) {
    console.warn(`Failed to run ESLint for '${name}! Please check the file manually.'`);
    console.warn(...result.messages);
    return text;
  }
  return result.output;
};

export const getDomRefGetters = (componentSpec) =>
  componentSpec.properties?.filter((prop) => prop.visibility === 'public' && prop.readonly === 'true') ?? [];

export const getDomRefObjects = (componentSpec) =>
  componentSpec.properties?.filter((prop) => prop.visibility === 'public' && prop.type === 'object') ?? [];

export const getDomRefMethods = (componentSpec) =>
  componentSpec.methods?.filter((method) => method.visibility === 'public') ?? [];

export const createDomRef = (componentSpec, importStatements) => {
  const isOptionalParameter = (p) => {
    return p.optional || p.hasOwnProperty('defaultValue');
  };
  const resolveTsTypeForMethods = (param) => {
    let tsType;
    if (param.type === 'HTMLElement') {
      tsType = 'HTMLElement | EventTarget';
    } else if (param.type === 'function' && componentSpec.module === 'Tree') {
      tsType = '(treeNode: HTMLElement, level: number) => void';
    } else if (
      param.type === 'object' &&
      ['DatePicker', 'DateRangePicker', 'DateTimePicker', 'TimePicker'].includes(componentSpec.module)
    ) {
      tsType = 'Date';
    } else {
      const tsDefinition = getTypeDefinitionForProperty(param);
      importStatements.push(tsDefinition.importStatement);
      tsType = tsDefinition.tsType;
    }
    return tsType;
  };

  const getters = getDomRefGetters(componentSpec).map((prop) => {
    const tsDefinition = getTypeDefinitionForProperty(prop);
    importStatements.push(tsDefinition.importStatement);
    return dedent`
    /**
     * ${propDescription(componentSpec, prop)}
     */
     readonly ${prop.name}: ${tsDefinition.tsType};
    `;
  });

  const objects = getDomRefObjects(componentSpec).map((prop) => {
    return dedent`
    /**
     * ${propDescription(componentSpec, prop)}
     */
     ${prop.name}: Record<string, unknown>;
    `;
  });

  const methods = getDomRefMethods(componentSpec).map((method) => {
    let returnValue = 'void';
    const params = method.parameters?.map((param) => {
      return ` * @param {${resolveTsTypeForMethods(param)}} ${isOptionalParameter(param) ? '[' : ''}${param.name}${
        isOptionalParameter(param) ? ']' : ''
      } - ${param.description}`;
    });
    if (method.returnValue) {
      switch (method.returnValue.type) {
        case 'Promise':
          returnValue = 'Promise<void>';
          break;
        default:
          returnValue = method.returnValue.type;
      }
    }
    const joinedParams = params?.join('\n');
    return dedent`
          /**
           * ${propDescription(componentSpec, method)}${joinedParams ? `\n${joinedParams}` : ''}${
             returnValue && returnValue !== 'void'
               ? `\n* @returns {${returnValue}} ${method.returnValue.description ?? ''}`
               : ''
           }
           */
          ${method.name}: (${
            method.parameters
              ?.map((p) => `${p.name}${isOptionalParameter(p) ? '?' : ''}: ${resolveTsTypeForMethods(p)}`)
              .join(', ') ?? ''
          }) => ${returnValue}
          `;
  });
  return [...getters, ...objects, ...methods];
};

export const prettierConfig = {
  ...prettierConfigRaw,
  parser: 'typescript'
};

export const capitalizeFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const snakeToCamel = (str) => str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());

export const eventNameToReactEventName = (eventName) => {
  return `on${capitalizeFirstLetter(snakeToCamel(eventName))}`;
};

export const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});
turndownService.keep(['ui5-link']);

export const replaceEventNamesInDescription = (description, componentSpec) => {
  if (!componentSpec.events) {
    return description;
  }
  let newDescription = description;
  const eventNamesToReplace = componentSpec.events.map((event) => event.name);
  eventNamesToReplace.forEach((eventName) => {
    // only replace events and not HTML elements with the same name.
    switch (eventName) {
      case 'input':
        if (description.includes(`\`input\` HTML element`)) {
          return;
        }
      case 'close':
        if (description.includes(`\`close\` button`)) {
          return;
        }
      default:
        newDescription = newDescription.replaceAll(`\`${eventName}\``, `\`${eventNameToReactEventName(eventName)}\``);
    }
  });
  return newDescription;
};

export function replaceUi5VersionInfo(description) {
  if (description) {
    description = description.replace(/(?<major>\d+)\.(?<minor>\d+).(?<patch>\d+)/gm, (val) => {
      return versionInfo[val] || val;
    });
  }
  return description;
}

/**
 *
 * @param {string} description description to format
 * @param {object} componentSpec
 * @return {string}
 */
export const formatDescription = (description, componentSpec, isJSDoc = true) => {
  description = replaceUi5VersionInfo(description);
  if (isJSDoc) {
    description = turndownService.turndown((description || '').trim()).replaceAll('\n', '\n   * ');
  } else {
    description = turndownService.turndown((description || '').trim());
  }
  description = replaceEventNamesInDescription(description, componentSpec);
  return description;
};

export const formatDemoDescription = async (description, componentSpec, replaceHeadingTags = true) => {
  let formattedDescription = description.replace(/<br>/g, `<br/>`).replace(/\s\s+/g, ' ');
  if (replaceHeadingTags) {
    formattedDescription = formattedDescription.replace(/h3/g, 'h2').replace(/h4/g, 'h3');
  }

  try {
    if (formattedDescription) {
      formattedDescription = formatDescription(formattedDescription, componentSpec, false);
    }
  } catch (e) {
    formattedDescription = '';
    console.warn(
      `----------------------\nDescription of ${componentSpec.module} couldn't be generated. \nThere is probably a syntax error in the associated description that can't be fixed automatically.\n----------------------`
    );
  }

  return await prettier.format(formattedDescription, { ...prettierConfigRaw, parser: 'markdown' });
};

export function getCommonPropsToBeOmitted(moduleName) {
  switch (moduleName) {
    case 'TreeItemCustom':
      return ["'content'"];
    default:
      return [];
  }
}

const CUSTOM_DESCRIPTION_REPLACE = {
  Avatar: {
    icon: (desc) => {
      return desc.replace(`<ui5-avatar icon="employee">`, `\`<Avatar icon="employee">\``);
    }
  },
  Input: {
    children: (description) => {
      return description.replace(/<ui5-suggestion-item>/g, '<SuggestionItem>');
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

const EXTENDED_PROP_DESCRIPTION = {
  primaryCalendarType: `<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />\`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";\``
};

export const propDescription = (componentSpec, property) => {
  if (!componentSpec.tagname) {
    return property.description || '';
  }
  let formattedDescription = formatDescription(property.description, componentSpec);

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

  if (property.deprecated?.text) {
    formattedDescription += `
          *
          * @deprecated ${property.deprecated.text}`;
  }

  return replaceTagNameWithModuleName(`${formattedDescription}${extendedDescription}`);
};
