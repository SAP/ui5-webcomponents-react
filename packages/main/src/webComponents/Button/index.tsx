'use client';

import '@ui5/webcomponents/dist/Button.js';
import type { ButtonAccessibilityAttributes } from '@ui5/webcomponents/dist/Button.js';
import type ButtonAccessibleRole from '@ui5/webcomponents/dist/types/ButtonAccessibleRole.js';
import type ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import type ButtonType from '@ui5/webcomponents/dist/types/ButtonType.js';
import type { MouseEventHandler, ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ButtonAttributes {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   * The following fields are supported:
   *
   * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
   * Accepts the following string values: `true` or `false`
   *
   * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
   * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
   *
   * - **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
   * Accepts a lowercase string value.
   *
   * **Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.
   * @default {}
   */
  accessibilityAttributes?: ButtonAccessibilityAttributes;

  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   *
   * **Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Describes the accessibility role of the button.
   *
   * **Note:** Use <code>ButtonAccessibleRole.Link</code> role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.
   *
   * **Note:** Available since [v1.23](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23) of **@ui5/webcomponents**.
   * @default "Button"
   */
  accessibleRole?: ButtonAccessibleRole | keyof typeof ButtonAccessibleRole;

  /**
   * Defines the component design.
   * @default "Default"
   */
  design?: ButtonDesign | keyof typeof ButtonDesign;

  /**
   * Defines whether the component is disabled.
   * A disabled component can't be pressed or
   * focused, and it is not in the tab chain.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the icon, displayed as graphical element within the component after the button text.
   *
   * **Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.
   * Usage of `endIcon` only should be avoided.
   *
   * The SAP-icons font provides numerous options.
   *
   * Example:
   * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  endIcon?: string | undefined;

  /**
   * Defines the icon, displayed as graphical element within the component.
   * The SAP-icons font provides numerous options.
   *
   * Example:
   * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  icon?: string | undefined;

  /**
   * When set to `true`, the component will
   * automatically submit the nearest HTML form element on `press`.
   *
   * **Note:** This property is only applicable within the context of an HTML Form element.`
   * @default false
   * @deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".
   */
  submits?: boolean;

  /**
   * Defines the tooltip of the component.
   *
   * **Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.
   *
   * **Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Defines whether the button has special form-related functionality.
   *
   * **Note:** This property is only applicable within the context of an HTML Form element.
   *
   * **Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.
   * @default "Button"
   */
  type?: ButtonType | keyof typeof ButtonType;
}

interface ButtonDomRef extends Required<ButtonAttributes>, Ui5DomRef {}

interface ButtonPropTypes extends ButtonAttributes, Omit<CommonProps, keyof ButtonAttributes | 'children' | 'onClick'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component is activated either with a
   * mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled`
   * property is set to `true`.
   */
  onClick?: MouseEventHandler<ButtonDomRef>;
}

/**
 * The `Button` component represents a simple push button.
 * It enables users to trigger actions by clicking or tapping the `Button`, or by pressing
 * certain keyboard keys, such as Enter.
 *
 * ### Usage
 *
 * For the `Button` UI, you can define text, icon, or both. You can also specify
 * whether the text or the icon is displayed first.
 *
 * You can choose from a set of predefined types that offer different
 * styling to correspond to the triggered action.
 *
 * You can set the `Button` as enabled or disabled. An enabled
 * `Button` can be pressed by clicking or tapping it. The button changes
 * its style to provide visual feedback to the user that it is pressed or hovered over with
 * the mouse cursor. A disabled `Button` appears inactive and cannot be pressed.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const Button = withWebComponent<ButtonPropTypes, ButtonDomRef>(
  'ui5-button',
  [
    'accessibilityAttributes',
    'accessibleName',
    'accessibleNameRef',
    'accessibleRole',
    'design',
    'endIcon',
    'icon',
    'tooltip',
    'type'
  ],
  ['disabled', 'submits'],
  [],
  ['click']
);

Button.displayName = 'Button';

export { Button };
export type { ButtonDomRef, ButtonPropTypes };
