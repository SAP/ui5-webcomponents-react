'use client';

import '@ui5/webcomponents/dist/ToolbarButton.js';
import type { AccessibilityAttributes } from '@ui5/webcomponents/dist/ToolbarButton.js';
import type ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import type ToolbarItemOverflowBehavior from '@ui5/webcomponents/dist/types/ToolbarItemOverflowBehavior.js';
import type { CSSProperties } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface ToolbarButtonAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   */
  accessibleNameRef?: string;

  /**
   * Defines the action design.
   * @default "Default"
   */
  design?: ButtonDesign | keyof typeof ButtonDesign;

  /**
   * Defines if the action is disabled.
   *
   * **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
   * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;

  /**
   * Defines whether the icon should be displayed after the component text.
   * @default false
   */
  iconEnd?: boolean;

  /**
   * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
   * the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
   * @default "Default"
   */
  overflowPriority?: ToolbarItemOverflowBehavior | keyof typeof ToolbarItemOverflowBehavior;

  /**
   * Defines if the toolbar overflow popup should close upon intereaction with the item.
   * It will close by default.
   * @default false
   */
  preventOverflowClosing?: boolean;

  /**
   * Button text
   */
  text?: string;

  /**
   * Defines the tooltip of the component.
   *
   * **Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.
   */
  tooltip?: string;

  /**
   * Defines the width of the button.
   *
   * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
   * @default undefined
   */
  width?: CSSProperties['width'] | CSSProperties['height'];
}

interface ToolbarButtonDomRef extends Required<ToolbarButtonAttributes>, Ui5DomRef {
  /**
   * An object of strings that defines several additional accessibility attribute values
   * for customization depending on the use case.
   *
   * It supports the following fields:
   *
   * - `expanded`: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values:
   * 	- `true`
   * 	- `false`
   * - `hasPopup`: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button. Accepts the following string values:
   * 	- `Dialog`
   * 	- `Grid`
   * 	- `ListBox`
   * 	- `Menu`
   * 	- `Tree`
   * - `controls`: Identifies the element (or elements) whose contents or presence are controlled by the button element. Accepts a string value.
   */
  accessibilityAttributes: AccessibilityAttributes;
}

interface ToolbarButtonPropTypes
  extends ToolbarButtonAttributes,
    Omit<CommonProps, keyof ToolbarButtonAttributes | 'onClick'> {
  /**
   * Fired when the component is activated either with a
   * mouse/tap or by using the Enter or Space key.
   *
   * **Note:** The event will not be fired if the `disabled`
   * property is set to `true`.
   */
  onClick?: (event: Ui5CustomEvent<ToolbarButtonDomRef>) => void;
}

/**
 * The `ToolbarButton` represents an abstract action,
 * used in the `Toolbar`.
 *
 *
 *
 * @abstract
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const ToolbarButton = withWebComponent<ToolbarButtonPropTypes, ToolbarButtonDomRef>(
  'ui5-toolbar-button',
  ['accessibleName', 'accessibleNameRef', 'design', 'icon', 'overflowPriority', 'text', 'tooltip', 'width'],
  ['disabled', 'iconEnd', 'preventOverflowClosing'],
  [],
  ['click'],
  () => import('@ui5/webcomponents/dist/ToolbarButton.js')
);

ToolbarButton.displayName = 'ToolbarButton';

export { ToolbarButton };
export type { ToolbarButtonDomRef, ToolbarButtonPropTypes };
