'use client';

import '@ui5/webcomponents-fiori/dist/FilterItemOption.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface FilterItemOptionAttributes {
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

interface FilterItemOptionDomRef extends Required<FilterItemOptionAttributes>, Ui5DomRef {}

interface FilterItemOptionPropTypes
  extends FilterItemOptionAttributes,
    Omit<CommonProps, keyof FilterItemOptionAttributes> {}

/**
 * ### Usage
 *
 * For the `FilterItemOption`
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @abstract
 */
const FilterItemOption = withWebComponent<FilterItemOptionPropTypes, FilterItemOptionDomRef>(
  'ui5-filter-item-option',
  ['text'],
  ['selected'],
  [],
  []
);

FilterItemOption.displayName = 'FilterItemOption';

export { FilterItemOption };
export type { FilterItemOptionDomRef, FilterItemOptionPropTypes };
