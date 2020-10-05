import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/MultiComboBox';
import { FC, ReactNode } from 'react';

export interface MultiComboBoxPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput'> {
  /**
   * Defines if the user input will be prevented, if no matching item has been found
   */
  allowCustomValues?: boolean;
  /**
   * Defines whether <code>MultiComboBox</code> is in disabled state. <br><br> <b>Note:</b> A disabled <code>MultiComboBox</code> is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.
   */
  open?: boolean;
  /**
   * Defines a short hint intended to aid the user with data entry when the <code>MultiComboBox</code> has no value.
   */
  placeholder?: string;
  /**
   * Defines whether the <code>MultiComboBox</code> is read-only. <br><br> <b>Note:</b> A read-only <code>MultiComboBox</code> is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the <code>MultiComboBox</code> is required.
   */
  required?: boolean;
  /**
   * Defines the value of the <code>MultiComboBox</code>. <br><br> <b>Note:</b> The property is updated upon typing.
   */
  value?: string;
  /**
   * Defines the value state of the <code>MultiComboBox</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * Defines the <code>MultiComboBox</code> items. <br><br> Example: <br> &lt;MultiComboBox><br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-li>Item #1&lt;/ui5-li><br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-li>Item #2&lt;/ui5-li><br> &lt;/MultiComboBox> <br> <br>
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the icon to be displayed in the <code>MultiComboBox</code>.
   */
  icon?: ReactNode | ReactNode[];
  /**
   * Defines the value state message that will be displayed as pop up under the <code>ui5-multicombobox</code>. <br><br><br/><br/>
   *
   * <b>Note:</b> If not specified, a default text (in the respective language) will be displayed. <br> <b>Note:</b> The <code>valueStateMessage</code> would be displayed, when the <code>ui5-select</code> is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when the value of the <code>MultiComboBox</code> changes at each keystroke.
   */
  onInput?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when the dropdown is opened or closed.
   */
  onOpenChange?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when selection is changed by user interaction in <code>SingleSelect</code> and <code>MultiSelect</code> modes.
   */
  onSelectionChange?: (event: CustomEvent<{ items: unknown[] }>) => void;
}

/**
 * The <code>MultiComboBox</code> component provides a list box with items and a text field allowing the user to either
 type a value directly into the control, or choose from the list of existing items. It is a drop-down list for selecting
 and filtering values, commonly used to enable users to select one or more options from a predefined list. The control
 provides an editable input field to filter the list, and a dropdown arrow of available options. The select options in
 the list have checkboxes that permit multi-selection. Entered values are displayed as tokens.

 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBox" target="_blank">UI5 Web Components Playground</a>
 */
const MultiComboBox: FC<MultiComboBoxPropTypes> = withWebComponent<MultiComboBoxPropTypes>(
  'ui5-multi-combobox',
  ['placeholder', 'value', 'valueState'],
  ['allowCustomValues', 'disabled', 'open', 'readonly', 'required'],
  ['icon', 'valueStateMessage'],
  ['change', 'input', 'open-change', 'selection-change']
);

MultiComboBox.displayName = 'MultiComboBox';

MultiComboBox.defaultProps = {
  allowCustomValues: false,
  disabled: false,
  open: false,
  readonly: false,
  required: false,
  valueState: ValueState.None
};

export { MultiComboBox };
