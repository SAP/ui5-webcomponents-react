import { withWebComponent, WithWebComponentPropTypes } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Table';
import { FC, ReactNode } from 'react';

export interface TablePropTypes extends WithWebComponentPropTypes {
  /**
   * Defines the text that will be displayed when there is no data and <code>showNoData</code> is present.
   */
  noDataText?: string;
  /**
   * Defines if the value of <code>noDataText</code> will be diplayed when there is no rows present in the table.
   */
  showNoData?: boolean;
  /**
   * Determines whether the column headers remain fixed at the top of the page during vertical scrolling as long as the Web Component is in the viewport. <br><br> <b>Limitations:</b> <ul> <li>Browsers that do not support this feature: <ul> <li>Internet Explorer</li> <li>Microsoft Edge lower than version 41 (EdgeHTML 16)</li> <li>Mozilla Firefox lower than version 59</li> </ul> </li> <li>Scrolling behavior: <ul> <li>If the Web Component is placed in layout containers that have the <code>overflow: hidden</code> or <code>overflow: auto</code> style definition, this can prevent the sticky elements of the Web Component from becoming fixed at the top of the viewport.</li> </ul> </li> </ul>
   */
  stickyColumnHeader?: boolean;
  /**
   * Defines the configuration for the columns of the <code>Table</code>. <br><br> <b>Note:</b> Use <code>Table-column</code> for the intended design.
   */
  columns?: ReactNode | ReactNode[];
  /**
   * Defines the <code>Table</code> rows. <br><br> <b>Note:</b> Use <code>Table-row</code> for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the <code>TableColumn</code> is shown as a pop-in instead of hiding it.
   */
  onPopinChange?: (event: CustomEvent<{ poppedColumns: unknown[] }>) => void;
  /**
   * Fired when a row is clicked.
   */
  onRowClick?: (event: CustomEvent<{ row: ReactNode }>) => void;
}

/**
 * The <code>Table</code> component provides a set of sophisticated and convenient functions for responsive table design.
 It provides a comprehensive set of features for displaying and dealing with vast amounts of data. <br /><br />
 To render the <code>Table</code> properly, the order of the <code>columns</code> should match with the order of the item
 <code>cells</code> in the <code>rows</code>. <br /><br />
 Desktop and tablet devices are supported. On tablets, special consideration should be given to the number of visible
 columns and rows due to the limited performance of some devices.

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
