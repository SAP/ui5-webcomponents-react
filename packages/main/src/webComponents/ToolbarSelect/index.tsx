'use client';

import '@ui5/webcomponents/dist/ToolbarSelect.js';
import type { ToolbarSelectChangeEventDetail } from '@ui5/webcomponents/dist/ToolbarSelect.js';
import type ToolbarItemOverflowBehavior from '@ui5/webcomponents/dist/types/ToolbarItemOverflowBehavior.js';
import type ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import type { CSSProperties, ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef } from '../../types/index.js';

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
   * @default false
   */
  disabled?: boolean;

  /**
   * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
   * the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
   * @default "Default"
   */
  overflowPriority?: ToolbarItemOverflowBehavior | keyof typeof ToolbarItemOverflowBehavior;

  /**
   * Defines if the toolbar overflow popup should close upon intereaction with the item.
   * It will close by default.
   * @default false
   */
  preventOverflowClosing?: boolean;

  /**
   * Defines the value state of the component.
   * @default "None"
   */
  valueState?: ValueState | keyof typeof ValueState;

  /**
   * Defines the width of the select.
   *
   * **Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.
   * @default undefined
   */
  width?: CSSProperties['width'] | CSSProperties['height'];
}

interface ToolbarSelectDomRef extends Required<ToolbarSelectAttributes>, Ui5DomRef {}

interface ToolbarSelectPropTypes
  extends ToolbarSelectAttributes,
    Omit<CommonProps, keyof ToolbarSelectAttributes | 'children' | 'onChange' | 'onClose' | 'onOpen'> {
  /**
   * Defines the component options.
   *
   * **Note:** Only one selected option is allowed.
   * If more than one option is defined as selected, the last one would be considered as the selected one.
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
 * The `ToolbarSelect` component is used to create a toolbar drop-down list.
 * The items inside the `ToolbarSelect` define the available options by using the `ToolbarSelectOption` component.
 *
 *
 *
 * `import "@ui5/webcomponents/dist/ToolbarSelectOption.js";` (comes with `ToolbarSelect`)
 *
 * @abstract
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const ToolbarSelect = withWebComponent<ToolbarSelectPropTypes, ToolbarSelectDomRef>(
  'ui5-toolbar-select',
  ['accessibleName', 'accessibleNameRef', 'overflowPriority', 'valueState', 'width'],
  ['disabled', 'preventOverflowClosing'],
  [],
  ['change', 'close', 'open'],
  () => import('@ui5/webcomponents/dist/ToolbarSelect.js')
);

ToolbarSelect.displayName = 'ToolbarSelect';

export { ToolbarSelect };
export type { ToolbarSelectDomRef, ToolbarSelectPropTypes };
