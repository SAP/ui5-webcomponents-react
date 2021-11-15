import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5DomRef } from '@ui5/webcomponents-react/interfaces/Ui5DomRef';

import '@ui5/webcomponents/dist/SuggestionGroupItem.js';

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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SuggestionGroupItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const SuggestionGroupItem = withWebComponent<SuggestionGroupItemPropTypes, SuggestionGroupItemDomRef>(
  'ui5-suggestion-group-item',
  ['text'],
  [],
  [],
  []
);

SuggestionGroupItem.displayName = 'SuggestionGroupItem';

export { SuggestionGroupItem };
