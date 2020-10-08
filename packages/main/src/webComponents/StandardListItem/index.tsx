import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/StandardListItem';
import { FC, ReactNode } from 'react';

export interface StandardListItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the description displayed right under the item text, if such is present.
   */
  description?: string;
  /**
   * Defines the <code>icon</code> source URI. <br><br> <b>Note:</b> SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines whether the <code>icon</code> should be displayed in the beginning of the list item or in the end. <br><br> <b>Note:</b> If <code>image</code> is set, the <code>icon</code> would be displayed after the <code>image</code>.
   */
  iconEnd?: boolean;
  /**
   * Defines the <code>image</code> source URI. <br><br> <b>Note:</b> The <code>image</code> would be displayed in the beginning of the list item.
   */
  image?: string;
  /**
   * Defines the <code>info</code>, displayed in the end of the list item.
   */
  info?: string;
  /**
   * Defines the state of the <code>info</code>. <br> Available options are: <code>"None"</code> (by default), <code>"Success"</code>, <code>"Warning"</code>, <code>"Information"</code> and <code>"Erorr"</code>.
   */
  infoState?: ValueState;
  /**
   * Defines the visual indication and behavior of the list items. Available options are <code>Active</code> (by default), <code>Inactive</code> and <code>Detail</code>. <br><br> <b>Note:</b> When set to <code>Active</code>, the item will provide visual response upon press and hover, while with type <code>Inactive</code> and <code>Detail</code> - will not.
   */
  type?: ListItemTypes;
  /**
   * Defines the selected state of the <code>ListItem</code>.
   */
  selected?: boolean;
  /**
   * Defines the text of the <code>StandardListItem</code>. <br><br> <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the user clicks on the detail button when type is <code>Detail</code>.
   */
  onDetailClick?: (event: CustomEvent) => void;
}

/**
 * The <code>StandardListItem</code> represents the simplest type of item for a <code>StandardListItemst</code>. This is a
 list item, providing the most common use cases such as <code>text</code>, <code>image</code> and <code>icon</code>

 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/StandardListItem" target="_blank">UI5 Web Components Playground</a>
 */
const StandardListItem: FC<StandardListItemPropTypes> = withWebComponent<StandardListItemPropTypes>(
  'ui5-li',
  ['description', 'icon', 'image', 'info', 'infoState', 'type'],
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
