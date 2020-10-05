import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Token';
import { FC, ReactNode } from 'react';

export interface TokenPropTypes extends Omit<WithWebComponentPropTypes, 'onSelect'> {
  /**
   * Defines whether the <code>ui5-token</code> is read-only. <br><br> <b>Note:</b> A read-only <code>ui5-token</code> can not be deleted or selected, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the <code>ui5-token</code> is selected or not.
   */
  selected?: boolean;
  /**
   * Defines the text of the token.
   */
  text?: string;
  /**
   * Defines the close icon for the token. If nothing is provided to this slot, the default close icon will be used. Accepts <code>ui5-icon</code>
   */
  closeIcon?: ReactNode | ReactNode[];
  /**
   * Fired when the a <code>ui5-token</code> is selected by user interaction with mouse or clicking space.
   */
  onSelect?: (event: CustomEvent<{}>) => void;
}

/**
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Token" target="_blank">UI5 Web Components Playground</a>
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
