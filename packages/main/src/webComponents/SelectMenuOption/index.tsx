'use client';

import '@ui5/webcomponents/dist/SelectMenuOption.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface SelectMenuOptionAttributes {
  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is hidden.
   */
  disabled?: boolean;
  /**
   * Defines the text, displayed inside the `Select` input filed when the option gets selected.
   */
  displayText?: string;
  /**
   * Defines the value of the `Select` inside an HTML Form element when this component is selected. For more information on HTML Form support, see the `name` property of `Select`.
   */
  value?: string;
  /**
   * Defines the text alternative of the component. Note: If not provided a default text alternative will be set, if present.
   */
  accessibleName?: string;
  /**
   * Defines the selected state of the `ListItem`.
   */
  selected?: boolean;
}

interface SelectMenuOptionDomRef extends SelectMenuOptionAttributes, Ui5DomRef {}

interface SelectMenuOptionPropTypes
  extends SelectMenuOptionAttributes,
    Omit<CommonProps, keyof SelectMenuOptionAttributes> {
  /**
   * Defines the content of the component.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the user clicks on the detail button when type is `Detail`.
   */
  onDetailClick?: (event: Ui5CustomEvent<SelectMenuOptionDomRef>) => void;
}

/**
 * The `SelectMenuOption` component represents an option in the `SelectMenu`.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-SelectMenuOption)
 */
const SelectMenuOption = withWebComponent<SelectMenuOptionPropTypes, SelectMenuOptionDomRef>(
  'ui5-select-menu-option',
  ['accessibleName', 'displayText', 'value'],
  ['disabled', 'selected'],
  [],
  ['detail-click'],
  () => import('@ui5/webcomponents/dist/SelectMenuOption.js')
);

SelectMenuOption.displayName = 'SelectMenuOption';

export { SelectMenuOption };
export type { SelectMenuOptionDomRef, SelectMenuOptionPropTypes };
