import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/dist/withWebComponent';
import { WrappingType } from '@ui5/webcomponents-react/dist/WrappingType';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { FC } from 'react';

import '@ui5/webcomponents/dist/RadioButton';

export interface RadioButtonPropTypes extends Omit<WithWebComponentPropTypes, 'onChange'> {
  /**
   * Defines whether the component is checked or not.
   *
   * **Note:** The property value can be changed with user interaction, either by clicking/tapping on the component, or by using the Space or Enter key.
   */
  checked?: boolean;
  /**
   * Defines whether the component is disabled.
   *
   * **Note:** A disabled component is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the name of the component. Radio buttons with the same `name` will form a radio button group.
   *
   * **Note:** The selection can be changed with `ARROW_UP/DOWN` and `ARROW_LEFT/RIGHT` keys between radio buttons in same group.
   *
   * **Note:** Only one radio button can be selected per group.
   *
   * **Important:** For the `name` property to have effect when submitting forms, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form.
   */
  name?: string;
  /**
   * Defines whether the component is read-only.
   *
   * **Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines the text of the component.
   */
  text?: string;
  /**
   * Defines the form value of the component. When a form with a radio button group is submitted, the group's value will be the value of the currently selected radio button.
   * **Important:** For the `value` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
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
 * The `RadioButton` component enables users to select a single option from a set of options. When a `RadioButton` is selected by the user, the `change` event is fired. When a `RadioButton` that is within a group is selected, the one that was previously selected gets automatically deselected. You can group radio buttons by using the `name` property.
 * **Note:** If `RadioButton` is not part of a group, it can be selected once, but can not be deselected back.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/RadioButton" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const RadioButton: FC<RadioButtonPropTypes> = withWebComponent<RadioButtonPropTypes>(
  'ui5-radio-button',
  ['name', 'text', 'value', 'valueState', 'wrappingType'],
  ['checked', 'disabled', 'readonly'],
  [],
  ['change']
);

RadioButton.displayName = 'RadioButton';

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  readonly: false,
  valueState: ValueState.None
};

export { RadioButton };
