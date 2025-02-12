'use client';

import '@ui5/webcomponents/dist/ToolbarSelectOption.js';
import { withWebComponent } from '@ui5/webcomponents-react-base';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';

interface ToolbarSelectOptionAttributes {
  /**
   * Defines the selected state of the component.
   * @default false
   */
  selected?: boolean;
}

interface ToolbarSelectOptionDomRef extends Required<ToolbarSelectOptionAttributes>, Ui5DomRef {}

interface ToolbarSelectOptionPropTypes
  extends ToolbarSelectOptionAttributes,
    Omit<CommonProps, keyof ToolbarSelectOptionAttributes | 'children'> {
  /**
   * Defines the text of the component.
   *
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `ToolbarSelectOption` component defines the content of an option in the `ToolbarSelect`.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [1.17.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.17.0) of __@ui5/webcomponents__.
 * @abstract
 */
const ToolbarSelectOption = withWebComponent<ToolbarSelectOptionPropTypes, ToolbarSelectOptionDomRef>(
  'ui5-toolbar-select-option',
  [],
  ['selected'],
  [],
  []
);

ToolbarSelectOption.displayName = 'ToolbarSelectOption';

export { ToolbarSelectOption };
export type { ToolbarSelectOptionDomRef, ToolbarSelectOptionPropTypes };
