'use client';

import '@ui5/webcomponents/dist/Badge.js';
import type { ReactNode } from 'react';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface BadgeAttributes {
  /**
   * Defines the color scheme of the component. There are 10 predefined schemes. Each scheme applies different values for the `background-color` and `border-color`. To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.
   *
   * **Note:** Color schemes have no visual representation in High Contrast Black (sap\_belize\_hcb) theme.
   */
  colorScheme?: string;
}

export interface BadgeDomRef extends BadgeAttributes, Ui5DomRef {}

export interface BadgePropTypes extends BadgeAttributes, CommonProps {
  /**
   * Defines the text of the component.
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the icon to be displayed in the component.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="icon"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  icon?: UI5WCSlotsNode | UI5WCSlotsNode[];
}

/**
 * The `Badge` is a small non-interactive component which contains text information and color chosen from a list of predefined color schemes. It serves the purpose to attract the user attention to some piece of information (state, quantity, condition, etc.).
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Badge)
 */
const Badge = withWebComponent<BadgePropTypes, BadgeDomRef>(
  'ui5-badge',
  ['colorScheme'],
  [],
  ['icon'],
  [],
  () => import('@ui5/webcomponents/dist/Badge.js')
);

Badge.displayName = 'Badge';

Badge.defaultProps = {
  colorScheme: '1'
};

export { Badge };
