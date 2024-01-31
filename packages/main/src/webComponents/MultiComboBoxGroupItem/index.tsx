'use client';

import '@ui5/webcomponents/dist/MultiComboBoxGroupItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface MultiComboBoxGroupItemAttributes {
  /**
   * Defines the text of the component.
   */
  text?: string;
}

interface MultiComboBoxGroupItemDomRef extends Required<MultiComboBoxGroupItemAttributes>, Ui5DomRef {}

interface MultiComboBoxGroupItemPropTypes
  extends MultiComboBoxGroupItemAttributes,
    Omit<CommonProps, keyof MultiComboBoxGroupItemAttributes> {}

/**
 * The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups.
 *
 * @abstract
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const MultiComboBoxGroupItem = withWebComponent<MultiComboBoxGroupItemPropTypes, MultiComboBoxGroupItemDomRef>(
  'ui5-mcb-group-item',
  ['text'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/MultiComboBoxGroupItem.js')
);

MultiComboBoxGroupItem.displayName = 'MultiComboBoxGroupItem';

export { MultiComboBoxGroupItem };
export type { MultiComboBoxGroupItemDomRef, MultiComboBoxGroupItemPropTypes };
