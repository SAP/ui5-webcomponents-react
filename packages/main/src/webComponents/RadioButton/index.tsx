import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/RadioButton';
import { FC } from 'react';

export interface RadioButtonPropTypes extends Omit<WithWebComponentPropTypes, 'onSelect'> {
  /**
   * Determines whether the <code>RadioButton</code> is disabled. <br><br> <b>Note:</b> A disabled <code>RadioButton</code> is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the name of the <code>RadioButton</code>. Radio buttons with the same <code>name</code> will form a radio button group.<br/><br/>
   *
   * <b>Note:</b> The selection can be changed with <code>ARROW_UP/DOWN</code> and <code>ARROW_LEFT/RIGHT</code> keys between radio buttons in same group.<br/><br/>
   *
   * <b>Note:</b> Only one radio button can be selected per group.<br/><br/>
   *
   * <b>Important:</b> For the <code>name</code> property to have effect when submitting forms, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code><br/><br/>
   *
   * <b>Note:</b> When set, a native <code>input</code> HTML element will be created inside the <code>RadioButton</code> so that it can be submitted as part of an HTML form.
   */
  name?: string;
  /**
   * Determines whether the <code>RadioButton</code> is read-only. <br><br> <b>Note:</b> A read-only <code>RadioButton</code> is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Determines whether the <code>RadioButton</code> is selected or not. <br><br> <b>Note:</b> The property value can be changed with user interaction, either by cliking/tapping on the <code>RadioButton</code>, or by using the Space or Enter key.
   */
  selected?: boolean;
  /**
   * Defines the text of the <code>RadioButton</code>.
   */
  text?: string;
  /**
   * Defines the form value of the <code>RadioButton</code>. When a form with a radio button group is submitted, the group's value will be the value of the currently selected radio button. <br> <b>Important:</b> For the <code>value</code> property to have effect, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
   */
  value?: string;
  /**
   * Defines the value state of the <code>RadioButton</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * Defines whether the <code>RadioButton</code> text wraps when there is not enough space. <br><br> <b>Note:</b> By default, the text truncates when there is not enough space.
   */
  wrap?: boolean;
  /**
   * Fired when the <code>RadioButton</code> selected state changes.
   */
  onSelect?: (event: CustomEvent<{}>) => void;
}

/**
 * The <code>RadioButton</code> component enables users to select a single option from a set of options. When a
 <code>RadioButton</code> is selected by the user, the <code>select</code> event is fired. When a
 <code>RadioButton</code> that is within a group is selected, the one that was previously selected gets automatically
 deselected. You can group radio buttons by using the <code>name</code> property. <br />
 <b>Note:</b> If <code>RadioButton</code> is not part of a group, it can be selected once, but can not be deselected
 back.

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
