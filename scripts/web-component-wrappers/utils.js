import dedent from 'dedent';
import { ESLint } from 'eslint';
import fs from 'fs';
import path from 'path';
import TurndownService from 'turndown';
import PATHS from '../../config/paths.js';
import prettierConfigRaw from '../../prettier.config.cjs';

const eslint = new ESLint({
  overrideConfig: {
    parserOptions: {
      project: path.join(PATHS.packages, 'main', 'tsconfig.json')
    },
    rules: {
      'import/no-unresolved': 'off'
    }
  },
  fix: true
});

export const getTypeDefinitionForProperty = (property) => {
  const interfaces = new Set([
    ...JSON.parse(
      fs.readFileSync(path.join(PATHS.root, 'scripts', 'web-component-wrappers', 'interfaces.json')).toString()
    ),
    'ui5-suggestion-item',
    'ui5-segmented-button-item',
    'ui5-option'
  ]);

  if (interfaces.has(property.type.replace(/\[]$/, ''))) {
    if (/\[]$/.test(property.type)) {
      return {
        tsType: 'ReactNode | ReactNode[]',
        importStatement: "import { ReactNode } from 'react';"
      };
    }
    return {
      tsType: 'ReactNode',
      importStatement: "import { ReactNode } from 'react';"
    };
  }

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
    case 'Date': {
      return {
        importStatement: null,
        tsType: 'Date'
      };
    }
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
      return {
        tsType: 'ReactNode | ReactNode[]',
        importStatement: "import { ReactNode } from 'react';"
      };
    case 'HTMLElement':
      return {
        tsType: 'ReactNode',
        importStatement: "import { ReactNode } from 'react';"
      };
    case 'CSSColor':
      return {
        tsType: "CSSProperties['color']",
        importStatement: "import { CSSProperties } from 'react';"
      };
    case 'AvatarColorScheme[]': {
      return {
        importStatement: `import { AvatarColorScheme } from '../../enums';`,
        tsType: `Array<${property.type} | keyof typeof ${property.type}>`,
        enum: `AvatarColorScheme`,
        isEnum: true
      };
    }
    // UI5 Web Component Enums
    case 'AvatarColorScheme':
    case 'AvatarGroupType':
    case 'AvatarShape':
    case 'AvatarSize':
    case 'BarDesign':
    case 'BusyIndicatorSize':
    case 'ButtonDesign':
    case 'BreadcrumbsDesign':
    case 'BreadcrumbsSeparatorStyle':
    case 'CalendarType':
    case 'CalendarSelection':
    case 'CalendarSelectionMode':
    case 'CarouselArrowsPlacement':
    case 'FCLLayout':
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
    case 'PopoverHorizontalAlign':
    case 'PopoverPlacementType':
    case 'PopoverVerticalAlign':
    case 'Priority':
    case 'SemanticColor':
    case 'SideContentFallDown':
    case 'SideContentPosition':
    case 'SideContentVisibility':
    case 'SwitchDesign':
    case 'TabLayout':
    case 'TabsOverflowMode':
    case 'TableGrowingMode':
    case 'TableMode':
    case 'TableRowType':
    case 'TimelineLayout':
    case 'TitleLevel':
    case 'ToastPlacement':
    case 'UploadState':
    case 'ValueState':
    case 'WrappingType':
      return {
        importStatement: `import { ${property.type} } from '../../enums';`,
        tsType: `${property.type} | keyof typeof ${property.type}`,
        enum: `${property.type}`,
        isEnum: true
      };
    default:
      throw new Error(`Unknown type ${JSON.stringify(property)}`);
  }
};

export const getEventTargetForComponent = (componentName) => {
  switch (componentName) {
    case 'CheckBox':
    case 'ComboBox':
    case 'DatePicker':
    case 'DateRangePicker':
    case 'DateTimePicker':
    case 'DurationPicker':
    case 'Input':
    case 'MultiComboBox':
    case 'MultiInput':
    case 'RangeSlider':
    case 'RatingIndicator':
    case 'Slider':
    case 'StepInput':
    case 'Switch':
    case 'TimePicker':
    case 'RadioButton':
      return 'HTMLInputElement';
    case 'Option':
      return 'HTMLOptionElement';
    case 'Button':
    case 'SegmentedButton':
      return 'HTMLButtonElement';
    case 'Select':
      return 'HTMLSelectElement';
    case 'StandardListItem':
      return 'HTMLLIElement';
    case 'TextArea':
      return 'HTMLTextAreaElement';

    default:
      return 'HTMLElement';
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

export const createDomRef = (componentSpec) => {
  const importStatements = new Set();

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
      importStatements.add(tsDefinition.importStatement);
      tsType = tsDefinition.tsType;
    }
    return tsType;
  };

  const getters = (
    componentSpec.properties?.filter((prop) => prop.visibility === 'public' && prop.readonly === 'true') ?? []
  ).map((prop) => {
    const tsDefinition = getTypeDefinitionForProperty(prop);
    importStatements.add(tsDefinition.importStatement);
    return dedent`
    /**
     * ${formatDescription(prop.description, componentSpec)}
     */
     readonly ${prop.name}: ${tsDefinition.tsType};
    `;
  });

  const methods = (componentSpec.methods?.filter((method) => method.visibility === 'public') ?? []).map((method) => {
    const params = method.parameters?.map((param) => {
      return ` * @param {${resolveTsTypeForMethods(param)}} ${isOptionalParameter(param) ? '[' : ''}${param.name}${
        isOptionalParameter(param) ? ']' : ''
      } - ${param.description}`;
    });

    return dedent`
          /**
           * ${formatDescription(method.description, componentSpec)}
           ${params?.join('\n') ?? '*'}
           */
          ${method.name}: (${
      method.parameters
        ?.map((p) => `${p.name}${isOptionalParameter(p) ? '?' : ''}: ${resolveTsTypeForMethods(p)}`)
        .join(', ') ?? ''
    }) => void
          `;
  });

  return [...getters, ...methods];
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

/**
 *
 * @param {string} description description to format
 * @param {object} componentSpec
 * @return {string}
 */
export const formatDescription = (description, componentSpec) => {
  let desc = turndownService.turndown((description || '').trim()).replaceAll('\n', '\n   * ');
  desc = replaceEventNamesInDescription(desc, componentSpec);
  return desc;
};
