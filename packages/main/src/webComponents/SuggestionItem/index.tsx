'use client';

import '@ui5/webcomponents/dist/SuggestionItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface SuggestionItemAttributes {
  /**
   * Defines the `additionalText`, displayed in the end of the item.
   * @default undefined
   */
  additionalText?: string | undefined;

  /**
   * Defines the text of the component.
   * @default undefined
   */
  text?: string | undefined;
}

interface SuggestionItemDomRef extends Required<SuggestionItemAttributes>, Ui5DomRef {}

interface SuggestionItemPropTypes extends SuggestionItemAttributes, Omit<CommonProps, keyof SuggestionItemAttributes> {}

/**
 * The `SuggestionItem` represents the suggestion item of the `Input`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @abstract
 */
const SuggestionItem = withWebComponent<SuggestionItemPropTypes, SuggestionItemDomRef>(
  'ui5-suggestion-item',
  ['additionalText', 'text'],
  [],
  [],
  []
);

SuggestionItem.displayName = 'SuggestionItem';

export { SuggestionItem };
export type { SuggestionItemDomRef, SuggestionItemPropTypes };
