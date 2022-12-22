import '@ui5/webcomponents/dist/Input.js';
import { ReactNode } from 'react';
import { InputType, ValueState } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5CustomEvent } from '../../interfaces/Ui5CustomEvent';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

interface InputAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the input.
   */
  accessibleNameRef?: string;
  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Sets the maximum number of characters available in the input field.
   *
   * **Note:** This property is not compatible with the Input type InputType.Number. If the Input type is set to Number, the maxlength value is ignored.
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
   * Defines whether the value will be autcompleted to match an item
   */
  noTypeahead?: boolean;
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
   * Defines whether the clear icon of the input will be shown.
   */
  showClearIcon?: boolean;
  /**
   * Defines whether the component should show suggestions, if such are present.
   *
   * **Note:** You need to import the `InputSuggestions` module from `"@ui5/webcomponents/dist/features/InputSuggestions.js"` to enable this functionality.
   */
  showSuggestions?: boolean;
  /**
   * Defines the HTML type of the component. Available options are: `Text`, `Email`, `Number`, `Password`, `Tel`, and `URL`.
   *
   * **Notes:**
   *
   * *   The particular effect of this property differs depending on the browser and the current language settings, especially for type `Number`.
   * *   The property is mostly intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.
   */
  type?: InputType | keyof typeof InputType;
  /**
   * Defines the value of the component.
   *
   * **Note:** The property is updated upon typing.
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
}

export interface InputDomRef extends InputAttributes, Ui5DomRef {
  /**
   * The suggestion item on preview.
   */
  readonly previewItem: ReactNode;
  /**
   * Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open.
   */
  openPicker: () => void;
}

export interface InputPropTypes extends InputAttributes, Omit<CommonProps, 'onChange' | 'onInput'> {
  /**
   * Defines the suggestion items.
   *
   * Example:
   *
   * <pre>
   *   <code>
   *    &lt;Input showSuggestions><br />
   *    &nbsp;&nbsp;&lt;SuggestionItem text="Item #1" /><br />
   *    &nbsp;&nbsp;&lt;SuggestionItem text="Item #2" /><br />
   *    &lt;/Input>
   *  </code>
   * </pre>
   *
   *
   * **Note:** The suggestions would be displayed only if the `showSuggestions` property is set to `true`.
   *
   * **Note:** The `<SuggestionItem>` and `<SuggestionGroupItem>` are recommended to be used as suggestion items.
   *
   * **Note:** Importing the Input Suggestions Support feature:
   * `import "@ui5/webcomponents/dist/features/InputSuggestions.js";`
   * automatically imports the `<SuggestionItem>` and `<SuggestionGroupItem>` for your convenience.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the icon to be displayed in the component.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  icon?: ReactNode | ReactNode[];
  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.
   *
   * **Note:** If the component has `suggestionItems`, the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   *
   *__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.
   */
  onChange?: (event: Ui5CustomEvent<InputDomRef>) => void;
  /**
   * Fired when the value of the component changes at each keystroke, and when a suggestion item has been selected.
   */
  onInput?: (event: Ui5CustomEvent<InputDomRef>) => void;
  /**
   * Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection.
   */
  onSuggestionItemPreview?: (event: Ui5CustomEvent<InputDomRef, { item: HTMLElement; targetRef: HTMLElement }>) => void;
  /**
   * Fired when a suggestion item, that is displayed in the suggestion popup, is selected.
   */
  onSuggestionItemSelect?: (event: Ui5CustomEvent<InputDomRef, { item: HTMLElement }>) => void;
}

/**
 * The `Input` component allows the user to enter and edit text or numeric values in one line.
 * Additionally, you can provide `suggestionItems`, that are displayed in a popover right under the input.
 *
 * The text field can be editable or read-only (`readonly` property), and it can be enabled or disabled (`disabled` property). To visualize semantic states, such as "error" or "warning", the `valueState` property is provided. When the user makes changes to the text, the change event is fired, which enables you to react on any text change.
 *
 * **Note:** If you are using the `Input` as a single npm module, don't forget to import the `InputSuggestions` module from "@ui5/webcomponents/dist/features/InputSuggestions.js" to enable the suggestions functionality.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Input" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Input = withWebComponent<InputPropTypes, InputDomRef>(
  'ui5-input',
  ['accessibleName', 'accessibleNameRef', 'maxlength', 'name', 'placeholder', 'type', 'value', 'valueState'],
  ['disabled', 'noTypeahead', 'readonly', 'required', 'showClearIcon', 'showSuggestions'],
  ['icon', 'valueStateMessage'],
  ['change', 'input', 'suggestion-item-preview', 'suggestion-item-select']
);

Input.displayName = 'Input';

Input.defaultProps = {
  type: InputType.Text,
  valueState: ValueState.None
};

export { Input };
