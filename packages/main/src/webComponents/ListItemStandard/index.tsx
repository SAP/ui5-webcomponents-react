'use client';

import '@ui5/webcomponents/dist/ListItemStandard.js';
import type { ListItemAccessibilityAttributes } from '@ui5/webcomponents/dist/ListItem.js';
import type Highlight from '@ui5/webcomponents/dist/types/Highlight.js';
import type ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface ListItemStandardAttributes {
  /**
   * Defines the text alternative of the component.
   * Note: If not provided a default text alternative will be set, if present.
   */
  accessibleName?: string;

  /**
   * Defines the `additionalText`, displayed in the end of the list item.
   */
  additionalText?: string;

  /**
   * Defines the state of the `additionalText`.
   *
   * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
   * @default "None"
   */
  additionalTextState?: ValueState | keyof typeof ValueState;

  /**
   * Defines the description displayed right under the item text, if such is present.
   */
  description?: string;

  /**
   * Defines the highlight state of the list items.
   * Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.
   *
   * **Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.
   * @default "None"
   */
  highlight?: Highlight | keyof typeof Highlight;

  /**
   * Defines the `icon` source URI.
   *
   * **Note:**
   * SAP-icons font provides numerous built-in icons. To find all the available icons, see the
   * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;

  /**
   * Defines whether the `icon` should be displayed in the beginning of the list item or in the end.
   *
   * **Note:** If `image` is set, the `icon` would be displayed after the `image`.
   * @default false
   */
  iconEnd?: boolean;

  /**
   * Defines the `image` source URI.
   *
   * **Note:** The `image` would be displayed in the beginning of the list item.
   */
  image?: string;

  /**
   * Defines whether the item is movable.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default false
   */
  movable?: boolean;

  /**
   * The navigated state of the list item.
   * If set to `true`, a navigation indicator is displayed at the end of the list item.
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   * @default false
   */
  navigated?: boolean;

  /**
   * Defines the selected state of the component.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the tooltip that would be displayed for the list item.
   *
   * **Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.
   */
  tooltip?: string;

  /**
   * Defines the visual indication and behavior of the list items.
   * Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.
   *
   * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,
   * while with type `Inactive` and `Detail` - will not.
   * @default "Active"
   */
  type?: ListItemType | keyof typeof ListItemType;
}

interface ListItemStandardDomRef extends Required<ListItemStandardAttributes>, Ui5DomRef {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   * The following fields are supported:
   *
   * - **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
   * **Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set `-1`.
   *
   * 	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
   * 	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
   *
   * **Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.
   */
  accessibilityAttributes: ListItemAccessibilityAttributes;
}

interface ListItemStandardPropTypes
  extends ListItemStandardAttributes,
    Omit<
      CommonProps,
      keyof ListItemStandardAttributes | 'children' | 'deleteButton' | 'imageContent' | 'onDetailClick'
    > {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the delete button, displayed in "Delete" mode.
   * **Note:** While the slot allows custom buttons, to match
   * design guidelines, please use the `Button` component.
   * **Note:** When the slot is not present, a built-in delete button will be displayed.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="deleteButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.
   */
  deleteButton?: UI5WCSlotsNode;

  /**
   * **Note:** While the slot allows option for setting custom avatar, to match the
   * design guidelines, please use the `Avatar` with it's default size - S.
   *
   * **Note:** If bigger `Avatar` needs to be used, then the size of the
   * `ListItemStandard` should be customized in order to fit.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="imageContent"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.
   */
  imageContent?: UI5WCSlotsNode;
  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   */
  onDetailClick?: (event: Ui5CustomEvent<ListItemStandardDomRef>) => void;
}

/**
 * The `ListItemStandard` represents the simplest type of item for a `List`.
 *
 * This is a list item,
 * providing the most common use cases such as `text`,
 * `image` and `icon`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const ListItemStandard = withWebComponent<ListItemStandardPropTypes, ListItemStandardDomRef>(
  'ui5-li',
  [
    'accessibleName',
    'additionalText',
    'additionalTextState',
    'description',
    'highlight',
    'icon',
    'image',
    'tooltip',
    'type'
  ],
  ['iconEnd', 'movable', 'navigated', 'selected'],
  ['deleteButton', 'imageContent'],
  ['detail-click'],
  () => import('@ui5/webcomponents/dist/ListItemStandard.js')
);

ListItemStandard.displayName = 'ListItemStandard';

export { ListItemStandard };
export type { ListItemStandardDomRef, ListItemStandardPropTypes };
