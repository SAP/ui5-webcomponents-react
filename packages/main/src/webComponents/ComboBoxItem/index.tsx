import '@ui5/webcomponents/dist/ComboBoxItem.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface ComboBoxItemAttributes {
  /**
   * Defines the additional text of the component.
   */
  additionalText?: string;
  /**
   * Defines the text of the component.
   */
  text?: string;
}

export interface ComboBoxItemDomRef extends ComboBoxItemAttributes, Ui5DomRef {}

export interface ComboBoxItemPropTypes extends ComboBoxItemAttributes, CommonProps {
  /**
   * Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.
   *
   * __Note:__ This adds a rendering cycle to your component.
   */
  waitForDefine?: boolean;
}

/**
 * The `ComboBoxItem` represents the item for a `ComboBox`
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ComboBoxItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ComboBoxItem = withWebComponent<ComboBoxItemPropTypes, ComboBoxItemDomRef>(
  'ui5-cb-item',
  ['additionalText', 'text', 'waitForDefine'],
  [],
  [],
  []
);

ComboBoxItem.displayName = 'ComboBoxItem';

export { ComboBoxItem };
