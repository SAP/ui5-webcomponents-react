import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5TableRow from '@ui5/webcomponents/dist/TableRow';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TableRowPropTypes extends WithWebComponentPropTypes {
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';</code>
 */
const TableRow: FC<TableRowPropTypes> = withWebComponent<TableRowPropTypes>(UI5TableRow);

TableRow.displayName = 'TableRow';

export { TableRow };
