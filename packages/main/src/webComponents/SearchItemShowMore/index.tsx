'use client';

import '@ui5/webcomponents-fiori/dist/SearchItemShowMore.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SearchItemShowMoreAttributes {
  /**
   * Specifies the number of additional items available to show.
   * This value replaces the placeholder (N) in the "Show more (N)" text.
   * If not set, the placeholder will remain as (N).
   * @default undefined
   */
  itemsToShowCount?: number | undefined;

  /**
   * Defines whether the show more item is selected.
   * @default false
   */
  selected?: boolean;
}

interface SearchItemShowMoreDomRef extends Required<SearchItemShowMoreAttributes>, Ui5DomRef {}

interface SearchItemShowMorePropTypes
  extends SearchItemShowMoreAttributes,
    Omit<CommonProps, keyof SearchItemShowMoreAttributes> {}

/**
 * A `SearchItemShowMore` is a special type of ui5-li that acts as a button to progressively reveal additional (overflow) items within a group.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.14.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const SearchItemShowMore = withWebComponent<SearchItemShowMorePropTypes, SearchItemShowMoreDomRef>(
  'ui5-search-item-show-more',
  ['itemsToShowCount'],
  ['selected'],
  [],
  [],
);

SearchItemShowMore.displayName = 'SearchItemShowMore';

export { SearchItemShowMore };
export type { SearchItemShowMoreDomRef, SearchItemShowMorePropTypes };
