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

export interface ComboBoxItemPropTypes extends ComboBoxItemAttributes, CommonProps {}

/**
 * The `ComboBoxItem` represents the item for a `ComboBox`
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ComboBox" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ComboBoxItem = withWebComponent<ComboBoxItemPropTypes, ComboBoxItemDomRef>(
  'ui5-cb-item',
  ['additionalText', 'text'],
  [],
  [],
  []
);

ComboBoxItem.displayName = 'ComboBoxItem';

export { ComboBoxItem };
