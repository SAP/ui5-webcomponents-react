import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Switch';
import { FC } from 'react';

export interface SwitchPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Defines if the <code>Switch</code> is checked. <br><br> <b>Note:</b> The property can be changed with user interaction, either by cliking/tapping on the <code>Switch</code>, or by pressing the <code>Enter</code> or <code>Space</code> key.
   */
  checked?: boolean;
  /**
   * Defines whether the <code>Switch</code> is disabled. <br><br> <b>Note:</b> A disabled <code>Switch</code> is noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the <code>Switch</code> type. <br><br> <b>Note:</b> If <code>graphical</code> type is set, positive and negative icons will replace the <code>textOn</code> and <code>textOff</code>.
   */
  graphical?: boolean;
  /**
   * Defines the text of the <code>Switch</code> when switched off. <br><br> <b>Note:</b> We recommend using short texts, up to 3 letters (larger texts would be cut off).
   */
  textOff?: string;
  /**
   * Defines the text of the <code>Switch</code> when switched on.<br/><br/>
   *
   * <b>Note:</b> We recommend using short texts, up to 3 letters (larger texts would be cut off).
   */
  textOn?: string;
  /**
   * Fired when the <code>Switch</code> checked state changes.
   */
  onChange?: (event: CustomEvent) => void;
}

/**
 *  The <code>Switch</code> component is used for changing between binary states. <br> The component can display texts, that will be switched, based on the component state, via the <code>textOn</code> and <code>textOff</code> properties, but texts longer than 3 letters will be cutted off. <br> However, users are able to customize the width of <code>Switch</code> with pure CSS (&lt;Switch style="width: 200px">), and set widths, depending on the texts they would use. <br> Note: the component would not automatically stretch to fit the whole text width.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Switch" target="_blank">UI5 Web Components Playground</a>
 */
const Switch: FC<SwitchPropTypes> = withWebComponent<SwitchPropTypes>(
  'ui5-switch',
  ['textOff', 'textOn'],
  ['checked', 'disabled', 'graphical'],
  [],
  ['change']
);

Switch.displayName = 'Switch';

Switch.defaultProps = {
  checked: false,
  disabled: false,
  graphical: false
};

export { Switch };
