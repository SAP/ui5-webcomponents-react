'use client';

import '@ui5/webcomponents-fiori/dist/SearchScope.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SearchScopeAttributes {
  /**
   * Indicates whether the item is selected
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the component.
   */
  text?: string;
}

interface SearchScopeDomRef extends Required<SearchScopeAttributes>, Ui5DomRef {}

interface SearchScopePropTypes extends SearchScopeAttributes, Omit<CommonProps, keyof SearchScopeAttributes> {}

/**
 * The `SearchScope` represents the options for the scope in `Search`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of __@ui5/webcomponents-fiori__.
 * @abstract
 * @experimental
 */
const SearchScope = withWebComponent<SearchScopePropTypes, SearchScopeDomRef>(
  'ui5-search-scope',
  ['text'],
  ['selected'],
  [],
  [],
);

SearchScope.displayName = 'SearchScope';

export { SearchScope };
export type { SearchScopeDomRef, SearchScopePropTypes };
