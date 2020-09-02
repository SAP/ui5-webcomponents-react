import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC } from 'react';
import { ReactNode } from 'react';

export interface SideNavigationItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the item is expanded
   */
  expanded?: boolean;
  /**
   * Defines the icon of the item. <br><br><br/><br/>
   *
   * The SAP-icons font provides numerous options. <br> See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
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
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SideNavigationItem" target="_blank">UI5 Web Components Playground</a>
 */
const SideNavigationItem: FC<SideNavigationItemPropTypes> = withWebComponent<SideNavigationItemPropTypes>(
  'ui5-side-navigation-item',
  () => import('@ui5/webcomponents-fiori/dist/SideNavigationItem'),
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
