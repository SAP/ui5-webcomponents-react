import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents-fiori/dist/SideNavigationItem';
import { FC, ReactNode } from 'react';

export interface SideNavigationItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the item is expanded
   */
  expanded?: boolean;
  /**
   * Defines the icon of the item.
   *
   * The SAP-icons font provides numerous options.
   * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines whether the subitem is selected
   */
  selected?: boolean;
  /**
   * Defines the text of the item.
   */
  text?: string;
  /**
   * Defines whether pressing the whole item or only pressing the icon will show/hide the items's sub items(if present). If set to true, pressing the whole item will toggle the sub items, and it won't fire the `click` event. By default, only pressing the arrow icon will toggle the sub items & the click event will be fired if the item is pressed outside of the icon.
   */
  wholeItemToggleable?: boolean;
  /**
   * If you wish to nest menus, you can pass inner menu items to the default slot.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `SideNavigationItem` is used within `SideNavigation` only. Via the `SideNavigationItem` you control the content of the `SideNavigation`.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SideNavigationItem" target="_blank">UI5 Web Components Playground</a>
 */
const SideNavigationItem: FC<SideNavigationItemPropTypes> = withWebComponent<SideNavigationItemPropTypes>(
  'ui5-side-navigation-item',
  ['icon', 'text'],
  ['expanded', 'selected', 'wholeItemToggleable'],
  [],
  []
);

SideNavigationItem.displayName = 'SideNavigationItem';

SideNavigationItem.defaultProps = {
  expanded: false,
  selected: false,
  wholeItemToggleable: false
};

export { SideNavigationItem };
