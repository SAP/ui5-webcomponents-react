'use client';

import '@ui5/webcomponents/dist/MultiComboBox.js';
import type { MultiComboBoxSelectionChangeEventDetail } from '@ui5/webcomponents/dist/MultiComboBox.js';
import type ComboBoxFilter from '@ui5/webcomponents/dist/types/ComboBoxFilter.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface MultiComboBoxAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v1.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents**.
   */
  accessibleName?: string;

  /**
   * Receives id(or many ids) of the elements that label the component.
   *
   * **Note:** Available since [v1.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.4.0) of **@ui5/webcomponents**.
   */
  accessibleNameRef?: string;

  /**
   * Defines if the user input will be prevented, if no matching item has been found
   * @default false
   */
  allowCustomValues?: boolean;

  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is completely noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the filter type of the component.
   * @default "StartsWithPerTerm"
   */
  filter?: ComboBoxFilter | keyof typeof ComboBoxFilter;

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
   * Defines whether the clear icon of the multi-combobox will be shown.
   *
   * **Note:** Available since [v1.20.1](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.20.1) of **@ui5/webcomponents**.
   * @default false
   */
  showClearIcon?: boolean;

  /**
   * Determines if the select all checkbox is visible on top of suggestions.
   * @default false
   */
  showSelectAll?: boolean;

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

interface MultiComboBoxDomRef extends Required<MultiComboBoxAttributes>, Ui5DomRef {
  /**
   * Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.
   */
  readonly open: boolean;
}

interface MultiComboBoxPropTypes
  extends MultiComboBoxAttributes,
    Omit<
      CommonProps,
      | keyof MultiComboBoxAttributes
      | 'children'
      | 'icon'
      | 'valueStateMessage'
      | 'onChange'
      | 'onInput'
      | 'onOpenChange'
      | 'onSelectionChange'
    > {
  /**
   * Defines the component items.
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
   * The value state message slot should contain only one root element.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   *
   * **Note:** The `valueStateMessage` would be displayed,
   * when the component is in `Information`, `Warning` or `Error` value state.
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
  onChange?: (event: Ui5CustomEvent<MultiComboBoxDomRef>) => void;

  /**
   * Fired when the value of the component changes at each keystroke or clear icon is pressed.
   */
  onInput?: (event: Ui5CustomEvent<MultiComboBoxDomRef>) => void;

  /**
   * Fired when the dropdown is opened or closed.
   */
  onOpenChange?: (event: Ui5CustomEvent<MultiComboBoxDomRef>) => void;

  /**
   * Fired when selection is changed by user interaction.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onSelectionChange?: (event: Ui5CustomEvent<MultiComboBoxDomRef, MultiComboBoxSelectionChangeEventDetail>) => void;
}

/**
 * The `MultiComboBox` component consists of a list box with items and a text field allowing the user to either type a value directly into the text field, or choose from the list of existing items.
 *
 * The drop-down list is used for selecting and filtering values, it enables users to select one or more options from a predefined list. The control provides an editable input field to filter the list, and a dropdown arrow to expand/collapse the list of available options.
 * The options in the list have checkboxes that permit multi-selection. Entered values are displayed as tokens.
 * ### Structure
 * The `MultiComboBox` consists of the following elements:
 *
 * -  Tokenizer - a list of tokens with selected options.
 * -  Input field - displays the selected option/s as token/s. Users can type to filter the list.
 * -  Drop-down arrow - expands\collapses the option list.
 * -  Option list - the list of available options.
 *
 * ### Keyboard Handling
 *
 * The `MultiComboBox` provides advanced keyboard handling.
 *
 * #### Picker
 * If the `MultiComboBox` is focused,
 * you can open or close the drop-down by pressing [F4], [Alt] + [Up] or [Alt] + [Down] keys.
 * Once the drop-down is opened, you can use the `UP` and `DOWN` arrow keys
 * to navigate through the available options and select one by pressing the `Space` or `Enter` keys.
 *
 * #### Tokens
 *
 * -  Left/Right arrow keys - moves the focus selection form the currently focused token to the previous/next one (if available).
 * -  Delete -  deletes the token and focuses the previous token.
 * -  Backspace -  deletes the token and focus the next token.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const MultiComboBox = withWebComponent<MultiComboBoxPropTypes, MultiComboBoxDomRef>(
  'ui5-multi-combobox',
  ['accessibleName', 'accessibleNameRef', 'filter', 'placeholder', 'value', 'valueState'],
  ['allowCustomValues', 'disabled', 'noTypeahead', 'readonly', 'required', 'showClearIcon', 'showSelectAll'],
  ['icon', 'valueStateMessage'],
  ['change', 'input', 'open-change', 'selection-change'],
  () => import('@ui5/webcomponents/dist/MultiComboBox.js')
);

MultiComboBox.displayName = 'MultiComboBox';

export { MultiComboBox };
export type { MultiComboBoxDomRef, MultiComboBoxPropTypes };
