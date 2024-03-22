'use client';

import '@ui5/webcomponents/dist/Input.js';
import type {
  IInputSuggestionItem,
  InputSuggestionItemPreviewEventDetail,
  InputSuggestionItemSelectEventDetail
} from '@ui5/webcomponents/dist/Input.js';
import type InputType from '@ui5/webcomponents/dist/types/InputType.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

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
   * @default false
   */
  disabled?: boolean;

  /**
   * Sets the maximum number of characters available in the input field.
   *
   * **Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.
   * @default undefined
   */
  maxlength?: number | undefined;

  /**
   * Determines the name with which the component will be submitted in an HTML form.
   *
   * **Important:** For the `name` property to have effect, you must add the following import to your project:
   * `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element
   * will be created inside the component so that it can be submitted as
   * part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;

  /**
   * Defines whether the value will be autcompleted to match an item
   *
   * **Note:** Available since [v1.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents**.
   * @default false
   */
  noTypeahead?: boolean;

  /**
   * Defines a short hint intended to aid the user with data entry when the
   * component has no value.
   */
  placeholder?: string;

  /**
   * Defines whether the component is read-only.
   *
   * **Note:** A read-only component is not editable,
   * but still provides visual feedback upon user interaction.
   * @default false
   */
  readonly?: boolean;

  /**
   * Defines whether the component is required.
   * @default false
   */
  required?: boolean;

  /**
   * Defines whether the clear icon of the input will be shown.
   *
   * **Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.
   * @default false
   */
  showClearIcon?: boolean;

  /**
   * Defines whether the component should show suggestions, if such are present.
   *
   * **Note:** You need to import the `InputSuggestions` module
   * from `"@ui5/webcomponents/dist/features/InputSuggestions.js"` to enable this functionality.
   * @default false
   */
  showSuggestions?: boolean;

  /**
   * Defines the HTML type of the component.
   *
   * **Notes:**
   *
   * - The particular effect of this property differs depending on the browser
   * and the current language settings, especially for type `Number`.
   * - The property is mostly intended to be used with touch devices
   * that use different soft keyboard layouts depending on the given input type.
   * @default "Text"
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
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface InputDomRef extends Required<InputAttributes>, Ui5DomRef {
  /**
   * Manually opens the suggestions popover, assuming suggestions are enabled. Items must be preloaded for it to open.
   *
   * **Note:** Available since [v1.3.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.3.0) of **@ui5/webcomponents**.
   * @returns {void}
   */
  openPicker: () => void;

  /**
   * The suggestion item on preview.
   */
  readonly previewItem: IInputSuggestionItem | null;
}

interface InputPropTypes
  extends InputAttributes,
    Omit<
      CommonProps,
      | keyof InputAttributes
      | 'children'
      | 'icon'
      | 'valueStateMessage'
      | 'onChange'
      | 'onInput'
      | 'onSuggestionItemPreview'
      | 'onSuggestionItemSelect'
    > {
  /**
   * Defines the suggestion items.
   *
   * **Note:** The suggestions would be displayed only if the `showSuggestions`
   * property is set to `true`.
   *
   * **Note:** The `<SuggestionItem>` and `<SuggestionGroupItem>` are recommended to be used as suggestion items.
   *
   * **Note:** Importing the Input Suggestions Support feature:
   *
   * `import "@ui5/webcomponents/dist/features/InputSuggestions.js";`
   *
   * automatically imports the `<SuggestionItem>` and `<SuggestionGroupItem>` for your convenience.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the icon to be displayed in the component.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="icon"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  icon?: UI5WCSlotsNode;

  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed,
   * when the component is in `Information`, `Warning` or `Error` value state.
   *
   * **Note:** If the component has `suggestionItems`,
   * the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
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
  onChange?: (event: Ui5CustomEvent<InputDomRef>) => void;

  /**
   * Fired when the value of the component changes at each keystroke,
   * and when a suggestion item has been selected.
   */
  onInput?: (event: Ui5CustomEvent<InputDomRef>) => void;

  /**
   * Fired when the user navigates to a suggestion item via the ARROW keys,
   * as a preview, before the final selection.
   */
  onSuggestionItemPreview?: (event: Ui5CustomEvent<InputDomRef, InputSuggestionItemPreviewEventDetail>) => void;

  /**
   * Fired when a suggestion item, that is displayed in the suggestion popup, is selected.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onSuggestionItemSelect?: (event: Ui5CustomEvent<InputDomRef, InputSuggestionItemSelectEventDetail>) => void;
}

/**
 * The `Input` component allows the user to enter and edit text or numeric values in one line.
 *
 * Additionally, you can provide `suggestionItems`,
 * that are displayed in a popover right under the input.
 *
 * The text field can be editable or read-only (`readonly` property),
 * and it can be enabled or disabled (`disabled` property).
 * To visualize semantic states, such as "error" or "warning", the `valueState` property is provided.
 * When the user makes changes to the text, the change event is fired,
 * which enables you to react on any text change.
 *
 * **Note:** If you are using the `Input` as a single npm module,
 * don't forget to import the `InputSuggestions` module from
 * "@ui5/webcomponents/dist/features/InputSuggestions.js"
 * to enable the suggestions functionality.
 *
 * ### Keyboard Handling
 * The `Input` provides the following keyboard shortcuts:
 *
 * - [ESC] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
 * - [ENTER] or [RETURN] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
 * - [DOWN] - Focuses the next matching item in the suggestion list.
 * - [UP] - Focuses the previous matching item in the suggestion list.
 * - [HOME] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
 * - [END] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
 * - [PAGEUP] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
 * - [PAGEDOWN] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
 *
 *
 *
 * `import "@ui5/webcomponents/dist/features/InputSuggestions.js";` (optional - for input suggestions support)
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Input = withWebComponent<InputPropTypes, InputDomRef>(
  'ui5-input',
  ['accessibleName', 'accessibleNameRef', 'maxlength', 'name', 'placeholder', 'type', 'value', 'valueState'],
  ['disabled', 'noTypeahead', 'readonly', 'required', 'showClearIcon', 'showSuggestions'],
  ['icon', 'valueStateMessage'],
  ['change', 'input', 'suggestion-item-preview', 'suggestion-item-select'],
  () => import('@ui5/webcomponents/dist/Input.js')
);

Input.displayName = 'Input';

export { Input };
export type { InputDomRef, InputPropTypes };
