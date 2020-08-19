import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/ToggleButton';
import { FC, ReactNode } from 'react';

export interface ToggleButtonPropTypes extends Omit<WithWebComponentPropTypes, 'onClick'> {
  /**
   * Determines whether the <code>ui5-togglebutton</code> is displayed as pressed.
   */
  pressed?: boolean;
  /**
   * Defines the <code>ui5-button</code> design. <br><br> <b>Note:</b> Available options are "Default", "Emphasized", "Positive", "Negative", and "Transparent".
   */
  design?: ButtonDesign;
  /**
   * Defines whether the <code>ui5-button</code> is disabled (default is set to <code>false</code>). A disabled <code>ui5-button</code> can't be pressed or focused, and it is not in the tab chain.
   */
  disabled?: boolean;
  /**
   * Defines the icon to be displayed as graphical element within the <code>ui5-button</code>. The SAP-icons font provides numerous options. <br><br> Example: <br> <pre>ui5-button icon="palette"</pre><br/><br/>
   *
   * See all the available icons in the <ui5-link target="_blank" href="https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html" class="api-table-content-cell-link">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines whether the icon should be displayed after the <code>ui5-button</code> text.
   */
  iconEnd?: boolean;
  /**
   * When set to <code>true</code>, the <code>ui5-button</code> will automatically submit the nearest form element upon <code>press</code>. <br><br> <b>Important:</b> For the <code>submits</code> property to have effect, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
   */
  submits?: boolean;
  /**
   * Defines the text of the <code>ui5-button</code>. <br><br> <b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the <code>ui5-button</code> is activated either with a mouse/tap or by using the Enter or Space key. <br><br> <b>Note:</b> The event will not be fired if the <code>disabled</code> property is set to <code>true</code>.
   */
  onClick?: (event: CustomEvent<{}>) => void;
}

/**
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
