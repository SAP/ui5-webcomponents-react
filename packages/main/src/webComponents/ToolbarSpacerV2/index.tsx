'use client';

import '@ui5/webcomponents/dist/ToolbarSpacer.js';
import type { CSSProperties } from 'react';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface ToolbarSpacerV2Attributes {
  /**
   * Defines the width of the spacer.
   *
   * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
   */
  width?: CSSProperties['width'] | CSSProperties['height'];
}

export interface ToolbarSpacerV2DomRef extends ToolbarSpacerV2Attributes, Ui5DomRef {}

export interface ToolbarSpacerV2PropTypes extends ToolbarSpacerV2Attributes, CommonProps {}

/**
 * The `ToolbarSpacerV2` is an element, used for taking needed space for toolbar items to take 100% width. It takes no space in calculating toolbar items width
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ToolbarSpacerV2)
 */
const ToolbarSpacerV2 = withWebComponent<ToolbarSpacerV2PropTypes, ToolbarSpacerV2DomRef>(
  'ui5-toolbar-spacer',
  ['width'],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ToolbarSpacer.js')
);

ToolbarSpacerV2.displayName = 'ToolbarSpacerV2';

export { ToolbarSpacerV2 };
