'use client';

import '@ui5/webcomponents/dist/ComboBox.js';
import type { ComboBoxSelectionChangeEventDetail } from '@ui5/webcomponents/dist/ComboBox.js';
import type ComboBoxFilter from '@ui5/webcomponents/dist/types/ComboBoxFilter.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface ComboBoxAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;

  /**
   * Receives id(or many ids) of the elements that label the component
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
   * Defines the filter type of the component.
   * @default "StartsWithPerTerm"
   */
  filter?: ComboBoxFilter | keyof typeof ComboBoxFilter;

  /**
   * Indicates whether a loading indicator should be shown in the picker.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines whether the value will be autocompleted to match an item
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
   * Defines whether the clear icon of the combobox will be shown.
   * @default false
   */
  showClearIcon?: boolean;

  /**
   * Defines the value of the component.
   */
  value?: string;

  /**
   * Defines the value state of the component.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface ComboBoxDomRef extends Required<ComboBoxAttributes>, Ui5DomRef {}

interface ComboBoxPropTypes
  extends ComboBoxAttributes,
    Omit<
      CommonProps,
      | keyof ComboBoxAttributes
      | 'children'
      | 'icon'
      | 'valueStateMessage'
      | 'onChange'
      | 'onInput'
      | 'onSelectionChange'
    > {
  /**
   * Defines the component items.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the icon to be displayed in the input field.
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
   * when the `ComboBox` is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode;
  /**
   * Fired when the input operation has finished by pressing Enter, focusout or an item is selected.
   */
  onChange?: (event: Ui5CustomEvent<ComboBoxDomRef>) => void;

  /**
   * Fired when typing in input or clear icon is pressed.
   *
   * **Note:** filterValue property is updated, input is changed.
   */
  onInput?: (event: Ui5CustomEvent<ComboBoxDomRef>) => void;

  /**
   * Fired when selection is changed by user interaction
   */
  onSelectionChange?: (event: Ui5CustomEvent<ComboBoxDomRef, ComboBoxSelectionChangeEventDetail>) => void;
}

/**
 * The `ComboBox` component represents a drop-down menu with a list of the available options and a text input field to narrow down the options.
 *
 * It is commonly used to enable users to select an option from a predefined list.
 *
 * ### Structure
 * The `ComboBox` consists of the following elements:
 *
 * -  Input field - displays the selected option or a custom user entry. Users can type to narrow down the list or enter their own value.
 * -  Drop-down arrow - expands\collapses the option list.
 * -  Option list - the list of available options.
 *
 * ### Keyboard Handling
 *
 * The `ComboBox` provides advanced keyboard handling.
 *
 * - [F4], [ALT]+[UP], or [ALT]+[DOWN] - Toggles the picker.
 * - [ESC] - Closes the picker, if open. If closed, cancels changes and reverts the typed in value.
 * - [ENTER] or [RETURN] - If picker is open, takes over the currently selected item and closes it.
 * - [DOWN] - Selects the next matching item in the picker.
 * - [UP] - Selects the previous matching item in the picker.
 * - [PAGEDOWN] - Moves selection down by page size (10 items by default).
 * - [PAGEUP] - Moves selection up by page size (10 items by default).
 * - [HOME] - If focus is in the ComboBox, moves cursor at the beginning of text. If focus is in the picker, selects the first item.
 * - [END] - If focus is in the ComboBox, moves cursor at the end of text. If focus is in the picker, selects the last item.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const ComboBox = withWebComponent<ComboBoxPropTypes, ComboBoxDomRef>(
  'ui5-combobox',
  ['accessibleName', 'accessibleNameRef', 'filter', 'placeholder', 'value', 'valueState'],
  ['disabled', 'loading', 'noTypeahead', 'readonly', 'required', 'showClearIcon'],
  ['icon', 'valueStateMessage'],
  ['change', 'input', 'selection-change'],
  () => import('@ui5/webcomponents/dist/ComboBox.js')
);

ComboBox.displayName = 'ComboBox';

export { ComboBox };
export type { ComboBoxDomRef, ComboBoxPropTypes };
