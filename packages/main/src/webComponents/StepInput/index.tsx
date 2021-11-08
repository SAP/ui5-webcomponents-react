import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/StepInput.js';

export interface StepInputPropTypes extends Omit<CommonProps, 'onChange'> {
  /**
   * Sets the accessible aria name of the component.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the component.
   */
  accessibleNameRef?: string;
  /**
   * Determines whether the component is displayed as disabled.
   */
  disabled?: boolean;
  /**
   * Defines a maximum value of the component.
   */
  max?: number;
  /**
   * Defines a minimum value of the component.
   */
  min?: number;
  /**
   * Determines the name with which the component will be submitted in an HTML form.
   *
   * **Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines a short hint, intended to aid the user with data entry when the component has no value.
   *
   * **Note:** When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.
   */
  placeholder?: string;
  /**
   * Determines whether the component is displayed as read-only.
   */
  readonly?: boolean;
  /**
   * Defines whether the component is required.
   */
  required?: boolean;
  /**
   * Defines a step of increasing/decreasing the value of the component.
   */
  step?: number;
  /**
   * Defines a value of the component.
   */
  value?: number;
  /**
   * Determines the number of digits after the decimal point of the component.
   */
  valuePrecision?: number;
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
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  valueStateMessage?: ReactNode;
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: Ui5CustomEvent<HTMLInputElement>) => void;
}

/**
 * The `StepInput` consists of an input field and buttons with icons to increase/decrease the value with the predefined step.
 *
 * The user can change the value of the component by pressing the increase/decrease buttons, by typing a number directly, by using the keyboard up/down and page up/down, or by using the mouse scroll wheel. Decimal values are supported.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/StepInput" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const StepInput = withWebComponent<StepInputPropTypes>(
  'ui5-step-input',
  [
    'accessibleName',
    'accessibleNameRef',
    'max',
    'min',
    'name',
    'placeholder',
    'step',
    'value',
    'valuePrecision',
    'valueState'
  ],
  ['disabled', 'readonly', 'required'],
  ['valueStateMessage'],
  ['change']
);

StepInput.displayName = 'StepInput';

StepInput.defaultProps = {
  step: 1,
  value: 0,
  valuePrecision: 0,
  valueState: ValueState.None
};

export { StepInput };
