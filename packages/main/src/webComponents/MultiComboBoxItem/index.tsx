import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/MultiComboBoxItem.js';
import { FC } from 'react';

export interface MultiComboBoxItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the selected state of the `MultiComboBoxItem`.
   */
  selected?: boolean;
  /**
   * Defines the stable selector that you can use via getStableDomRef method.
   */
  stableDomRef?: unknown;
  /**
   * Defines the additional text of the `ComboBoxItem`.
   */
  additionalText?: string;
  /**
   * Defines the text of the `ComboBoxItem`.
   */
  text?: string;
}

/**
 * The `MultiComboBoxItem` represents the item for a `MultiComboBox`
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBoxItem" target="_blank">UI5 Web Components Playground</a>
 */
const MultiComboBoxItem: FC<MultiComboBoxItemPropTypes> = withWebComponent<MultiComboBoxItemPropTypes>(
  'ui5-mcb-item',
  ['stableDomRef', 'additionalText', 'text'],
  ['selected'],
  [],
  []
);

MultiComboBoxItem.displayName = 'MultiComboBoxItem';

MultiComboBoxItem.defaultProps = {
  selected: false
};

export { MultiComboBoxItem };
