'use client';

import '@ui5/webcomponents/dist/TableCell.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface TableCellAttributes {}

interface TableCellDomRef extends TableCellAttributes, Ui5DomRef {}

interface TableCellPropTypes extends TableCellAttributes, CommonProps {
  /**
   * Specifies the content of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableCell` component defines the structure of the data in a single `Table` cell.
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)
 */
const TableCell = withWebComponent<TableCellPropTypes, TableCellDomRef>(
  'ui5-table-cell',
  [],
  [],
  [],
  [],
  () => import('@ui5/webcomponents/dist/TableCell.js')
);

TableCell.displayName = 'TableCell';

export { TableCell };
export type { TableCellDomRef, TableCellPropTypes };
