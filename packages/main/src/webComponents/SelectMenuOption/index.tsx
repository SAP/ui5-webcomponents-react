'use client';

import '@ui5/webcomponents/dist/SelectMenuOption.js';
import type { ReactNode } from 'react';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface SelectMenuOptionAttributes {
  /**
   * Defines the text, displayed inside the `Select` input filed when the option gets selected.
   */
  displayText?: string;
  /**
   * Defines the value of the `Select` inside an HTML Form element when this component is selected. For more information on HTML Form support, see the `name` property of `Select`.
   */
  value?: string;
}

export interface SelectMenuOptionDomRef extends SelectMenuOptionAttributes, Ui5DomRef {}

export interface SelectMenuOptionPropTypes extends SelectMenuOptionAttributes, CommonProps {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The code>SelectMenuOption component represents an option in the `SelectMenu`.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-SelectMenuOption)
 */
const SelectMenuOption = withWebComponent<SelectMenuOptionPropTypes, SelectMenuOptionDomRef>(
  'ui5-select-menu-option',
  ['displayText', 'value'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/SelectMenuOption.js')
);

SelectMenuOption.displayName = 'SelectMenuOption';

export { SelectMenuOption };
