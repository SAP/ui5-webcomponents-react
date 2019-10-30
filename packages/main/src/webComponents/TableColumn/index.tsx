import UI5TableColumn from '@ui5/webcomponents/dist/TableColumn';
import React, { CSSProperties, FC, ReactNode } from 'react';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TableColumnPropTypes extends WithWebComponentPropTypes {
  minWidth?: number; // @generated
  popinText?: string; // @generated
  demandPopin?: boolean; // @generated
  children?: ReactNode; // @generated
}

const TableColumn: FC<TableColumnPropTypes> = withWebComponent<TableColumnPropTypes>(UI5TableColumn);

TableColumn.displayName = 'TableColumn';

TableColumn.defaultProps = {
  minWidth: null // @generated
};

export { TableColumn };
