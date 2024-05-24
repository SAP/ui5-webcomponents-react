'use client';

import '@ui5/webcomponents/dist/Tokenizer.js';
import type {
  TokenizerDialogButtonPressDetail,
  TokenizerSelectionChangeEventDetail,
  TokenizerTokenDeleteEventDetail
} from '@ui5/webcomponents/dist/Tokenizer.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface TokenizerAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines whether the component is disabled.
   *
   * **Note:** A disabled component is completely noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines whether the component is read-only.
   *
   * **Note:** A read-only component is not editable,
   * but still provides visual feedback upon user interaction.
   * @default false
   */
  readonly?: boolean;
}

interface TokenizerDomRef extends Required<TokenizerAttributes>, Ui5DomRef {}

interface TokenizerPropTypes
  extends TokenizerAttributes,
    Omit<
      CommonProps,
      keyof TokenizerAttributes | 'onDialogButtonPress' | 'onSelectionChange' | 'onShowMoreItemsPress' | 'onTokenDelete'
    > {
  /**
   * Fired when a dialog button is pressed.
   */
  onDialogButtonPress?: (event: Ui5CustomEvent<TokenizerDomRef, TokenizerDialogButtonPressDetail>) => void;

  /**
   * Fired when token selection is changed by user interaction
   */
  onSelectionChange?: (event: Ui5CustomEvent<TokenizerDomRef, TokenizerSelectionChangeEventDetail>) => void;

  /**
   * Fired when nMore link is pressed.
   */
  onShowMoreItemsPress?: (event: Ui5CustomEvent<TokenizerDomRef>) => void;

  /**
   * Fired when a token is deleted (delete icon, delete or backspace is pressed)
   */
  onTokenDelete?: (event: Ui5CustomEvent<TokenizerDomRef, TokenizerTokenDeleteEventDetail>) => void;
}

/**
 * A `Tokenizer` is an invisible container for `Token`s that supports keyboard navigation and token selection.
 *
 * The `Tokenizer` consists of two parts:
 * - Tokens - displays the available tokens.
 * - N-more indicator - contains the number of the remaining tokens that cannot be displayed due to the limited space.
 *
 * ### Keyboard Handling
 *
 * #### Basic Navigation
 * The `Tokenizer` provides advanced keyboard handling.
 * When a token is focused the user can use the following keyboard
 * shortcuts in order to perform a navigation:
 *
 * - [Left] or [Right] / [Up] or [Down] - Navigates left and right through the tokens.
 * - [Home] - Navigates to the first token.
 * - [End] - Navigates to the last token.
 *
 * The user can use the following keyboard shortcuts to perform actions (such as select, delete):
 *
 * - [Space] - Selects a token.
 * - [Backspace] / [Delete] - Deletes a token.
 * **Note:** The deletion of a token is handled by the application with the use of the `token-delete` event.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0) of __@ui5/webcomponents__.
 */
const Tokenizer = withWebComponent<TokenizerPropTypes, TokenizerDomRef>(
  'ui5-tokenizer',
  ['accessibleName', 'accessibleNameRef'],
  ['disabled', 'readonly'],
  [],
  ['dialog-button-press', 'selection-change', 'show-more-items-press', 'token-delete'],
  () => import('@ui5/webcomponents/dist/Tokenizer.js')
);

Tokenizer.displayName = 'Tokenizer';

export { Tokenizer };
export type { TokenizerDomRef, TokenizerPropTypes };
