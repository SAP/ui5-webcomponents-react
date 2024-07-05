'use client';

import '@ui5/webcomponents/dist/Table.js';
import type { TableRowClickEventDetail } from '@ui5/webcomponents/dist/Table.js';
import type TableOverflowMode from '@ui5/webcomponents/dist/types/TableOverflowMode.js';
import type { ReactNode } from 'react';
import { withWebComponent } from '../../internal/withWebComponent.js';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '../../types/index.js';

interface TableAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Identifies the element (or elements) that labels the component.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines if the loading indicator should be shown.
   *
   * <b>Note:</b> When the component is loading, it is non-interactive.
   * @default false
   */
  loading?: boolean;

  /**
   * Defines the delay in milliseconds, after which the loading indicator will show up for this component.
   * @default 1000
   */
  loadingDelay?: number;

  /**
   * Defines the text to be displayed when there are no rows in the component.
   * @default undefined
   */
  noDataText?: string | undefined;

  /**
   * Defines the mode of the <code>ui5-table</code> overflow behavior.
   *
   * Available options are:
   *
   * <code>Scroll</code> - Columns are shown as regular columns and horizontal scrolling is enabled.
   *
   * <code>Popin</code> - Columns are shown as pop-ins instead of regular columns.
   * @default "Scroll"
   */
  overflowMode?: TableOverflowMode | keyof typeof TableOverflowMode;
}

interface TableDomRef extends Required<TableAttributes>, Ui5DomRef {}

interface TablePropTypes
  extends TableAttributes,
    Omit<CommonProps, keyof TableAttributes | 'children' | 'features' | 'headerRow' | 'nodata' | 'onRowClick'> {
  /**
   * Defines the rows of the component.
   *
   * Note: Use <code>ui5-table-row</code> for the intended design.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the features of the component.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="features"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  features?: UI5WCSlotsNode;

  /**
   * Defines the header row of the component.
   *
   * Note: Use <code>ui5-table-header-row</code> for the intended design.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="headerRow"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  headerRow?: UI5WCSlotsNode;

  /**
   * Defines the custom visualization if there is no data available.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="nodata"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).
   */
  nodata?: UI5WCSlotsNode;
  /**
   * Fired when an interactive row is clicked.
   */
  onRowClick?: (event: Ui5CustomEvent<TableDomRef, TableRowClickEventDetail>) => void;
}

/**
 * The `Table` component provides a set of sophisticated features for displaying and dealing with vast amounts of data in a responsive manner.
 * To render the `Table`, you need to define the columns and rows. You can use the provided `TableHeaderRow` and `TableRow` components for this purpose.
 *
 * ### Features
 *
 * The `Table` can be enhanced in its functionalities by applying different features.
 * Features can be slotted into the `features` slot, to enable them in the component.
 * Features need to be imported separately, as they are not enabled by default.
 *
 * The following features are currently available:
 *
 * * [TableSelection](../TableSelection) - adds selection capabilities to the table
 * * [TableGrowing](../TableGrowing) - provides growing capabilities to load more data
 *
 * ### Keyboard Handling
 *
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * Furthermore, you can interact with `Table` via the following keys:
 *
 * If the focus is on a row, the following keyboard shortcuts are available:
 * * <kbd>Down</kbd> - Navigates down
 * * <kbd>Up</kbd> - Navigates up
 * * <kbd>Right</kbd> - Selects the first cell of the row
 * * <kbd>Space</kbd> - Toggles the selection of the row
 * * <kbd>Ctrl/Cmd + A</kbd> - In multi selection mode, toggles the selection of all rows
 * * <kbd>Home</kbd> - Navigates to the first row, if the focus is on the first row, navigates to the header row
 * * <kbd>End</kbd> - Navigates to the last row, if the focus is on the last row, navigates to the growing button
 * * <kbd>Page Up</kbd> - Navigates one page up, if the focus is on the first row, navigates to the header row
 * * <kbd>Page Down</kbd> - Navigates one page down, if the focus is on the last row, navigates to the growing button
 * * <kbd>F2</kbd> - Focuses the first tabbable element in the row
 * * <kbd>F7</kbd> - If focus position is remembered, moves focus to the corresponding focus position row, otherwise to the first tabbable element within the row
 * * <kbd>[Shift]Tab</kbd> - Move focus to the element in the tab chain outside the table
 *
 *
 * If the focus is on a cell, the following keyboard shortcuts are available:
 * * <kbd>Down</kbd> - Navigates down
 * * <kbd>Up</kbd> - Navigates up
 * * <kbd>Right</kbd> - Navigates right
 * * <kbd>Left</kbd> - Navigates left, if the focus is on the first cell of the row, the focus is moved to the row.
 * * <kbd>Home</kbd> - Navigates to the first cell of the current row, if the focus is on the first cell, navigates to the corresponding row
 * * <kbd>End</kbd> - Navigates to the last cell of the current row, if the focus is on the last cell, navigates to the corresponding row
 * * <kbd>Page Up</kbd> - Navigates one page up while keeping the focus in same column
 * * <kbd>Page Down</kbd> - Navigates one page down while keeping the focus in same column
 * * <kbd>F2</kbd> - Toggles the focus between the first tabbable cell content and the cell
 * * <kbd>Enter</kbd> - Focuses the first tabbable cell content
 * * <kbd>F7</kbd> - If the focus is on an interactive element inside a row, moves focus to the corresponding row and remembers the focus position of the element within the row
 * * <kbd>[Shift]Tab</kbd> - Move focus to the element in the tab chain outside the table
 *
 *
 * If the focus is on an interactive cell content, the following keyboard shortcuts are available:
 * * <kbd>Down</kbd> - Move the focus to the interactive element in the same column of the previous row, unless the focused element prevents the default
 * * <kbd>Up</kbd> - Move the focus to the interactive element in the same column of the next row, unless the focused element prevents the default
 * * <kbd>[Shift]Tab</kbd> - Move the focus to the element in the tab chain
 *
 * \
 * `import "@ui5/webcomponents/dist/TableRow.js";` (`TableRow`)\
 * `import "@ui5/webcomponents/dist/TableCell.js";` (`TableCell`)\
 * `import "@ui5/webcomponents/dist/TableHeaderRow.js";` (`TableHeaderRow`)\
 * `import "@ui5/webcomponents/dist/TableHeaderCell.js";` (`TableHeaderCell`)
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 *
 * @since [2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0) of __@ui5/webcomponents__.
 */
const Table = withWebComponent<TablePropTypes, TableDomRef>(
  'ui5-table',
  ['accessibleName', 'accessibleNameRef', 'loadingDelay', 'noDataText', 'overflowMode'],
  ['loading'],
  ['features', 'headerRow', 'nodata'],
  ['row-click'],
  () => import('@ui5/webcomponents/dist/Table.js')
);

Table.displayName = 'Table';

export { Table };
export type { TableDomRef, TablePropTypes };
