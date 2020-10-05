import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/ToggleButton';
import { FC, ReactNode } from 'react';

export interface ToggleButtonPropTypes extends Omit<WithWebComponentPropTypes, 'onClick'> {
  /**
   * Determines whether the <code>ToggleButton</code> is displayed as pressed.
   */
  pressed?: boolean;
  /**
   * Defines the <code>Button</code> design. <br><br> <b>Note:</b> Available options are "Default", "Emphasized", "Positive", "Negative", and "Transparent".
   */
  design?: ButtonDesign;
  /**
   * Defines whether the <code>Button</code> is disabled (default is set to <code>false</code>). A disabled <code>Button</code> can't be pressed or focused, and it is not in the tab chain.
   */
  disabled?: boolean;
  /**
   * Defines the icon to be displayed as graphical element within the <code>Button</code>. The SAP-icons font provides numerous options. <br><br> Example: <br> <pre>ui5-button icon="palette"</pre><br/><br/>
   *
   * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines whether the icon should be displayed after the <code>Button</code> text.
   */
  iconEnd?: boolean;
  /**
   * When set to <code>true</code>, the <code>Button</code> will automatically submit the nearest form element upon <code>press</code>. <br><br> <b>Important:</b> For the <code>submits</code> property to have effect, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
   */
  submits?: boolean;
  /**
   * Defines the text of the <code>Button</code>. <br><br> <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the <code>Button</code> is activated either with a mouse/tap or by using the Enter or Space key. <br><br> <b>Note:</b> The event will not be fired if the <code>disabled</code> property is set to <code>true</code>.
   */
  onClick?: (event: CustomEvent<{}>) => void;
}

/**
 * The <code>ToggleButton</code> component is an enhanced <code>Button</code> that can be toggled between pressed and
 normal states. Users can use the <code>ToggleButton</code> as a switch to turn a setting on or off. It can also be used
 to represent an independent choice similar to a check box. <br /><br />
 Clicking or tapping on a <code>ToggleButton</code> changes its state to <code>pressed</code>. The button returns to its
 initial state when the user clicks or taps on it again. By applying additional custom CSS-styling classes, apps can give
 a different style to any <code>ToggleButton</code>.

 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ToggleButton" target="_blank">UI5 Web Components Playground</a>
 */
const ToggleButton: FC<ToggleButtonPropTypes> = withWebComponent<ToggleButtonPropTypes>(
  'ui5-togglebutton',
  ['design', 'icon'],
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
  submits: false
};

export { ToggleButton };
