import { TableGrowingMode } from '@ui5/webcomponents-react/dist/TableGrowingMode';
import { TableMode } from '@ui5/webcomponents-react/dist/TableMode';
import { withWebComponent } from '@ui5/webcomponents-react/dist/withWebComponent';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { Ui5CustomEvent } from '@ui5/webcomponents-react/interfaces/Ui5CustomEvent';
import { ReactNode } from 'react';

import '@ui5/webcomponents/dist/Table.js';

export interface TablePropTypes extends CommonProps {
  /**
   * Defines if the table is in busy state. **In this state the component's opacity is reduced and busy indicator is displayed at the bottom of the table.**
   */
  busy?: boolean;
  /**
   * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
   */
  busyDelay?: number;
  /**
   * Defines whether the table will have growing capability either by pressing a `More` button, or via user scroll. In both cases `load-more` event is fired.
   *
   * Available options:
   *
   * `Button` - Shows a `More` button at the bottom of the table, pressing of which triggers the `load-more` event.
   * `Scroll` - The `load-more` event is triggered when the user scrolls to the bottom of the table;
   * `None` (default) - The growing is off.
   *
   * **Limitations:** `growing="Scroll"` is not supported for Internet Explorer, and the component will fallback to `growing="Button"`.
   */
  growing?: TableGrowingMode | keyof typeof TableGrowingMode;
  /**
   * Defines the subtext that will be displayed under the `growingButtonText`.
   *
   * **Note:** This property takes effect if `growing` is set to `Button`.
   */
  growingButtonSubtext?: string;
  /**
   * Defines the text that will be displayed inside the growing button at the bottom of the table, meant for loading more rows upon press.
   *
   * **Note:** If not specified a built-in text will be displayed.
   * **Note:** This property takes effect if `growing` is set to `Button`.
   */
  growingButtonText?: string;
  /**
   * Defines if the value of `noDataText` will be diplayed when there is no rows present in the table.
   */
  hideNoData?: boolean;
  /**
   * Defines the mode of the component.
   *
   * Available options are:
   *
   * *   `MultiSelect`
   * *   `SingleSelect`
   * *   `None`
   */
  mode?: TableMode | keyof typeof TableMode;
  /**
   * Defines the text that will be displayed when there is no data and `hideNoData` is not present.
   */
  noDataText?: string;
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
   * Defines the configuration for the columns of the component.
   *
   * **Note:** Use `TableColumn` for the intended design.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base--page#adding-custom-components-to-slots).
   */
  columns?: ReactNode | ReactNode[];
  /**
   * Defines the component rows.
   *
   * **Note:** Use `TableRow` for the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the user presses the `More` button or scrolls to the table's end.
   *
   * **Note:** The event will be fired if `growing` is set to `Button` or `Scroll`.
   */
  onLoadMore?: (event: Ui5CustomEvent<HTMLElement>) => void;
  /**
   * Fired when `TableColumn` is shown as a pop-in instead of hiding it.
   */
  onPopinChange?: (event: Ui5CustomEvent<HTMLElement, { poppedColumns: unknown[] }>) => void;
  /**
   * Fired when a row in `Active` mode is clicked or `Enter` key is pressed.
   */
  onRowClick?: (event: Ui5CustomEvent<HTMLElement, { row: ReactNode }>) => void;
  /**
   * Fired when selection is changed by user interaction in `SingleSelect` and `MultiSelect` modes.
   */
  onSelectionChange?: (
    event: Ui5CustomEvent<HTMLElement, { selectedRows: unknown[]; previouslySelectedRows: unknown[] }>
  ) => void;
}

/**
 * The `Table` component provides a set of sophisticated and convenient functions for responsive table design. It provides a comprehensive set of features for displaying and dealing with vast amounts of data.
 *
 * To render the `Table` properly, the order of the `columns` should match with the order of the item `cells` in the `rows`.
 *
 * Desktop and tablet devices are supported. On tablets, special consideration should be given to the number of visible columns and rows due to the limited performance of some devices.
 *
 * <ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Table" target="_blank">UI5 Web Components Playground</ui5-link>
 */
const Table = withWebComponent<TablePropTypes>(
  'ui5-table',
  ['busyDelay', 'growing', 'growingButtonSubtext', 'growingButtonText', 'mode', 'noDataText'],
  ['busy', 'hideNoData', 'stickyColumnHeader'],
  ['columns'],
  ['load-more', 'popin-change', 'row-click', 'selection-change']
);

Table.displayName = 'Table';

Table.defaultProps = {
  busyDelay: 1000,
  growing: TableGrowingMode.None,
  mode: TableMode.None
};

export { Table };
