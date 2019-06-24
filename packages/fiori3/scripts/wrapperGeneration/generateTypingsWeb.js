import UI5ButtonType from '@ui5/webcomponents/dist/types/ButtonType';
import UI5Icon from '@ui5/webcomponents/dist/Icon';
import UI5InputType from '@ui5/webcomponents/dist/types/InputType';
import UI5LinkType from '@ui5/webcomponents/dist/types/LinkType';
import UI5ListMode from '@ui5/webcomponents/dist/types/ListMode';
import UI5ListItemTypes from '@ui5/webcomponents/dist/types/ListItemType';
import UI5PopoverPlacementTypes from '@ui5/webcomponents/dist/types/PopoverPlacementType';
import UI5BusyIndicatorType from '@ui5/webcomponents/dist/types/BusyIndicatorType';
import UI5ListSeparators from '@ui5/webcomponents/dist/types/ListSeparators';
import UI5PanelAccessibleRoles from '@ui5/webcomponents/dist/types/PanelAccessibleRole';
import UI5PopoverHorizontalAligns from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign';
import UI5PopoverVerticalAligns from '@ui5/webcomponents/dist/types/PopoverVerticalAlign';
import UI5SemanticColors from '@ui5/webcomponents/dist/types/SemanticColor';
import UI5TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel';
import UI5MessageStripType from '@ui5/webcomponents/dist/types/MessageStripType';
import CSSSize from '@ui5/webcomponents-base/src/types/CSSSize';
import Integer from '@ui5/webcomponents-base/src/types/Integer';
import UI5ValueState from '@ui5/webcomponents-base/src/types/ValueState';
import UI5CalendarType from '@ui5/webcomponents-base/src/dates/CalendarType';
import TimelineItem from '@ui5/webcomponents/dist/TimelineItem';

const mappings = {
  [UI5ButtonType]: {
    importStatement: "import { ButtonType } from '../../lib/ButtonType';",
    tsType: 'ButtonType',
    isEnum: true
  },
  [UI5PopoverPlacementTypes]: {
    importStatement: "import { PlacementType } from '../../lib/PlacementType';",
    tsType: 'PlacementType',
    isEnum: true
  },
  [UI5BusyIndicatorType]: {
    importStatement: "import { BusyIndicatorType } from '../../lib/BusyIndicatorType';",
    tsType: 'BusyIndicatorType',
    isEnum: true
  },
  [UI5PopoverHorizontalAligns]: {
    importStatement: "import { PopoverHorizontalAlign } from '../../lib/PopoverHorizontalAlign';",
    tsType: 'PopoverHorizontalAlign',
    isEnum: true
  },
  [UI5PopoverVerticalAligns]: {
    importStatement: "import { PopoverVerticalAlign } from '../../lib/PopoverVerticalAlign';",
    tsType: 'PopoverVerticalAlign',
    isEnum: true
  },
  [UI5LinkType]: {
    importStatement: "import { LinkType } from '../../lib/LinkType';",
    tsType: 'LinkType',
    isEnum: true
  },
  [UI5SemanticColors]: {
    importStatement: "import { SemanticColor } from '../../lib/SemanticColor';",
    tsType: 'SemanticColor',
    isEnum: true
  },
  [UI5ListItemTypes]: {
    importStatement: "import { ListItemTypes } from '../../lib/ListItemTypes';",
    tsType: 'ListItemTypes',
    isEnum: true
  },
  [UI5PanelAccessibleRoles]: {
    importStatement: "import { PanelAccessibleRoles } from '../../lib/PanelAccessibleRoles';",
    tsType: 'PanelAccessibleRoles',
    isEnum: true
  },
  [UI5ListSeparators]: {
    importStatement: "import { ListSeparators } from '../../lib/ListSeparators';",
    tsType: 'ListSeparators',
    isEnum: true
  },
  [UI5ListMode]: {
    importStatement: "import { ListMode } from '../../lib/ListMode';",
    tsType: 'ListMode',
    isEnum: true
  },
  [UI5TitleLevel]: {
    importStatement: "import { TitleLevel } from '../../lib/TitleLevel';",
    tsType: 'TitleLevel',
    isEnum: true
  },
  [UI5InputType]: {
    importStatement: "import { InputType } from '../../lib/InputType';",
    tsType: 'InputType',
    isEnum: true
  },
  [UI5Icon]: {
    tsType: 'any',
    comment: 'UI5 Icon Web Component'
  },
  [UI5CalendarType]: {
    importStatement: "import { CalendarType } from '../../lib/CalendarType';",
    tsType: 'CalendarType',
    isEnum: true
  },
  [UI5ValueState]: {
    importStatement: "import { ValueState } from '../../lib/ValueState';",
    tsType: 'ValueState',
    isEnum: true
  },
  [UI5MessageStripType]: {
    importStatement: "import { MessageStripType } from '../../lib/MessageStripType';",
    tsType: 'MessageStripType',
    isEnum: true
  },
  [Boolean]: {
    tsType: 'boolean',
    defaultPropAsString: false
  },
  [CSSSize]: {
    tsType: "CSSProperties['width'] | CSSProperties['height']",
    reactImport: 'CSSProperties'
  },
  [String]: {
    tsType: 'string'
  },
  [Integer]: {
    tsType: 'number',
    defaultPropAsString: false
  },
  [HTMLElement]: {
    tsType: 'HTMLElement'
  },
  [TimelineItem]: {
    tsType: 'ReactNode',
    reactImport: 'ReactNode'
  }
};

