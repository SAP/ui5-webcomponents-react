'use client';

import '@ui5/webcomponents-compat/dist/TableCell.js';
import { withWebComponent } from '@ui5/webcomponents-react';
import type { CommonProps, Ui5DomRef } from '@ui5/webcomponents-react';
import type { ReactNode } from 'react';

interface TableCellAttributes {}

interface TableCellDomRef extends Required<TableCellAttributes>, Ui5DomRef {}

interface TableCellPropTypes extends TableCellAttributes, Omit<CommonProps, 'children'> {
  /**
   * Specifies the content of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableCell` component defines the structure of the data in a single `Table` cell.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const TableCell = withWebComponent<TableCellPropTypes, TableCellDomRef>(
  'ui5-table-cell',
  [],
  [],
  [],
  [],
  () => import('@ui5/webcomponents-compat/dist/TableCell.js')
);

TableCell.displayName = 'TableCell';

export { TableCell };
export type { TableCellDomRef, TableCellPropTypes };
