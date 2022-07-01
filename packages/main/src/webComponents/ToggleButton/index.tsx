import '@ui5/webcomponents/dist/ToggleButton.js';
import { MouseEventHandler, ReactNode } from 'react';
import { ButtonDesign } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface ToggleButtonAttributes {
  /**
   * Determines whether the component is displayed as pressed.
   */
  pressed?: boolean;
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

export interface ToggleButtonDomRef extends ToggleButtonAttributes, Ui5DomRef {
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

export interface ToggleButtonPropTypes extends ToggleButtonAttributes, Omit<CommonProps, 'onClick'> {
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
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ToggleButton" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ToggleButton = withWebComponent<ToggleButtonPropTypes, ToggleButtonDomRef>(
  'ui5-toggle-button',
  ['accessibleName', 'accessibleNameRef', 'design', 'icon', 'tooltip'],
  ['pressed', 'disabled', 'iconEnd', 'submits'],
  [],
  ['click']
);

ToggleButton.displayName = 'ToggleButton';

ToggleButton.defaultProps = {
  design: ButtonDesign.Default
};

export { ToggleButton };
