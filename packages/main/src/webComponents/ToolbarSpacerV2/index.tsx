'use client';

import '@ui5/webcomponents/dist/ToolbarSpacer.js';
import type { CSSProperties } from 'react';
import { ToolbarItemOverflowBehavior } from '../../enums/index.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface ToolbarSpacerV2Attributes {
  /**
   * Defines the width of the spacer.
   *
   * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
   */
  width?: CSSProperties['width'] | CSSProperties['height'];
  /**
   * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set, the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it. Available options are:
   *
   * *   `NeverOverflow`
   * *   `AlwaysOverflow`
   * *   `Default`
   */
  overflowPriority?: ToolbarItemOverflowBehavior | keyof typeof ToolbarItemOverflowBehavior;
  /**
   * Defines if the toolbar overflow popup should close upon intereaction with the item. It will close by default.
   */
  preventOverflowClosing?: boolean;
}

export interface ToolbarSpacerV2DomRef extends ToolbarSpacerV2Attributes, Ui5DomRef {}

export interface ToolbarSpacerV2PropTypes extends ToolbarSpacerV2Attributes, CommonProps {}

/**
 * The `ToolbarSpacerV2` is an element, used for taking needed space for toolbar items to take 100% width. It takes no space in calculating toolbar items width
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Toolbar)
 */
const ToolbarSpacerV2 = withWebComponent<ToolbarSpacerV2PropTypes, ToolbarSpacerV2DomRef>(
  'ui5-toolbar-spacer',
  ['width', 'overflowPriority'],
  ['preventOverflowClosing'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ToolbarSpacer.js')
);

ToolbarSpacerV2.displayName = 'ToolbarSpacerV2';

ToolbarSpacerV2.defaultProps = {
  overflowPriority: ToolbarItemOverflowBehavior.Default
};

export { ToolbarSpacerV2 };
