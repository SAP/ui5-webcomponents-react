'use client';

import '@ui5/webcomponents/dist/ToolbarSeparator.js';
import { ToolbarItemOverflowBehavior } from '../../enums/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ToolbarSeparatorV2Attributes {
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

export interface ToolbarSeparatorV2DomRef extends ToolbarSeparatorV2Attributes, Ui5DomRef {}

export interface ToolbarSeparatorV2PropTypes extends ToolbarSeparatorV2Attributes, CommonProps {}

/**
 * The `ToolbarSeparatorV2` is an element, used for visual separation between two elements. It takes no space in calculating toolbar items width
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Toolbar)
 */
const ToolbarSeparatorV2 = withWebComponent<ToolbarSeparatorV2PropTypes, ToolbarSeparatorV2DomRef>(
  'ui5-toolbar-separator',
  ['overflowPriority'],
  ['preventOverflowClosing'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ToolbarSeparator.js')
);

ToolbarSeparatorV2.displayName = 'ToolbarSeparatorV2';

ToolbarSeparatorV2.defaultProps = {
  overflowPriority: ToolbarItemOverflowBehavior.Default
};

export { ToolbarSeparatorV2 };
