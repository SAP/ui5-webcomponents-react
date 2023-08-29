'use client';

import '@ui5/webcomponents/dist/ToolbarSelectOption.js';
import { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../interfaces/index.js';

interface ToolbarSelectOptionAttributes {
  /**
   * Defines the selected state of the component.
   */
  selected?: boolean;
}

export interface ToolbarSelectOptionDomRef extends ToolbarSelectOptionAttributes, Ui5DomRef {}

export interface ToolbarSelectOptionPropTypes extends ToolbarSelectOptionAttributes, CommonProps {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `ToolbarSelectOption` component defines the content of an option in the `ToolbarSelect`
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ToolbarSelectOption)
 */
const ToolbarSelectOption = withWebComponent<ToolbarSelectOptionPropTypes, ToolbarSelectOptionDomRef>(
  'ui5-toolbar-select-option',
  [],
  ['selected'],
  [],
  [],
  () => import('@ui5/webcomponents/dist/ToolbarSelectOption.js')
);

ToolbarSelectOption.displayName = 'ToolbarSelectOption';

export { ToolbarSelectOption };
