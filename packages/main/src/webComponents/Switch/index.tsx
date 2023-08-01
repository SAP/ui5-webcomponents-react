'use client';

import '@ui5/webcomponents/dist/Switch.js';
import { SwitchDesign } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface SwitchAttributes {
  /**
   * Sets the accessible ARIA name of the component. **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`. Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the component. **Note**: We recommend that you set an accessibleNameRef pointing to an external label or at least an `accessibleName`. Providing an `accessibleNameRef` or an `accessibleName` is mandatory in the cases when `textOn` and `textOff` properties aren't set.
   */
  accessibleNameRef?: string;
  /**
   * Defines if the component is checked.
   *
   * **Note:** The property can be changed with user interaction, either by cliking the component, or by pressing the `Enter` or `Space` key.
   */
  checked?: boolean;
  /**
   * Defines the component design.
   *
   * **Note:** If `Graphical` type is set, positive and negative icons will replace the `textOn` and `textOff`.
   */
  design?: SwitchDesign | keyof typeof SwitchDesign;
  /**
   * Defines whether the component is disabled.
   *
   * **Note:** A disabled component is noninteractive.
   */
  disabled?: boolean;
  /**
   * Determines the name with which the component will be submitted in an HTML form.
   *
   * **Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`
   *
   * **Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.
   */
  name?: string;
  /**
   * Defines whether the component is required.
   */
  required?: boolean;
  /**
   * Defines the text, displayed when the component is not checked.
   *
   * **Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).
   */
  textOff?: string;
  /**
   * Defines the text, displayed when the component is checked.
   *
   * **Note:** We recommend using short texts, up to 3 letters (larger texts would be cut off).
   */
  textOn?: string;
  /**
   * Defines the tooltip of the component.
   * **Note:** If applicable an external label reference should always be the preferred option to provide context to the `Switch` component over a tooltip.
   */
  tooltip?: string;
}

export interface SwitchDomRef extends SwitchAttributes, Ui5DomRef {}

export interface SwitchPropTypes extends SwitchAttributes, Omit<CommonProps, 'onChange'> {
  /**
   * Fired when the component checked state changes.
   */
  onChange?: (event: Ui5CustomEvent<SwitchDomRef>) => void;
}

/**
 * The `Switch` component is used for changing between binary states.
 * The component can display texts, that will be switched, based on the component state, via the `textOn` and `textOff` properties, but texts longer than 3 letters will be cutted off.
 * However, users are able to customize the width of `Switch` with pure CSS (`<Switch style="width: 200px">`), and set widths, depending on the texts they would use.
 * Note: the component would not automatically stretch to fit the whole text width.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Switch)
 */
const Switch = withWebComponent<SwitchPropTypes, SwitchDomRef>(
  'ui5-switch',
  ['accessibleName', 'accessibleNameRef', 'design', 'name', 'textOff', 'textOn', 'tooltip'],
  ['checked', 'disabled', 'required'],
  [],
  ['change'],
  () => import('@ui5/webcomponents/dist/Switch.js')
);

Switch.displayName = 'Switch';

Switch.defaultProps = {
  design: SwitchDesign.Textual
};

export { Switch };
