import { ListItemType } from '@ui5/webcomponents-react/dist/ListItemType';
import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/dist/withWebComponent';
import { FC } from 'react';

import '@ui5/webcomponents/dist/SuggestionItem';

export interface SuggestionItemPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the `additionalText`, displayed in the end of the item.
   */
  additionalText?: string;
  /**
   * Defines the state of the `additionalText`.
   *
   * Available options are: `"None"` (by default), `"Success"`, `"Warning"` and `"Erorr"`.
   */
  additionalTextState?: ValueState;
  /**
   * Defines the description displayed right under the item text, if such is present.
   */
  description?: string;
  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines whether the `icon` should be displayed in the beginning of the item or in the end.
   *
   * **Note:** If `image` is set, the `icon` would be displayed after the `image`.
   */
  iconEnd?: boolean;
  /**
   * Defines the `image` source URI.
   *
   * **Note:** The `image` would be displayed in the beginning of the item.
   */
  image?: string;
  /**
   * Defines the text of the component.
   */
  text?: string;
  /**
   * Defines the visual indication and behavior of the item. Available options are `Active` (by default), `Inactive` and `Detail`.
   *
   * **Note:** When set to `Active`, the item will provide visual response upon press and hover, while when `Inactive` or `Detail` - will not.
   */
  type?: ListItemType;
}

/**
 * The `SuggestionItem` represents the suggestion item of the `Input`
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SuggestionItem" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const SuggestionItem: FC<SuggestionItemPropTypes> = withWebComponent<SuggestionItemPropTypes>(
  'ui5-suggestion-item',
  ['additionalText', 'additionalTextState', 'description', 'icon', 'image', 'text', 'type'],
  ['iconEnd'],
  [],
  []
);

SuggestionItem.displayName = 'SuggestionItem';

SuggestionItem.defaultProps = {
  additionalTextState: ValueState.None,
  iconEnd: false,
  type: ListItemType.Active
};

export { SuggestionItem };
