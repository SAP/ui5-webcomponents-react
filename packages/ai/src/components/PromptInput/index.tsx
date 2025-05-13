'use client';

import '@ui5/webcomponents-ai/dist/PromptInput.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface PromptInputAttributes {
  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is completely noninteractive.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the label of the input field.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   * @default undefined
   */
  label?: string | undefined;

  /**
   * Sets the maximum number of characters available in the input field.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   * @default undefined
   */
  maxlength?: number | undefined;

  /**
   * Defines a short hint intended to aid the user with data entry when the
   * component has no value.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   * @default undefined
   */
  placeholder?: string | undefined;

  /**
   * Defines whether the component is read-only.
   *
   * **Note:** A read-only component is not editable,
   * but still provides visual feedback upon user interaction.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   * @default false
   */
  readonly?: boolean;

  /**
   * Defines whether the clear icon of the input will be shown.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   * @default false
   */
  showClearIcon?: boolean;

  /**
   * Determines whether the characters exceeding the maximum allowed character count are visible
   * in the component.
   *
   * If set to `false`, the user is not allowed to enter more characters than what is set in the
   * `maxlength` property.
   * If set to `true` the characters exceeding the `maxlength` value are selected on
   * paste and the counter below the component displays their number.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   * @default false
   */
  showExceededText?: boolean;

  /**
   * Defines whether the component should show suggestions, if such are present.
   * @default false
   */
  showSuggestions?: boolean;

  /**
   * Defines the value of the component.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   */
  value?: string;

  /**
   * Defines the value state of the component.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface PromptInputDomRef extends Required<PromptInputAttributes>, Ui5DomRef {}

interface PromptInputPropTypes
  extends PromptInputAttributes,
    Omit<
      CommonProps,
      keyof PromptInputAttributes | 'children' | 'valueStateMessage' | 'onChange' | 'onInput' | 'onSubmit'
    > {
  /**
   * Defines the suggestion items.
   *
   * **Note:** The suggestions would be displayed only if the `showSuggestions`
   * property is set to `true`.
   *
   * **Note:** The `<ui5-suggestion-item>`, `<ui5-suggestion-item-group>` and `ui5-suggestion-item-custom` are recommended to be used as suggestion items.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the value state message that will be displayed as pop up under the component.
   * The value state message slot should contain only one root element.
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
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   */
  valueStateMessage?: UI5WCSlotsNode;
  /**
   * Fired when the input operation has finished by pressing Enter
   * or on focusout.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onChange?: (event: Ui5CustomEvent<PromptInputDomRef>) => void;

  /**
   * Fired when the value of the component changes at each keystroke,
   * and when a suggestion item has been selected.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onInput?: (event: Ui5CustomEvent<PromptInputDomRef>) => void;

  /**
   * Fired when the input operation has finished by pressing Enter
   * or AI button is clicked.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-ai**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onSubmit?: (event: Ui5CustomEvent<PromptInputDomRef>) => void;
}

/**
 * The `PromptInput` component allows the user to write custom instructions in natural language, so that AI is guided to generate content tailored to user needs.
 *
 * **Note:** The web component is in an experimental state
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 * @experimental The **@ui5/webcomponents-ai** package is under development and considered experimental - components' APIs are subject to change.
 */
const PromptInput = withWebComponent<PromptInputPropTypes, PromptInputDomRef>(
  'ui5-ai-prompt-input',
  ['label', 'maxlength', 'placeholder', 'value', 'valueState'],
  ['disabled', 'readonly', 'showClearIcon', 'showExceededText', 'showSuggestions'],
  ['valueStateMessage'],
  ['change', 'input', 'submit'],
);

PromptInput.displayName = 'PromptInput';

export { PromptInput };
export type { PromptInputDomRef, PromptInputPropTypes };
