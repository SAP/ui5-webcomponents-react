'use client';

import '@ui5/webcomponents-fiori/dist/SortItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SortItemAttributes {
  /**
   * Defines if the sort item is selected.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the sort item.
   * @default undefined
   */
  text?: string | undefined;
}

interface SortItemDomRef extends Required<SortItemAttributes>, Ui5DomRef {}

interface SortItemPropTypes extends SortItemAttributes, Omit<CommonProps, keyof SortItemAttributes> {}

/**
 * The `SortItem` component defines the sorting criteria for data in `ViewSettingsDialog`.
 * It represents a single sort option that users can select to organize data in ascending or descending order.
 *
 * ### Usage
 *
 * The `SortItem` is used within the `ViewSettingsDialog` to provide sorting options.
 * Each sort item represents a column or field by which data can be sorted.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [SortItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/fiori/SortItem) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents-fiori__.
 * @abstract
 */
const SortItem = withWebComponent<SortItemPropTypes, SortItemDomRef>('ui5-sort-item', ['text'], ['selected'], [], []);

SortItem.displayName = 'SortItem';

export { SortItem };
export type { SortItemDomRef, SortItemPropTypes };
