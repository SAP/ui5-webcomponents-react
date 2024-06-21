'use client';

import '@ui5/webcomponents/dist/TabSeparator.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface TabSeparatorAttributes {}

interface TabSeparatorDomRef extends Required<TabSeparatorAttributes>, Ui5DomRef {
  /**
   * Returns the DOM reference of the separator that is placed in the header.
   *
   * **Note:** Separators, placed in the `items` slot of other tabs are not shown in the header. Calling this method on such separators will return `undefined`.
   * @returns {HTMLElement | undefined}
   */
  getDomRefInStrip: () => HTMLElement | undefined;
}

interface TabSeparatorPropTypes extends TabSeparatorAttributes, CommonProps {}

/**
 * The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @abstract
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
export type { TabSeparatorDomRef, TabSeparatorPropTypes };
