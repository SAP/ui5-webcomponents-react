import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5ComboBoxItem from '@ui5/webcomponents/dist/ComboBoxItem';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ComboBoxItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the text of the <code>ui5-cb-item</code>.
   */
  text?: string;
}

/**
 * <code>import { ComboBoxItem } from '@ui5/webcomponents-react/lib/ComboBoxItem';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ComboBoxItem" target="_blank">UI5 Web Components Playground</a>
 */
const ComboBoxItem: FC<ComboBoxItemPropTypes> = withWebComponent<ComboBoxItemPropTypes>(UI5ComboBoxItem);

ComboBoxItem.displayName = 'ComboBoxItem';

ComboBoxItem.defaultProps = {
  text: ''
};

export { ComboBoxItem };
