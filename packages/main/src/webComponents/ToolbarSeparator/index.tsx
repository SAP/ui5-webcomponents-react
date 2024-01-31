'use client';

import '@ui5/webcomponents/dist/ToolbarSeparator.js';
import { ToolbarItemOverflowBehavior } from '../../enums/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ToolbarSeparatorAttributes {
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

interface ToolbarSeparatorDomRef extends ToolbarSeparatorAttributes, Ui5DomRef {}

interface ToolbarSeparatorPropTypes
  extends ToolbarSeparatorAttributes,
    Omit<CommonProps, keyof ToolbarSeparatorAttributes> {}

/**
 * The `ToolbarSeparator` is an element, used for visual separation between two elements. It takes no space in calculating toolbar items width
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Toolbar)
 */
const ToolbarSeparator = withWebComponent<ToolbarSeparatorPropTypes, ToolbarSeparatorDomRef>(
  'ui5-toolbar-separator',
  ['overflowPriority'],
  ['preventOverflowClosing'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ToolbarSeparator.js')
);

ToolbarSeparator.displayName = 'ToolbarSeparator';

ToolbarSeparator.defaultProps = {
  overflowPriority: ToolbarItemOverflowBehavior.Default
};

export { ToolbarSeparator };
export type { ToolbarSeparatorDomRef, ToolbarSeparatorPropTypes };