const reactNodeType = {
  tsType: 'ReactNode',
  reactImport: 'ReactNode'
};

function parseSlots(meta, typings) {
  Object.entries(meta.slots).forEach(([slotKey, slot]) => {
    const typeMeta = mappings[slot.type];
    let propKey = slotKey === meta.defaultSlot ? 'children' : slotKey;

    if (typeMeta) {
      typings[propKey] = {
        ...(typeMeta.tsType === 'HTMLElement' ? reactNodeType : typeMeta),
        originalProp: slot
      };
    } else {
      typings[propKey] = {
        tsType: 'any',
        originalProp: slot
      };
    }
  });
}

function capitalizeFirstLetter(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function mapEventName(event) {
  return 'on' + capitalizeFirstLetter(event);
}

function mapDefaultValue(val) {
  return val === Infinity ? val.toString() : val;
}

const defaultValueWhiteList = [undefined, null, Infinity];

function getDefaultProp(props, typeMeta, key) {
  if (Object.keys(props).includes('defaultValue')) {
    // if(key === 'minWidth') {
    //   console.log(props.defaultValue);
    //   console.log(JSON.stringify(props.defaultValue));
    //   console.log(props.defaultValue === Infinity);
    //   console.log(props.defaultValue == null);
    //   console.log(!defaultValueWhiteList.includes(props.defaultValue) && !typeMeta.isEnum);
    // }
    return {
      defaultValue: mapDefaultValue(props.defaultValue),
      defaultPropAsString:
        (typeMeta.hasOwnProperty('defaultPropAsString') ? typeMeta.defaultPropAsString : true) &&
        !defaultValueWhiteList.includes(props.defaultValue) &&
        !typeMeta.isEnum
    };
  }
  return null;
}

export function generateTypings(meta) {
  const typings = {};

  Object.entries(meta.properties)
    .filter(([key]) => !key.startsWith('_'))
    .forEach(([key, prop]) => {
      const typeMeta = mappings[prop.type];

      if (typeMeta) {
        const defaultProp = getDefaultProp(prop, typeMeta, key);
        typings[key] = {
          ...typeMeta,
          ...(defaultProp || {}),
          originalProp: prop
        };
      } else {
        typings[key] = {
          tsType: 'any',
          originalProp: prop
        };
      }
    });

  Object.entries(meta.events)
    .filter(([key]) => !key.startsWith('_'))
    .forEach(([key]) => {
      typings[mapEventName(key)] = {
        tsType: '(event : Event) => void',
        importStatement: "import { Event } from '@ui5-webcomponents-react/base';"
      };
    });

  if (meta.usesNodeText) {
    typings['children'] = {
      tsType: 'string'
    };
  }

  parseSlots(meta, typings);

  return typings;
}
