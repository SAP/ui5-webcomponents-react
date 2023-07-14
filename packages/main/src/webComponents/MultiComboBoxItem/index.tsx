'use client';

import '@ui5/webcomponents/dist/MultiComboBoxItem.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface MultiComboBoxItemAttributes {
  /**
   * Defines the selected state of the component.
   */
  selected?: boolean;
  /**
   * Defines the additional text of the component.
   */
  additionalText?: string;
  /**
   * Defines the text of the component.
   */
  text?: string;
}

export interface MultiComboBoxItemDomRef extends MultiComboBoxItemAttributes, Ui5DomRef {}

export interface MultiComboBoxItemPropTypes extends MultiComboBoxItemAttributes, CommonProps {}

/**
 * The `MultiComboBoxItem` represents the item for a `MultiComboBox`
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-MultiComboBox)
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
