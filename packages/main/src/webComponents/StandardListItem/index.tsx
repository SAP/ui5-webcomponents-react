'use client';

import '@ui5/webcomponents/dist/StandardListItem.js';
import type { AccessibilityAttributes } from '@ui5/webcomponents/dist/ListItem.js';
import type ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface StandardListItemAttributes {
  /**
   * Defines the text alternative of the component. Note: If not provided a default text alternative will be set, if present.
   */
  accessibleName?: string;

  /**
   * Defines the `additionalText`, displayed in the end of the list item.
   */
  additionalText?: string;

  /**
   * Defines the state of the `additionalText`.
   * Available options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Error"`.
   * @default "None"
   */
  additionalTextState?: ValueState | keyof typeof ValueState;

  /**
   * Defines the description displayed right under the item text, if such is present.
   */
  description?: string;

  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
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
   * The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item.
   * @default false
   */
  navigated?: boolean;

  /**
   * Defines the selected state of the `ListItem`.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.
   *
   * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.
   * @default "Active"
   */
  type?: ListItemType | keyof typeof ListItemType;
}

interface StandardListItemDomRef extends Required<StandardListItemAttributes>, Ui5DomRef {
  /**
   * An object of strings that defines several additional accessibility attribute values for customization depending on the use case. It supports the following fields:
   *
   * *   `ariaSetsize`: Defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM. The value of each `aria-setsize` is an integer reflecting number of items in the complete set. **Note:** If the size of the entire set is unknown, set `aria-setsize="-1"`.
   * *   `ariaPosinset`: Defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM. The value of each `aria-posinset` is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.
   */
  accessibilityAttributes: AccessibilityAttributes;
}

interface StandardListItemPropTypes
  extends StandardListItemAttributes,
    Omit<CommonProps, keyof StandardListItemAttributes | 'onDetailClick'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the delete button, displayed in "Delete" mode. **Note:** While the slot allows custom buttons, to match design guidelines, please use the `Button` component. **Note:** When the slot is not present, a built-in delete button will be displayed.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="deleteButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  deleteButton?: UI5WCSlotsNode;

  /**
   * **Note:** While the slot allows option for setting custom avatar, to match the design guidelines, please use the `Avatar` with it\`s default size - S. **Note:** If bigger `Avatar` needs to be used, then the size of the `StandardListItem` should be customized in order to fit.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="imageContent"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  imageContent?: UI5WCSlotsNode;
  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   */
  onDetailClick?: (event: Ui5CustomEvent<StandardListItemDomRef>) => void;
}

/**
 * The `StandardListItem` represents the simplest type of item for a `List`. This is a list item, providing the most common use cases such as `text`, `image` and `icon`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const StandardListItem = withWebComponent<StandardListItemPropTypes, StandardListItemDomRef>(
  'ui5-li',
  ['accessibleName', 'additionalText', 'additionalTextState', 'description', 'icon', 'image', 'type'],
  ['iconEnd', 'navigated', 'selected'],
  ['deleteButton', 'imageContent'],
  ['detail-click'],
  () => import('@ui5/webcomponents/dist/StandardListItem.js')
);

StandardListItem.displayName = 'StandardListItem';

export { StandardListItem };
export type { StandardListItemDomRef, StandardListItemPropTypes };
