import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/Token.js';

export interface TokenPropTypes extends Omit<CommonProps, 'onSelect'> {
  /**
   * Defines whether the component is read-only.
   *
   * **Note:** A read-only component can not be deleted or selected, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the component is selected or not.
   */
  selected?: boolean;
  /**
   * Defines the text of the token.
   */
  text?: string;
  /**
   * Defines the close icon for the token. If nothing is provided to this slot, the default close icon will be used. Accepts `Icon`.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  closeIcon?: ReactNode;
  /**
   * Fired when the the component is selected by user interaction with mouse or by clicking space.
   */
  onSelect?: (event: Ui5CustomEvent<HTMLElement>) => void;
}

/**
 * Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Token" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Token = withWebComponent<TokenPropTypes>(
  'ui5-token',
  ['text'],
  ['readonly', 'selected'],
  ['closeIcon'],
  ['select']
);

Token.displayName = 'Token';

Token.defaultProps = {};

export { Token };
