'use client';

import '@ui5/webcomponents/dist/SuggestionItem.js';
import type ListItemType from '@ui5/webcomponents/dist/types/ListItemType.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface SuggestionItemAttributes {
  /**
   * Defines the `additionalText`, displayed in the end of the item.
   */
  additionalText?: string;

  /**
   * Defines the state of the `additionalText`.
   * @default "None"
   */
  additionalTextState?: ValueState | keyof typeof ValueState;

  /**
   * Defines the description displayed right under the item text, if such is present.
   */
  description?: string;

  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;

  /**
   * Defines whether the `icon` should be displayed in the beginning of the item or in the end.
   *
   * **Note:** If `image` is set, the `icon` would be displayed after the `image`.
   * @default false
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
   * @default "Active"
   */
  type?: ListItemType | keyof typeof ListItemType;
}

interface SuggestionItemDomRef extends Required<SuggestionItemAttributes>, Ui5DomRef {}

interface SuggestionItemPropTypes extends SuggestionItemAttributes, Omit<CommonProps, keyof SuggestionItemAttributes> {}

/**
 * The `SuggestionItem` represents the suggestion item of the `Input`.
 *
 * @abstract
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
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

export { SuggestionItem };
export type { SuggestionItemDomRef, SuggestionItemPropTypes };
