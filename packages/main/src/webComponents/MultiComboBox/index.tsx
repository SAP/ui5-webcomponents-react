'use client';

import '@ui5/webcomponents/dist/MultiComboBox.js';
import type { ReactNode } from 'react';
import { ComboBoxFilter, ValueState } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

interface MultiComboBoxAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the component.
   */
  accessibleNameRef?: string;
  /**
   * Defines if the user input will be prevented, if no matching item has been found
   */
  allowCustomValues?: boolean;
  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the filter type of the component. Available options are: `StartsWithPerTerm`, `StartsWith`, `Contains` and `None`.
   */
  filter?: ComboBoxFilter | keyof typeof ComboBoxFilter;
  /**
   * Defines whether the value will be autcompleted to match an item
   */
  noTypeahead?: boolean;
  /**
   * Defines a short hint intended to aid the user with data entry when the component has no value.
   */
  placeholder?: string;
  /**
   * Defines whether the component is read-only.
   *
   * **Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.
   */
  readonly?: boolean;
  /**
   * Defines whether the component is required.
   */
  required?: boolean;
  /**
   * Defines the value of the component.
   *
   * **Note:** The property is updated upon typing.
   */
  value?: string;
  /**
   * Defines the value state of the component.
   *
   * Available options are:
   *
   * *   `None`
   * *   `Error`
   * *   `Warning`
   * *   `Success`
   * *   `Information`
   */
  valueState?: ValueState | keyof typeof ValueState;
}

export interface MultiComboBoxDomRef extends MultiComboBoxAttributes, Ui5DomRef {
  /**
   * Indicates whether the dropdown is open. True if the dropdown is open, false otherwise.
   */
  readonly open: boolean;
}

export interface MultiComboBoxPropTypes extends MultiComboBoxAttributes, Omit<CommonProps, 'onChange' | 'onInput'> {
  /**
   * Defines the component items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the icon to be displayed in the component.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="icon"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  icon?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * **Note:** If not specified, a default text (in the respective language) will be displayed.
   * **Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Fired when the input operation has finished by pressing Enter or on focusout.
   *
   *__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.
   */
  onChange?: (event: Ui5CustomEvent<MultiComboBoxDomRef>) => void;
  /**
   * Fired when the value of the component changes at each keystroke.
   */
  onInput?: (event: Ui5CustomEvent<MultiComboBoxDomRef>) => void;
  /**
   * Fired when the dropdown is opened or closed.
   */
  onOpenChange?: (event: Ui5CustomEvent<MultiComboBoxDomRef>) => void;
  /**
   * Fired when selection is changed by user interaction in `SingleSelect` and `MultiSelect` modes.
   */
  onSelectionChange?: (event: Ui5CustomEvent<MultiComboBoxDomRef, { items: unknown[] }>) => void;
}

/**
 * The `MultiComboBox` component consists of a list box with items and a text field allowing the user to either type a value directly into the text field, or choose from the list of existing items. The drop-down list is used for selecting and filtering values, it enables users to select one or more options from a predefined list. The control provides an editable input field to filter the list, and a dropdown arrow to expand/collapse the list of available options. The options in the list have checkboxes that permit multi-selection. Entered values are displayed as tokens.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/MultiComboBox" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const MultiComboBox = withWebComponent<MultiComboBoxPropTypes, MultiComboBoxDomRef>(
  'ui5-multi-combobox',
  ['accessibleName', 'accessibleNameRef', 'filter', 'placeholder', 'value', 'valueState'],
  ['allowCustomValues', 'disabled', 'noTypeahead', 'readonly', 'required'],
  ['icon', 'valueStateMessage'],
  ['change', 'input', 'open-change', 'selection-change'],
  () => import('@ui5/webcomponents/dist/MultiComboBox.js')
);

MultiComboBox.displayName = 'MultiComboBox';

MultiComboBox.defaultProps = {
  filter: ComboBoxFilter.StartsWithPerTerm,
  valueState: ValueState.None
};

export { MultiComboBox };
