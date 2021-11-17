import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5DomRef } from '@ui5/webcomponents-react/interfaces/Ui5DomRef';

import '@ui5/webcomponents/dist/ComboBoxGroupItem.js';

interface ComboBoxGroupItemAttributes {
  /**
   * Defines the text of the component.
   */
  text?: string;
}

export interface ComboBoxGroupItemDomRef extends ComboBoxGroupItemAttributes, Ui5DomRef {}

export interface ComboBoxGroupItemPropTypes extends ComboBoxGroupItemAttributes, CommonProps {}

/**
 * The `undefined` is type of suggestion item, that can be used to split the `ComboBox` suggestions into groups
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ComboBoxGroupItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ComboBoxGroupItem = withWebComponent<ComboBoxGroupItemPropTypes, ComboBoxGroupItemDomRef>(
  'ui5-cb-group-item',
  ['text'],
  [],
  [],
  []
);

ComboBoxGroupItem.displayName = 'ComboBoxGroupItem';

export { ComboBoxGroupItem };
