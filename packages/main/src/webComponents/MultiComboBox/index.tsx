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
   * Defines whether `MultiComboBox` is in disabled state.
   *
   * **Note:** A disabled `MultiComboBox` is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.
   */
  open?: boolean;
  /**
   * Defines a short hint intended to aid the user with data entry when the `MultiComboBox` has no value.
   */
  placeholder?: string;
  /**
   * Defines whether the `MultiComboBox` is read-only.
   *
   * **Note:** A read-only `MultiComboBox` is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the `MultiComboBox` is required.
   */
  required?: boolean;
  /**
   * Defines the value of the `MultiComboBox`.
   *
   * **Note:** The property is updated upon typing.
   */
  value?: string;
  /**
   * Defines the value state of the `MultiComboBox`.
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
   * Defines the `MultiComboBox` items.
   *
   * Example:
   *
   * <pre>
   *   <code>
   *    &lt;MultiComboBox><br />
   *    &nbsp;&nbsp;&lt;StandardListItem>Item #1&lt;/StandardListItem><br />
   *    &nbsp;&nbsp;&lt;StandardListItem>Item #2&lt;/StandardListItem><br />
   *    &lt;/MultiComboBox>
   *  </code>
   * </pre>
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the icon to be displayed in the `MultiComboBox`.
   */
  icon?: ReactNode | ReactNode[];
  /**
   * Defines the value state message that will be displayed as pop up under the `MultiComboBox`.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the `MultiComboBox` is in `Information`, `Warning` or `Error` value state.
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: CustomEvent) => void;
  /**
   * Fired when the value of the `MultiComboBox` changes at each keystroke.
   */
  onInput?: (event: CustomEvent) => void;
  /**
   * Fired when the dropdown is opened or closed.
   */
  onOpenChange?: (event: CustomEvent) => void;
  /**
   * Fired when selection is changed by user interaction in `SingleSelect` and `MultiSelect` modes.
   */
  onSelectionChange?: (event: CustomEvent<{ items: unknown[] }>) => void;
}

/**
 * The `MultiComboBox` component provides a list box with items and a text field allowing the user to either type a value directly into the control, or choose from the list of existing items. It is a drop-down list for selecting and filtering values, commonly used to enable users to select one or more options from a predefined list. The control provides an editable input field to filter the list, and a dropdown arrow of available options. The select options in the list have checkboxes that permit multi-selection. Entered values are displayed as tokens.
 *
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
