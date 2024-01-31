'use client';

import '@ui5/webcomponents/dist/ProgressIndicator.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ProgressIndicatorAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;

  /**
   * Defines whether component is in disabled state.
   * @default false
   */
  disabled?: boolean;

  /**
   * Specifies the text value to be displayed in the bar. **Note:**
   *
   * *   If there is no value provided or the value is empty, the default percentage value is shown.
   * *   If `hideValue` property is `true` both the `displayValue` and `value` property values are not shown.
   * @default null
   */
  displayValue?: string | null | undefined;

  /**
   * Defines whether the component value is shown.
   * @default false
   */
  hideValue?: boolean;

  /**
   * Specifies the numerical value in percent for the length of the component. **Note:** If a value greater than 100 is provided, the percentValue is set to 100. In other cases of invalid value, percentValue is set to its default of 0.
   * @default 0
   */
  value?: number;

  /**
   * Defines the value state of the component.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;
}

interface ProgressIndicatorDomRef extends ProgressIndicatorAttributes, Ui5DomRef {}

interface ProgressIndicatorPropTypes
  extends ProgressIndicatorAttributes,
    Omit<CommonProps, keyof ProgressIndicatorAttributes> {}

/**
 * Shows the progress of a process in a graphical way. To indicate the progress, the inside of the component is filled with a color.
 *
 * ### Responsive Behavior
 *
 * You can change the size of the Progress Indicator by changing its `width` or `height` CSS properties.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const ProgressIndicator = withWebComponent<ProgressIndicatorPropTypes, ProgressIndicatorDomRef>(
  'ui5-progress-indicator',
  ['accessibleName', 'displayValue', 'value', 'valueState'],
  ['disabled', 'hideValue'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ProgressIndicator.js')
);

ProgressIndicator.displayName = 'ProgressIndicator';

export { ProgressIndicator };
export type { ProgressIndicatorDomRef, ProgressIndicatorPropTypes };
