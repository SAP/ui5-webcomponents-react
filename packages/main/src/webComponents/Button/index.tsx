import { withWebComponent } from '../../internal/withWebComponent';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import '@ui5/webcomponents/dist/Button.js';
import { ButtonDesign } from '../../enums';
import { ReactNode } from 'react';
import { MouseEventHandler } from 'react';

interface ButtonAttributes {
  /**
   * Defines the accessible aria name of the component.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the component.
   */
  accessibleNameRef?: string;
  /**
   * Defines the component design.
   *
   * **The available values are:**
   *
   * *   `Default`
   * *   `Emphasized`
   * *   `Positive`
   * *   `Negative`
   * *   `Transparent`
   * *   `Attention`
   */
  design?: ButtonDesign | keyof typeof ButtonDesign;
  /**
   * Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.
   */
  disabled?: boolean;
  /**
   * Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.
   *
   * Example: See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines whether the icon should be displayed after the component text.
   */
  iconEnd?: boolean;
  /**
   * When set to `true`, the component will automatically submit the nearest form element upon `press`.
   *
   * **Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   */
  submits?: boolean;
  /**
   * Defines the tooltip of the component.
   * **Note:** We recommend setting tooltip to icon-only components.
   */
  tooltip?: string;
}

export interface ButtonDomRef extends ButtonAttributes, Ui5DomRef {
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

export interface ButtonPropTypes extends ButtonAttributes, Omit<CommonProps, 'onClick'> {
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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Button" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Button = withWebComponent<ButtonPropTypes, ButtonDomRef>(
  'ui5-button',
  ['accessibleName', 'accessibleNameRef', 'design', 'icon', 'tooltip'],
  ['disabled', 'iconEnd', 'submits'],
  [],
  ['click']
);

Button.displayName = 'Button';

Button.defaultProps = {
  design: ButtonDesign.Default
};

export { Button };
