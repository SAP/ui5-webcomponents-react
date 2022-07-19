import '@ui5/webcomponents/dist/SuggestionGroupItem.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Input" target="_blank">UI5 Web Components Playground</ui5-link>
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
