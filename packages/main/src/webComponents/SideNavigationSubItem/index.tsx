import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC } from 'react';

export interface SideNavigationSubItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the icon of the item. <br><br><br/><br/>
   *
   * The SAP-icons font provides numerous options. <br> See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines whether the subitem is selected.
   */
  selected?: boolean;
  /**
   * Defines the text of the item.
   */
  text?: string;
}

/**
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/SideNavigationSubItem" target="_blank">UI5 Web Components Playground</a>
 */
const SideNavigationSubItem: FC<SideNavigationSubItemPropTypes> = withWebComponent<SideNavigationSubItemPropTypes>(
  'ui5-side-navigation-sub-item',
  () => import('@ui5/webcomponents-fiori/dist/SideNavigationSubItem'),
  ['icon', 'text'],
  ['selected'],
  [],
  []
);

SideNavigationSubItem.displayName = 'SideNavigationSubItem';

SideNavigationSubItem.defaultProps = {
  selected: false
};

export { SideNavigationSubItem };
