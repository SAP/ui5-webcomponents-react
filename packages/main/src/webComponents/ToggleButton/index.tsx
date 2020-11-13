import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/ToggleButton';
import { FC, ReactNode } from 'react';

export interface ToggleButtonPropTypes extends Omit<WithWebComponentPropTypes, 'onClick'> {
  /**
   * Determines whether the `ToggleButton` is displayed as pressed.
   */
  pressed?: boolean;
  /**
   * Defines the `ui5-button` design.
   *
   * **Note:** Available options are "Default", "Emphasized", "Positive", "Negative", and "Transparent".
   */
  design?: ButtonDesign;
  /**
   * Defines whether the `ui5-button` is disabled (default is set to `false`). A disabled `ui5-button` can't be pressed or focused, and it is not in the tab chain.
   */
  disabled?: boolean;
  /**
   * Defines the icon to be displayed as graphical element within the `ui5-button`. The SAP-icons font provides numerous options.
   *
   * Example:
   *
   * ui5-button icon="palette"
   *
   * See all the available icons in the Icon Explorer.
   */
  icon?: string;
  /**
   * Defines whether the icon should be displayed after the `ui5-button` text.
   */
  iconEnd?: boolean;
  /**
   * Defines the size of the icon inside the `ui5-button`.
   */
  iconSize?: string;
  /**
   * When set to `true`, the `ui5-button` will automatically submit the nearest form element upon `press`.
   *
   * **Important:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   */
  submits?: boolean;
  /**
   * Defines the text of the `ui5-button`.
   *
   * **Note:** Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the <code>Button</code> is activated either with a mouse/tap or by using the Enter or Space key. <br><br> <b>Note:</b> The event will not be fired if the <code>disabled</code> property is set to <code>true</code>.
   */
  onClick?: (event: CustomEvent) => void;
}

/**
 * The `ToggleButton` component is an enhanced `Button` that can be toggled between pressed and normal states. Users can use the `ToggleButton` as a switch to turn a setting on or off. It can also be used to represent an independent choice similar to a check box.
 *
 * Clicking or tapping on a `ToggleButton` changes its state to `pressed`. The button returns to its initial state when the user clicks or taps on it again. By applying additional custom CSS-styling classes, apps can give a different style to any `ToggleButton`.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ToggleButton" target="_blank">UI5 Web Components Playground</a>
 */
const ToggleButton: FC<ToggleButtonPropTypes> = withWebComponent<ToggleButtonPropTypes>(
  'ui5-togglebutton',
  ['design', 'icon', 'iconSize'],
  ['pressed', 'disabled', 'iconEnd', 'submits'],
  [],
  ['click']
);

ToggleButton.displayName = 'ToggleButton';

ToggleButton.defaultProps = {
  pressed: false,
  design: ButtonDesign.Default,
  disabled: false,
  iconEnd: false,
  iconSize: undefined,
  submits: false
};

export { ToggleButton };
