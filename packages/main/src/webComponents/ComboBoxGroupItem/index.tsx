import { FC } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/dist/withWebComponent';

import '@ui5/webcomponents/dist/ComboBoxGroupItem';

export interface ComboBoxGroupItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the text of the component.
   */
  text?: string;
}

/**
 * The `undefined` is type of suggestion item, that can be used to split the `ComboBox` suggestions into groups
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ComboBoxGroupItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ComboBoxGroupItem: FC<ComboBoxGroupItemPropTypes> = withWebComponent<ComboBoxGroupItemPropTypes>(
  'ui5-cb-group-item',
  ['text'],
  [],
  [],
  []
);

ComboBoxGroupItem.displayName = 'ComboBoxGroupItem';

ComboBoxGroupItem.defaultProps = {};

export { ComboBoxGroupItem };
