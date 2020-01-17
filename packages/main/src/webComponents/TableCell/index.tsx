import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5TableCell from '@ui5/webcomponents/dist/TableCell';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TableCellPropTypes extends WithWebComponentPropTypes {
  content?: ReactNode | ReactNode[];
}

/**
 * <code>import { TableCell } from '@ui5/webcomponents-react/lib/TableCell';</code>
 */
const TableCell: FC<TableCellPropTypes> = withWebComponent<TableCellPropTypes>(UI5TableCell);

TableCell.displayName = 'TableCell';

export { TableCell };
