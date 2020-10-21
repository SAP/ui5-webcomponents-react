import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TableCell';
import { FC, ReactNode } from 'react';

export interface TableCellPropTypes extends WithWebComponentPropTypes {
  /**
   * Specifies the content of the <code>TableCell</code>.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The <code>TableCell</code> component defines the structure of the data in a single <code>Table</code> cell

 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TableCell" target="_blank">UI5 Web Components Playground</a>
 */
const TableCell: FC<TableCellPropTypes> = withWebComponent<TableCellPropTypes>('ui5-table-cell', [], [], [], []);

TableCell.displayName = 'TableCell';

TableCell.defaultProps = {};

export { TableCell };
