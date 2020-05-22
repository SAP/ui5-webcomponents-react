import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Table';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

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
   * Defines the configuration for the columns of the <code>ui5-table</code>. <br><br> <b>Note:</b> Use <code>ui5-table-column</code> for the intended design.
   */
  columns?: ReactNode | ReactNode[];
  /**
   * Defines the <code>ui5-table</code> rows. <br><br> <b>Note:</b> Use <code>ui5-table-row</code> for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the <code>ui5-table-column</code> is shown as a pop-in instead of hiding it.
   */
  onPopinChange?: (event: CustomEvent<{ poppedColumns: unknown[] }>) => void;
  /**
   * Fired when a row is clicked.
   */
  onRowClick?: (event: CustomEvent<{ row: ReactNode }>) => void;
}

/**
 * <code>import { Table } from '@ui5/webcomponents-react/lib/Table';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Table" target="_blank">UI5 Web Components Playground</a>
 */
const Table: FC<TablePropTypes> = withWebComponent<TablePropTypes>(
  'ui5-table',
  ['noDataText'],
  ['showNoData', 'stickyColumnHeader'],
  ['columns'],
  ['popinChange', 'rowClick']
);

Table.displayName = 'Table';

Table.defaultProps = {
  showNoData: false,
  stickyColumnHeader: false
};

export { Table };
