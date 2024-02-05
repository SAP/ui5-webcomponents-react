'use client';

import '@ui5/webcomponents/dist/Button.js';
import type { MouseEventHandler, ReactNode } from 'react';
import { ButtonDesign, ButtonType } from '../../enums/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ButtonAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the component.
   */
  accessibleNameRef?: string;
  /**
   * Defines the component design.
   */
  design?: ButtonDesign | keyof typeof ButtonDesign;
  /**
   * Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.
   */
  disabled?: boolean;
  /**
   * Defines the icon, displayed as graphical element within the component. The SAP-icons font provides numerous options.
   *
   * Example: See all the available icons within the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines whether the icon should be displayed after the component text.
   */
  iconEnd?: boolean;
  /**
   * When set to `true`, the component will automatically submit the nearest HTML form element on `press`.
   *
   * **Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
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
   */
  type?: ButtonType | keyof typeof ButtonType;
}

interface ButtonDomRef extends ButtonAttributes, Ui5DomRef {
  /**
   * An object of strings that defines several additional accessibility attribute values for customization depending on the use case. It supports the following fields:
   *
   * *   `expanded`: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values:
   *     *   `true`
   *     *   `false`
   * *   `hasPopup`: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button. Accepts the following string values:
   *     *   `Dialog`
   *     *   `Grid`
   *     *   `ListBox`
   *     *   `Menu`
   *     *   `Tree`
   * *   `controls`: Identifies the element (or elements) whose contents or presence are controlled by the button element. Accepts a string value.
   */
  accessibilityAttributes: Record<string, unknown>;
}

interface ButtonPropTypes extends ButtonAttributes, Omit<CommonProps, keyof ButtonAttributes | 'onClick'> {
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
  onClick?: MouseEventHandler<ButtonDomRef>;
}

/**
 * The `Button` component represents a simple push button. It enables users to trigger actions by clicking or tapping the `Button`, or by pressing certain keyboard keys, such as Enter.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Button)
 */
const Button = withWebComponent<ButtonPropTypes, ButtonDomRef>(
  'ui5-button',
  ['accessibleName', 'accessibleNameRef', 'design', 'icon', 'tooltip', 'type'],
  ['disabled', 'iconEnd', 'submits'],
  [],
  ['click'],
  () => import('@ui5/webcomponents/dist/Button.js')
);

Button.displayName = 'Button';

Button.defaultProps = {
  design: ButtonDesign.Default,
  type: ButtonType.Button
};

export { Button };
export type { ButtonDomRef, ButtonPropTypes };
