import '@ui5/webcomponents/dist/MultiComboBoxItem.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface MultiComboBoxItemAttributes {
  /**
   * Defines the selected state of the component.
   */
  selected?: boolean;
  /**
   * Defines the additional text of the component.
   */
  additionalText?: string;
  /**
   * Defines the text of the component.
   */
  text?: string;
}

export interface MultiComboBoxItemDomRef extends MultiComboBoxItemAttributes, Ui5DomRef {}

export interface MultiComboBoxItemPropTypes extends MultiComboBoxItemAttributes, CommonProps {}

/**
 * The `MultiComboBoxItem` represents the item for a `MultiComboBox`
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBoxItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const MultiComboBoxItem = withWebComponent<MultiComboBoxItemPropTypes, MultiComboBoxItemDomRef>(
  'ui5-mcb-item',
  ['additionalText', 'text'],
  ['selected'],
  [],
  []
);

MultiComboBoxItem.displayName = 'MultiComboBoxItem';

export { MultiComboBoxItem };
