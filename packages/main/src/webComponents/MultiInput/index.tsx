import { InputType } from '@ui5/webcomponents-react/lib/InputType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/MultiInput';
import { FC, ReactNode } from 'react';

export interface MultiInputPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput' | 'onSubmit'> {
  /**
   * Determines whether a value help icon will be should in the end of the input. Pressing the icon will fire `onValueHelpTrigger` event.
   */
  showValueHelpIcon?: boolean;
  /**
   * Defines whether the `Input` is in disabled state.
   *
   * **Note:** A disabled `Input` is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines if characters within the suggestions are to be highlighted in case the input value matches parts of the suggestions text.
   *
   * **Note:** takes effect when `showSuggestions` is set to `true`
   */
  highlight?: boolean;
  /**
   * Sets the maximum number of characters available in the input field.
   */
  maxlength?: number;
  /**
   * Determines the name with which the `Input` will be submitted in an HTML form.
   *
   * **Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element will be created inside the `Input` so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines a short hint intended to aid the user with data entry when the `Input` has no value.
   */
  placeholder?: string;
  /**
   * Defines whether the `Input` is read-only.
   *
   * **Note:** A read-only `Input` is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the `Input` is required.
   */
  required?: boolean;
  /**
   * Defines whether the `Input` should show suggestions, if such are present.
   *
   * **Note:** Don\`t forget to import the `InputSuggestions` module from `"@ui5/webcomponents/dist/features/InputSuggestions.js"` to enable this functionality.
   */
  showSuggestions?: boolean;
  /**
   * Defines the HTML type of the `Input`. Available options are: `Text`, `Email`, `Number`, `Password`, `Tel`, and `URL`.
   *
   * **Notes:**
   *
   * *   The particular effect of this property differs depending on the browser and the current language settings, especially for type `Number`.
   * *   The property is mostly intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.
   */
  type?: InputType;
  /**
   * Defines the value of the `Input`.
   *
   * **Note:** The property is updated upon typing.
   */
  value?: string;
  /**
   * Defines the value state of the `Input`.
   *
   * Available options are:
   *
   * *   `None`
   * *   `Error`
   * *   `Warning`
   * *   `Success`
   * *   `Information`
   */
  valueState?: ValueState;
  /**
   * Defines the `MultiInput` tokens.
   *
   * Example:
   *
   * <pre>
   *   <code>
   *    &lt;MultiInput<br />
   *    &nbsp;tokens={<br />
   *    &nbsp;&nbsp;&lt;><br />
   *    &nbsp;&nbsp;&nbsp;&lt;Token text="Token 1" /><br />
   *    &nbsp;&nbsp;&nbsp;&lt;Token text="Token 1" /><br />
   *    &nbsp;&nbsp;&lt;/><br />
   *    &nbsp;}<br />
   *    />
   *  </code>
   * </pre>
   *
   */
  tokens?: ReactNode | ReactNode[];
  /**
   * Defines the `Input` suggestion items.
   *
   * Example:
   *
   * <pre>
   *   <code>
   *    &lt;MultiInput showSuggestions><br />
   *    &nbsp;&nbsp;&lt;SuggestionItem text="Item #1" /><br />
   *    &nbsp;&nbsp;&lt;SuggestionItem text="Item #2" /><br />
   *    &lt;/MultiInput>
   *  </code>
   * </pre>
   *
   * **Note:** The suggestion would be displayed only if the `showSuggestions` property is set to `true`.
   *
   * **Note:** The `<SuggestionItem>` is recommended to be used as a suggestion item. Importing the Input Suggestions Support feature:
   * `import "@ui5/webcomponents/dist/features/InputSuggestions.js";`
   * also automatically imports the `<SuggestionItem>` for your convenience.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the icon to be displayed in the `Input`.
   */
  icon?: ReactNode | ReactNode[];
  /**
   * Defines the value state message that will be displayed as pop up under the `Input`.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the `Input` is in `Information`, `Warning` or `Error` value state.
   * **Note:** If the `Input` has `suggestionItems`, the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when a token is about to be deleted.
   */
  onTokenDelete?: (event: CustomEvent<{ token: ReactNode }>) => void;
  /**
   * Fired when the value help icon is pressed and F4 or ALT/OPTION + ARROW\_UP/ARROW\_DOWN keyboard keys are used.
   */
  onValueHelpTrigger?: (event: CustomEvent) => void;
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: CustomEvent) => void;
  /**
   * Fired when the value of the `Input` changes at each keystroke, and when a suggestion item has been selected.
   */
  onInput?: (event: CustomEvent) => void;
  /**
   * Fired when user presses Enter key on the `Input`.
   *
   * **Note:** The event is fired independent of whether there was a change before or not. If change was performed, the event is fired after the change event. The event is also fired when an item of the select list is selected by pressing Enter.
   */
  onSubmit?: (event: CustomEvent) => void;
  /**
   * Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection.
   */
  onSuggestionItemPreview?: (event: CustomEvent<{ item: ReactNode; targetRef: ReactNode }>) => void;
  /**
   * Fired when a suggestion item, that is displayed in the suggestion popup, is selected.
   */
  onSuggestionItemSelect?: (event: CustomEvent<{ item: ReactNode }>) => void;
  /**
   * Fired when the user scrolls the suggestion popover.
   */
  onSuggestionScroll?: (event: CustomEvent<{ scrollTop: number; scrollContainer: ReactNode }>) => void;
}

/**
 * A `MultiInput` field allows the user to enter multiple values, which are displayed as `Token`. User can choose interaction for creating tokens. Fiori Guidelines say that user should create tokens when:
 *
 * *   Type a value in the input and press enter or focus out the input field (`onChange` event is fired)
 * *   Select a value from the suggestion list
 * (`onSuggestionItemSelect` event is fired)
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/MultiInput" target="_blank">UI5 Web Components Playground</a>
 */
const MultiInput: FC<MultiInputPropTypes> = withWebComponent<MultiInputPropTypes>(
  'ui5-multi-input',
  ['maxlength', 'name', 'placeholder', 'type', 'value', 'valueState'],
  ['showValueHelpIcon', 'disabled', 'highlight', 'readonly', 'required', 'showSuggestions'],
  ['tokens', 'icon', 'valueStateMessage'],
  [
    'token-delete',
    'value-help-trigger',
    'change',
    'input',
    'submit',
    'suggestion-item-preview',
    'suggestion-item-select',
    'suggestion-scroll'
  ]
);

MultiInput.displayName = 'MultiInput';

MultiInput.defaultProps = {
  showValueHelpIcon: false,
  disabled: false,
  highlight: false,
  readonly: false,
  required: false,
  showSuggestions: false,
  type: InputType.Text,
  valueState: ValueState.None
};

export { MultiInput };
