import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/ComboBox';
import { FC, ReactNode } from 'react';

export interface ComboBoxPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput'> {
  /**
   * Defines whether <code>ComboBox</code> is in disabled state. <br><br> <b>Note:</b> A disabled <code>ComboBox</code> is completely uninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the filter type of the <code>ComboBox</code>. Available options are: <code>StartsWithPerTerm</code>, <code>StartsWith</code> and <code>Contains</code>.
   */
  filter?: string;
  /**
   * Defines the "live" value of the <code>ComboBox</code>. <br><br> <b>Note:</b> The property is updated upon typing.<br/><br/>
   *
   * <b>Note:</b> Initially the filter value is synced with value.
   */
  filterValue?: string;
  /**
   * Indicates whether a loading indicator should be shown in the picker.
   */
  loading?: boolean;
  /**
   * Defines a short hint intended to aid the user with data entry when the <code>ComboBox</code> has no value.
   */
  placeholder?: string;
  /**
   * Defines whether the <code>ComboBox</code> is readonly. <br><br> <b>Note:</b> A read-only <code>ComboBox</code> is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the <code>ComboBox</code> is required.
   */
  required?: boolean;
  /**
   * Defines the value of the <code>ComboBox</code>.
   */
  value?: string;
  /**
   * Defines the value state of the <code>ComboBox</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * Defines the <code>ComboBox</code> items. <br><br> Example: <br> &lt;ComboBox><br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ComboBoxItem text="Item #1" /><br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ComboBoxItem text="Item #2" /><br> &lt;/ComboBox> <br> <br>
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the icon to be displayed in the input field.
   */
  icon?: ReactNode | ReactNode[];
  /**
   * Defines the value state message that will be displayed as pop up under the <code>ComboBox</code>. <br><br><br/><br/>
   *
   * <b>Note:</b> If not specified, a default text (in the respective language) will be displayed. <br> <b>Note:</b> The <code>valueStateMessage</code> would be displayed, when the <code>Select</code> is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state.
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when the input operation has finished by pressing Enter, focusout or an item is selected.
   */
  onChange?: (event: CustomEvent) => void;
  /**
   * Fired when typing in input. <br><br> <b>Note:</b> filterValue property is updated, input is changed.
   */
  onInput?: (event: CustomEvent) => void;
}

/**
 *  The <code>ComboBox</code> component represents a drop-down menu with a list of the available options and a text input field to narrow down the options. It is commonly used to enable users to select one or more options from a predefined list.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ComboBox" target="_blank">UI5 Web Components Playground</a>
 */
const ComboBox: FC<ComboBoxPropTypes> = withWebComponent<ComboBoxPropTypes>(
  'ui5-combobox',
  ['filter', 'filterValue', 'placeholder', 'value', 'valueState'],
  ['disabled', 'loading', 'readonly', 'required'],
  ['icon', 'valueStateMessage'],
  ['change', 'input']
);

ComboBox.displayName = 'ComboBox';

ComboBox.defaultProps = {
  disabled: false,
  filter: 'StartsWithPerTerm',
  loading: false,
  readonly: false,
  required: false,
  valueState: ValueState.None
};

export { ComboBox };
