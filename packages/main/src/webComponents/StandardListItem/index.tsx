import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/StandardListItem.js';
import { FC, ReactNode } from 'react';

export interface StandardListItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the text alternative of the component. Note: If not provided a default text alternative will be set, if present.
   */
  accessibleName?: string;
  /**
   * Defines the description displayed right under the item text, if such is present.
   */
  description?: string;
  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
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
   * Defines the `info`, displayed in the end of the list item.
   */
  info?: string;
  /**
   * Defines the state of the `info`.
   * Available options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Erorr"`.
   */
  infoState?: ValueState;
  /**
   * Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive` and `Detail`.
   *
   * **Note:** When set to `Active`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.
   */
  type?: ListItemTypes;
  /**
   * Defines the selected state of the `ListItem`.
   */
  selected?: boolean;
  /**
   * Defines the text of the `StandardListItem`.
   *
   * **Note:** Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   */
  onDetailClick?: (event: CustomEvent) => void;
}

/**
 * The `StandardListItem` represents the simplest type of item for a `StandardListItemst`. This is a list item, providing the most common use cases such as `text`, `image` and `icon`
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/StandardListItem" target="_blank">UI5 Web Components Playground</a>
 */
const StandardListItem: FC<StandardListItemPropTypes> = withWebComponent<StandardListItemPropTypes>(
  'ui5-li',
  ['accessibleName', 'description', 'icon', 'image', 'info', 'infoState', 'type'],
  ['iconEnd', 'selected'],
  [],
  ['detail-click']
);

StandardListItem.displayName = 'StandardListItem';

StandardListItem.defaultProps = {
  iconEnd: false,
  infoState: ValueState.None,
  type: ListItemTypes.Active,
  selected: false
};

export { StandardListItem };
