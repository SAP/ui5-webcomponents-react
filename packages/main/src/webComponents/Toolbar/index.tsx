'use client';

import '@ui5/webcomponents/dist/Toolbar.js';
import type ToolbarAlign from '@ui5/webcomponents/dist/types/ToolbarAlign.js';
import type ToolbarDesign from '@ui5/webcomponents/dist/types/ToolbarDesign.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ToolbarAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the input.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Indicated the direction in which the Toolbar items will be aligned.
   * @default "End"
   */
  alignContent?: ToolbarAlign | keyof typeof ToolbarAlign;

  /**
   * Defines the toolbar design.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.
   * @default "Solid"
   */
  design?: ToolbarDesign | keyof typeof ToolbarDesign;
}

interface ToolbarDomRef extends Required<ToolbarAttributes>, Ui5DomRef {
  /**
   * Returns if the overflow popup is open.
   * @returns {boolean}
   */
  isOverflowOpen: () => boolean;
}

interface ToolbarPropTypes extends ToolbarAttributes, Omit<CommonProps, keyof ToolbarAttributes | 'children'> {
  /**
   * Defines the items of the component.
   *
   *   **Note:** Currently only `ToolbarButton`, `ToolbarSelect`, `ToolbarSeparator` and `ToolbarSpacer` are allowed here.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `Toolbar` component is used to create a horizontal layout with items.
 * The items can be overflowing in a popover, when the space is not enough to show all of them.
 *
 * ### Keyboard Handling
 * The `Toolbar` provides advanced keyboard handling.
 *
 * - The control is not interactive, but can contain of interactive elements
 * - [Tab] - iterates through elements
 *
 *
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of __@ui5/webcomponents__.
 */
const Toolbar = withWebComponent<ToolbarPropTypes, ToolbarDomRef>(
  'ui5-toolbar',
  ['accessibleName', 'accessibleNameRef', 'alignContent', 'design'],
  [],
  [],
  []
);

Toolbar.displayName = 'Toolbar';

export { Toolbar };
export type { ToolbarDomRef, ToolbarPropTypes };
