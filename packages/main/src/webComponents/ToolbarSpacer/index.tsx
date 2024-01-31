'use client';

import '@ui5/webcomponents/dist/ToolbarSpacer.js';
import type { CSSProperties } from 'react';
import { ToolbarItemOverflowBehavior } from '../../enums/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ToolbarSpacerAttributes {
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

interface ToolbarSpacerDomRef extends ToolbarSpacerAttributes, Ui5DomRef {}

interface ToolbarSpacerPropTypes extends ToolbarSpacerAttributes, Omit<CommonProps, keyof ToolbarSpacerAttributes> {}

/**
 * The `ToolbarSpacer` is an element, used for taking needed space for toolbar items to take 100% width. It takes no space in calculating toolbar items width
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Toolbar)
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

ToolbarSpacer.defaultProps = {
  overflowPriority: ToolbarItemOverflowBehavior.Default
};

export { ToolbarSpacer };
export type { ToolbarSpacerDomRef, ToolbarSpacerPropTypes };
