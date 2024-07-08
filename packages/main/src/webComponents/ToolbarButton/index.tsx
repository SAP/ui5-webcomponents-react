'use client';

import '@ui5/webcomponents/dist/ToolbarButton.js';
import type { ToolbarButtonAccessibilityAttributes } from '@ui5/webcomponents/dist/ToolbarButton.js';
import type ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import type ToolbarItemOverflowBehavior from '@ui5/webcomponents/dist/types/ToolbarItemOverflowBehavior.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

interface ToolbarButtonAttributes {
  /**
   * Defines the additional accessibility attributes that will be applied to the component.
   *
   * The following fields are supported:
   *
   * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
   * Accepts the following string values: `true` or `false`
   *
   * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
   * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
   *
   * - **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
   * Accepts a lowercase string value.
   * @default {}
   */
  accessibilityAttributes?: ToolbarButtonAccessibilityAttributes;

  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

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
   * Defines the icon, displayed as graphical element within the component after the button text.
   *
   * **Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.
   * Usage of `endIcon` only should be avoided.
   *
   * The SAP-icons font provides numerous options.
   *
   * Example:
   * See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  endIcon?: string | undefined;

  /**
   * Defines the `icon` source URI.
   *
   * **Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
   * [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   * @default undefined
   */
  icon?: string | undefined;

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
   * @default undefined
   */
  text?: string | undefined;

  /**
   * Defines the tooltip of the component.
   *
   * **Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.
   * @default undefined
   */
  tooltip?: string | undefined;

  /**
   * Defines the width of the button.
   *
   * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
   * @default undefined
   */
  width?: string | undefined;
}

interface ToolbarButtonDomRef extends Required<ToolbarButtonAttributes>, Ui5DomRef {}

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
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of __@ui5/webcomponents__.
 * @abstract
 */
const ToolbarButton = withWebComponent<ToolbarButtonPropTypes, ToolbarButtonDomRef>(
  'ui5-toolbar-button',
  [
    'accessibilityAttributes',
    'accessibleName',
    'accessibleNameRef',
    'design',
    'endIcon',
    'icon',
    'overflowPriority',
    'text',
    'tooltip',
    'width'
  ],
  ['disabled', 'preventOverflowClosing'],
  [],
  ['click'],
  () => import('@ui5/webcomponents/dist/ToolbarButton.js')
);

ToolbarButton.displayName = 'ToolbarButton';

export { ToolbarButton };
export type { ToolbarButtonDomRef, ToolbarButtonPropTypes };
