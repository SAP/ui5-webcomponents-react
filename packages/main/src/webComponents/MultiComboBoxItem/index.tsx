import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/MultiComboBoxItem';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface MultiComboBoxItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the selected state of the <code>ui5-mcb-item</code>.
   */
  selected?: boolean;
  /**
   * Defines the text of the <code>ui5-cb-item</code>.
   */
  text?: string;
}

/**
 * <code>import { MultiComboBoxItem } from '@ui5/webcomponents-react/lib/MultiComboBoxItem';</code>
 * <br />
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
