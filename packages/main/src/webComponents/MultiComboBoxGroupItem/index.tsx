'use client';

import '@ui5/webcomponents/dist/MultiComboBoxGroupItem.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBox" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const MultiComboBoxGroupItem = withWebComponent<MultiComboBoxGroupItemPropTypes, MultiComboBoxGroupItemDomRef>(
  'ui5-mcb-group-item',
  ['text'],
  [],
  [],
  [],
  '@ui5/webcomponents/dist/MultiComboBoxGroupItem.js'
);

MultiComboBoxGroupItem.displayName = 'MultiComboBoxGroupItem';

export { MultiComboBoxGroupItem };
