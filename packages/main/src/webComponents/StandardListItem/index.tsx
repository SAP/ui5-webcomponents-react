import { ListItemTypes } from '@ui5/webcomponents-react/lib/ListItemTypes';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5StandardListItem from '@ui5/webcomponents/dist/StandardListItem';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface StandardListItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the description displayed right under the item text, if such is present.
   */
  description?: string;
  /**
   * Defines the <code>icon</code> source URI. <br><br> <b>Note:</b> SAP-icons font provides numerous buil-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
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
   * Defines the state of the <code>info</code>. <br> Available options are: <code>"None"</code> (by default), <code>"Success"</code>, <code>"Warning"</code> and <code>"Erorr"</code>.
   */
  infoState?: string;
  /**
   * Defines the text of the <code>ui5-li</code>. <br><br> <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the visual indication and behavior of the list items.
   * Available options are <code>Active</code> (by default), <code>Inactive</code> and <code>Detail</code>.
   * <br><br>
   * <b>Note:</b> When set to <code>Active</code>, the item will provide visual response upon press and hover,
   * while with type <code>Inactive</code> and <code>Detail</code> - will not.
   */
  type?: ListItemTypes;
  /**
   * Defines the selected state of the <code>ListItem</code>.
   */
  selected?: boolean;
}

/**
 * <code>import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/StandardListItem" target="_blank">UI5 Web Components Playground</a>
 */
const StandardListItem: FC<StandardListItemPropTypes> = withWebComponent<StandardListItemPropTypes>(
  UI5StandardListItem
);

StandardListItem.displayName = 'StandardListItem';

StandardListItem.defaultProps = {
  iconEnd: false,
  selected: false,
  type: ListItemTypes.Active
};

export { StandardListItem };
