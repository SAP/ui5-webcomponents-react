import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/CheckBox';
import { FC } from 'react';

export interface CheckBoxPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Defines if the <code>CheckBox</code> is checked. <br><br> <b>Note:</b> The property can be changed with user interaction, either by cliking/tapping on the <code>CheckBox</code>, or by pressing the Enter or Space key.
   */
  checked?: boolean;
  /**
   * Defines whether the <code>CheckBox</code> is disabled. <br><br> <b>Note:</b> A disabled <code>CheckBox</code> is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Determines the name with which the <code>CheckBox</code> will be submitted in an HTML form.<br/><br/>
   *
   * <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code><br/><br/>
   *
   * <b>Note:</b> When set, a native <code>input</code> HTML element will be created inside the <code>CheckBox</code> so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines whether the <code>CheckBox</code> is read-only. <br><br> <b>Note:</b> A red-only <code>CheckBox</code> is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines the text of the <code>CheckBox</code>.
   */
  text?: string;
  /**
   * Defines the value state of the <code>CheckBox</code>. <br><br> <b>Note:</b> Available options are <code>Warning</code>, <code>Error</code>, and <code>None</code> (default).
   */
  valueState?: ValueState;
  /**
   * Defines whether the <code>CheckBox</code> text wraps when there is not enough space. <br><br> <b>Note:</b> By default, the text truncates when there is not enough space.
   */
  wrap?: boolean;
  /**
   * Fired when the <code>CheckBox</code> checked state changes.
   */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Allows the user to set a binary value, such as true/false or yes/no for an item. <br /><br />
 The <code>CheckBox</code> component consists of a box and a label that describes its purpose. If it's checked, an
 indicator is displayed inside the box. To check/uncheck the <code>CheckBox</code>, the user has to click or tap the
 square box or its label. <br /><br />
 The <code>CheckBox</code> component only has 2 states - checked and unchecked. Clicking or tapping toggles the
 <code>CheckBox</code> between checked and unchecked state.

 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/CheckBox" target="_blank">UI5 Web Components Playground</a>
 */
const CheckBox: FC<CheckBoxPropTypes> = withWebComponent<CheckBoxPropTypes>(
  'ui5-checkbox',
  ['name', 'text', 'valueState'],
  ['checked', 'disabled', 'readonly', 'wrap'],
  [],
  ['change']
);

CheckBox.displayName = 'CheckBox';

CheckBox.defaultProps = {
  checked: false,
  disabled: false,
  readonly: false,
  valueState: ValueState.None,
  wrap: false
};

export { CheckBox };
