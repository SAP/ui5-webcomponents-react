'use client';

import '@ui5/webcomponents/dist/SelectMenuOption.js';
import { ListItemType } from '../../enums/index.js';
import { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';

interface SelectMenuOptionAttributes {
  /**
   * Defines the text, displayed inside the `Select` input filed when the option gets selected.
   */
  displayText?: string;
  /**
   * **Note:** The property is inherited and not supported. If set, it won't take any effect.
   */
  navigated?: boolean;
  /**
   * **Note:** The property is inherited and not supported. If set, it won't take any effect.
   */
  type?: ListItemType | keyof typeof ListItemType;
  /**
   * Defines the value of the `Select` inside an HTML Form element when this component is selected. For more information on HTML Form support, see the `name` property of `Select`.
   */
  value?: string;
}

export interface SelectMenuOptionDomRef extends SelectMenuOptionAttributes, Ui5DomRef {
  /**
   * **Note:** The property is inherited and not supported. If set, it won't take any effect.
   */
  accessibilityAttributes: Record<string, unknown>;
}

export interface SelectMenuOptionPropTypes extends SelectMenuOptionAttributes, CommonProps {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * **Note:** The slot is inherited and not supported. If set, it won't take any effect.
   *
   * __Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot="deleteButton"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  deleteButton?: unknown;
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
  ['displayText', 'type', 'value'],
  ['navigated'],
  ['deleteButton'],
  [],
  () => import('@ui5/webcomponents/dist/SelectMenuOption.js')
);

SelectMenuOption.displayName = 'SelectMenuOption';

SelectMenuOption.defaultProps = {
  type: ListItemType.Active
};

export { SelectMenuOption };
