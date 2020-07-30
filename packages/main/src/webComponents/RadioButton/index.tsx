import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/RadioButton';
import { FC } from 'react';

export interface RadioButtonPropTypes extends Omit<WithWebComponentPropTypes, 'onSelect'> {
  /**
   * Determines whether the <code>ui5-radiobutton</code> is disabled. <br><br> <b>Note:</b> A disabled <code>ui5-radiobutton</code> is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the name of the <code>ui5-radiobutton</code>. Radio buttons with the same <code>name</code> will form a radio button group.<br/><br/>
   *
   * <b>Note:</b> The selection can be changed with <code>ARROW_UP/DOWN</code> and <code>ARROW_LEFT/RIGHT</code> keys between radio buttons in same group.<br/><br/>
   *
   * <b>Note:</b> Only one radio button can be selected per group.<br/><br/>
   *
   * <b>Important:</b> For the <code>name</code> property to have effect when submitting forms, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code><br/><br/>
   *
   * <b>Note:</b> When set, a native <code>input</code> HTML element will be created inside the <code>ui5-radiobutton</code> so that it can be submitted as part of an HTML form.
   */
  name?: string;
  /**
   * Determines whether the <code>ui5-radiobutton</code> is read-only. <br><br> <b>Note:</b> A read-only <code>ui5-radiobutton</code> is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Determines whether the <code>ui5-radiobutton</code> is selected or not. <br><br> <b>Note:</b> The property value can be changed with user interaction, either by cliking/tapping on the <code>ui5-radiobutton</code>, or by using the Space or Enter key.
   */
  selected?: boolean;
  /**
   * Defines the text of the <code>ui5-radiobutton</code>.
   */
  text?: string;
  /**
   * Defines the form value of the <code>ui5-radiobutton</code>. When a form with a radio button group is submitted, the group's value will be the value of the currently selected radio button. <br> <b>Important:</b> For the <code>value</code> property to have effect, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
   */
  value?: string;
  /**
   * Defines the value state of the <code>ui5-radiobutton</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * Defines whether the <code>ui5-radiobutton</code> text wraps when there is not enough space. <br><br> <b>Note:</b> By default, the text truncates when there is not enough space.
   */
  wrap?: boolean;
  /**
   * Fired when the <code>ui5-radiobutton</code> selected state changes.
   */
  onSelect?: (event: CustomEvent<{}>) => void;
}

/**
 * <code>import { RadioButton } from '@ui5/webcomponents-react/lib/RadioButton';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/RadioButton" target="_blank">UI5 Web Components Playground</a>
 */
const RadioButton: FC<RadioButtonPropTypes> = withWebComponent<RadioButtonPropTypes>(
  'ui5-radiobutton',
  ['name', 'text', 'value', 'valueState'],
  ['disabled', 'readonly', 'selected', 'wrap'],
  [],
  ['select']
);

RadioButton.displayName = 'RadioButton';

RadioButton.defaultProps = {
  disabled: false,
  readonly: false,
  selected: false,
  valueState: ValueState.None,
  wrap: false
};

export { RadioButton };
