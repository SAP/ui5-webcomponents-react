'use client';

import '@ui5/webcomponents/dist/TextArea.js';
import { ValueState } from '../../enums/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { Nullable, UI5WCSlotsNode, Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../types/index.js';

interface TextAreaAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the textarea.
   */
  accessibleNameRef?: string;
  /**
   * Indicates whether the user can interact with the component or not.
   *
   * **Note:** A disabled component is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Enables the component to automatically grow and shrink dynamically with its content.
   */
  growing?: boolean;
  /**
   * Defines the maximum number of lines that the component can grow.
   */
  growingMaxLines?: number;
  /**
   * Defines the maximum number of characters that the `value` can have.
   */
  maxlength?: Nullable<number>;
  /**
   * Determines the name with which the component will be submitted in an HTML form.
   *
   * **Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines a short hint intended to aid the user with data entry when the component has no value.
   */
  placeholder?: string;
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
   * Defines the number of visible text lines for the component.
   *
   * **Notes:**
   *
   * *   If the `growing` property is enabled, this property defines the minimum rows to be displayed in the textarea.
   * *   The CSS `height` property wins over the `rows` property, if both are set.
   */
  rows?: number;
  /**
   * Determines whether the characters exceeding the maximum allowed character count are visible in the component.
   *
   * If set to `false`, the user is not allowed to enter more characters than what is set in the `maxlength` property. If set to `true` the characters exceeding the `maxlength` value are selected on paste and the counter below the component displays their number.
   */
  showExceededText?: boolean;
  /**
   * Defines the value of the component.
   */
  value?: string;
  /**
   * Defines the value state of the component.
   *
   * **Note:** If `maxlength` property is set, the component turns into "Warning" state once the characters exceeds the limit. In this case, only the "Error" state is considered and can be applied.
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface TextAreaDomRef extends TextAreaAttributes, Ui5DomRef {}

interface TextAreaPropTypes
  extends TextAreaAttributes,
    Omit<CommonProps, keyof TextAreaAttributes | 'onChange' | 'onInput'> {
  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed if the component has `valueState` of type `Information`, `Warning` or `Error`.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Fired when the text has changed and the focus leaves the component.
   *
   *__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.
   */
  onChange?: (event: Ui5CustomEvent<TextAreaDomRef>) => void;
  /**
   * Fired when the value of the component changes at each keystroke or when something is pasted.
   */
  onInput?: (event: Ui5CustomEvent<TextAreaDomRef>) => void;
}

/**
 * The `TextArea` component is used to enter multiple lines of text.
 *
 * When empty, it can hold a placeholder similar to a `Input`. You can define the rows of the `TextArea` and also determine specific behavior when handling long texts.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-TextArea)
 */
const TextArea = withWebComponent<TextAreaPropTypes, TextAreaDomRef>(
  'ui5-textarea',
  [
    'accessibleName',
    'accessibleNameRef',
    'growingMaxLines',
    'maxlength',
    'name',
    'placeholder',
    'rows',
    'value',
    'valueState'
  ],
  ['disabled', 'growing', 'readonly', 'required', 'showExceededText'],
  ['valueStateMessage'],
  ['change', 'input'],
  () => import('@ui5/webcomponents/dist/TextArea.js')
);

TextArea.displayName = 'TextArea';

TextArea.defaultProps = {
  growingMaxLines: 0,
  maxlength: null,
  rows: 0,
  valueState: ValueState.None
};

export { TextArea };
export type { TextAreaDomRef, TextAreaPropTypes };
