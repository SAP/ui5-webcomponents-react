'use client';

import '@ui5/webcomponents-compat/dist/Table.js';
import type {
  TablePopinChangeEventDetail,
  TableSelectionChangeEventDetail
} from '@ui5/webcomponents-compat/dist/Table.js';
import type { TableRowClickEventDetail } from '@ui5/webcomponents-compat/dist/TableRow.js';
import type TableGrowingMode from '@ui5/webcomponents-compat/dist/types/TableGrowingMode.js';
import type TableMode from '@ui5/webcomponents-compat/dist/types/TableMode.js';
import { withWebComponent } from '@ui5/webcomponents-react';
import type { CommonProps, Ui5CustomEvent, Ui5DomRef, UI5WCSlotsNode } from '@ui5/webcomponents-react';
import type { ReactNode } from 'react';

interface TableAttributes {
  /**
   * Defines the accessible ARIA name of the component.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   * @default undefined
   */
  accessibleName?: string | undefined;

  /**
   * Receives id(or many ids) of the elements that label the component.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   * @default undefined
   */
  accessibleNameRef?: string | undefined;

  /**
   * Defines if the table is in busy state.
   *
   * In this state the component's opacity is reduced
   * and busy indicator is displayed at the bottom of the table.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   * @default false
   */
  busy?: boolean;

  /**
   * Defines the delay in milliseconds, after which the busy indicator will show up for this component.
   * @default 1000
   */
  busyDelay?: number;

  /**
   * Defines whether the table will have growing capability either by pressing a `More` button,
   * or via user scroll. In both cases `load-more` event is fired.
   *
   * Available options:
   *
   * `Button` - Shows a `More` button at the bottom of the table, pressing of which triggers the `load-more` event.
   *
   * `Scroll` - The `load-more` event is triggered when the user scrolls to the bottom of the table;
   *
   * `None` (default) - The growing is off.
   *
   * **Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,
   * and the component will fallback to `growing="Button"`.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   * @default "None"
   */
  growing?: TableGrowingMode | keyof typeof TableGrowingMode;

  /**
   * Defines the subtext that will be displayed under the `growingButtonText`.
   *
   * **Note:** This property takes effect if `growing` is set to `Button`.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   * @default undefined
   */
  growingButtonSubtext?: string | undefined;

  /**
   * Defines the text that will be displayed inside the growing button at the bottom of the table,
   * meant for loading more rows upon press.
   *
   * **Note:** If not specified a built-in text will be displayed.
   *
   * **Note:** This property takes effect if `growing` is set to `Button`.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   * @default undefined
   */
  growingButtonText?: string | undefined;

  /**
   * Defines if the value of `noDataText` will be diplayed when there is no rows present in the table.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   * @default false
   */
  hideNoData?: boolean;

  /**
   * Defines the mode of the component.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   * @default "None"
   */
  mode?: TableMode | keyof typeof TableMode;

  /**
   * Defines the text that will be displayed when there is no data and `hideNoData` is not present.
   * @default undefined
   */
  noDataText?: string | undefined;

  /**
   * Determines whether the column headers remain fixed at the top of the page during
   * vertical scrolling as long as the Web Component is in the viewport.
   *
   * **Restrictions:**
   *
   * - Browsers that do not support this feature:
   *
   * - Internet Explorer
   * - Microsoft Edge lower than version 41 (EdgeHTML 16)
   * - Mozilla Firefox lower than version 59
   *
   * - Scrolling behavior:
   *
   * - If the Web Component is placed in layout containers that have the `overflow: hidden`
   * or `overflow: auto` style definition, this can
   * prevent the sticky elements of the Web Component from becoming fixed at the top of the viewport.
   * @default false
   */
  stickyColumnHeader?: boolean;
}

interface TableDomRef extends Required<TableAttributes>, Ui5DomRef {}

