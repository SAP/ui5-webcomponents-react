'use client';

import '@ui5/webcomponents/dist/Option.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface OptionAttributes {
  /**
   * Defines the additional text displayed at the end of the option element.
   */
  additionalText?: string;

  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is hidden.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default null
   */
  icon?: string | null | undefined;

  /**
   * Defines the selected state of the component.
   * @default false
   */
  selected?: boolean;

  /**
   * Defines the value of the `Select` inside an HTML Form element when this component is selected. For more information on HTML Form support, see the `name` property of `Select`.
   */
  value?: string;
}

interface OptionDomRef extends Required<OptionAttributes>, Ui5DomRef {}

interface OptionPropTypes extends OptionAttributes, Omit<CommonProps, keyof OptionAttributes | 'children'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `Option` component defines the content of an option in the `Select`.
 *
 * @abstract
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const Option = withWebComponent<OptionPropTypes, OptionDomRef>(
  'ui5-option',
  ['additionalText', 'icon', 'value'],
  ['disabled', 'selected'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/Option.js')
);

Option.displayName = 'Option';

export { Option };
export type { OptionDomRef, OptionPropTypes };
