'use client';

import '@ui5/webcomponents/dist/CheckBox.js';
import type { WrappingType } from '../../enums/index.js';
import { ValueState } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface CheckBoxAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the component
   */
  accessibleNameRef?: string;
  /**
   * Defines if the component is checked.
   *
   * **Note:** The property can be changed with user interaction, either by cliking/tapping on the component, or by pressing the Enter or Space key.
   */
  checked?: boolean;
  /**
   * Defines whether the component is disabled.
   *
   * **Note:** A disabled component is completely noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines whether the component is displayed as partially checked.
   *
   * **Note:** The indeterminate state can be set only programmatically and can’t be achieved by user interaction and the resulting visual state depends on the values of the `indeterminate` and `checked` properties:
   *
   * *   If the component is checked and indeterminate, it will be displayed as partially checked
   * *   If the component is checked and it is not indeterminate, it will be displayed as checked
   * *   If the component is not checked, it will be displayed as not checked regardless value of the indeterminate attribute
   */
  indeterminate?: boolean;
  /**
   * Determines the name with which the component will be submitted in an HTML form.
   *
   * **Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
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
   * Defines the text of the component.
   */
  text?: string;
  /**
   * Defines the value state of the component.
   */
  valueState?: ValueState | keyof typeof ValueState;
  /**
   * Defines whether the component text wraps when there is not enough space.
   * **Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

export interface CheckBoxDomRef extends CheckBoxAttributes, Ui5DomRef {}

export interface CheckBoxPropTypes extends CheckBoxAttributes, Omit<CommonProps, 'onChange'> {
  /**
   * Fired when the component checked state changes.
   */
  onChange?: (event: Ui5CustomEvent<CheckBoxDomRef>) => void;
}

/**
 * Allows the user to set a binary value, such as true/false or yes/no for an item.
 *
 * The `CheckBox` component consists of a box and a label that describes its purpose. If it's checked, an indicator is displayed inside the box. To check/uncheck the `CheckBox`, the user has to click or tap the square box or its label.
 *
 * The `CheckBox` component only has 2 states - checked and unchecked. Clicking or tapping toggles the `CheckBox` between checked and unchecked state.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-CheckBox)
 */
const CheckBox = withWebComponent<CheckBoxPropTypes, CheckBoxDomRef>(
  'ui5-checkbox',
  ['accessibleName', 'accessibleNameRef', 'name', 'text', 'valueState', 'wrappingType'],
  ['checked', 'disabled', 'indeterminate', 'readonly', 'required'],
  [],
  ['change'],
  () => import('@ui5/webcomponents/dist/CheckBox.js')
);

CheckBox.displayName = 'CheckBox';

CheckBox.defaultProps = {
  valueState: ValueState.None
};

export { CheckBox };
