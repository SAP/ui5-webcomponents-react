import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5TableRow from '@ui5/webcomponents/dist/TableRow';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface TableRowPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the cells of the <code>ui5-table-row</code>. <br><br> <b>Note:</b> Use <code>ui5-table-cell</code> for the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <code>import { TableRow } from '@ui5/webcomponents-react/lib/TableRow';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TableRow" target="_blank">UI5 Web Components Playground</a>
 */
const TableRow: FC<TableRowPropTypes> = withWebComponent<TableRowPropTypes>(UI5TableRow);

TableRow.displayName = 'TableRow';

TableRow.defaultProps = {};

export { TableRow };
