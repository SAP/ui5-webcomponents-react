import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/ComboBoxItem';
import { FC } from 'react';

export interface ComboBoxItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the text of the `ComboBoxItem`.
   */
  text?: string;
}

/**
 * The `ComboBoxItem` represents the item for a `ComboBox`
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ComboBoxItem" target="_blank">UI5 Web Components Playground</a>
 */
const ComboBoxItem: FC<ComboBoxItemPropTypes> = withWebComponent<ComboBoxItemPropTypes>(
  'ui5-cb-item',
  ['text'],
  [],
  [],
  []
);

ComboBoxItem.displayName = 'ComboBoxItem';

ComboBoxItem.defaultProps = {};

export { ComboBoxItem };
