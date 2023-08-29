'use client';

import '@ui5/webcomponents/dist/ToolbarSpacer.js';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';

interface ToolbarSpacerAttributes {
  /**
   * Spacer width
   */
  width?: unknown;
}

export interface ToolbarSpacerDomRef extends ToolbarSpacerAttributes, Ui5DomRef {}

export interface ToolbarSpacerPropTypes extends ToolbarSpacerAttributes, CommonProps {}

/**
 * The `ToolbarSpacer` is an element, used for taking needed space for toolbar items to take 100% width. It takes no space in calculating toolbar items width
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ToolbarSpacer)
 */
const ToolbarSpacer = withWebComponent<ToolbarSpacerPropTypes, ToolbarSpacerDomRef>(
  'ui5-toolbar-spacer',
  ['width'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ToolbarSpacer.js')
);

ToolbarSpacer.displayName = 'ToolbarSpacer';

export { ToolbarSpacer };
