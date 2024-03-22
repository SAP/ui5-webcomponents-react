'use client';

import '@ui5/webcomponents-fiori/dist/FilterItemOption.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface FilterItemOptionAttributes {
  /**
   * Defines if the component is selected.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the component.
   */
  text?: string;
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
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 * @abstract
 */
const FilterItemOption = withWebComponent<FilterItemOptionPropTypes, FilterItemOptionDomRef>(
  'ui5-filter-item-option',
  ['text'],
  ['selected'],
  [],
  [],
  () => import('@ui5/webcomponents-fiori/dist/FilterItemOption.js')
);

FilterItemOption.displayName = 'FilterItemOption';

export { FilterItemOption };
export type { FilterItemOptionDomRef, FilterItemOptionPropTypes };
