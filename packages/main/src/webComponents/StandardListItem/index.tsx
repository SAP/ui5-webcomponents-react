'use client';

import '@ui5/webcomponents/dist/StandardListItem.js';
import { ReactNode } from 'react';
import { ValueState, ListItemType } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';
import { UI5WCSlotsNode } from '../../types';

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
   */
  additionalTextState?: ValueState | keyof typeof ValueState;
  /**
   * Defines the description displayed right under the item text, if such is present.
   */
  description?: string;
  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines whether the `icon` should be displayed in the beginning of the list item or in the end.
   *
   * **Note:** If `image` is set, the `icon` would be displayed after the `image`.
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
   */
  navigated?: boolean;
  /**
   * Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.
   *
   * **Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.
   */
  type?: ListItemType | keyof typeof ListItemType;
  /**
   * Defines the selected state of the `ListItem`.
   */
  selected?: boolean;
}

export interface StandardListItemDomRef extends StandardListItemAttributes, Ui5DomRef {}

export interface StandardListItemPropTypes extends StandardListItemAttributes, CommonProps {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * **Note:** While the slot allows option for setting custom avatar, to match the design guidelines, please use the `Avatar` with it\`s default size - S. **Note:** If bigger `Avatar` needs to be used, then the size of the `StandardListItem` should be customized in order to fit.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="imageContent"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  imageContent?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Defines the delete button, displayed in "Delete" mode. **Note:** While the slot allows custom buttons, to match design guidelines, please use the `Button` component. **Note:** When the slot is not present, a built-in delete button will be displayed.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="deleteButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  deleteButton?: UI5WCSlotsNode;
  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   */
  onDetailClick?: (event: Ui5CustomEvent<StandardListItemDomRef>) => void;
}

/**
 * The `StandardListItem` represents the simplest type of item for a `StandardListItemst`. This is a list item, providing the most common use cases such as `text`, `image` and `icon`.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/List" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const StandardListItem = withWebComponent<StandardListItemPropTypes, StandardListItemDomRef>(
  'ui5-li',
  ['accessibleName', 'additionalText', 'additionalTextState', 'description', 'icon', 'image', 'type'],
  ['iconEnd', 'navigated', 'selected'],
  ['imageContent', 'deleteButton'],
  ['detail-click'],
  () => import('@ui5/webcomponents/dist/StandardListItem.js')
);

StandardListItem.displayName = 'StandardListItem';

StandardListItem.defaultProps = {
  additionalTextState: ValueState.None,
  type: ListItemType.Active
};

export { StandardListItem };
