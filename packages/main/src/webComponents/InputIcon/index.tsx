'use client';

import '@ui5/webcomponents/dist/InputIcon.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface InputIconAttributes {
  /**
   * Defines the accessible name of the icon.
   *
   * **Note:** This property is used for accessibility purposes and will be announced by screen readers.
   * When set, it is also rendered as a native `title` tooltip, unless `hideTooltip` is set.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines the icon name to be displayed.
   *
   * **Note:** Make sure you import the desired icon before using it.
   * @default undefined
   */
  name?: string | undefined;
}

interface InputIconDomRef extends Required<InputIconAttributes>, Ui5DomRef {}

interface InputIconPropTypes extends InputIconAttributes, Omit<CommonProps, keyof InputIconAttributes | 'onClick'> {
  /**
   * Fired when the `InputIcon` is activated either with a click/tap or by using the Enter or Space key.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<InputIconDomRef>) => void;
}

/**
 * The `InputIcon` component represents an interactive icon that can be placed inside an `Input` component.
 * Unlike the standard `Icon`, this component provides button-like behavior with hover, focus, and active states,
 * matching the visual style of the input's built-in clear icon.
 *
 * ### Usage
 * Use `InputIcon` for interactive icons that users can click (e.g., search, voice input, camera).
 * For decorative icons, use the standard `Icon` component instead.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [InputIcon UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/InputIcon) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.25.0](https://github.com/UI5/webcomponents/releases/tag/v2.25.0) of __@ui5/webcomponents__.
 */
const InputIcon = withWebComponent<InputIconPropTypes, InputIconDomRef>(
  'ui5-input-icon',
  ['accessibleName', 'name'],
  [],
  [],
  ['click'],
);

InputIcon.displayName = 'InputIcon';

export { InputIcon };
export type { InputIconDomRef, InputIconPropTypes };
