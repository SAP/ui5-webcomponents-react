'use client';

import '@ui5/webcomponents/dist/ComboBoxItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ComboBoxItemAttributes {
  /**
   * Defines the additional text of the component.
   */
  additionalText?: string;
  /**
   * Defines the text of the component.
   */
  text?: string;
}

interface ComboBoxItemDomRef extends ComboBoxItemAttributes, Ui5DomRef {}

interface ComboBoxItemPropTypes extends ComboBoxItemAttributes, Omit<CommonProps, keyof ComboBoxItemAttributes> {}

/**
 * The `ComboBoxItem` represents the item for a `ComboBox`
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ComboBox)
 */
const ComboBoxItem = withWebComponent<ComboBoxItemPropTypes, ComboBoxItemDomRef>(
  'ui5-cb-item',
  ['additionalText', 'text'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ComboBoxItem.js')
);

ComboBoxItem.displayName = 'ComboBoxItem';

export { ComboBoxItem };
export type { ComboBoxItemDomRef, ComboBoxItemPropTypes };
