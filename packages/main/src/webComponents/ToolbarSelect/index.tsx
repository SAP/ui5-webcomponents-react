'use client';

import '@ui5/webcomponents/dist/ToolbarSelect.js';
import type { ToolbarSelectChangeEventDetail } from '@ui5/webcomponents/dist/ToolbarSelect.js';
import type { ReactNode } from 'react';
import { ValueState } from '../../enums/index.js';
import type { Ui5CustomEvent, CommonProps, Ui5DomRef } from '../../interfaces/index.js';
import { withWebComponent } from '../../internal/withWebComponent.js';

interface ToolbarSelectAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   */
  accessibleName?: string;
  /**
   * Receives id(or many ids) of the elements that label the select.
   */
  accessibleNameRef?: string;
  /**
   * Defines whether the component is in disabled state.
   *
   * **Note:** A disabled component is noninteractive.
   */
  disabled?: boolean;
  /**
   * Defines the value state of the component.
   */
  valueState?: ValueState | keyof typeof ValueState;
  /**
   * Defines the width of the select.
   *
   * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
   */
  width?: string;
}

export interface ToolbarSelectDomRef extends ToolbarSelectAttributes, Ui5DomRef {}

export interface ToolbarSelectPropTypes extends ToolbarSelectAttributes, Omit<CommonProps, 'onChange'> {
  /**
   * Defines the component options.
   *
   * **Note:** Only one selected option is allowed. If more than one option is defined as selected, the last one would be considered as the selected one.
   *
   * **Note:** Use the `ToolbarSelectOption` component to define the desired options.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the selected option changes.
   */
  onChange?: (event: Ui5CustomEvent<ToolbarSelectDomRef, ToolbarSelectChangeEventDetail>) => void;
  /**
   * Fired after the component's dropdown menu closes.
   */
  onClose?: (event: Ui5CustomEvent<ToolbarSelectDomRef>) => void;
  /**
   * Fired after the component's dropdown menu opens.
   */
  onOpen?: (event: Ui5CustomEvent<ToolbarSelectDomRef>) => void;
}

/**
 * The `ToolbarSelect` component is used to create a toolbar drop-down list. The items inside the `ToolbarSelect` define the available options by using the `ToolbarSelect-option` component.
 *
 * @abstract
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ToolbarSelect)
 */
const ToolbarSelect = withWebComponent<ToolbarSelectPropTypes, ToolbarSelectDomRef>(
  'ui5-toolbar-select',
  ['accessibleName', 'accessibleNameRef', 'valueState', 'width'],
  ['disabled'],
  [],
  ['change', 'close', 'open'],
  () => import('@ui5/webcomponents/dist/ToolbarSelect.js')
);

ToolbarSelect.displayName = 'ToolbarSelect';

ToolbarSelect.defaultProps = {
  valueState: ValueState.None
};

export { ToolbarSelect };
