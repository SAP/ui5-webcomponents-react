'use client';

import '@ui5/webcomponents/dist/MultiComboBoxItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface MultiComboBoxItemAttributes {
  /**
   * Defines the additional text of the component.
   */
  additionalText?: string;

  /**
   * Defines the selected state of the component.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the component.
   */
  text?: string;
}

interface MultiComboBoxItemDomRef extends Required<MultiComboBoxItemAttributes>, Ui5DomRef {}

interface MultiComboBoxItemPropTypes
  extends MultiComboBoxItemAttributes,
    Omit<CommonProps, keyof MultiComboBoxItemAttributes> {}

/**
 * The `MultiComboBoxItem` represents the item for a `MultiComboBox`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 * @abstract
 */
const MultiComboBoxItem = withWebComponent<MultiComboBoxItemPropTypes, MultiComboBoxItemDomRef>(
  'ui5-mcb-item',
  ['additionalText', 'text'],
  ['selected'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/MultiComboBoxItem.js')
);

MultiComboBoxItem.displayName = 'MultiComboBoxItem';

export { MultiComboBoxItem };
export type { MultiComboBoxItemDomRef, MultiComboBoxItemPropTypes };
