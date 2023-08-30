'use client';

import '@ui5/webcomponents/dist/Toolbar.js';
import type { ReactNode } from 'react';
import type { ToolbarAlign } from '../../enums/index.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface ToolbarV2Attributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the input.
   */
  accessibleNameRef?: string;
  /**
   * Indicated the direction in which the Toolbar items will be aligned. Available options are:
   *
   * *   `End`
   * *   `Start`
   */
  alignContent?: ToolbarAlign | keyof typeof ToolbarAlign;
}

export interface ToolbarV2DomRef extends ToolbarV2Attributes, Ui5DomRef {}

export interface ToolbarV2PropTypes extends ToolbarV2Attributes, CommonProps {
  /**
   * Defines the items of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `ToolbarV2` component is used to create a horizontal layout with items. The items can be overflowing in a popover, when the space is not enough to show all of them.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Toolbar)
 */
const ToolbarV2 = withWebComponent<ToolbarV2PropTypes, ToolbarV2DomRef>(
  'ui5-toolbar',
  ['accessibleName', 'accessibleNameRef', 'alignContent'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/Toolbar.js')
);

ToolbarV2.displayName = 'ToolbarV2';

export { ToolbarV2 };
