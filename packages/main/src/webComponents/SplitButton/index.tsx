'use client';

import '@ui5/webcomponents/dist/SplitButton.js';
import type { ReactNode } from 'react';
import { ButtonDesign } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface SplitButtonAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Defines the icon to be displayed in active state as graphical element within the component.
   */
  activeIcon?: string;
  /**
   * Defines the component design.
   *
   * **The available values are:**
   *
   * *   `Default`
   * *   `Emphasized`
   * *   `Positive`
   * *   `Negative`
   * *   `Transparent`
   * *   `Attention`
   */
  design?: ButtonDesign | keyof typeof ButtonDesign;
  /**
   * Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.
   */
  disabled?: boolean;
  /**
   * Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options.
   *
   * Example: See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.
   */
  icon?: string;
}

export interface SplitButtonDomRef extends SplitButtonAttributes, Ui5DomRef {}

export interface SplitButtonPropTypes extends SplitButtonAttributes, Omit<CommonProps, 'onClick'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the user clicks on the arrow action.
   */
  onArrowClick?: (event: Ui5CustomEvent<SplitButtonDomRef>) => void;
  /**
   * Fired when the user clicks on the default action.
   */
  onClick?: (event: Ui5CustomEvent<SplitButtonDomRef>) => void;
}

/**
 * `SplitButton` enables users to trigger actions. It is constructed of two separate actions - default action and arrow action that can be activated by clicking or tapping, or by pressing certain keyboard keys - `Space` or `Enter` for default action, and `Arrow Down` or `Arrow Up` for arrow action.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SplitButton" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const SplitButton = withWebComponent<SplitButtonPropTypes, SplitButtonDomRef>(
  'ui5-split-button',
  ['accessibleName', 'activeIcon', 'design', 'icon'],
  ['disabled'],
  [],
  ['arrow-click', 'click'],
  () => import('@ui5/webcomponents/dist/SplitButton.js')
);

SplitButton.displayName = 'SplitButton';

SplitButton.defaultProps = {
  design: ButtonDesign.Default
};

export { SplitButton };
