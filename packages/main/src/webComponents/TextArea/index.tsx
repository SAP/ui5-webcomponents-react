import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/TextArea';

export interface TextAreaPropTypes extends Omit<CommonProps, 'onChange' | 'onInput'> {
  /**
   * Sets the accessible aria name of the component.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the textarea.
   */
  accessibleNameRef?: string;
  /**
   * Indicates whether the user can interact with the component or not.
   *
   * **Note:** Disabled components cannot be focused and they are out of the tab chain.
   */
  disabled?: boolean;
  /**
   * Enables the component to automatically grow and shrink dynamically with its content.
   *
   * **Note:** If set to `true`, the CSS `height` property is ignored.
   */
  growing?: boolean;
  /**
   * Defines the maximum number of lines that the Web Component can grow.
   */
  growingMaxLines?: number;
  /**
   * Defines the maximum number of characters that the `value` can have.
   */
  maxlength?: number;
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
   * Defines the value of the Web Component.
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
   *
   *
   *
   * **Note:** If `maxlength` property is set, the component turns into "Warning" state once the characters exceeds the limit. In this case, only the "Error" state is considered and can be applied.
   */
  valueState?: ValueState;
  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed if the component has `valueState` of type `Information`, `Warning` or `Error`.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when the text has changed and the focus leaves the component.
   */
  onChange?: (event: Ui5CustomEvent<HTMLTextAreaElement>) => void;
  /**
   * Fired when the value of the component changes at each keystroke or when something is pasted.
   */
  onInput?: (event: Ui5CustomEvent<HTMLTextAreaElement>) => void;
}

/**
 * The `TextArea` component provides large spaces for text entries in the form of multiple rows. It has the functionality of the `TextField` with the additional functionality for multiline texts.
 *
 * When empty, it can hold a placeholder similar to a `Input`. You can define the rows of the `TextArea` and also determine specific behavior when handling long texts.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TextArea" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TextArea = withWebComponent<TextAreaPropTypes>(
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
  ['change', 'input']
);

TextArea.displayName = 'TextArea';

TextArea.defaultProps = {
  disabled: false,
  growing: false,
  growingMaxLines: 0,
  maxlength: null,
  readonly: false,
  required: false,
  rows: 0,
  showExceededText: false,
  valueState: ValueState.None
};

export { TextArea };
