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
  ['expanded', 'selected'],
  [],
  []
);

SideNavigationItem.displayName = 'SideNavigationItem';

SideNavigationItem.defaultProps = {
  expanded: false,
  selected: false
};

export { SideNavigationItem };
