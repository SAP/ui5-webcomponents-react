'use client';

import '@ui5/webcomponents/dist/ComboBox.js';
import type { ComboBoxSelectionChangeEventDetail } from '@ui5/webcomponents/dist/ComboBox.js';
import type { ReactNode } from 'react';
import { ComboBoxFilter, ValueState } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { UI5WCSlotsNode } from '../../types/index.js';

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
   */
  disabled?: boolean;
  /**
   * Defines the filter type of the component.
   */
  filter?: ComboBoxFilter | keyof typeof ComboBoxFilter;
  /**
   * Indicates whether a loading indicator should be shown in the picker.
   */
  loading?: boolean;
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
   */
  value?: string;
  /**
   * Defines the value state of the component.
   */
  valueState?: ValueState | keyof typeof ValueState;
}

export interface ComboBoxDomRef extends ComboBoxAttributes, Ui5DomRef {}

export interface ComboBoxPropTypes extends ComboBoxAttributes, Omit<CommonProps, 'onChange' | 'onInput'> {
  /**
   * Defines the component items.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Defines the icon to be displayed in the input field.
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
   * **Note:** The `valueStateMessage` would be displayed, when the `ComboBox` is in `Information`, `Warning` or `Error` value state.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="valueStateMessage"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  valueStateMessage?: UI5WCSlotsNode | UI5WCSlotsNode[];
  /**
   * Fired when the input operation has finished by pressing Enter, focusout or an item is selected.
   *
   *__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.
   */
  onChange?: (event: Ui5CustomEvent<ComboBoxDomRef>) => void;
  /**
   * Fired when typing in input.
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
 * The `ComboBox` component represents a drop-down menu with a list of the available options and a text input field to narrow down the options. It is commonly used to enable users to select an option from a predefined list.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ComboBox)
 */
const ComboBox = withWebComponent<ComboBoxPropTypes, ComboBoxDomRef>(
  'ui5-combobox',
  ['accessibleName', 'accessibleNameRef', 'filter', 'placeholder', 'value', 'valueState'],
  ['disabled', 'loading', 'readonly', 'required'],
  ['icon', 'valueStateMessage'],
  ['change', 'input', 'selection-change'],
  () => import('@ui5/webcomponents/dist/ComboBox.js')
);

ComboBox.displayName = 'ComboBox';

ComboBox.defaultProps = {
  filter: ComboBoxFilter.StartsWithPerTerm,
  valueState: ValueState.None
};

export { ComboBox };
