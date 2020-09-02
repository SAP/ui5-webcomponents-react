import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import { FC, ReactNode } from 'react';

export interface TableRowPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the cells of the <code>ui5-table-row</code>. <br><br> <b>Note:</b> Use <code>ui5-table-cell</code> for the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TableRow" target="_blank">UI5 Web Components Playground</a>
 */
const TableRow: FC<TableRowPropTypes> = withWebComponent<TableRowPropTypes>(
  'ui5-table-row',
  () => import('@ui5/webcomponents/dist/TableRow'),
  [],
  [],
  [],
  []
);

TableRow.displayName = 'TableRow';

TableRow.defaultProps = {};

export { TableRow };
