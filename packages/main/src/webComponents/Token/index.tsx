'use client';

import '@ui5/webcomponents/dist/Token.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface TokenAttributes {
  /**
   * Defines whether the component is read-only.
   *
   * **Note:** A read-only component can not be deleted or selected, but still provides visual feedback upon user interaction.
   * @default false
   */
  readonly?: boolean;

  /**
   * Defines whether the component is selected or not.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the token.
   */
  text?: string;
}

interface TokenDomRef extends Required<TokenAttributes>, Ui5DomRef {}

interface TokenPropTypes extends TokenAttributes, Omit<CommonProps, keyof TokenAttributes | 'closeIcon' | 'onSelect'> {
  /**
   * Defines the close icon for the token. If nothing is provided to this slot, the default close icon will be used. Accepts `Icon`.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="closeIcon"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  closeIcon?: UI5WCSlotsNode;
  /**
   * Fired when the the component is selected by user interaction with mouse or by clicking space.
   */
  onSelect?: (event: Ui5CustomEvent<TokenDomRef>) => void;
}

/**
 * Tokens are small items of information (similar to tags) that mainly serve to visualize previously selected items.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Token = withWebComponent<TokenPropTypes, TokenDomRef>(
  'ui5-token',
  ['text'],
  ['readonly', 'selected'],
  ['closeIcon'],
  ['select'],
  () => import('@ui5/webcomponents/dist/Token.js')
);

Token.displayName = 'Token';

export { Token };
export type { TokenDomRef, TokenPropTypes };
