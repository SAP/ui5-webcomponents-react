'use client';

import '@ui5/webcomponents-fiori/dist/SearchItem.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SearchItemAttributes {
  /**
   * Defines the heading text of the search item.
   */
  headingText?: string;

  /**
   * Defines the icon name of the search item.
   */
  icon?: string;

  /**
   * Defines the scope of the search item
   * @default false
   */
  scopeName?: string | undefined;

  /**
   * Defines whether the search item is selected.
   * @default false
   */
  selected?: boolean;
}

interface SearchItemDomRef extends Required<SearchItemAttributes>, Ui5DomRef {}

interface SearchItemPropTypes extends SearchItemAttributes, Omit<CommonProps, keyof SearchItemAttributes | 'onDelete'> {
  /**
   * Fired when delete button is pressed.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onDelete?: (event: Ui5CustomEvent<SearchItemDomRef>) => void;
}

/**
 * A `SearchItem` is a list item, used for displaying search suggestions
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const SearchItem = withWebComponent<SearchItemPropTypes, SearchItemDomRef>(
  'ui5-search-item',
  ['headingText', 'icon', 'scopeName'],
  ['selected'],
  [],
  ['delete']
);

SearchItem.displayName = 'SearchItem';

export { SearchItem };
export type { SearchItemDomRef, SearchItemPropTypes };
