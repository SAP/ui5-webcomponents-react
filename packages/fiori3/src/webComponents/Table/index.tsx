import UI5Table from '@ui5/webcomponents/dist/Table';
import React, { FC, ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent';

export interface TablePropTypes {
  stickyColumnHeader?: boolean;
  rows?: ReactNode | ReactNode[];
  columns?: ReactNode | ReactNode[];
}

const Table: FC<TablePropTypes> = withWebComponent<TablePropTypes>(UI5Table);

export { Table };
