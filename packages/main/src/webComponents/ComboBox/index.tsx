import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/ComboBox';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ComboBoxPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput'> {
  /**
   * Defines whether <code>ui5-combobox</code> is in disabled state. <br><br> <b>Note:</b> A disabled <code>ui5-combobox</code> is completely uninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the filter type of the <code>ui5-combobox</code>. Available options are: <code>StartsWithPerTerm</code>, <code>StartsWith</code> and <code>Contains</code>.
   */
  filter?: string;
  /**
   * Defines the "live" value of the <code>ui5-combobox</code>. <br><br> <b>Note:</b> The property is updated upon typing.
   * <br><br> <b>Note:</b> Initially the filter value is synced with value.
   */
  filterValue?: string;
  /**
   * Indicates whether a loading indicator should be shown in the picker.
   */
  loading?: boolean;
  /**
   * Defines a short hint intended to aid the user with data entry when the <code>ui5-combobox</code> has no value.
   */
  placeholder?: string;
  /**
   * Defines whether the <code>ui5-combobox</code> is readonly. <br><br> <b>Note:</b> A read-only <code>ui5-combobox</code> is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the <code>ui5-combobox</code> is required.
   */
  required?: boolean;
  /**
   * Defines the value of the <code>ui5-combobox</code>.
   */
  value?: string;
  /**
   * Defines the value state of the <code>ui5-combobox</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * Defines the <code>ui5-combobox</code> items. <br><br> Example: <br> &lt;ui5-combobox><br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-li>Item #1&lt;/ui5-li><br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-li>Item #2&lt;/ui5-li><br> &lt;/ui5-combobox> <br> <br>
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the input operation has finished by pressing Enter, focusout or an item is selected.
   */
  onChange?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when typing in input. <br><br> <b>Note:</b> filterValue property is updated, input is changed.
   */
  onInput?: (event: CustomEvent<{}>) => void;
}

/**
 * <code>import { ComboBox } from '@ui5/webcomponents-react/lib/ComboBox';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/ComboBox" target="_blank">UI5 Web Components Playground</a>
 */
const ComboBox: FC<ComboBoxPropTypes> = withWebComponent<ComboBoxPropTypes>(
  'ui5-combobox',
  ['filter', 'filterValue', 'placeholder', 'value', 'valueState'],
  ['disabled', 'loading', 'readonly', 'required'],
  [],
  ['change', 'input']
);

ComboBox.displayName = 'ComboBox';

ComboBox.defaultProps = {
  disabled: false,
  filter: 'StartsWithPerTerm',
  filterValue: '',
  loading: false,
  placeholder: '',
  readonly: false,
  required: false,
  value: '',
  valueState: ValueState.None
};

export { ComboBox };
