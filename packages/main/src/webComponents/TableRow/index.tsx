import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TableRow';
import { FC } from 'react';
import { ReactNode } from 'react';

export interface TableRowPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the cells of the <code>TableRow</code>. <br><br> <b>Note:</b> Use <code>TableCell</code> for the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
     * The <code>TableRow</code> component represents a row in the <code>Table</code>
     
     * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TableRow" target="_blank">UI5 Web Components Playground</a>
     */
const TableRow: FC<TableRowPropTypes> = withWebComponent<TableRowPropTypes>('ui5-table-row', [], [], [], []);

TableRow.displayName = 'TableRow';

TableRow.defaultProps = {};

export { TableRow };
