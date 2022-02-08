import { ReactNode } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { Ui5DomRef } from '../../interfaces/Ui5DomRef';
import { withWebComponent } from '../../internal/withWebComponent';

import '@ui5/webcomponents/dist/TableCell.js';

interface TableCellAttributes {}

export interface TableCellDomRef extends TableCellAttributes, Ui5DomRef {}

export interface TableCellPropTypes extends TableCellAttributes, CommonProps {
  /**
   * Specifies the content of the component.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableCell` component defines the structure of the data in a single `Table` cell.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TableCell" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const TableCell = withWebComponent<TableCellPropTypes, TableCellDomRef>('ui5-table-cell', [], [], [], []);

TableCell.displayName = 'TableCell';

export { TableCell };
