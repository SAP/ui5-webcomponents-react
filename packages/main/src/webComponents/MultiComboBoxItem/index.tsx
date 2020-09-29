import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/MultiComboBoxItem';
import { FC } from 'react';

export interface MultiComboBoxItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the selected state of the <code>MultiComboBoxItem</code>.
   */
  selected?: boolean;
  /**
   * Defines the text of the <code>ComboBoxItem</code>.
   */
  text?: string;
}

/**
     * The <code>ComboBoxItem</code> represents the item for a <code>ui5-multi-combobox</code>
     
     * <a href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBoxItem" target="_blank">UI5 Web Components Playground</a>
     */
const MultiComboBoxItem: FC<MultiComboBoxItemPropTypes> = withWebComponent<MultiComboBoxItemPropTypes>(
  'ui5-mcb-item',
  ['text'],
  ['selected'],
  [],
  []
);

MultiComboBoxItem.displayName = 'MultiComboBoxItem';

MultiComboBoxItem.defaultProps = {
  selected: false
};

export { MultiComboBoxItem };
