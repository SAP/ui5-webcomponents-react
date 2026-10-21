'use client';

import '@ui5/webcomponents-fiori/dist/FilterItemOption.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface FilterItemOptionAttributes {
  /**
   * Defines if the filter option is selected.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the filter option.
   * @default undefined
   */
  text?: string | undefined;
}

interface FilterItemOptionDomRef extends Required<FilterItemOptionAttributes>, Ui5DomRef {}

interface FilterItemOptionPropTypes
  extends FilterItemOptionAttributes, Omit<CommonProps, keyof FilterItemOptionAttributes> {}

/**
 * The `FilterItemOption` component defines individual filter values within a `FilterItem`.
 * It represents a single selectable option that users can choose to filter data.
 *
 * ### Usage
 *
 * The `FilterItemOption` is used as a child component within `FilterItem` in the context
 * of `ViewSettingsDialog`. Each option represents a specific value that can be used for filtering
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [FilterItemOption UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/FilterItemOption) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents-fiori__.
 * @abstract
 */
const FilterItemOption = withWebComponent<FilterItemOptionPropTypes, FilterItemOptionDomRef>(
  'ui5-filter-item-option',
  ['text'],
  ['selected'],
  [],
  [],
);

FilterItemOption.displayName = 'FilterItemOption';

export { FilterItemOption };
export type { FilterItemOptionDomRef, FilterItemOptionPropTypes };
