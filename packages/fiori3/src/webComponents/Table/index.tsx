import UI5Table from '@ui5/webcomponents/dist/Table';
import React, { FC, ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent';

export interface TablePropTypes {
  showNoData?: boolean; // @generated
  noDataText?: string; // @generated
  stickyColumnHeader?: boolean;
  rows?: ReactNode | ReactNode[];
  columns?: ReactNode | ReactNode[];
}

const Table: FC<TablePropTypes> = withWebComponent<TablePropTypes>(UI5Table);

Table.displayName = 'Table';

export { Table };
