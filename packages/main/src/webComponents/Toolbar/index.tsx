'use client';

import '@ui5/webcomponents/dist/Toolbar.js';
import type { ReactNode } from 'react';
import type { ToolbarAlign } from '../../enums/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface ToolbarAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the input.
   */
  accessibleNameRef?: string;
  /**
   * Indicated the direction in which the Toolbar items will be aligned.
   */
  alignContent?: ToolbarAlign | keyof typeof ToolbarAlign;
}

interface ToolbarDomRef extends ToolbarAttributes, Ui5DomRef {}

interface ToolbarPropTypes extends ToolbarAttributes, Omit<CommonProps, keyof ToolbarAttributes> {
  /**
   * Defines the items of the component. **Note:** Currently only `ToolbarButton`, `ToolbarSelect`, `ToolbarSeparatorV2` and `ToolbarSpacerV2` are allowed here.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `Toolbar` component is used to create a horizontal layout with items. The items can be overflowing in a popover, when the space is not enough to show all of them.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Toolbar)
 */
const Toolbar = withWebComponent<ToolbarPropTypes, ToolbarDomRef>(
  'ui5-toolbar',
  ['accessibleName', 'accessibleNameRef', 'alignContent'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/Toolbar.js')
);

Toolbar.displayName = 'Toolbar';

export { Toolbar };
export type { ToolbarDomRef, ToolbarPropTypes };
