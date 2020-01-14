import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5Table from '@ui5/webcomponents/dist/Table';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TablePropTypes extends WithWebComponentPropTypes {
  showNoData?: boolean; // @generated
  noDataText?: string; // @generated
  stickyColumnHeader?: boolean;
  children?: ReactNode | ReactNode[];
  columns?: ReactNode | ReactNode[];
}

const Table: FC<TablePropTypes> = withWebComponent<TablePropTypes>(UI5Table);

Table.displayName = 'Table';

export { Table };
