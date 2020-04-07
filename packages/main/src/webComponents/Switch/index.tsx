import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Switch';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface SwitchPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines if the <code>ui5-switch</code> is checked. <br><br> <b>Note:</b> The property can be changed with user interaction, either by cliking/tapping on the <code>ui5-switch</code>, or by pressing the <code>Enter</code> or <code>Space</code> key.
   */
  checked?: boolean;
  /**
   * Defines whether the <code>ui5-switch</code> is disabled. <br><br> <b>Note:</b> A disabled <code>ui5-switch</code> is noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the <code>ui5-switch</code> type. <br><br> <b>Note:</b> If <code>graphical</code> type is set, positive and negative icons will replace the <code>textOn</code> and <code>textOff</code>.
   */
  graphical?: boolean;
  /**
   * Defines the text of the <code>ui5-switch</code> when switched off. <br><br> <b>Note:</b> We recommend using short texts, up to 3 letters (larger texts would be cut off).
   */
  textOff?: string;
  /**
   * Defines the text of the <code>ui5-switch</code> when switched on.
   *
   * <br><br> <b>Note:</b> We recommend using short texts, up to 3 letters (larger texts would be cut off).
   */
  textOn?: string;
  /**
   * Fired when the <code>ui5-switch</code> checked state changes.
   */
  onChange?: (event: CustomEvent<{}>) => void;
}

/**
 * <code>import { Switch } from '@ui5/webcomponents-react/lib/Switch';</code>
 * <br />
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
  graphical: false,
  textOff: '',
  textOn: ''
};

export { Switch };
