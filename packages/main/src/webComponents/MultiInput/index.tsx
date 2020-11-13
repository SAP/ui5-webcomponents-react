import { InputType } from '@ui5/webcomponents-react/lib/InputType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/MultiInput';
import { FC, ReactNode } from 'react';

export interface MultiInputPropTypes extends Omit<WithWebComponentPropTypes, 'onChange' | 'onInput' | 'onSubmit'> {
  /**
   * Determines whether a value help icon will be should in the end of the input. Pressing the icon will fire <code>value-help-trigger</code> event.
   */
  showValueHelpIcon?: boolean;
  /**
   * Defines whether the <code>Input</code> is in disabled state. <br><br> <b>Note:</b> A disabled <code>Input</code> is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines if characters within the suggestions are to be highlighted in case the input value matches parts of the suggestions text. <br><br> <b>Note:</b> takes effect when <code>showSuggestions</code> is set to <code>true</code>
   */
  highlight?: boolean;
  /**
   * Sets the maximum number of characters available in the input field.
   */
  maxlength?: number;
  /**
   * Determines the name with which the <code>Input</code> will be submitted in an HTML form.<br/><br/>
   *
   * <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code><br/><br/>
   *
   * <b>Note:</b> When set, a native <code>input</code> HTML element will be created inside the <code>Input</code> so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines a short hint intended to aid the user with data entry when the <code>Input</code> has no value.
   */
  placeholder?: string;
  /**
   * Defines whether the <code>Input</code> is read-only. <br><br> <b>Note:</b> A read-only <code>Input</code> is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the <code>Input</code> is required.
   */
  required?: boolean;
  /**
   * Defines whether the <code>Input</code> should show suggestions, if such are present. <br><br> <b>Note:</b> Don`t forget to import the <code>InputSuggestions</code> module from <code>"@ui5/webcomponents/dist/features/InputSuggestions.js"</code> to enable this functionality.
   */
  showSuggestions?: boolean;
  /**
   * Defines the HTML type of the <code>Input</code>. Available options are: <code>Text</code>, <code>Email</code>, <code>Number</code>, <code>Password</code>, <code>Tel</code>, and <code>URL</code>. <br><br> <b>Notes:</b> <ul> <li>The particular effect of this property differs depending on the browser and the current language settings, especially for type <code>Number</code>.</li> <li>The property is mostly intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.</li> </ul>
   */
  type?: InputType;
  /**
   * Defines the value of the <code>Input</code>. <br><br> <b>Note:</b> The property is updated upon typing.
   */
  value?: string;
  /**
   * Defines the value state of the <code>Input</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * Defines the <code>MultiInput</code> tokens. <br><br> Example: <br />&lt;MultiInput tokens={
<br />&nbsp;&nbsp;&lt;>
<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;Token text="Token 1" />
<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;Token text="Token 2" />
<br />&nbsp;&nbsp;</>}
   <br />/>
   */
  tokens?: ReactNode | ReactNode[];
  /**
   * Defines the <code>Input</code> suggestion items. <br><b>Note:</b> The suggestion would be displayed only if the <code>showSuggestions</code> property is set to <code>true</code>. <br><br> <b>Note:</b> The &lt;ui5-suggestion-item> is recommended to be used as a suggestion item. Importing the Input Suggestions Support feature: <br> <code>import "@ui5/webcomponents/dist/features/InputSuggestions.js";</code> <br> also automatically imports the &lt;ui5-suggestion-item> for your convenience.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the icon to be displayed in the <code>Input</code>.
   */
  icon?: ReactNode | ReactNode[];
  /**
   * Defines the value state message that will be displayed as pop up under the <code>Input</code>. <br><br><br/><br/>
   *
   * <b>Note:</b> If not specified, a default text (in the respective language) will be displayed. <br> <b>Note:</b> The <code>valueStateMessage</code> would be displayed, when the <code>Input</code> is in <code>Information</code>, <code>Warning</code> or <code>Error</code> value state. <br> <b>Note:</b> If the <code>Input</code> has <code>suggestionItems</code>, the <code>valueStateMessage</code> would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when a token is about to be deleted.
   */
  onTokenDelete?: (event: CustomEvent<{ token: ReactNode }>) => void;
  /**
   * Fired when the value help icon is pressed and F4 or ALT/OPTION + ARROW_UP/ARROW_DOWN keyboard keys are used.
   */
  onValueHelpTrigger?: (event: CustomEvent) => void;
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: CustomEvent) => void;
  /**
   * Fired when the value of the <code>Input</code> changes at each keystroke, and when a suggestion item has been selected.
   */
  onInput?: (event: CustomEvent) => void;
  /**
   * Fired when user presses Enter key on the <code>Input</code>. <br><br> <b>Note:</b> The event is fired independent of whether there was a change before or not. If change was performed, the event is fired after the change event. The event is also fired when an item of the select list is selected by pressing Enter.
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
 * <h3>Overview</h3> A <code>MultiInput</code> field allows the user to enter multiple values, which are displayed as <code>Token</code>. User can choose interaction for creating tokens. Fiori Guidelines say that user should create tokens when: <ul> <li>Type a value in the input and press enter or focus out the input field (<code>change</code> event is fired) <li>Select a value from the suggestion list</li> (<code>suggestion-item-select</code> event is fired) </ul>
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
