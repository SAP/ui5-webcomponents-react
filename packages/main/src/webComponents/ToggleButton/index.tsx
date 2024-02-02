'use client';

import '@ui5/webcomponents/dist/ToggleButton.js';
import type { AccessibilityAttributes } from '@ui5/webcomponents/dist/Button.js';
import type ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import type ButtonType from '@ui5/webcomponents/dist/types/ButtonType.js';
import type { MouseEventHandler, ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ToggleButtonAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   */
  accessibleNameRef?: string;

  /**
   * Defines the component design.
   * @default "Default"
   */
  design?: ButtonDesign | keyof typeof ButtonDesign;

  /**
   * Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the icon, displayed as graphical element within the component. The SAP-icons font provides numerous options.
   *
   * Example: See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;

  /**
   * Defines whether the icon should be displayed after the component text.
   * @default false
   */
  iconEnd?: boolean;

  /**
   * Determines whether the component is displayed as pressed.
   * @default false
   */
  pressed?: boolean;

  /**
   * When set to `true`, the component will automatically submit the nearest HTML form element on `press`.
   *
   * **Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   * @default false
   * @deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".
   */
  submits?: boolean;

  /**
   * Defines the tooltip of the component.
   * **Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.
   */
  tooltip?: string;

  /**
   * Defines whether the button has special form-related functionality.
   *
   * **Note:** For the `type` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   * @default "Button"
   */
  type?: ButtonType | keyof typeof ButtonType;
}

interface ToggleButtonDomRef extends Required<ToggleButtonAttributes>, Ui5DomRef {
  /**
   * An object of strings that defines several additional accessibility attribute values for customization depending on the use case. It supports the following fields:
   *
   * *   `expanded`: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values:
   *     *   `true`
   *     *   `false`
   * *   `hasPopup`: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button. Accepts the following string values:
   *     *   `dialog`
   *     *   `grid`
   *     *   `listbox`
   *     *   `menu`
   *     *   `tree`
   * *   `controls`: Identifies the element (or elements) whose contents or presence are controlled by the button element. Accepts a string value.
   */
  accessibilityAttributes: AccessibilityAttributes;
}

interface ToggleButtonPropTypes
  extends ToggleButtonAttributes,
    Omit<CommonProps, keyof ToggleButtonAttributes | 'children' | 'onClick'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled` property is set to `true`.
   */
  onClick?: MouseEventHandler<ToggleButtonDomRef>;
}

/**
 * The `ToggleButton` component is an enhanced `Button` that can be toggled between pressed and normal states. Users can use the `ToggleButton` as a switch to turn a setting on or off. It can also be used to represent an independent choice similar to a check box.
 *
 * Clicking or tapping on a `ToggleButton` changes its state to `pressed`. The button returns to its initial state when the user clicks or taps on it again. By applying additional custom CSS-styling classes, apps can give a different style to any `ToggleButton`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const ToggleButton = withWebComponent<ToggleButtonPropTypes, ToggleButtonDomRef>(
  'ui5-toggle-button',
  ['accessibleName', 'accessibleNameRef', 'design', 'icon', 'tooltip', 'type'],
  ['disabled', 'iconEnd', 'pressed', 'submits'],
  [],
  ['click'],
  () => import('@ui5/webcomponents/dist/ToggleButton.js')
);

ToggleButton.displayName = 'ToggleButton';

export { ToggleButton };
export type { ToggleButtonDomRef, ToggleButtonPropTypes };
