'use client';

import '@ui5/webcomponents/dist/SuggestionItem.js';
import { ValueState, ListItemType } from '../../enums/index.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface SuggestionItemAttributes {
  /**
   * Defines the `additionalText`, displayed in the end of the item.
   */
  additionalText?: string;
  /**
   * Defines the state of the `additionalText`.
   *
   * Available options are: `"None"` (by default), `"Success"`, `"Information"`, `"Warning"` and `"Error"`.
   */
  additionalTextState?: ValueState | keyof typeof ValueState;
  /**
   * Defines the description displayed right under the item text, if such is present.
   */
  description?: string;
  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.
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
  type?: ListItemType | keyof typeof ListItemType;
}

export interface SuggestionItemDomRef extends SuggestionItemAttributes, Ui5DomRef {}

export interface SuggestionItemPropTypes extends SuggestionItemAttributes, CommonProps {}

/**
 * The `SuggestionItem` represents the suggestion item of the `Input`
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Input" target="_blank">UI5 Web Components Storybook</ui5-link>
 */
const SuggestionItem = withWebComponent<SuggestionItemPropTypes, SuggestionItemDomRef>(
  'ui5-suggestion-item',
  ['additionalText', 'additionalTextState', 'description', 'icon', 'image', 'text', 'type'],
  ['iconEnd'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/SuggestionItem.js')
);

SuggestionItem.displayName = 'SuggestionItem';

SuggestionItem.defaultProps = {
  additionalTextState: ValueState.None,
  type: ListItemType.Active
};

export { SuggestionItem };
