'use client';

import '@ui5/webcomponents/dist/NumericInput.js';
import type { NumericInputValueStateChangeEventDetail } from '@ui5/webcomponents/dist/NumericInput.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';

interface NumericInputAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives ID (or many IDs) of the elements that label the component.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

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
   * Determines the name by which the component will be identified upon submission in an HTML form.
   *
   * **Note:** This property is only applicable within the context of an HTML Form element.
   * @default undefined
   */
  name?: string | undefined;

  /**
   * Defines a short hint, intended to aid the user with data entry when the
   * component has no value.
   *
   * **Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
   * Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.
   * @default undefined
   */
  placeholder?: string | undefined;

  /**
   * Determines whether the component is displayed as read-only.
   * @default false
   */
  readonly?: boolean;

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

interface NumericInputDomRef extends Required<NumericInputAttributes>, Ui5DomRef {}

interface NumericInputPropTypes
  extends
    NumericInputAttributes,
    Omit<
      CommonProps,
      keyof NumericInputAttributes | 'valueStateMessage' | 'onChange' | 'onInput' | 'onValueStateChange'
    > {
  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed,
   * when the component is in `Information`, `Critical` or `Negative` value state.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  valueStateMessage?: UI5WCSlotsNode;
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onChange?: (event: Ui5CustomEvent<NumericInputDomRef>) => void;

  /**
   * Fired when the value of the component changes at each keystroke.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onInput?: (event: Ui5CustomEvent<NumericInputDomRef>) => void;

  /**
   * Fired before the value state of the component is updated internally.
   * The event is preventable, meaning that if its default action is
   * prevented, the component will not update the value state.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onValueStateChange?: (event: Ui5CustomEvent<NumericInputDomRef, NumericInputValueStateChangeEventDetail>) => void;
}

/**
 * The `NumericInput` component is a numeric input field. It allows users to enter, edit and select numeric values.
 *
 * ### Usage
 *
 * The default step is 1 but the app developer can set a different one.
 *
 * App developers can set a maximum and minimum value for `NumericInput`.
 * The increase/decrease button and the up/down keyboard navigation become disabled when
 * the value reaches the max/min or a new value is entered from the input which is greater/less than the max/min.
 *
 * #### When to use:
 *
 * - To enter or adjust numeric values.
 * - To adjust values for a specific step.
 *
 * #### When not to use:
 *
 * - To enter a static number (for example, postal code, phone number, or ID). In this case,
 * use the regular `Input` instead.
 * - To enter dates and times. In this case, use date/time related components instead.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [NumericInput UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/NumericInput) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.28.0](https://github.com/UI5/webcomponents/releases/tag/v2.28.0) of __@ui5/webcomponents__.
 * @experimental
 */
const NumericInput = withWebComponent<NumericInputPropTypes, NumericInputDomRef>(
  'ui5-numeric-input',
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
    'valueState',
  ],
  ['disabled', 'readonly'],
  ['valueStateMessage'],
  ['change', 'input', 'value-state-change'],
);

NumericInput.displayName = 'NumericInput';

export { NumericInput };
export type { NumericInputDomRef, NumericInputPropTypes };
