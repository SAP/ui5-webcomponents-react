import '@ui5/webcomponents/dist/StandardListItem.js';
import { ReactNode } from 'react';
import { ValueState, ListItemType } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

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
   * Available options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Erorr"`.
   */
  additionalTextState?: ValueState | keyof typeof ValueState;
  /**
   * Defines the description displayed right under the item text, if such is present.
   */
  description?: string;
  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
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

export interface StandardListItemDomRef extends StandardListItemAttributes, Ui5DomRef {}

export interface StandardListItemPropTypes extends StandardListItemAttributes, CommonProps {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   */
  onDetailClick?: (event: Ui5CustomEvent<StandardListItemDomRef>) => void;
}

/**
 * The `StandardListItem` represents the simplest type of item for a `StandardListItemst`. This is a list item, providing the most common use cases such as `text`, `image` and `icon`.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/StandardListItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const StandardListItem = withWebComponent<StandardListItemPropTypes, StandardListItemDomRef>(
  'ui5-li',
  ['accessibleName', 'additionalText', 'additionalTextState', 'description', 'icon', 'image', 'type'],
  ['iconEnd', 'selected'],
  [],
  ['detail-click']
);

StandardListItem.displayName = 'StandardListItem';

StandardListItem.defaultProps = {
  additionalTextState: ValueState.None,
  type: ListItemType.Active
};

export { StandardListItem };
