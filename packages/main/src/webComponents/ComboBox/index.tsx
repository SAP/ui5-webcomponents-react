import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/ComboBox';

export interface ComboBoxPropTypes extends Omit<CommonProps, 'onChange' | 'onInput'> {
  /**
   * Sets the accessible aria name of the component.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the combo box
   */
  accessibleNameRef?: string;
  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is completely uninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the filter type of the component. Available options are: `StartsWithPerTerm`, `StartsWith` and `Contains`.
   */
  filter?: string;
  /**
   * Indicates whether a loading indicator should be shown in the picker.
   */
  loading?: boolean;
  /**
   * Defines a short hint intended to aid the user with data entry when the component has no value.
   */
  placeholder?: string;
  /**
   * Defines whether the component is readonly.
   *
   * **Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the component is required.
   */
  required?: boolean;
  /**
   * Defines the value of the component.
   */
  value?: string;
  /**
   * Defines the value state of the component.
   *
   * Available options are:
   *
   * *   `None`
   * *   `Error`
   * *   `Warning`
   * *   `Success`
   * *   `Information`
   */
  valueState?: ValueState | keyof typeof ValueState;
  /**
   * Defines the component items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the icon to be displayed in the input field.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  icon?: ReactNode;
  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the `Select` is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when the input operation has finished by pressing Enter, focusout or an item is selected.
   */
  onChange?: (event: Ui5CustomEvent<HTMLInputElement>) => void;
  /**
   * Fired when typing in input.
   *
   * **Note:** filterValue property is updated, input is changed.
   */
  onInput?: (event: Ui5CustomEvent<HTMLInputElement>) => void;
  /**
   * Fired when selection is changed by user interaction
   */
  onSelectionChange?: (event: Ui5CustomEvent<HTMLInputElement, { item: ReactNode }>) => void;
}

/**
 * The `ComboBox` component represents a drop-down menu with a list of the available options and a text input field to narrow down the options. It is commonly used to enable users to select one or more options from a predefined list.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ComboBox" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const ComboBox = withWebComponent<ComboBoxPropTypes>(
  'ui5-combobox',
  ['accessibleName', 'accessibleNameRef', 'filter', 'placeholder', 'value', 'valueState'],
  ['disabled', 'loading', 'readonly', 'required'],
  ['icon', 'valueStateMessage'],
  ['change', 'input', 'selection-change']
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
