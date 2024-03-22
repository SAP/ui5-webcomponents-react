'use client';

import '@ui5/webcomponents/dist/RadioButton.js';
import type WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface RadioButtonAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v1.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.6.0) of **@ui5/webcomponents**.
   */
  accessibleName?: string;

  /**
   * Defines the IDs of the elements that label the component.
   *
   * **Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.
   */
  accessibleNameRef?: string;

  /**
   * Defines whether the component is checked or not.
   *
   * **Note:** The property value can be changed with user interaction,
   * either by clicking/tapping on the component,
   * or by using the Space or Enter key.
   * @default false
   */
  checked?: boolean;

  /**
   * Defines whether the component is disabled.
   *
   * **Note:** A disabled component is completely noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the name of the component.
   * Radio buttons with the same `name` will form a radio button group.
   *
   * **Note:**
   * The selection can be changed with `ARROW_UP/DOWN` and `ARROW_LEFT/RIGHT` keys between radio buttons in same group.
   *
   * **Note:**
   * Only one radio button can be selected per group.
   *
   * **Important:** For the `name` property to have effect when submitting forms, you must add the following import to your project:
   * `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element
   * will be created inside the component so that it can be submitted as
   * part of an HTML form.
   */
  name?: string;

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
   * **Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.
   * @default false
   */
  required?: boolean;

  /**
   * Defines the text of the component.
   */
  text?: string;

  /**
   * Defines the form value of the component.
   * When a form with a radio button group is submitted, the group's value
   * will be the value of the currently selected radio button.
   *
   * **Important:** For the `value` property to have effect, you must add the following import to your project:
   * `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   */
  value?: string;

  /**
   * Defines the value state of the component.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;

  /**
   * Defines whether the component text wraps when there is not enough space.
   *
   * **Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
   * @default "None"
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

interface RadioButtonDomRef extends Required<RadioButtonAttributes>, Ui5DomRef {}

interface RadioButtonPropTypes
  extends RadioButtonAttributes,
    Omit<CommonProps, keyof RadioButtonAttributes | 'onChange'> {
  /**
   * Fired when the component checked state changes.
   */
  onChange?: (event: Ui5CustomEvent<RadioButtonDomRef>) => void;
}

/**
 * The `RadioButton` component enables users to select a single option from a set of options.
 * When a `RadioButton` is selected by the user, the
 * `change` event is fired.
 * When a `RadioButton` that is within a group is selected, the one
 * that was previously selected gets automatically deselected. You can group radio buttons by using the `name` property.
 *
 * **Note:** If `RadioButton` is not part of a group, it can be selected once, but can not be deselected back.
 *
 * ### Keyboard Handling
 *
 * Once the `RadioButton` is on focus, it might be selected by pressing the Space and Enter keys.
 *
 * The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous radio buttons in one group,
 * while TAB and SHIFT + TAB can be used to enter or leave the radio button group.
 *
 * **Note:** On entering radio button group, the focus goes to the currently selected radio button.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const RadioButton = withWebComponent<RadioButtonPropTypes, RadioButtonDomRef>(
  'ui5-radio-button',
  ['accessibleName', 'accessibleNameRef', 'name', 'text', 'value', 'valueState', 'wrappingType'],
  ['checked', 'disabled', 'readonly', 'required'],
  [],
  ['change'],
  () => import('@ui5/webcomponents/dist/RadioButton.js')
);

RadioButton.displayName = 'RadioButton';

export { RadioButton };
export type { RadioButtonDomRef, RadioButtonPropTypes };
