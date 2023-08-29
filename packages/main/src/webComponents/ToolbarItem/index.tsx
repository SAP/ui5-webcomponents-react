'use client';

import '@ui5/webcomponents/dist/ToolbarItem.js';
import { ToolbarItemOverflowBehavior } from '../../enums/index.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface ToolbarItemAttributes {
  /**
   * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set, the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it. Available options are: <ul> <li><code>NeverOverflow</code></li> <li><code>AlwaysOverflow</code></li> <li><code>Default</code></li> </ul>
   */
  overflowPriority?: ToolbarItemOverflowBehavior | keyof typeof ToolbarItemOverflowBehavior;
  /**
   * Defines if the toolbar overflow popup should close upon intereaction with the item. It will close by default.
   */
  preventOverflowClosing?: boolean;
}

export interface ToolbarItemDomRef extends ToolbarItemAttributes, Ui5DomRef {}

export interface ToolbarItemPropTypes extends ToolbarItemAttributes, CommonProps {}

/**
 * The `ui5-tb-item` represents an abstract class for items, used in the `ui5-toolbar`
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ToolbarItem)
 */
const ToolbarItem = withWebComponent<ToolbarItemPropTypes, ToolbarItemDomRef>(
  'ui5-tb-item',
  ['overflowPriority'],
  ['preventOverflowClosing'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ToolbarItem.js')
);

ToolbarItem.displayName = 'ToolbarItem';

ToolbarItem.defaultProps = {
  overflowPriority: ToolbarItemOverflowBehavior.Default
};

export { ToolbarItem };
