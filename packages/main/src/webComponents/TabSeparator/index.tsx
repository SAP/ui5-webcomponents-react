'use client';

import '@ui5/webcomponents/dist/TabSeparator.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

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
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-TabContainer)
 */
const TabSeparator = withWebComponent<TabSeparatorPropTypes, TabSeparatorDomRef>(
  'ui5-tab-separator',
  [],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/TabSeparator.js')
);

TabSeparator.displayName = 'TabSeparator';

export { TabSeparator };
