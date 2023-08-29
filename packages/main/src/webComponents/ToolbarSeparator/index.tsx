'use client';

import '@ui5/webcomponents/dist/ToolbarSeparator.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';

interface ToolbarSeparatorAttributes {}

export interface ToolbarSeparatorDomRef extends ToolbarSeparatorAttributes, Ui5DomRef {}

export interface ToolbarSeparatorPropTypes extends ToolbarSeparatorAttributes, CommonProps {}

/**
 * The `ToolbarSeparator` is an element, used for visual separation between two elements. It takes no space in calculating toolbar items width
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ToolbarSeparator)
 */
const ToolbarSeparator = withWebComponent<ToolbarSeparatorPropTypes, ToolbarSeparatorDomRef>(
  'ui5-toolbar-separator',
  [],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ToolbarSeparator.js')
);

ToolbarSeparator.displayName = 'ToolbarSeparator';

export { ToolbarSeparator };
