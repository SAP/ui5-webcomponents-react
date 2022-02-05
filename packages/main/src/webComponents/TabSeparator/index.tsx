import { withWebComponent } from '../../internal/withWebComponent';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';

import '@ui5/webcomponents/dist/TabSeparator.js';

interface TabSeparatorAttributes {}

export interface TabSeparatorDomRef extends TabSeparatorAttributes, Ui5DomRef {}

export interface TabSeparatorPropTypes extends TabSeparatorAttributes, CommonProps {}

/**
 * The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TabSeparator" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TabSeparator = withWebComponent<TabSeparatorPropTypes, TabSeparatorDomRef>('ui5-tab-separator', [], [], [], []);

TabSeparator.displayName = 'TabSeparator';

export { TabSeparator };
