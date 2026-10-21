'use client';

import '@ui5/webcomponents-ai/dist/Input.js';
import type { InputSelectionChangeEventDetail } from '@ui5/webcomponents/dist/Input.js';
import type InputSuggestionsFilter from '@ui5/webcomponents/dist/types/InputSuggestionsFilter.js';
import type InputType from '@ui5/webcomponents/dist/types/InputType.js';
import type { InputItemClickEventDetail, InputVersionChangeEventDetail } from '@ui5/webcomponents-ai/dist/Input.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface InputAttributes {
  /**
   * Defines the accessible description of the component.
   *
   * **Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-ai**.
   * @default undefined
   */
  accessibleDescription?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that describe the input.
   *
   * **Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents-ai**.
   * @default undefined
   */
  accessibleDescriptionRef?: string | undefined;

  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-ai**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the input.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-ai**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Indicates the index of the currently displayed version.
   * @default 0
   */
  currentVersion?: number;

  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is completely noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the filter type of the component.
   *
   * **Note:** Available since [v2.19.0](https://github.com/UI5/webcomponents/releases/tag/v2.19.0) of **@ui5/webcomponents-ai**.
   * @default "None"
   */
  filter?: InputSuggestionsFilter | keyof typeof InputSuggestionsFilter;

  /**
   * Defines whether the AI Writing Assistant is currently loading.
   *
   * When `true`, indicates that an AI action is in progress.
   * @default false
   */
  loading?: boolean;

  /**
   * Sets the maximum number of characters available in the input field.
   *
   * **Note:** This property is not compatible with the ui5-input type InputType.Number. If the ui5-input type is set to Number, the maxlength value is ignored.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-ai**.
   * @default undefined
   */
  maxlength?: number | undefined;

  /**
   * Determines the name by which the component will be identified upon submission in an HTML form.
   *
   * **Note:** This property is only applicable within the context of an HTML Form element.
   * @default undefined
   */
  name?: string | undefined;

  /**
   * Defines whether the value will be autcompleted to match an item
   *
   * **Note:** Available since [v1.4.0](https://github.com/UI5/webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents-ai**.
   * @default false
   */
  noTypeahead?: boolean;

  /**
   * Defines whether the suggestions picker is open.
   * The picker will not open if the `showSuggestions` property is set to `false`, the input is disabled or the input is readonly.
   * The picker will close automatically and `close` event will be fired if the input is not in the viewport.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   * @default false
   */
  open?: boolean;

  /**
   * Defines a short hint intended to aid the user with data entry when the
   * component has no value.
   * @default undefined
   */
  placeholder?: string | undefined;

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
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-ai**.
   * @default false
   */
  required?: boolean;

  /**
   * Defines whether the clear icon of the input will be shown.
   *
   * **Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents-ai**.
   * @default false
   */
  showClearIcon?: boolean;

  /**
   * Defines whether the component should show suggestions, if such are present.
   * @default false
   */
  showSuggestions?: boolean;

  /**
   * Indicates the total number of result versions available.
   *
   * When not set or set to 0, the versioning will be hidden.
   * @default 0
   */
  totalVersions?: number;

  /**
   * Defines the HTML type of the component.
   *
   * **Notes:**
   *
   * - The particular effect of this property differs depending on the browser
   * and the current language settings, especially for type `Number`.
   * - The property is mostly intended to be used with touch devices
   * that use different soft keyboard layouts depending on the given input type.
   * - Type `Number` does not support suggestions.
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

interface InputDomRef extends Required<InputAttributes>, Ui5DomRef {}

interface InputPropTypes
  extends
    InputAttributes,
    Omit<
      CommonProps,
      | keyof InputAttributes
      | 'actions'
      | 'children'
      | 'icon'
      | 'valueStateMessage'
      | 'onButtonClick'
      | 'onChange'
      | 'onClose'
      | 'onInput'
      | 'onItemClick'
      | 'onOpen'
      | 'onSelect'
      | 'onSelectionChange'
      | 'onStopGeneration'
      | 'onVersionChange'
    > {
  /**
   * Defines the items of the menu for the component.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="actions"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  actions?: UI5WCSlotsNode;

  /**
   * Defines the suggestion items.
   *
   * **Note:** The suggestions would be displayed only if the `showSuggestions`
   * property is set to `true`.
   *
   * **Note:** The `<ui5-suggestion-item>`, `<ui5-suggestion-item-group>` and `ui5-suggestion-item-custom` are recommended to be used as suggestion items.
   *
   * **Note:** Input with type `Number` does not support suggestions.
   *
   * __Supported Node Type/s:__ `Array<IInputSuggestionItem>`
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the icon to be displayed in the component.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="icon"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `Array<IIcon>`
   */
  icon?: UI5WCSlotsNode;

  /**
   * Defines the value state message that will be displayed as pop up under the component.
   * The value state message slot should contain only one root element.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed,
   * when the component is in `Information`, `Critical` or `Negative` value state.
   *
   * **Note:** If the component has `suggestionItems`,
   * the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-ai**.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  valueStateMessage?: UI5WCSlotsNode;
  /**
   * Fired when the user selects the AI button.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|❌|
   */
  onButtonClick?: (event: Ui5CustomEvent<InputDomRef>) => void;

  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onChange?: (event: Ui5CustomEvent<InputDomRef>) => void;

  /**
   * Fired when the suggestions picker is closed.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onClose?: (event: Ui5CustomEvent<InputDomRef>) => void;

  /**
   * Fired when the value of the component changes at each keystroke,
   * and when a suggestion item has been selected.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onInput?: (event: Ui5CustomEvent<InputDomRef>) => void;

  /**
   * Fired when an item from the AI actions menu is clicked.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onItemClick?: (event: Ui5CustomEvent<InputDomRef, InputItemClickEventDetail>) => void;

  /**
   * Fired when the suggestions picker is open.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onOpen?: (event: Ui5CustomEvent<InputDomRef>) => void;

  /**
   * Fired when some text has been selected.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onSelect?: (event: Ui5CustomEvent<InputDomRef>) => void;

  /**
   * Fired when the user navigates to a suggestion item via the ARROW keys,
   * as a preview, before the final selection.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onSelectionChange?: (event: Ui5CustomEvent<InputDomRef, InputSelectionChangeEventDetail>) => void;

  /**
   * Fired when the user selects the "Stop" button to stop ongoing AI text generation.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onStopGeneration?: (event: Ui5CustomEvent<InputDomRef>) => void;

  /**
   * Fired when the user selects the version navigation buttons.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onVersionChange?: (event: Ui5CustomEvent<InputDomRef, InputVersionChangeEventDetail>) => void;
}

/**
 * The `Input` component extends the standard `ui5-input` with **AI Writing Assistant** capabilities.
 * 
 * ### Structure
 * 
 * The `Input` consists of the following main parts:
 * 
 * - **Input Field** – Inherits all standard Input behaviors.
 * - **AI Action Button** – Appears when focused or loading, providing access to AI-related actions or stopping generation.
 * 
 * The component automatically determines which elements to render based on its internal state:
 * - The AI Button is only shown when there are available `actions`.
 * - The version navigation appears only when `totalVersions > 1`.
 * 
 * ### Keyboard Support
 * 
 * - **Shift + F4** — Opens the AI menu.
 * - **Ctrl + Shift + Z / Y** — Navigates backward/forward between AI-generated versions.
 * 
 * 
 *
 * __Note:__ This is a UI5 Web Component! [Input UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ai/Input) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of __@ui5/webcomponents-ai__.
 * @experimental The **@ui5/webcomponents-ai** package is under active development and considered experimental. Component APIs are subject to change.
Furthermore, the package supports **Horizon** themes only.
*/
const Input = withWebComponent<InputPropTypes, InputDomRef>(
  'ui5-ai-input',
  [
    'accessibleDescription',
    'accessibleDescriptionRef',
    'accessibleName',
    'accessibleNameRef',
    'currentVersion',
    'filter',
    'maxlength',
    'name',
    'placeholder',
    'totalVersions',
    'type',
    'value',
    'valueState',
  ],
  ['disabled', 'loading', 'noTypeahead', 'open', 'readonly', 'required', 'showClearIcon', 'showSuggestions'],
  ['actions', 'icon', 'valueStateMessage'],
  [
    'button-click',
    'change',
    'close',
    'input',
    'item-click',
    'open',
    'select',
    'selection-change',
    'stop-generation',
    'version-change',
  ],
);

Input.displayName = 'Input';

export { Input };
export type { InputDomRef, InputPropTypes };
