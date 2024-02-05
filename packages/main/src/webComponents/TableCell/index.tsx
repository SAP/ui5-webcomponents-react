'use client';

import '@ui5/webcomponents/dist/TableCell.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5DomRef } from '../../types/index.js';

interface TableCellAttributes {}

interface TableCellDomRef extends TableCellAttributes, Ui5DomRef {}

interface TableCellPropTypes extends TableCellAttributes, Omit<CommonProps, keyof TableCellAttributes> {
  /**
   * Specifies the content of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableCell` component defines the structure of the data in a single `Table` cell.
 *
 * __Note:__ This component is a web component developed by the UI5 Web Components’ team.
 *
 * [UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Table)
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
