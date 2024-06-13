'use client';

import '@ui5/webcomponents/dist/OptionCustom.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface OptionCustomAttributes {
  /**
   * Defines the text, displayed inside the `Select` input filed
   * when the option gets selected.
   */
  displayText?: string;

  /**
   * Defines the selected state of the component.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the text of the tooltip that would be displayed for the list item.
   */
  tooltip?: string;

  /**
   * Defines the value of the `Select` inside an HTML Form element when this component is selected.
   * For more information on HTML Form support, see the `name` property of `Select`.
   */
  value?: string;
}

interface OptionCustomDomRef extends Required<OptionCustomAttributes>, Ui5DomRef {}

interface OptionCustomPropTypes
  extends OptionCustomAttributes,
    Omit<CommonProps, keyof OptionCustomAttributes | 'children'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `OptionCustom` component defines a custom content of an option in the `Select`.
 * A component to be the same way as the standard `Option`.
 * The component accepts arbitrary HTML content to allow full customization.
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of __@ui5/webcomponents__.
 */
const OptionCustom = withWebComponent<OptionCustomPropTypes, OptionCustomDomRef>(
  'ui5-option-custom',
  ['displayText', 'tooltip', 'value'],
  ['selected'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/OptionCustom.js')
);

OptionCustom.displayName = 'OptionCustom';

export { OptionCustom };
export type { OptionCustomDomRef, OptionCustomPropTypes };
