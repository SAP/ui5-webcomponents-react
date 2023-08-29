'use client';

import '@ui5/webcomponents/dist/ToolbarSeparator.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface ToolbarSeparatorV2Attributes {}

export interface ToolbarSeparatorV2DomRef extends ToolbarSeparatorV2Attributes, Ui5DomRef {}

export interface ToolbarSeparatorV2PropTypes extends ToolbarSeparatorV2Attributes, CommonProps {}

/**
 * The `ToolbarSeparatorV2` is an element, used for visual separation between two elements. It takes no space in calculating toolbar items width
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ToolbarSeparatorV2)
 */
const ToolbarSeparatorV2 = withWebComponent<ToolbarSeparatorV2PropTypes, ToolbarSeparatorV2DomRef>(
  'ui5-toolbar-separator',
  [],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ToolbarSeparator.js')
);

ToolbarSeparatorV2.displayName = 'ToolbarSeparatorV2';

export { ToolbarSeparatorV2 };
