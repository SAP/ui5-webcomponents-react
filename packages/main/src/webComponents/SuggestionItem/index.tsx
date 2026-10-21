'use client';

import '@ui5/webcomponents/dist/SuggestionItem.js';
import type { ListItemBaseClickEventDetail } from '@ui5/webcomponents/dist/ListItemBase.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SuggestionItemAttributes {
  /**
   * Defines the `additionalText`, displayed in the end of the item.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
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

interface SuggestionItemPropTypes
  extends SuggestionItemAttributes, Omit<CommonProps, keyof SuggestionItemAttributes | 'onClick'> {
  /**
   * Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled` property is set to `true`.
   *
   * **Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<SuggestionItemDomRef, ListItemBaseClickEventDetail>) => void;
}

/**
 * The `SuggestionItem` represents the suggestion item of the `Input`.
 *
 * __Note:__ This is a UI5 Web Component! [SuggestionItem UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/SuggestionItem) | [Repository](https://github.com/UI5/webcomponents)
 * @abstract
 */
const SuggestionItem = withWebComponent<SuggestionItemPropTypes, SuggestionItemDomRef>(
  'ui5-suggestion-item',
  ['additionalText', 'text'],
  [],
  [],
  ['click'],
);

SuggestionItem.displayName = 'SuggestionItem';

export { SuggestionItem };
export type { SuggestionItemDomRef, SuggestionItemPropTypes };
