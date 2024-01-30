'use client';

import '@ui5/webcomponents/dist/ComboBoxGroupItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ComboBoxGroupItemAttributes {
  /**
   * Defines the text of the component.
   */
  text?: string;
}

interface ComboBoxGroupItemDomRef extends ComboBoxGroupItemAttributes, Ui5DomRef {}

interface ComboBoxGroupItemPropTypes
  extends ComboBoxGroupItemAttributes,
    Omit<CommonProps, keyof ComboBoxGroupItemAttributes> {}

/**
 * The `ComboBoxGroupItem` is type of suggestion item, that can be used to split the `ComboBox` suggestions into groups.
 *
 * @abstract
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const ComboBoxGroupItem = withWebComponent<ComboBoxGroupItemPropTypes, ComboBoxGroupItemDomRef>(
  'ui5-cb-group-item',
  ['text'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ComboBoxGroupItem.js')
);

ComboBoxGroupItem.displayName = 'ComboBoxGroupItem';

export { ComboBoxGroupItem };
export type { ComboBoxGroupItemDomRef, ComboBoxGroupItemPropTypes };
