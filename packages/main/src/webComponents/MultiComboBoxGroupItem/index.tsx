'use client';

import '@ui5/webcomponents/dist/MultiComboBoxGroupItem.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface MultiComboBoxGroupItemAttributes {
  /**
   * Defines the text of the component.
   */
  text?: string;
}

export interface MultiComboBoxGroupItemDomRef extends MultiComboBoxGroupItemAttributes, Ui5DomRef {}

export interface MultiComboBoxGroupItemPropTypes extends MultiComboBoxGroupItemAttributes, CommonProps {}

/**
 * The `MultiComboBoxGroupItem` is type of suggestion item, that can be used to split the `MultiComboBox` suggestions into groups
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-MultiComboBox" target="_blank">UI5 Web Components Storybook</ui5-link>
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
