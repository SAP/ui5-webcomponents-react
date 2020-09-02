import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC } from 'react';

export interface CheckBoxPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Defines if the <code>ui5-checkbox</code> is checked. <br><br> <b>Note:</b> The property can be changed with user interaction, either by cliking/tapping on the <code>ui5-checkbox</code>, or by pressing the Enter or Space key.
   */
  checked?: boolean;
  /**
   * Defines whether the <code>ui5-checkbox</code> is disabled. <br><br> <b>Note:</b> A disabled <code>ui5-checkbox</code> is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Determines the name with which the <code>ui5-checkbox</code> will be submitted in an HTML form.<br/><br/>
   *
   * <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code><br/><br/>
   *
   * <b>Note:</b> When set, a native <code>input</code> HTML element will be created inside the <code>ui5-checkbox</code> so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines whether the <code>ui5-checkbox</code> is read-only. <br><br> <b>Note:</b> A red-only <code>ui5-checkbox</code> is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines the text of the <code>ui5-checkbox</code>.
   */
  text?: string;
  /**
   * Defines the value state of the <code>ui5-checkbox</code>. <br><br> <b>Note:</b> Available options are <code>Warning</code>, <code>Error</code>, and <code>None</code> (default).
   */
  valueState?: ValueState;
  /**
   * Defines whether the <code>ui5-checkbox</code> text wraps when there is not enough space. <br><br> <b>Note:</b> By default, the text truncates when there is not enough space.
   */
  wrap?: boolean;
  /**
   * Fired when the <code>ui5-checkbox</code> checked state changes.
   */
  onChange?: (event: CustomEvent<{}>) => void;
}

/**
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/CheckBox" target="_blank">UI5 Web Components Playground</a>
 */
const CheckBox: FC<CheckBoxPropTypes> = withWebComponent<CheckBoxPropTypes>(
  'ui5-checkbox',
  () => import('@ui5/webcomponents/dist/CheckBox'),
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
