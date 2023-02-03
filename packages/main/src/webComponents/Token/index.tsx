'use client';

import '@ui5/webcomponents/dist/Token.js';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';
import { UI5WCSlotsNode } from '../../types';

interface TokenAttributes {
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
}

export interface TokenDomRef extends TokenAttributes, Ui5DomRef {}

export interface TokenPropTypes extends TokenAttributes, Omit<CommonProps, 'onSelect'> {
  /**
   * Defines the close icon for the token. If nothing is provided to this slot, the default close icon will be used. Accepts `Icon`.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="closeIcon"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
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
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiInput" target="_blank">UI5 Web Components Playground</ui5-link>
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
