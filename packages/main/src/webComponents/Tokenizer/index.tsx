import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Tokenizer';
import React, { FC, ReactNode } from 'react';

export interface TokenizerPropTypes extends WithWebComponentPropTypes {
  /**
   * Forces the Tokenizer to show only as much tokens as possible in its width and add an n-More indicator.
   */
  showMore?: boolean;
  /**
   * Defines whether the <code>Tokenizer</code> is in disabled state.
   */
  disabled?: boolean;
  /**
   * Fired when a token should be deleted by clicking the close icon, pressing backspace or delete button.
   */
  onTokenDelete?: (event: CustomEvent) => void;
  /**
   * Fired when the n-More indicator is clicked.
   */
  onShowMoreItemsPress?: (event: CustomEvent) => void;
  /**
   * Defines the tokens of the <code>Tokenizer</code>. <br><b>Note:</b> Although this slot accepts all HTML Elements, it is strongly recommended that you only use `Tokens` in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * `Tokenizer` is a container for `Tokens`. It also handles the deletion of tokens by clicking on the close icon of the `Token`.
 */
const Tokenizer: FC<TokenizerPropTypes> = withWebComponent<TokenizerPropTypes>(
  'ui5-tokenizer',
  [],
  ['showMore', 'disabled'],
  [],
  ['tokenDelete', 'showMoreItemsPress']
);

Tokenizer.displayName = 'Tokenizer';

export { Tokenizer };
