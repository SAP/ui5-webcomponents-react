'use client';

import '@ui5/webcomponents-ai/dist/Button.js';
import type ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import type { AIButtonAccessibilityAttributes } from '@ui5/webcomponents-ai/dist/Button.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface ButtonAttributes {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   *
   * This property allows for fine-tuned control of ARIA attributes for screen reader support.
   * It accepts an object with the following optional fields:
   *
   * - **root**: Accessibility attributes that will be applied to the root element.
   *  - **hasPopup**: Indicates the availability and type of interactive popup element (such as a menu or dialog).
   *    Accepts string values: `"dialog"`, `"grid"`, `"listbox"`, `"menu"`, or `"tree"`.
   *  - **roleDescription**: Defines a human-readable description for the button's role.
   *    Accepts any string value.
   *
   * - **arrowButton**: Accessibility attributes that will be applied to the arrow (split) button element.
   *  - **hasPopup**: Indicates the type of popup triggered by the arrow button.
   *    Accepts string values: `"dialog"`, `"grid"`, `"listbox"`, `"menu"`, or `"tree"`.
   *  - **expanded**: Indicates whether the popup controlled by the arrow button is currently expanded.
   *    Accepts boolean values: `true` or `false`.
   *
   * **Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents-ai**.
   * @default {}
   */
  accessibilityAttributes?: AIButtonAccessibilityAttributes;

  /**
   * Defines the active state of the arrow button in split mode.
   * Set to true when the button is in split mode and a menu with additional options
   * is opened by the arrow button. Set back to false when the menu is closed.
   *
   * **Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents-ai**.
   * @default false
   */
  arrowButtonPressed?: boolean;

  /**
   * Defines the component design.
   * @default "Default"
   */
  design?: ButtonDesign | undefined | keyof typeof ButtonDesign;

  /**
   * Defines whether the component is disabled.
   * A disabled component can't be pressed or
   * focused, and it is not in the tab chain.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the current state of the component.
   * @default undefined
   */
  state?: string | undefined;
}

interface ButtonDomRef extends Required<ButtonAttributes>, Ui5DomRef {}

interface ButtonPropTypes
  extends ButtonAttributes,
    Omit<CommonProps, keyof ButtonAttributes | 'children' | 'onArrowButtonClick' | 'onClick'> {
  /**
   * Defines the available states of the component.
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that
   * you only use `ButtonState` components in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component is in split mode and after the arrow button
   * is activated either by clicking or tapping it or by using the [Arrow Up] / [Arrow Down],
   * [Alt] + [Arrow Up]/ [Arrow Down], or [F4] keyboard keys.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onArrowButtonClick?: (event: Ui5CustomEvent<ButtonDomRef>) => void;

  /**
   * Fired when the component is activated either with a
   * mouse/tap or by using the Enter or Space key.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onClick?: (event: Ui5CustomEvent<ButtonDomRef>) => void;
}

/**
 * The `Button` component serves as a button for AI-related scenarios. Users can trigger actions by clicking or tapping the `Button`
 * or by pressing keyboard keys like [Enter] or [Space].
 *
 * ### Usage
 *
 * For the `Button` user interface, you can define one or more button states by placing `ButtonState` components in their default slot.
 * Each state has a name for identification and can include text, an icon, and an end icon, as needed for its purpose.
 * You can define a split mode for the `Button`, which will results in displaying an arrow button for additional actions.
 *
 * You can choose from a set of predefined designs for `Button` (as in `ui5-button`) to match the desired styling.
 *
 * The `Button` can be activated by clicking or tapping it. You can change the button state in the click event handler. When the button is
 * in split mode, you can activate the default button action by clicking or tapping it, or by pressing keyboard keys like [Enter] or [Space].
 * You can activate the arrow button by clicking or tapping it, or by pressing keyboard keys like [Arrow Up], [Arrow Down], or [F4].
 * To display additional actions, you can attach a menu to the arrow button.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents-ai__.
 * @experimental The Button and ButtonState web components are availabe since 2.0 under an experimental flag and their API and behaviour are subject to change.
 */
const Button = withWebComponent<ButtonPropTypes, ButtonDomRef>(
  'ui5-ai-button',
  ['accessibilityAttributes', 'design', 'state'],
  ['arrowButtonPressed', 'disabled'],
  [],
  ['arrow-button-click', 'click'],
);

Button.displayName = 'Button';

export { Button };
export type { ButtonDomRef, ButtonPropTypes };
