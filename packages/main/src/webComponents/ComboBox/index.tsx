import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/ComboBox';
import { FC, ReactNode } from 'react';

export interface ComboBoxPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput'> {
  /**
   * Defines whether `ComboBox` is in disabled state.
   *
   * **Note:** A disabled `ComboBox` is completely uninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the filter type of the `ComboBox`. Available options are: `StartsWithPerTerm`, `StartsWith` and `Contains`.
   */
  filter?: string;
  /**
   * Defines the "live" value of the `ComboBox`.
   *
   * **Note:** The property is updated upon typing.
   *
   * **Note:** Initially the filter value is synced with value.
   */
  filterValue?: string;
  /**
   * Indicates whether a loading indicator should be shown in the picker.
   */
  loading?: boolean;
  /**
   * Defines a short hint intended to aid the user with data entry when the `ComboBox` has no value.
   */
  placeholder?: string;
  /**
   * Defines whether the `ComboBox` is readonly.
   *
   * **Note:** A read-only `ComboBox` is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the `ComboBox` is required.
   */
  required?: boolean;
  /**
   * Defines the value of the `ComboBox`.
   */
  value?: string;
  /**
   * Defines the value state of the `ComboBox`.
   *
   * Available options are:
   *
   * *   `None`
   * *   `Error`
   * *   `Warning`
   * *   `Success`
   * *   `Information`
   */
  valueState?: ValueState;
  /**
   * Defines the `ComboBox` items.
   *
   * Example:
   *
   * <pre>
   *   <code>
   *    &lt;ComboBox><br />
   *    &nbsp;&nbsp;&lt;StandardListItem>Item #1&lt;/StandardListItem><br />
   *    &nbsp;&nbsp;&lt;StandardListItem>Item #2&lt;/StandardListItem><br />
   *    &lt;/ComboBox>
   *  </code>
   * </pre>
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the icon to be displayed in the input field.
   */
  icon?: ReactNode | ReactNode[];
  /**
   * Defines the value state message that will be displayed as pop up under the `ComboBox`.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the `Select` is in `Information`, `Warning` or `Error` value state.
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when the input operation has finished by pressing Enter, focusout or an item is selected.
   */
  onChange?: (event: CustomEvent) => void;
  /**
   * Fired when typing in input.
   *
   * **Note:** filterValue property is updated, input is changed.
   */
  onInput?: (event: CustomEvent) => void;
}

/**
 * The `ComboBox` component represents a drop-down menu with a list of the available options and a text input field to narrow down the options. It is commonly used to enable users to select one or more options from a predefined list.
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