interface TablePropTypes
  extends TableAttributes,
    Omit<
      CommonProps,
      | keyof TableAttributes
      | 'children'
      | 'columns'
      | 'onLoadMore'
      | 'onPopinChange'
      | 'onRowClick'
      | 'onSelectionChange'
    > {
  /**
   * Defines the component rows.
   *
   * **Note:** Use `TableRow` for the intended design.
   */
  children?: ReactNode | ReactNode[];

  /**
   * Defines the configuration for the columns of the component.
   *
   * **Note:** Use `TableColumn` for the intended design.
   *
   * __Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot="columns"`).
   * Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.
   *
   * __Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.
   * Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).
   */
  columns?: UI5WCSlotsNode;
  /**
   * Fired when the user presses the `More` button or scrolls to the table's end.
   *
   * **Note:** The event will be fired if `growing` is set to `Button` or `Scroll`.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   */
  onLoadMore?: (event: Ui5CustomEvent<TableDomRef>) => void;

  /**
   * Fired when `TableColumn` is shown as a pop-in instead of hiding it.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   */
  onPopinChange?: (event: Ui5CustomEvent<TableDomRef, TablePopinChangeEventDetail>) => void;

  /**
   * Fired when a row in `Active` mode is clicked or `Enter` key is pressed.
   */
  onRowClick?: (event: Ui5CustomEvent<TableDomRef, TableRowClickEventDetail>) => void;

  /**
   * Fired when selection is changed by user interaction
   * in `SingleSelect` and `MultiSelect` modes.
   *
   * **Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.
   */
  onSelectionChange?: (event: Ui5CustomEvent<TableDomRef, TableSelectionChangeEventDetail>) => void;
}

/**
 * The `Table` component provides a set of sophisticated and convenient functions for responsive table design.
 * It provides a comprehensive set of features for displaying and dealing with vast amounts of data.
 *
 * To render the `Table` properly, the order of the `columns` should match with the
 * order of the item `cells` in the `rows`.
 *
 * Desktop and tablet devices are supported.
 * On tablets, special consideration should be given to the number of visible columns
 * and rows due to the limited performance of some devices.
 *
 * ### Selection
 * To benefit from the selection mechanism of `Table` component, you can use the available selection modes:
 * `SingleSelect` and `MultiSelect`.
 *
 * In additition to the used mode, you can also specify the `TableRow` type choosing between
 * `Active` or `Inactive`.
 *
 * In `SingleSelect` mode, you can select both an `Active` and `Inactive` row via mouse or
 * by pressing the `Space` or `Enter` keys.
 *
 * In `MultiSelect` mode, you can select both an `Active` and `Inactive` row by pressing the
 * `Space` key when a row is on focus or via mouse click over the selection checkbox of the row.
 * In order to select all the available rows at once, you can use the selection checkbox presented in the table's header.
 *
 * **Note:** Currently, when a column is shown as a pop-in, the visual indication for selection is not presented over it.
 *
 * ### Keyboard Handling
 *
 * #### Fast Navigation
 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
 * In order to use this functionality, you need to import the following module:
 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
 *
 * Furthermore, you can interact with `Table` via the following keys.
 *
 * - [F7] - If focus is on an interactive control inside an item, moves focus to the corresponding item.
 * - [Ctrl]+[A] - Selects all items, if MultiSelect mode is enabled.
 * - [Home]/[End] - Focuses the first/last item.
 * - [Page Up]/[Page Down] - Moves focus up/down by page size (20 items by default).
 * - [Alt]+[Down]/[Up] - Switches focus between header, last focused item, and More button (if applies) in either direction.
 * - [Shift]+[Down]/[Up] - Selects the next/previous item in a MultiSelect table, if the current item is selected (Range selection). Otherwise, deselects them (Range deselection).
 * - [Shift]+[Home]/[End] - Range selection to the first/last item of the List.
 * - [Ctrl]+[Home]/[End] - Same behavior as HOME & END.
 *
 * ### ES6 Module Import
 *
 * - `import "@ui5/webcomponents-compat/dist/Table.js";`
 * - `import "@ui5/webcomponents-compat/dist/TableColumn.js";` (`TableColumn`)
 * - `import "@ui5/webcomponents-compat/dist/TableRow.js";` (`TableRow`)
 * - `import "@ui5/webcomponents-compat/dist/TableGroupRow.js";` (`TableGroupRow`)
 * - `import "@ui5/webcomponents-compat/dist/TableCell.js";` (`TableCell`)
 *
 * __Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)
 */
const Table = withWebComponent<TablePropTypes, TableDomRef>(
  'ui5-table',
  [
    'accessibleName',
    'accessibleNameRef',
    'busyDelay',
    'growing',
    'growingButtonSubtext',
    'growingButtonText',
    'mode',
    'noDataText'
  ],
  ['busy', 'hideNoData', 'stickyColumnHeader'],
  ['columns'],
  ['load-more', 'popin-change', 'row-click', 'selection-change']
);

Table.displayName = 'Table';

export { Table };
export type { TableDomRef, TablePropTypes };
