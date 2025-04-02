'use client';

import '@ui5/webcomponents-fiori/dist/SearchFieldScopeOption.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SearchFieldScopeOptionAttributes {
  /**
   * Defines the text of the component.
   */
  text?: string;
}

interface SearchFieldScopeOptionDomRef extends Required<SearchFieldScopeOptionAttributes>, Ui5DomRef {}

interface SearchFieldScopeOptionPropTypes
  extends SearchFieldScopeOptionAttributes,
    Omit<CommonProps, keyof SearchFieldScopeOptionAttributes> {}

/**
 * The `ui5-search-scope-option` represents the options for the scope in `Search`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of __@ui5/webcomponents-fiori__.
 * @abstract
 * @experimental
 */
const SearchFieldScopeOption = withWebComponent<SearchFieldScopeOptionPropTypes, SearchFieldScopeOptionDomRef>(
  'ui5-search-field-scope-option',
  ['text'],
  [],
  [],
  []
);

SearchFieldScopeOption.displayName = 'SearchFieldScopeOption';

export { SearchFieldScopeOption };
export type { SearchFieldScopeOptionDomRef, SearchFieldScopeOptionPropTypes };
