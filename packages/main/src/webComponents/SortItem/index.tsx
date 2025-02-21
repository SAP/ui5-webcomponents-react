'use client';

import '@ui5/webcomponents-fiori/dist/SortItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SortItemAttributes {
  /**
   * Defines if the component is selected.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the component.
   * @default undefined
   */
  text?: string | undefined;
}

interface SortItemDomRef extends Required<SortItemAttributes>, Ui5DomRef {}

interface SortItemPropTypes extends SortItemAttributes, Omit<CommonProps, keyof SortItemAttributes> {}

/**
 * ### Usage
 *
 * For the `SortItem`
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @abstract
 */
const SortItem = withWebComponent<SortItemPropTypes, SortItemDomRef>('ui5-sort-item', ['text'], ['selected'], [], []);

SortItem.displayName = 'SortItem';

export { SortItem };
export type { SortItemDomRef, SortItemPropTypes };
