import { InputType } from '@ui5/webcomponents-react/lib/InputType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Input from '@ui5/webcomponents/dist/Input';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface InputPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines whether the <code>ui5-input</code> is in disabled state. <br><br> <b>Note:</b> A disabled <code>ui5-input</code> is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Sets the maximum number of characters available in the input field.
   */
  maxlength?: number;
  /**
   * Determines the name with which the <code>ui5-input</code> will be submitted in an HTML form.
   * <br><br> <b>Important:</b> For the <code>name</code> property to have effect, you must add the following import to your project: <code>import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";</code>
   * <br><br> <b>Note:</b> When set, a native <code>input</code> HTML element will be created inside the <code>ui5-input</code> so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines a short hint intended to aid the user with data entry when the <code>ui5-input</code> has no value.
   */
  placeholder?: string;
  /**
   * Defines whether the <code>ui5-input</code> is read-only. <br><br> <b>Note:</b> A read-only <code>ui5-input</code> is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the <code>ui5-input</code> is required.
   */
  required?: boolean;
  /**
   * Defines whether the <code>ui5-input</code> should show suggestions, if such are present. <br><br> <b>Note:</b> Don`t forget to import the <code>InputSuggestions</code> module from <code>"@ui5/webcomponents/dist/features/InputSuggestions.js"</code> to enable this functionality.
   */
  showSuggestions?: boolean;
  /**
   * Defines the HTML type of the <code>ui5-input</code>. Available options are: <code>Text</code>, <code>Email</code>, <code>Number</code>, <code>Password</code>, <code>Tel</code>, and <code>URL</code>. <br><br> <b>Notes:</b> <ul> <li>The particular effect of this property differs depending on the browser and the current language settings, especially for type <code>Number</code>.</li> <li>The property is mostly intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.</li> </ul>
   */
  type?: string;
  /**
   * Defines the value of the <code>ui5-input</code>. <br><br> <b>Note:</b> The property is updated upon typing.
   */
  value?: string;
  /**
   * Defines the value state of the <code>ui5-input</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
  /**
   * Defines the <code>ui5-input</code> suggestion items. <br><br> Example: <br><br> &lt;ui5-input show-suggestions><br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-suggestion-item text="Item #1">&lt;/ui5-suggestion-item><br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;ui5-suggestion-item text="Item #2">&lt;/ui5-suggestion-item><br> &lt;/ui5-input> <br> <ui5-input show-suggestions> <ui5-suggestion-item text="Item #1"></ui5-suggestion-item> <ui5-suggestion-item text="Item #2"></ui5-suggestion-item> </ui5-input> <br><br> <b>Note:</b> The suggestion would be displayed only if the <code>showSuggestions</code> property is set to <code>true</code>. <br><br> <b>Note:</b> The &lt;ui5-suggestion-item> is recommended to be used as a suggestion item. and you need to import the <code>"@ui5/webcomponents/dist/SuggestionItem"</code> module.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the icon to be displayed in the <code>ui5-input</code>.
   */
  icon?: ReactNode | ReactNode[];
  /**
   * The slot is used in order to display a valueStateMessage. <br><br> <b>Note:</b> The valueStateMessage would be displayed only if the <code>ui5-input</code> has a valueState of type <code>Information</code>, <code>Warning</code> or <code>Error</code>.
   */
  valueStateMessage?: ReactNode | ReactNode[];
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   */
  onChange?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when the value of the <code>ui5-input</code> changes at each keystroke, and when a suggestion item has been selected.
   */
  onInput?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when user presses Enter key on the <code>ui5-input</code>. <br><br> <b>Note:</b> The event is fired independent of whether there was a change before or not. If change was performed, the event is fired after the change event. The event is also fired when an item of the select list is selected by pressing Enter.
   */
  onSubmit?: (event: CustomEvent<{}>) => void;
  /**
   * Fired when a suggestion item, that is displayed in the suggestion popup, is selected.
   */
  onSuggestionItemSelect?: (event: CustomEvent<{ item: ReactNode }>) => void;
}

/**
 * <code>import { Input } from '@ui5/webcomponents-react/lib/Input';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Input" target="_blank">UI5 Web Components Playground</a>
 */
const Input: FC<InputPropTypes> = withWebComponent<InputPropTypes>(UI5Input);

Input.displayName = 'Input';

Input.defaultProps = {
  disabled: false,
  name: '',
  placeholder: '',
  readonly: false,
  required: false,
  showSuggestions: false,
  type: InputType.Text,
  value: '',
  valueState: ValueState.None
};

export { Input };
