import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';

import '@ui5/webcomponents/dist/MultiComboBoxItem.js';

export interface MultiComboBoxItemPropTypes extends CommonProps {
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

/**
 * The `MultiComboBoxItem` represents the item for a `MultiComboBox`
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBoxItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const MultiComboBoxItem = withWebComponent<MultiComboBoxItemPropTypes>(
  'ui5-mcb-item',
  ['additionalText', 'text'],
  ['selected'],
  [],
  []
);

MultiComboBoxItem.displayName = 'MultiComboBoxItem';

export { MultiComboBoxItem };
