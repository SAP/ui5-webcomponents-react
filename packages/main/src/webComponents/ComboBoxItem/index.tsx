'use client';

import '@ui5/webcomponents/dist/ComboBoxItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface ComboBoxItemAttributes {
  /**
   * Defines the additional text of the component.
   * @default undefined
   */
  additionalText?: string | undefined;

  /**
   * Defines the text of the component.
   * @default undefined
   */
  text?: string | undefined;
}

interface ComboBoxItemDomRef extends Required<ComboBoxItemAttributes>, Ui5DomRef {}

interface ComboBoxItemPropTypes extends ComboBoxItemAttributes, Omit<CommonProps, keyof ComboBoxItemAttributes> {}

/**
 * The `ComboBoxItem` represents the item for a `ComboBox`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const ComboBoxItem = withWebComponent<ComboBoxItemPropTypes, ComboBoxItemDomRef>(
  'ui5-cb-item',
  ['additionalText', 'text'],
  [],
  [],
  []
);

ComboBoxItem.displayName = 'ComboBoxItem';

export { ComboBoxItem };
export type { ComboBoxItemDomRef, ComboBoxItemPropTypes };
