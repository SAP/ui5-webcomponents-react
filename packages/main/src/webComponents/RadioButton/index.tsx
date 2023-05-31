'use client';

import '@ui5/webcomponents/dist/RadioButton.js';
import type { WrappingType } from '../../enums/index.js';
import { ValueState } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface RadioButtonAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Defines the IDs of the elements that label the component.
   */
  accessibleNameRef?: string;
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
   * Defines whether the component is required.
   */
  required?: boolean;
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
   * *   `Success`
   * *   `Information`
   */
  valueState?: ValueState | keyof typeof ValueState;
  /**
   * Defines whether the component text wraps when there is not enough space.
   *
   * Available options are:
   *
   * *   `None` - The text will be truncated with an ellipsis.
   * *   `Normal` - The text will wrap. The words will not be broken based on hyphenation.
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

export interface RadioButtonDomRef extends RadioButtonAttributes, Ui5DomRef {}

export interface RadioButtonPropTypes extends RadioButtonAttributes, Omit<CommonProps, 'onChange'> {
  /**
   * Fired when the component checked state changes.
   */
  onChange?: (event: Ui5CustomEvent<RadioButtonDomRef>) => void;
}

/**
 * The `RadioButton` component enables users to select a single option from a set of options. When a `RadioButton` is selected by the user, the `onChange` event is fired. When a `RadioButton` that is within a group is selected, the one that was previously selected gets automatically deselected. You can group radio buttons by using the `name` property.
 * **Note:** If `RadioButton` is not part of a group, it can be selected once, but can not be deselected back.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/RadioButton" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const RadioButton = withWebComponent<RadioButtonPropTypes, RadioButtonDomRef>(
  'ui5-radio-button',
  ['accessibleName', 'accessibleNameRef', 'name', 'text', 'value', 'valueState', 'wrappingType'],
  ['checked', 'disabled', 'readonly', 'required'],
  [],
  ['change'],
  () => import('@ui5/webcomponents/dist/RadioButton.js')
);

RadioButton.displayName = 'RadioButton';

RadioButton.defaultProps = {
  valueState: ValueState.None
};

export { RadioButton };
