import { ESLint } from 'eslint';
import PATHS from '../../config/paths.js';
import path from 'path';
import fs from 'fs';

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

export const getTypeDefinitionForProperty = (property, interfaces) => {
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
    case 'MessageStripDesign':
    case 'PageBackgroundDesign':
    case 'PanelAccessibleRole':
    case 'PopoverHorizontalAlign':
    case 'PopoverPlacementType':
    case 'PopoverVerticalAlign':
    case 'Priority':
    case 'SemanticColor':
    case 'SwitchDesign':
    case 'TabLayout':
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
        importStatement: `import { ${property.type} } from '@ui5/webcomponents-react/dist/${property.type}';`,
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

export const getDomRefTypingForComponent = (componentName) => {
  const availableInterfaces = fs
    .readdirSync(path.resolve(PATHS.packages, 'main', 'src', 'interfaces'))
    .filter((file) => {
      return file.startsWith('Ui5');
    })
    .map((file) => path.basename(file, '.ts'));

  if (availableInterfaces.includes(`Ui5${componentName}DomRef`)) {
    return {
      tsType: `Ui5${componentName}DomRef`,
      importStatement: `import { Ui5${componentName}DomRef } from '@ui5/webcomponents-react/interfaces/Ui5${componentName}DomRef';`
    };
  }

  return null;
};

export const runEsLint = async (text, name) => {
  const [result] = await eslint.lintText(text, {
    filePath: `packages/main/src/webComponents/${name}/index.tsx`
  });
  if (result.messages.length) {
    console.warn(`Failed to run ESLint for '${name}! Please check the file manually.'`);
    console.warn(...result.messages);
    return text;
  }
  return result.output;
};
