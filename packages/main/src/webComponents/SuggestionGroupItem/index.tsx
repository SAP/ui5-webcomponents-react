'use client';

import '@ui5/webcomponents/dist/SuggestionGroupItem.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface SuggestionGroupItemAttributes {
  /**
   * Defines the text of the `SuggestionGroupItem`.
   */
  text?: string;
}

export interface SuggestionGroupItemDomRef extends SuggestionGroupItemAttributes, Ui5DomRef {}

export interface SuggestionGroupItemPropTypes extends SuggestionGroupItemAttributes, CommonProps {}

/**
 * The `SuggestionGroupItem` is type of suggestion item, that can be used to split the `Input` suggestions into groups
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Input)
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
