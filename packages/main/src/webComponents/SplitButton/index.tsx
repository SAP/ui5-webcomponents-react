'use client';

import '@ui5/webcomponents/dist/SplitButton.js';
import type ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface SplitButtonAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines whether the arrow button should have the active state styles or not.
   * @default false
   */
  activeArrowButton?: boolean;

  /**
   * Defines the icon to be displayed in active state as graphical element within the component.
   */
  activeIcon?: string;

  /**
   * Defines the component design.
   * @default "Default"
   */
  design?: ButtonDesign | keyof typeof ButtonDesign;

  /**
   * Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.
   *
   * Example: See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;
}

interface SplitButtonDomRef extends SplitButtonAttributes, Ui5DomRef {}

interface SplitButtonPropTypes
  extends SplitButtonAttributes,
    Omit<CommonProps, keyof SplitButtonAttributes | 'onArrowClick' | 'onClick'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the user clicks on the default action.
   */
  onClick?: (event: Ui5CustomEvent<SplitButtonDomRef>) => void;

  /**
   * Fired when the user clicks on the arrow action.
   */
  onArrowClick?: (event: Ui5CustomEvent<SplitButtonDomRef>) => void;
}

/**
 * `SplitButton` enables users to trigger actions. It is constructed of two separate actions - default action and arrow action that can be activated by clicking or tapping, or by pressing certain keyboard keys - `Space` or `Enter` for default action, and `Arrow Down` or `Arrow Up` for arrow action.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const SplitButton = withWebComponent<SplitButtonPropTypes, SplitButtonDomRef>(
  'ui5-split-button',
  ['accessibleName', 'activeIcon', 'design', 'icon'],
  ['activeArrowButton', 'disabled'],
  [],
  ['arrow-click', 'click'],
  () => import('@ui5/webcomponents/dist/SplitButton.js')
);

SplitButton.displayName = 'SplitButton';

export { SplitButton };
export type { SplitButtonDomRef, SplitButtonPropTypes };
