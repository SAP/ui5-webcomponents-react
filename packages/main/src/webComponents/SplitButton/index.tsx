'use client';

import '@ui5/webcomponents/dist/SplitButton.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';
import ButtonDesign from '@ui5/webcomponents/dist/types/ButtonDesign.js';
import type { ReactNode } from 'react';

interface SplitButtonAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Defines whether the arrow button should have the active state styles or not.
   *
   * **Note:** Available since [v1.21.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.21.0) of **@ui5/webcomponents**.
   * @default false
   */
  activeArrowButton?: boolean;

  /**
   * Defines the component design.
   * @default "Default"
   */
  design?: ButtonDesign | keyof typeof ButtonDesign;

  /**
   * Defines whether the component is disabled.
   * A disabled component can't be pressed or
   * focused, and it is not in the tab chain.
   * @default false
   */
  disabled?: boolean;

  /**
   * Defines the icon to be displayed as graphical element within the component.
   * The SAP-icons font provides numerous options.
   *
   * Example:
   *
   * See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
   */
  icon?: string;
}

interface SplitButtonDomRef extends Required<SplitButtonAttributes>, Ui5DomRef {}

interface SplitButtonPropTypes
  extends SplitButtonAttributes,
    Omit<CommonProps, keyof SplitButtonAttributes | 'children' | 'onArrowClick' | 'onClick'> {
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
 * `SplitButton` enables users to trigger actions. It is constructed of two separate actions -
 * default action and arrow action that can be activated by clicking or tapping, or by
 * pressing certain keyboard keys - `Space` or `Enter` for default action,
 * and `Arrow Down` or `Arrow Up` for arrow action.
 *
 * ### Usage
 *
 * `SplitButton` consists two separate buttons:
 *
 * - for the first one (default action) you can define some `text` or an `icon`, or both.
 * - the second one (arrow action) contains only `slim-arrow-down` icon.
 *
 * You can choose a `design` from a set of predefined types (the same as for ui5-button) that offer
 * different styling to correspond to the triggered action. Both text and arrow actions have the same design.
 *
 * You can set the `SplitButton` as enabled or disabled. Both parts of an enabled
 * `SplitButton` can be pressed by clicking or tapping it, or by certain keys, which changes
 * the style to provide visual feedback to the user that it is pressed or hovered over with
 * the mouse cursor. A disabled `SplitButton` appears inactive and any of the two buttons
 * cannot be pressed.
 *
 * ### Keyboard Handling
 *
 * - `Space` or `Enter` - triggers the default action
 * - `Shift` or `Escape` - if `Space` is pressed, releases the default action button without triggering the click event.
 * - `Arrow Down`, `Arrow Up`, `Alt`+`Arrow Down`, `Alt`+`Arrow Up`, or `F4` - triggers the arrow action
 * There are separate events that are fired on activating of `SplitButton` parts:
 *
 * - `click` for the first button (default action)
 * - `arrow-click` for the second button (arrow action)
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of __@ui5/webcomponents__.
 */
const SplitButton = withWebComponent<SplitButtonPropTypes, SplitButtonDomRef>(
  'ui5-split-button',
  ['accessibleName', 'design', 'icon'],
  ['activeArrowButton', 'disabled'],
  [],
  ['arrow-click', 'click'],
  () => import('@ui5/webcomponents/dist/SplitButton.js')
);

SplitButton.displayName = 'SplitButton';

export { SplitButton };
export type { SplitButtonDomRef, SplitButtonPropTypes };
