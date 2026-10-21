'use client';

import '@ui5/webcomponents/dist/Switch.js';
import type SwitchDesign from '@ui5/webcomponents/dist/types/SwitchDesign.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '@ui5/webcomponents-react-base';

interface SwitchAttributes {
  /**
   * Sets the accessible ARIA name of the component.
   *
   * **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`.
   * Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.
   *
   * **Note:** Available since [v1.2.0](https://github.com/UI5/webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   *
   * **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`.
   * Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.
   *
   * **Note:** Available since [v1.1.0](https://github.com/UI5/webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines if the component is checked.
   *
   * **Note:** The property can be changed with user interaction,
   * either by clicking the component, or by pressing the `Enter` or `Space` key.
   * @default false
   */
  checked?: boolean;

  /**
   * Defines the component design.
   *
   * **Note:** If `Graphical` type is set,
   * positive and negative icons will replace the `textOn` and `textOff`.
   * @default "Textual"
   */
  design?: SwitchDesign | keyof typeof SwitchDesign;

  /**
   * Defines whether the component is disabled.
   *
   * **Note:** A disabled component is noninteractive.
   * @default false
   */
  disabled?: boolean;

  /**
   * Determines the name by which the component will be identified upon submission in an HTML form.
   *
   * **Note:** This property is only applicable within the context of an HTML Form element.
   *
   * **Note:** Available since [v1.16.0](https://github.com/UI5/webcomponents/releases/tag/v1.16.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  name?: string | undefined;

  /**
   * Defines whether the component is in readonly state.
   *
   * **Note:** A readonly switch cannot be toggled by user interaction,
   * but can still be focused and its value read programmatically.
   *
   * **Note:** Available since [v2.21.0](https://github.com/UI5/webcomponents/releases/tag/v2.21.0) of **@ui5/webcomponents**.
   * @default false
   */
  readonly?: boolean;

  /**
   * Defines whether the component is required.
   *
   * **Note:** Available since [v1.16.0](https://github.com/UI5/webcomponents/releases/tag/v1.16.0) of **@ui5/webcomponents**.
   * @default false
   */
  required?: boolean;

  /**
   * Defines the text, displayed when the component is not checked.
   *
   * **Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).
   * @default undefined
   */
  textOff?: string | undefined;

  /**
   * Defines the text, displayed when the component is checked.
   *
   * **Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).
   * @default undefined
   */
  textOn?: string | undefined;

  /**
   * Defines the tooltip of the component.
   *
   * **Note:** If applicable an external label reference should always be the preferred option to provide context to the `Switch` component over a tooltip.
   *
   * **Note:** Available since [v1.9.0](https://github.com/UI5/webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Defines the form value of the component.
   *
   * **Note:** Available since [v2.12.0](https://github.com/UI5/webcomponents/releases/tag/v2.12.0) of **@ui5/webcomponents**.
   */
  value?: string;
}

interface SwitchDomRef extends Required<SwitchAttributes>, Ui5DomRef {}

interface SwitchPropTypes extends SwitchAttributes, Omit<CommonProps, keyof SwitchAttributes | 'onChange'> {
  /**
   * Fired when the component checked state changes.
   *
   * **Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.
   *
   * | cancelable | bubbles |
   * | :--------: | :-----: |
   * | ✅|✅|
   */
  onChange?: (event: Ui5CustomEvent<SwitchDomRef>) => void;
}

/**
 * The `Switch` component is used for changing between binary states.
 *
 * The component can display texts, that will be switched, based on the component state, via the `textOn` and `textOff` properties,
 * but texts longer than 3 letters will be cutted off.
 *
 * However, users are able to customize the width of `Switch` with pure CSS (`<Switch style="width: 200px">`), and set widths, depending on the texts they would use.
 *
 * Note: the component would not automatically stretch to fit the whole text width.
 *
 * ### Keyboard Handling
 * The state can be changed by pressing the Space and Enter keys.
 *
 *
 *
 * __Note:__ This is a UI5 Web Component! [Switch UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Switch) | [Repository](https://github.com/UI5/webcomponents)
 *
 * @since [1.0.0](https://github.com/UI5/webcomponents/releases/tag/v1.0.0) of __@ui5/webcomponents__.
 */
const Switch = withWebComponent<SwitchPropTypes, SwitchDomRef>(
  'ui5-switch',
  ['accessibleName', 'accessibleNameRef', 'design', 'name', 'textOff', 'textOn', 'tooltip', 'value'],
  ['checked', 'disabled', 'readonly', 'required'],
  [],
  ['change'],
);

Switch.displayName = 'Switch';

export { Switch };
export type { SwitchDomRef, SwitchPropTypes };
