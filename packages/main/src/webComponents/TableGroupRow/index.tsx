'use client';

import '@ui5/webcomponents/dist/TableGroupRow.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface TableGroupRowAttributes {}

interface TableGroupRowDomRef extends TableGroupRowAttributes, Ui5DomRef {}

interface TableGroupRowPropTypes extends TableGroupRowAttributes, Omit<CommonProps, keyof TableGroupRowAttributes> {
  /**
   * Defines the text of the component.
   * **Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableGroupRow` component represents a group row in the `Table`.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Table)
 */
const TableGroupRow = withWebComponent<TableGroupRowPropTypes, TableGroupRowDomRef>(
  'ui5-table-group-row',
  [],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/TableGroupRow.js')
);

TableGroupRow.displayName = 'TableGroupRow';

export { TableGroupRow };
export type { TableGroupRowDomRef, TableGroupRowPropTypes };
