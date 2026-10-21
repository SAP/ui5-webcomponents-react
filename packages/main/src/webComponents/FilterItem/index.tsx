'use client';

import '@ui5/webcomponents-fiori/dist/FilterItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';

interface FilterItemAttributes {
  /**
   * Defines the additional text of the filter item.
   * This text is typically used to show the number of selected filter options within this category.
   * @default undefined
   */
  additionalText?: string | undefined;

  /**
   * Defines the text of the filter item.
   * @default undefined
   */
  text?: string | undefined;
}

interface FilterItemDomRef extends Required<FilterItemAttributes>, Ui5DomRef {}

interface FilterItemPropTypes extends FilterItemAttributes, Omit<CommonProps, keyof FilterItemAttributes | 'values'> {
  /**
   * Defines the filter options available for this filter category.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="values"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<FilterItemOption>`
   */
  values?: UI5WCSlotsNode;
}

/**
 * The `FilterItem` component defines the filtering criteria for data in `ViewSettingsDialog`.
 * It represents a single filter category that contains multiple filter options that users can select.
 *
 * ### Usage
 *
 * The `FilterItem` is used within the `ViewSettingsDialog` to provide filtering options.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [FilterItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/FilterItem) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents-fiori__.
 * @abstract
 */
const FilterItem = withWebComponent<FilterItemPropTypes, FilterItemDomRef>(
  'ui5-filter-item',
  ['additionalText', 'text'],
  [],
  ['values'],
  [],
);

FilterItem.displayName = 'FilterItem';

export { FilterItem };
export type { FilterItemDomRef, FilterItemPropTypes };
