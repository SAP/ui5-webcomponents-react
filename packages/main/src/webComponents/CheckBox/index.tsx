'use client';

import '@ui5/webcomponents/dist/CheckBox.js';
import type WrappingType from '@ui5/webcomponents/dist/types/WrappingType.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface CheckBoxAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component
   *
   * **Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines if the component is checked.
   *
   * **Note:** The property can be changed with user interaction,
   * either by cliking/tapping on the component, or by
   * pressing the Enter or Space key.
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
   * Determines whether the `CheckBox` is in display only state.
   *
   * When set to `true`, the `CheckBox` is not interactive, not editable, not focusable
   * and not in the tab chain. This setting is used for forms in review mode.
   *
   * **Note:** When the property `disabled` is set to `true` this property has no effect.
   *
   * **Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.
   * @default false
   */
  displayOnly?: boolean;

  /**
   * Defines whether the component is displayed as partially checked.
   *
   * **Note:** The indeterminate state can be set only programmatically and can’t be achieved by user
   * interaction and the resulting visual state depends on the values of the `indeterminate`
   * and `checked` properties:
   *
   * -  If the component is checked and indeterminate, it will be displayed as partially checked
   * -  If the component is checked and it is not indeterminate, it will be displayed as checked
   * -  If the component is not checked, it will be displayed as not checked regardless value of the indeterminate attribute
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Determines the name by which the component will be identified upon submission in an HTML form.
   *
   * **Note:** This property is only applicable within the context of an HTML Form element.
   * @default undefined
   */
  name?: string | undefined;

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
   * **Note:** Available since [v1.3.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.3.0) of **@ui5/webcomponents**.
   * @default false
   */
  required?: boolean;

  /**
   * Defines the text of the component.
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the value state of the component.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;

  /**
   * Defines whether the component text wraps when there is not enough space.
   *
   * **Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.
   * **Note:** for option "None" the text will be truncated with an ellipsis.
   * @default "Normal"
   */
  wrappingType?: WrappingType | keyof typeof WrappingType;
}

interface CheckBoxDomRef extends Required<CheckBoxAttributes>, Ui5DomRef {}

interface CheckBoxPropTypes extends CheckBoxAttributes, Omit<CommonProps, keyof CheckBoxAttributes | 'onChange'> {
  /**
   * Fired when the component checked state changes.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   */
  onChange?: (event: Ui5CustomEvent<CheckBoxDomRef>) => void;
}

/**
 * Allows the user to set a binary value, such as true/false or yes/no for an item.
 *
 * The `CheckBox` component consists of a box and a label that describes its purpose.
 * If it's checked, an indicator is displayed inside the box.
 * To check/uncheck the `CheckBox`, the user has to click or tap the square
 * box or its label.
 *
 * The `CheckBox` component only has 2 states - checked and unchecked.
 * Clicking or tapping toggles the `CheckBox` between checked and unchecked state.
 *
 * ### Usage
 *
 * You can define the checkbox text with via the `text` property. If the text exceeds the available width, it is truncated by default.
 * In case you prefer text to truncate, set the `wrappingType` property to "None".
 * The touchable area for toggling the `CheckBox` ends where the text ends.
 *
 * You can disable the `CheckBox` by setting the `disabled` property to
 * `true`,
 * or use the `CheckBox` in read-only mode by setting the `readonly`
 * property to `true`.
 *
 * ### Keyboard Handling
 *
 * The user can use the following keyboard shortcuts to toggle the checked state of the `CheckBox`.
 *
 * - [Space],[Enter] - Toggles between different states: checked, not checked.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const CheckBox = withWebComponent<CheckBoxPropTypes, CheckBoxDomRef>(
  'ui5-checkbox',
  ['accessibleName', 'accessibleNameRef', 'name', 'text', 'valueState', 'wrappingType'],
  ['checked', 'disabled', 'displayOnly', 'indeterminate', 'readonly', 'required'],
  [],
  ['change'],
  () => import('@ui5/webcomponents/dist/CheckBox.js')
);

CheckBox.displayName = 'CheckBox';

export { CheckBox };
export type { CheckBoxDomRef, CheckBoxPropTypes };
