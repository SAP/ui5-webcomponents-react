import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { WrappingType } from '@ui5/webcomponents-react/dist/WrappingType';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';

import '@ui5/webcomponents/dist/CheckBox';

export interface CheckBoxPropTypes extends Omit<CommonProps, 'onChange'> {
  /**
   * Defines if the component is checked.
   *
   * **Note:** The property can be changed with user interaction, either by cliking/tapping on the component, or by pressing the Enter or Space key.
   */
  checked?: boolean;
  /**
   * Defines whether the component is disabled.
   *
   * **Note:** A disabled component is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines whether the component is displayed as partially checked.
   *
   * **Note:** The indeterminate state can be set only programatically and can’t be achieved by user interaction and the resulting visual state depends on the values of the `indeterminate` and `checked` properties:
   *
   * *   If the component is checked and indeterminate, it will be displayed as partially checked
   * *   If the component is checked and it is not indeterminate, it will be displayed as checked
   * *   If the component is not checked, it will be displayed as not checked regardless value of the indeterminate attribute
   */
  indeterminate?: boolean;
  /**
   * Determines the name with which the component will be submitted in an HTML form.
   *
   * **Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines whether the component is read-only.
   *
   * **Note:** A red-only component is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines the text of the component.
   */
  text?: string;
  /**
   * Defines the value state of the component.
   *
   * **Note:**
   *
   * *   `Warning`
   * *   `Error`
   * *   `None`(default)
   * *   `Success`
   * *   `Information`
   */
  valueState?: ValueState;
  /**
   * Defines whether the component text wraps when there is not enough space.
   *
   * Available options are:
   *
   * *   `None` - The text will be truncated with an ellipsis.
   * *   `Normal` - The text will wrap. The words will not be broken based on hyphenation.
   */
  wrappingType?: WrappingType;
  /**
   * Fired when the component checked state changes.
   */
  onChange?: (event: Ui5CustomEvent<HTMLInputElement>) => void;
}

/**
 * Allows the user to set a binary value, such as true/false or yes/no for an item.
 *
 * The `CheckBox` component consists of a box and a label that describes its purpose. If it's checked, an indicator is displayed inside the box. To check/uncheck the `CheckBox`, the user has to click or tap the square box or its label.
 *
 * The `CheckBox` component only has 2 states - checked and unchecked. Clicking or tapping toggles the `CheckBox` between checked and unchecked state.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/CheckBox" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const CheckBox = withWebComponent<CheckBoxPropTypes>(
  'ui5-checkbox',
  ['name', 'text', 'valueState', 'wrappingType'],
  ['checked', 'disabled', 'indeterminate', 'readonly'],
  [],
  ['change']
);

CheckBox.displayName = 'CheckBox';

CheckBox.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
  readonly: false,
  valueState: ValueState.None
};

export { CheckBox };
