'use client';

import '@ui5/webcomponents-fiori/dist/SearchMessageArea.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SearchMessageAreaAttributes {
  /**
   * Defines the description text to be displayed.
   * @default undefined
   */
  description?: string | undefined;

  /**
   * Defines the text to be displayed.
   * @default undefined
   */
  text?: string | undefined;
}

interface SearchMessageAreaDomRef extends Required<SearchMessageAreaAttributes>, Ui5DomRef {}

interface SearchMessageAreaPropTypes
  extends SearchMessageAreaAttributes,
    Omit<CommonProps, keyof SearchMessageAreaAttributes> {}

/**
 * `import "@ui5/webcomponents-fiori/dist/SearchMessageArea.js";`
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.9.0) of __@ui5/webcomponents-fiori__.
 * @experimental
 */
const SearchMessageArea = withWebComponent<SearchMessageAreaPropTypes, SearchMessageAreaDomRef>(
  'ui5-search-message-area',
  ['description', 'text'],
  [],
  [],
  []
);

SearchMessageArea.displayName = 'SearchMessageArea';

export { SearchMessageArea };
export type { SearchMessageAreaDomRef, SearchMessageAreaPropTypes };
