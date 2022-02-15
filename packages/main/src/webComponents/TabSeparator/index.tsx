import '@ui5/webcomponents/dist/TabSeparator.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface TabSeparatorAttributes {}

export interface TabSeparatorDomRef extends TabSeparatorAttributes, Ui5DomRef {}

export interface TabSeparatorPropTypes extends TabSeparatorAttributes, CommonProps {
  /**
   * Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.
   *
   * __Note:__ This adds a rendering cycle to your component.
   */
  waitForDefine?: boolean;
}

/**
 * The `TabSeparator` represents a vertical line to separate tabs inside a `TabContainer`
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TabSeparator" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TabSeparator = withWebComponent<TabSeparatorPropTypes, TabSeparatorDomRef>(
  'ui5-tab-separator',
  ['waitForDefine'],
  [],
  [],
  []
);

TabSeparator.displayName = 'TabSeparator';

export { TabSeparator };
