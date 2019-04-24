import React, { FC, ReactNode } from 'react';

// @ts-ignore
import UI5TableRow from '@ui5/webcomponents/dist/TableRow';
import { withWebComponent } from '../../internal/withWebComponent';

export interface TableRowPropTypes {
  cells?: ReactNode | ReactNode[];
}

const TableRow: FC<TableRowPropTypes> = withWebComponent<TableRowPropTypes>(UI5TableRow);

export { TableRow };
