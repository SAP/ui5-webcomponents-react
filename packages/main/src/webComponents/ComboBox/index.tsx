'use client';

import '@ui5/webcomponents/dist/ComboBox.js';
import type {
  ComboBoxLoadItemsEventDetail,
  ComboBoxSelectionChangeEventDetail,
} from '@ui5/webcomponents/dist/ComboBox.js';
import type ComboBoxFilter from '@ui5/webcomponents/dist/types/ComboBoxFilter.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface ComboBoxAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

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
   * Determines the name by which the component will be identified upon submission in an HTML form.
   *
   * **Note:** This property is only applicable within the context of an HTML Form element.
   *
   * **Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  name?: string | undefined;

  /**
   * Defines whether the value will be autocompleted to match an item
   *
   * **Note:** Available since [v1.19.0](https://github.com/UI5/webcomponents/releases/tag/v1.19.0) of **@ui5/webcomponents**.
   * @default false
   */
  noTypeahead?: boolean;

  /**
   * Indicates whether the items picker is open.
   *
   * **Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.
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
   * @default false
   */
  required?: boolean;

  /**
   * Defines the value of the selected item (references the `value` property of `ComboBoxItem`).
   *
   * Use this property to work with unique identifiers (IDs, codes) instead of display text.
   * When set, the ComboBox finds and selects the item whose `value` property matches this property.
   *
   * **Benefits:**
   * - Select items programmatically by their unique identifier
   * - Handle items with identical display text but different underlying values
   * - Submit machine-readable values in forms (the item's `value` is submitted instead of the display text)
   *
   * **When to use `selectedValue` vs `value`:**
   * - **Recommended:** Use `selectedValue` + item `value` when you need unique identifiers separate from display text (e.g., country codes "DE", "FR" with display names "Germany", "France")
   * - Use only the ComboBox `value` property when the display text itself is sufficient for your use case
   *
   * **Note:** Available since [v2.20.0](https://github.com/UI5/webcomponents/releases/tag/v2.20.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  selectedValue?: string | undefined;

  /**
   * Defines whether the clear icon of the combobox will be shown.
   *
   * **Note:** Available since [v1.20.1](https://github.com/UI5/webcomponents/releases/tag/v1.20.1) of **@ui5/webcomponents**.
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
  extends
    ComboBoxAttributes,
    Omit<
      CommonProps,
      | keyof ComboBoxAttributes
      | 'children'
      | 'icon'
      | 'valueStateMessage'
      | 'onChange'
      | 'onClose'
      | 'onInput'
      | 'onLoadItems'
      | 'onOpen'
      | 'onSelectionChange'
    > {
  /**
   * Defines the component items.
   *
   * __Supported Node Type/s:__ `Array<IComboBoxItem>`
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the icon to be displayed in the input field.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="icon"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
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
   * when the `ComboBox` is in `Information`, `Critical` or `Negative` value state.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   *
   * **Note:** Available since [v1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of **@ui5/webcomponents**.
   *
   * __Supported Node Type/s:__ `Array<HTMLElement>`
   */
  valueStateMessage?: UI5WCSlotsNode;
  /**
   * Fired when the input operation has finished by pressing Enter, focusout or an item is selected.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onChange?: (event: Ui5CustomEvent<ComboBoxDomRef>) => void;

  /**
   * Fired when the dropdown is closed.
   *
   * **Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|❌|
   */
  onClose?: (event: Ui5CustomEvent<ComboBoxDomRef>) => void;

  /**
   * Fired when typing in input or clear icon is pressed.
   *
   * **Note:** filterValue property is updated, input is changed.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onInput?: (event: Ui5CustomEvent<ComboBoxDomRef>) => void;

  /**
   * Fired when the application should provide items for the component to render.
   * The event is fired either when text is input or when the user presses arrow down on a combo-box with no items.
   *
   * **Note:** Available since [v2.28.0](https://github.com/UI5/webcomponents/releases/tag/v2.28.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onLoadItems?: (event: Ui5CustomEvent<ComboBoxDomRef, ComboBoxLoadItemsEventDetail>) => void;

  /**
   * Fired when the dropdown is opened.
   *
   * **Note:** Available since [v2.9.0](https://github.com/UI5/webcomponents/releases/tag/v2.9.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
   */
  onOpen?: (event: Ui5CustomEvent<ComboBoxDomRef>) => void;

  /**
   * Fired when selection is changed by user interaction
   *
   * **Note:** Available since [v2.24.0](https://github.com/UI5/webcomponents/releases/tag/v2.24.0) of **@ui5/webcomponents**.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ❌|✅|
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
 * ### Working with Values
 *
 * The ComboBox offers two ways to work with item selection:
 *
 * **1. Display Text Only (using `value`):**
 * ```html
 * <ComboBox value="Germany">
 *   <ComboBoxItem text="Germany"></ComboBoxItem>
 *   <ComboBoxItem text="France"></ComboBoxItem>
 * </ComboBox>
 * ```
 * Use this approach when the displayed text is sufficient for your needs.
 *
 * **2. Unique Identifiers - Recommended (using `selectedValue` and item `value`):**
 * ```html
 * <ComboBox value="Germany" selected-value="DE">
 *   <ComboBoxItem text="Germany" value="DE"></ComboBoxItem>
 *   <ComboBoxItem text="France" value="FR"></ComboBoxItem>
 * </ComboBox>
 * ```
 * This is the recommended approach when you need to work with unique identifiers (IDs, codes) separate from display text.
 * The `selectedValue` property references the `value` property of the selected item.
 * In forms, the item's `value` (e.g., "DE") will be submitted instead of the display text.
 *
 * **Important:** Do not mix the `selectedValue` approach with the deprecated `selected` property on items.
 *
 * ### Keyboard Handling
 *
 * The `ComboBox` provides advanced keyboard handling.
 *
 * - [F4], [Alt]+[Up], or [Alt]+[Down] - Toggles the picker.
 * - [Escape] - Closes the picker, if open. If closed, cancels changes and reverts the typed in value.
 * - [Enter] or [Return] - If picker is open, takes over the currently selected item and closes it.
 * - [Down] - Selects the next matching item in the picker.
 * - [Up] - Selects the previous matching item in the picker.
 * - [Page Down] - Moves selection down by page size (10 items by default).
 * - [Page Up] - Moves selection up by page size (10 items by default).
 * - [Home] - If focus is in the ComboBox, moves cursor at the beginning of text. If focus is in the picker, selects the first item.
 * - [End] - If focus is in the ComboBox, moves cursor at the end of text. If focus is in the picker, selects the last item.
 * - [Ctrl]+[Alt]+[F8] or [Command]+[Option]+[F8] - Focuses the first link in the value state message, if available. Pressing [Tab] moves the focus to the next link in the value state message, or closes the value state message if there are no more links.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [ComboBox UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/ComboBox) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents__.
 */
const ComboBox = withWebComponent<ComboBoxPropTypes, ComboBoxDomRef>(
  'ui5-combobox',
  ['accessibleName', 'accessibleNameRef', 'filter', 'name', 'placeholder', 'selectedValue', 'value', 'valueState'],
  ['disabled', 'loading', 'noTypeahead', 'open', 'readonly', 'required', 'showClearIcon'],
  ['icon', 'valueStateMessage'],
  ['change', 'close', 'input', 'load-items', 'open', 'selection-change'],
);

ComboBox.displayName = 'ComboBox';

export { ComboBox };
export type { ComboBoxDomRef, ComboBoxPropTypes };
