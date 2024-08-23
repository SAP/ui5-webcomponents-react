'use client';

import '@ui5/webcomponents/dist/TextArea.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface TextAreaAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the textarea.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

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
   */
  showExceededText?: boolean;

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
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface TextAreaDomRef extends Required<TextAreaAttributes>, Ui5DomRef {}

interface TextAreaPropTypes
  extends TextAreaAttributes,
    Omit<
      CommonProps,
      keyof TextAreaAttributes | 'valueStateMessage' | 'onChange' | 'onInput' | 'onScroll' | 'onSelect'
    > {
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
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode;
  /**
   * Fired when the text has changed and the focus leaves the component.
   */
  onChange?: (event: Ui5CustomEvent<TextAreaDomRef>) => void;

  /**
   * Fired when the value of the component changes at each keystroke or when
   * something is pasted.
   */
  onInput?: (event: Ui5CustomEvent<TextAreaDomRef>) => void;

  /**
   * Fired when textarea is scrolled.
   *
   * **Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.
   */
  onScroll?: (event: Ui5CustomEvent<TextAreaDomRef>) => void;

  /**
   * Fired when some text has been selected.
   *
   * **Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.
   */
  onSelect?: (event: Ui5CustomEvent<TextAreaDomRef>) => void;
}

/**
 * The `TextArea` component is used to enter multiple rows of text.
 *
 * When empty, it can hold a placeholder similar to a `Input`.
 * You can define the rows of the `TextArea` and also determine specific behavior when handling long texts.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const TextArea = withWebComponent<TextAreaPropTypes, TextAreaDomRef>(
  'ui5-textarea',
  [
    'accessibleName',
    'accessibleNameRef',
    'growingMaxRows',
    'maxlength',
    'name',
    'placeholder',
    'rows',
    'value',
    'valueState'
  ],
  ['disabled', 'growing', 'readonly', 'required', 'showExceededText'],
  ['valueStateMessage'],
  ['change', 'input', 'scroll', 'select']
);

TextArea.displayName = 'TextArea';

export { TextArea };
export type { TextAreaDomRef, TextAreaPropTypes };
