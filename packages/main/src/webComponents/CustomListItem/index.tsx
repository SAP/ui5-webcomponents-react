'use client';

import '@ui5/webcomponents/dist/CustomListItem.js';
import { ReactNode } from 'react';
import { ListItemType } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';
import { UI5WCSlotsNode } from '../../types';

interface CustomListItemAttributes {
  /**
   * Defines the text alternative of the component. Note: If not provided a default text alternative will be set, if present.
   */
  accessibleName?: string;
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

export interface CustomListItemDomRef extends CustomListItemAttributes, Ui5DomRef {}

export interface CustomListItemPropTypes extends CustomListItemAttributes, CommonProps {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
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
  onDetailClick?: (event: Ui5CustomEvent<CustomListItemDomRef>) => void;
}

/**
 * A component to be used as custom list item within the `List` the same way as the standard `StandardListItem`. The component accepts arbitrary HTML content to allow full customization
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/List" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const CustomListItem = withWebComponent<CustomListItemPropTypes, CustomListItemDomRef>(
  'ui5-li-custom',
  ['accessibleName', 'type'],
  ['navigated', 'selected'],
  ['deleteButton'],
  ['detail-click'],
  () => import('@ui5/webcomponents/dist/CustomListItem.js')
);

CustomListItem.displayName = 'CustomListItem';

CustomListItem.defaultProps = {
  type: ListItemType.Active
};

export { CustomListItem };
