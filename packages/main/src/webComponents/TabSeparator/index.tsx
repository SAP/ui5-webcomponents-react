import '@ui5/webcomponents/dist/TabSeparator.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface TabSeparatorAttributes {}

export interface TabSeparatorDomRef extends TabSeparatorAttributes, Ui5DomRef {
  /**
   * Returns the DOM reference of the separator that is placed in the header. **Note:** Tabs and separators, placed in the `subTabs` slot of other tabs are not shown in the header. Calling this method on such tabs or separators will return `null`.
   */
  getTabInStripDomRef: () => void;
}

export interface TabSeparatorPropTypes extends TabSeparatorAttributes, CommonProps {}

/**
 * The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TabContainer" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TabSeparator = withWebComponent<TabSeparatorPropTypes, TabSeparatorDomRef>('ui5-tab-separator', [], [], [], []);

TabSeparator.displayName = 'TabSeparator';

export { TabSeparator };
