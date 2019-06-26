import UI5TableRow from '@ui5/webcomponents/dist/TableRow';
import React, { FC, ReactNode } from 'react';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TableRowPropTypes extends WithWebComponentPropTypes {
  children?: ReactNode | ReactNode[];
}

const TableRow: FC<TableRowPropTypes> = withWebComponent<TableRowPropTypes>(UI5TableRow);

TableRow.displayName = 'TableRow';

export { TableRow };
