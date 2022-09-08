import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface SideNavigationSubItemAttributes {
  /**
   * Defines the icon of the item.
   *
   * The SAP-icons font provides numerous options.
   * See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
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

export interface SideNavigationSubItemDomRef extends SideNavigationSubItemAttributes, Ui5DomRef {}

export interface SideNavigationSubItemPropTypes extends SideNavigationSubItemAttributes, CommonProps {}

/**
 * The `SideNavigationSubItem` is intended to be used inside a `SideNavigationItem` only.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SideNavigation" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const SideNavigationSubItem = withWebComponent<SideNavigationSubItemPropTypes, SideNavigationSubItemDomRef>(
  'ui5-side-navigation-sub-item',
  ['icon', 'text'],
  ['selected'],
  [],
  []
);

SideNavigationSubItem.displayName = 'SideNavigationSubItem';

export { SideNavigationSubItem };
