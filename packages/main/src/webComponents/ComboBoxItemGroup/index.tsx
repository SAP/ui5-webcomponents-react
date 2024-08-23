'use client';

import '@ui5/webcomponents/dist/ComboBoxItemGroup.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ComboBoxItemGroupAttributes {
  /**
   * Defines the text of the component.
   * @default undefined
   */
  headerText?: string | undefined;
}

interface ComboBoxItemGroupDomRef extends Required<ComboBoxItemGroupAttributes>, Ui5DomRef {}

interface ComboBoxItemGroupPropTypes
  extends ComboBoxItemGroupAttributes,
    Omit<CommonProps, keyof ComboBoxItemGroupAttributes | 'children'> {
  /**
   * Defines the items of the <code>ui5-cb-item-group</code>.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `ui5-cb-group-item` is type of suggestion item,
 * that can be used to split the `ComboBox` suggestions into groups.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @abstract
 */
const ComboBoxItemGroup = withWebComponent<ComboBoxItemGroupPropTypes, ComboBoxItemGroupDomRef>(
  'ui5-cb-item-group',
  ['headerText'],
  [],
  [],
  []
);

ComboBoxItemGroup.displayName = 'ComboBoxItemGroup';

export { ComboBoxItemGroup };
export type { ComboBoxItemGroupDomRef, ComboBoxItemGroupPropTypes };
