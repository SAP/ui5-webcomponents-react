import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';

import '@ui5/webcomponents/dist/SuggestionGroupItem.js';

export interface SuggestionGroupItemPropTypes extends CommonProps {
  /**
   * Defines the text of the `SuggestionGroupItem`.
   */
  text?: string;
}

/**
 * The `SuggestionGroupItem` is type of suggestion item, that can be used to split the `Input` suggestions into groups
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SuggestionGroupItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const SuggestionGroupItem = withWebComponent<SuggestionGroupItemPropTypes>(
  'ui5-suggestion-group-item',
  ['text'],
  [],
  [],
  []
);

SuggestionGroupItem.displayName = 'SuggestionGroupItem';

export { SuggestionGroupItem };
