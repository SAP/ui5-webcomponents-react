import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TableCell';
import { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TableCellPropTypes extends WithWebComponentPropTypes {
  /**
   * Specifies the content of the <code>ui5-table-cell</code>.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TableCell" target="_blank">UI5 Web Components Playground</a>
 */
const TableCell: FC<TableCellPropTypes> = withWebComponent<TableCellPropTypes>('ui5-table-cell', [], [], [], []);

TableCell.displayName = 'TableCell';

TableCell.defaultProps = {};

export { TableCell };
