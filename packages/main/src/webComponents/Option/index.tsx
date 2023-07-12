'use client';

import '@ui5/webcomponents/dist/Option.js';
import type { ReactNode } from 'react';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface OptionAttributes {
  /**
   * Defines the additional text displayed at the end of the option element.
   */
  additionalText?: string;
  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is hidden.
   */
  disabled?: boolean;
  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous built-in icons. To find all the available icons, see the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.
   */
  icon?: string;
  /**
   * Defines the selected state of the component.
   */
  selected?: boolean;
  /**
   * Defines the value of the `Select` inside an HTML Form element when this component is selected. For more information on HTML Form support, see the `name` property of `Select`.
   */
  value?: string;
}

export interface OptionDomRef extends OptionAttributes, Ui5DomRef {}

export interface OptionPropTypes extends OptionAttributes, CommonProps {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `Option` component defines the content of an option in the `Select`
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Select" target="_blank">UI5 Web Components Storybook</ui5-link>
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
