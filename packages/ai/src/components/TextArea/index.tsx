'use client';

import '@ui5/webcomponents-ai/dist/TextArea.js';
import type { TextAreaInputEventDetail } from '@ui5/webcomponents/dist/TextArea.js';
import type TextAreaCounterMode from '@ui5/webcomponents/dist/types/TextAreaCounterMode.js';
import type { TextAreaVersionChangeEventDetail } from '@ui5/webcomponents-ai/dist/TextArea.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';

interface TextAreaAttributes {
  /**
   * Defines the accessible description of the component.
   *
   * **Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents-ai**.
   * @default undefined
   */
  accessibleDescription?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that describe the textarea.
   *
   * **Note:** Available since [v2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of **@ui5/webcomponents-ai**.
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
   * Receives id(or many ids) of the elements that label the textarea.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-ai**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Determines when the character counter of the component is displayed.
   *
   * Available options are:
   *
   * - `None` - The counter is never shown and `maxlength` acts as a hard cap.
   * - `Always` - The counter is always visible below the component.
   * - `Auto` - The counter is shown only when the component is focused, when the character limit
   * is exceeded, or when `valueState` is `Critical` or `Negative`. Space is always reserved to
   * prevent layout shifts.
   *
   * **Note:** When set to a value other than `None`, this property takes precedence over the
   * deprecated `showExceededText` property.
   *
   * **Note:** Available since [v2.28.0](https://github.com/UI5/webcomponents/releases/tag/v2.28.0) of **@ui5/webcomponents-ai**.
   * @default "None"
   */
  counterMode?: TextAreaCounterMode | keyof typeof TextAreaCounterMode;

  /**
   * Indicates the index of the currently displayed version.
   * @default 0
   */
  currentVersion?: number;

  /**
   * Indicates whether the user can interact with the component or not.
   *
   * **Note:** A disabled component is completely noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * Enables the component to automatically grow and shrink dynamically with its content.
   * @default false
   */
  growing?: boolean;

  /**
   * Defines the maximum number of rows that the component can grow.
   * @default 0
   */
  growingMaxRows?: number;

  /**
   * Defines whether the `TextArea` is currently in a loading(processing) state.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines the maximum number of characters that the `value` can have.
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
   * Defines a short hint intended to aid the user with data entry when the component has no value.
   * @default undefined
   */
  placeholder?: string | undefined;

  /**
   * Defines the prompt description of the current action.
   */
  promptDescription?: string;

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
   * Defines the number of visible text rows for the component.
   *
   * **Notes:**
   *
   * - If the `growing` property is enabled, this property defines the minimum rows to be displayed
   * in the textarea.
   * - The CSS `height` property wins over the `rows` property, if both are set.
   * @default 0
   */
  rows?: number;

  /**
   * Determines whether the characters exceeding the maximum allowed character count are visible
   * in the component.
   *
   * If set to `false`, the user is not allowed to enter more characters than what is set in the
   * `maxlength` property.
   * If set to `true` the characters exceeding the `maxlength` value are selected on
   * paste and the counter below the component displays their number.
   * @default false
   * @deprecated Use `counterMode="Always"` instead.
   */
  showExceededText?: boolean;

  /**
   * Indicates the total number of result versions available.
   *
   * Notes:
   * Versioning is hidden if the value is `0`
   * @default 0
   */
  totalVersions?: number;

  /**
   * Defines the value of the component.
   */
  value?: string;

  /**
   * Defines the value state of the component.
   *
   * **Note:** If `maxlength` property is set,
   * the component turns into "Critical" state once the characters exceeds the limit.
   * In this case, only the "Negative" state is considered and can be applied.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-ai**.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface TextAreaDomRef extends Required<TextAreaAttributes>, Ui5DomRef {}

interface TextAreaPropTypes
  extends
    TextAreaAttributes,
    Omit<
      CommonProps,
      | keyof TextAreaAttributes
      | 'menu'
      | 'valueStateMessage'
      | 'onChange'
      | 'onInput'
      | 'onScroll'
      | 'onSelect'
      | 'onStopGeneration'
      | 'onVersionChange'
    > {
  /**
   * Defines a slot for `ui5-menu` integration. This slot allows you to pass a `ui5-menu` instance that will be associated with the assistant.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="menu"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * __Supported Node Type/s:__ `HTMLElement`
   */
  menu?: UI5WCSlotsNode;

  /**
   * Defines the value state message that will be displayed as pop up under the component.
   * The value state message slot should contain only one root element.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed if the component has
   * `valueState` of type `Information`, `Critical` or `Negative`.
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
   * Fired when the text has changed and the focus leaves the component.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onChange?: (event: Ui5CustomEvent<TextAreaDomRef>) => void;

  /**
   * Fired when the value of the component changes at each keystroke or when
   * something is pasted.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents-ai**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onInput?: (event: Ui5CustomEvent<TextAreaDomRef, TextAreaInputEventDetail>) => void;

  /**
   * Fired when textarea is scrolled.
   *
   * **Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents-ai**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onScroll?: (event: Ui5CustomEvent<TextAreaDomRef>) => void;

  /**
   * Fired when some text has been selected.
   *
   * **Note:** Available since [v1.23.0](https://github.com/UI5/webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents-ai**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onSelect?: (event: Ui5CustomEvent<TextAreaDomRef>) => void;

  /**
   * Fired when the user requests to stop AI text generation.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onStopGeneration?: (event: Ui5CustomEvent<TextAreaDomRef>) => void;

  /**
   * Fired when the user clicks on version navigation buttons.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onVersionChange?: (event: Ui5CustomEvent<TextAreaDomRef, TextAreaVersionChangeEventDetail>) => void;
}

/**
 * The `TextArea` component extends the standard TextArea with Writing Assistant capabilities.
 * It provides AI-powered text generation, editing suggestions, and version management functionality.
 * 
 * ### Structure
 * The `TextArea` consists of the following elements:
 * - TextArea: The main text input area with all standard textarea functionality
 * - WritingAssistant: Dedicated toolbar containing:
 *   - Versioning: A component with left/right navigation buttons and a label for browsing AI-generated versions
 *   - AI Button: Opens a menu that can be extended with custom AI generation options through slotting
 * 
 * 
 *
 * __Note:__ This is a UI5 Web Component! [TextArea UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ai/TextArea) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [2.16.0](https://github.com/UI5/webcomponents/releases/tag/v2.16.0) of __@ui5/webcomponents-ai__.
 * @experimental The **@ui5/webcomponents-ai** package is under development and considered experimental - components' APIs are subject to change.
Furthermore, the package supports **Horizon** themes only.
*/
const TextArea = withWebComponent<TextAreaPropTypes, TextAreaDomRef>(
  'ui5-ai-textarea',
  [
    'accessibleDescription',
    'accessibleDescriptionRef',
    'accessibleName',
    'accessibleNameRef',
    'counterMode',
    'currentVersion',
    'growingMaxRows',
    'maxlength',
    'name',
    'placeholder',
    'promptDescription',
    'rows',
    'totalVersions',
    'value',
    'valueState',
  ],
  ['disabled', 'growing', 'loading', 'readonly', 'required', 'showExceededText'],
  ['menu', 'valueStateMessage'],
  ['change', 'input', 'scroll', 'select', 'stop-generation', 'version-change'],
);

TextArea.displayName = 'TextArea';

export { TextArea };
export type { TextAreaDomRef, TextAreaPropTypes };
