'use client';

import '@ui5/webcomponents/dist/SuggestionGroupItem.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface SuggestionGroupItemAttributes {
  /**
   * Defines the text of the `SuggestionGroupItem`.
   */
  text?: string;
}

interface SuggestionGroupItemDomRef extends Required<SuggestionGroupItemAttributes>, Ui5DomRef {}

interface SuggestionGroupItemPropTypes
  extends SuggestionGroupItemAttributes,
    Omit<CommonProps, keyof SuggestionGroupItemAttributes> {}

/**
 * The `SuggestionGroupItem` is type of suggestion item,
 * that can be used to split the `Input` suggestions into groups.
 *
 * @abstract
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const SuggestionGroupItem = withWebComponent<SuggestionGroupItemPropTypes, SuggestionGroupItemDomRef>(
  'ui5-suggestion-group-item',
  ['text'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/SuggestionGroupItem.js')
);

SuggestionGroupItem.displayName = 'SuggestionGroupItem';

export { SuggestionGroupItem };
export type { SuggestionGroupItemDomRef, SuggestionGroupItemPropTypes };
