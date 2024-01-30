'use client';

import '@ui5/webcomponents/dist/StepInput.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface StepInputAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;

  /**
   * Receives id(or many ids) of the elements that label the component.
   */
  accessibleNameRef?: string;

  /**
   * Determines whether the component is displayed as disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines a maximum value of the component.
   * @default undefined
   */
  max?: number | undefined;

  /**
   * Defines a minimum value of the component.
   * @default undefined
   */
  min?: number | undefined;

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
   * @default undefined
   */
  placeholder?: string | undefined;

  /**
   * Determines whether the component is displayed as read-only.
   * @default false
   */
  readonly?: boolean;

  /**
   * Defines whether the component is required.
   * @default false
   */
  required?: boolean;

  /**
   * Defines a step of increasing/decreasing the value of the component.
   * @default 1
   */
  step?: number;

  /**
   * Defines a value of the component.
   * @default 0
   */
  value?: number;

  /**
   * Determines the number of digits after the decimal point of the component.
   * @default 0
   */
  valuePrecision?: number;

  /**
   * Defines the value state of the component.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface StepInputDomRef extends StepInputAttributes, Ui5DomRef {}

interface StepInputPropTypes extends StepInputAttributes, Omit<CommonProps, keyof StepInputAttributes | 'onChange'> {
  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode;
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: Ui5CustomEvent<StepInputDomRef>) => void;
}

/**
 * The `StepInput` consists of an input field and buttons with icons to increase/decrease the value with the predefined step.
 *
 * The user can change the value of the component by pressing the increase/decrease buttons, by typing a number directly, by using the keyboard up/down and page up/down, or by using the mouse scroll wheel. Decimal values are supported.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const StepInput = withWebComponent<StepInputPropTypes, StepInputDomRef>(
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
  ['change'],
  () => import('@ui5/webcomponents/dist/StepInput.js')
);

StepInput.displayName = 'StepInput';

export { StepInput };
export type { StepInputDomRef, StepInputPropTypes };
