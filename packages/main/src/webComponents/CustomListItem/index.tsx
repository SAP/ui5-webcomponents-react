import { ListItemType } from '@ui5/webcomponents-react/dist/ListItemType';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '@ui5/webcomponents-react/interfaces/Ui5DomRef';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/CustomListItem.js';

interface CustomListItemAttributes {
  /**
   * Defines the text alternative of the component. Note: If not provided a default text alternative will be set, if present.
   */
  accessibleName?: string;
  /**
   * Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive` and `Detail`.
   *
   * **Note:** When set to `Active`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.
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
   * Fired when the user clicks on the detail button when type is `Detail`.
   */
  onDetailClick?: (event: Ui5CustomEvent<HTMLElement>) => void;
}

/**
 * A component to be used as custom list item within the `List` the same way as the standard `StandardListItem`. The component accepts arbitrary HTML content to allow full customization
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/CustomListItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const CustomListItem = withWebComponent<CustomListItemPropTypes, CustomListItemDomRef>(
  'ui5-li-custom',
  ['accessibleName', 'type'],
  ['selected'],
  [],
  ['detail-click']
);

CustomListItem.displayName = 'CustomListItem';

CustomListItem.defaultProps = {
  type: ListItemType.Active
};

export { CustomListItem };
