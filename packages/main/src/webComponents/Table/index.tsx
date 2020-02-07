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

/**
 * <code>import { Table } from '@ui5/webcomponents-react/lib/Table';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Table" target="_blank">UI5 Web Components Playground</a>
 */
const Table: FC<TablePropTypes> = withWebComponent<TablePropTypes>(UI5Table);

Table.displayName = 'Table';

export { Table };
