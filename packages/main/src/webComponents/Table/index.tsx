import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Table';
import { FC, ReactNode } from 'react';

export interface TablePropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the text that will be displayed when there is no data and `showNoData` is present.
   */
  noDataText?: string;
  /**
   * Defines if the value of `noDataText` will be diplayed when there is no rows present in the table.
   */
  showNoData?: boolean;
  /**
   * Determines whether the column headers remain fixed at the top of the page during vertical scrolling as long as the Web Component is in the viewport.
   *
   * **Limitations:**
   *
   * *   Browsers that do not support this feature:
   *     *   Internet Explorer
   *     *   Microsoft Edge lower than version 41 (EdgeHTML 16)
   *     *   Mozilla Firefox lower than version 59
   * *   Scrolling behavior:
   *     *   If the Web Component is placed in layout containers that have the `overflow: hidden` or `overflow: auto` style definition, this can prevent the sticky elements of the Web Component from becoming fixed at the top of the viewport.
   */
  stickyColumnHeader?: boolean;
  /**
   * Defines the configuration for the columns of the `Table`.
   *
   * **Note:** Use `TableColumn` for the intended design.
   */
  columns?: ReactNode | ReactNode[];
  /**
   * Defines the `Table` rows.
   *
   * **Note:** Use `TableRow` for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the `TableColumn` is shown as a pop-in instead of hiding it.
   */
  onPopinChange?: (event: CustomEvent<{ poppedColumns: unknown[] }>) => void;
  /**
   * Fired when a row is clicked.
   */
  onRowClick?: (event: CustomEvent<{ row: ReactNode }>) => void;
}

/**
 * The `Table` component provides a set of sophisticated and convenient functions for responsive table design. It provides a comprehensive set of features for displaying and dealing with vast amounts of data.
 *
 * To render the `Table` properly, the order of the `columns` should match with the order of the item `cells` in the `rows`.
 *
 * Desktop and tablet devices are supported. On tablets, special consideration should be given to the number of visible columns and rows due to the limited performance of some devices.
 *
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Table" target="_blank">UI5 Web Components Playground</a>
 */
const Table: FC<TablePropTypes> = withWebComponent<TablePropTypes>(
  'ui5-table',
  ['noDataText'],
  ['showNoData', 'stickyColumnHeader'],
  ['columns'],
  ['popin-change', 'row-click']
);

Table.displayName = 'Table';

Table.defaultProps = {
  showNoData: false,
  stickyColumnHeader: false
};

export { Table };
