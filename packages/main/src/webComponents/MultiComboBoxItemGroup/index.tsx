'use client';

import '@ui5/webcomponents/dist/MultiComboBoxItemGroup.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface MultiComboBoxItemGroupAttributes {
  /**
   * Defines the text of the component.
   * @default undefined
   */
  headerText?: string | undefined;
}

interface MultiComboBoxItemGroupDomRef extends Required<MultiComboBoxItemGroupAttributes>, Ui5DomRef {}

interface MultiComboBoxItemGroupPropTypes
  extends MultiComboBoxItemGroupAttributes,
    Omit<CommonProps, keyof MultiComboBoxItemGroupAttributes | 'children'> {
  /**
   * Defines the items of the <code>ui5-mcb-item-group</code>.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `MultiComboBoxItemGroup` is type of suggestion item,
 * that can be used to split the `MultiComboBox` suggestions into groups.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0) of __@ui5/webcomponents__.
 * @abstract
 */
const MultiComboBoxItemGroup = withWebComponent<MultiComboBoxItemGroupPropTypes, MultiComboBoxItemGroupDomRef>(
  'ui5-mcb-item-group',
  ['headerText'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/MultiComboBoxItemGroup.js')
);

MultiComboBoxItemGroup.displayName = 'MultiComboBoxItemGroup';

export { MultiComboBoxItemGroup };
export type { MultiComboBoxItemGroupDomRef, MultiComboBoxItemGroupPropTypes };
