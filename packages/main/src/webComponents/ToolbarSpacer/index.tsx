'use client';

import '@ui5/webcomponents/dist/ToolbarSpacer.js';
import type ToolbarItemOverflowBehavior from '@ui5/webcomponents/dist/types/ToolbarItemOverflowBehavior.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ToolbarSpacerAttributes {
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
   * Defines the width of the spacer.
   *
   * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
   * @default undefined
   */
  width?: string | undefined;
}

interface ToolbarSpacerDomRef extends Required<ToolbarSpacerAttributes>, Ui5DomRef {}

interface ToolbarSpacerPropTypes extends ToolbarSpacerAttributes, Omit<CommonProps, keyof ToolbarSpacerAttributes> {}

/**
 * The `ToolbarSpacer` is an element, used for taking needed space for toolbar items to take 100% width.
 * It takes no space in calculating toolbar items width.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of __@ui5/webcomponents__.
 * @abstract
 */
const ToolbarSpacer = withWebComponent<ToolbarSpacerPropTypes, ToolbarSpacerDomRef>(
  'ui5-toolbar-spacer',
  ['overflowPriority', 'width'],
  ['preventOverflowClosing'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ToolbarSpacer.js')
);

ToolbarSpacer.displayName = 'ToolbarSpacer';

export { ToolbarSpacer };
export type { ToolbarSpacerDomRef, ToolbarSpacerPropTypes };
