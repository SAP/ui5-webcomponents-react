'use client';

import '@ui5/webcomponents/dist/SuggestionItemCustom.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface SuggestionItemCustomAttributes {
  /**
   * Defines the text of the `SuggestionItemCustom`.
   * **Note:** The text property is considered only for autocomplete.
   * @default undefined
   */
  text?: string | undefined;
}

interface SuggestionItemCustomDomRef extends Required<SuggestionItemCustomAttributes>, Ui5DomRef {}

interface SuggestionItemCustomPropTypes
  extends SuggestionItemCustomAttributes,
    Omit<CommonProps, keyof SuggestionItemCustomAttributes | 'children'> {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `SuggestionItemCustom` is type of suggestion item,
 * that can be used to place suggestion items with custom content in the input.
 * The text property is considered only for autocomplete.
 * In case the user needs highlighting functionality, check "@ui5/webcomponents-base/dist/util/generateHighlightedMarkup.js"
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const SuggestionItemCustom = withWebComponent<SuggestionItemCustomPropTypes, SuggestionItemCustomDomRef>(
  'ui5-suggestion-item-custom',
  ['text'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/SuggestionItemCustom.js')
);

SuggestionItemCustom.displayName = 'SuggestionItemCustom';

export { SuggestionItemCustom };
export type { SuggestionItemCustomDomRef, SuggestionItemCustomPropTypes };
