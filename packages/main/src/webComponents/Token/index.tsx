import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Token';
import { FC, ReactNode } from 'react';

export interface TokenPropTypes extends Omit<WithWebComponentPropTypes, 'onSelect'> {
  /**
   * Defines whether the <code>Token</code> is read-only. <br><br> <b>Note:</b> A read-only <code>Token</code> can not be deleted or selected, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the <code>Token</code> is selected or not.
   */
  selected?: boolean;
  /**
   * Defines the text of the token.
   */
  text?: string;
  /**
   * Defines the close icon for the token. If nothing is provided to this slot, the default close icon will be used. Accepts <code>Icon</code>
   */
  closeIcon?: ReactNode | ReactNode[];
  /**
   * Fired when the a <code>Token</code> is selected by user interaction with mouse or clicking space.
   */
  onSelect?: (event: CustomEvent) => void;
}

/**
 * Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items.<br />
 * __Note:__ Tokens shouldn't be implemented as a standalone component. Use the `MultiInput` to achieve the intended functionality.
 */
const Token: FC<TokenPropTypes> = withWebComponent<TokenPropTypes>(
  'ui5-token',
  ['text'],
  ['readonly', 'selected'],
  ['closeIcon'],
  ['select']
);

Token.displayName = 'Token';

Token.defaultProps = {};

export { Token };
