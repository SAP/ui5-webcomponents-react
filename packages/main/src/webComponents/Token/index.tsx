import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Token';
import { FC, ReactNode } from 'react';

export interface TokenPropTypes extends Omit<WithWebComponentPropTypes, 'onSelect'> {
  /**
   * Defines whether the `Token` is read-only.
   *
   * **Note:** A read-only `Token` can not be deleted or selected, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the `Token` is selected or not.
   */
  selected?: boolean;
  /**
   * Defines the text of the token.
   */
  text?: string;
  /**
   * Defines the close icon for the token. If nothing is provided to this slot, the default close icon will be used. Accepts `Icon`
   */
  closeIcon?: ReactNode | ReactNode[];
  /**
   * Fired when the a `Token` is selected by user interaction with mouse or clicking space.
   */
  onSelect?: (event: CustomEvent) => void;
}

/**
 * Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items.
 *
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
