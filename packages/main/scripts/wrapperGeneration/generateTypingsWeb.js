import UI5CalendarType from '@ui5/webcomponents-base/dist/dates/CalendarType';
import CSSSize from '@ui5/webcomponents-base/dist/types/CSSSize';
import Integer from '@ui5/webcomponents-base/dist/types/Integer';
import UI5ValueState from '@ui5/webcomponents-base/dist/types/ValueState';
import UI5Icon from '@ui5/webcomponents/dist/Icon';
import TimelineItem from '@ui5/webcomponents/dist/TimelineItem';
import UI5BusyIndicatorSize from '@ui5/webcomponents/dist/types/BusyIndicatorSize';
import UI5ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign';
import UI5InputType from '@ui5/webcomponents/dist/types/InputType';
import UI5LinkDesign from '@ui5/webcomponents/dist/types/LinkDesign';
import UI5ListItemTypes from '@ui5/webcomponents/dist/types/ListItemType';
import UI5ListMode from '@ui5/webcomponents/dist/types/ListMode';
import UI5ListSeparators from '@ui5/webcomponents/dist/types/ListSeparators';
import UI5MessageStripType from '@ui5/webcomponents/dist/types/MessageStripType';
import UI5PanelAccessibleRoles from '@ui5/webcomponents/dist/types/PanelAccessibleRole';
import UI5PopoverHorizontalAligns from '@ui5/webcomponents/dist/types/PopoverHorizontalAlign';
import UI5PopoverPlacementTypes from '@ui5/webcomponents/dist/types/PopoverPlacementType';
import UI5PopoverVerticalAligns from '@ui5/webcomponents/dist/types/PopoverVerticalAlign';
import UI5SemanticColors from '@ui5/webcomponents/dist/types/SemanticColor';
import UI5TitleLevel from '@ui5/webcomponents/dist/types/TitleLevel';

const mappings = {
  [UI5ButtonDesign]: {
    importStatement: "import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';",
    tsType: 'ButtonDesign',
    isEnum: true
  },
  [UI5PopoverPlacementTypes]: {
    importStatement: "import { PlacementType } from '@ui5/webcomponents-react/lib/PlacementType';",
    tsType: 'PlacementType',
    isEnum: true
  },
  [UI5BusyIndicatorSize]: {
    importStatement: "import { BusyIndicatorSize } from '@ui5/webcomponents-react/lib/BusyIndicatorSize';",
    tsType: 'BusyIndicatorSize',
    isEnum: true
  },
  [UI5PopoverHorizontalAligns]: {
    importStatement: "import { PopoverHorizontalAlign } from '@ui5/webcomponents-react/lib/PopoverHorizontalAlign';",
    tsType: 'PopoverHorizontalAlign',
    isEnum: true
  },
  [UI5PopoverVerticalAligns]: {
    importStatement: "import { PopoverVerticalAlign } from '@ui5/webcomponents-react/lib/PopoverVerticalAlign';",
    tsType: 'PopoverVerticalAlign',
    isEnum: true
  },
  [UI5LinkDesign]: {
    importStatement: "import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';",
    tsType: 'LinkDesign',
    isEnum: true
  },
  [UI5SemanticColors]: {
    importStatement: "import { SemanticColor } from '@ui5/webcomponents-react/lib/SemanticColor';",
    tsType: 'SemanticColor',
    isEnum: true
  },
  [UI5ListItemTypes]: {
    importStatement: "import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';",
    tsType: 'ListItemTypes',
    isEnum: true
  },
  [UI5PanelAccessibleRoles]: {
    importStatement: "import { PanelAccessibleRoles } from '@ui5/webcomponents-react/lib/PanelAccessibleRoles';",
    tsType: 'PanelAccessibleRoles',
    isEnum: true
  },
  [UI5ListSeparators]: {
    importStatement: "import { ListSeparators } from '@ui5/webcomponents-react/lib/ListSeparators';",
    tsType: 'ListSeparators',
    isEnum: true
  },
  [UI5ListMode]: {
    importStatement: "import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';",
    tsType: 'ListMode',
    isEnum: true
  },
  [UI5TitleLevel]: {
    importStatement: "import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';",
    tsType: 'TitleLevel',
    isEnum: true
  },
  [UI5InputType]: {
    importStatement: "import { InputType } from '@ui5/webcomponents-react/lib/InputType';",
    tsType: 'InputType',
    isEnum: true
  },
  [UI5Icon]: {
    tsType: 'any',
    comment: 'UI5 Icon Web Component'
  },
  [UI5CalendarType]: {
    importStatement: "import { CalendarType } from '@ui5/webcomponents-react/lib/CalendarType';",
    tsType: 'CalendarType',
    isEnum: true
  },
  [UI5ValueState]: {
    importStatement: "import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';",
    tsType: 'ValueState',
    isEnum: true
  },
  [UI5MessageStripType]: {
    importStatement: "import { MessageStripType } from '@ui5/webcomponents-react/lib/MessageStripType';",
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
    let propKey = slotKey === 'default' ? 'children' : slotKey;

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
        importStatement: "import { Event } from '@ui5/webcomponents-react-base/lib/Event';"
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
