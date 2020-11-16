import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/TableRow';
import { FC, ReactNode } from 'react';

export interface TableRowPropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the cells of the `TableRow`.
   *
   * **Note:** Use `TableCell` for the intended design.
   */
  children?: ReactNode | ReactNode[];
}

/**
 * The `TableRow` component represents a row in the `Table`
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/TableRow" target="_blank">UI5 Web Components Playground</a>
 */
const TableRow: FC<TableRowPropTypes> = withWebComponent<TableRowPropTypes>('ui5-table-row', [], [], [], []);

TableRow.displayName = 'TableRow';

TableRow.defaultProps = {};

export { TableRow };
