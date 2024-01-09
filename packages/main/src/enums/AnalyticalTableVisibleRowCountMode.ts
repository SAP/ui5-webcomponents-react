/**
 * Defines how the AnalyticalTable will render visible rows.
 *
 * __Note:__ When `"Auto"` is enabled, we recommend to use a fixed height for the outer container.
 */
export enum AnalyticalTableVisibleRowCountMode {
  /**
   * The number of visible rows displayed is defined by the `visibleRows` prop. If the prop is not set, 15 rows will be shown.
   */
  Fixed = 'Fixed',
  /**
   * The number of visible rows displayed depends on the height of the surrounding container.
   *
   * __Note:__ It's recommended to use a fixed height for the outer container.
   *
   * __Note:__ When this is active, `visibleRows` prop has no effect.
   */
  Auto = 'Auto',
  /**
   * The number of rows displayed depends on the height of the surrounding container, if not enough visible rows are available, empty rows are displayed.
   *
   * __Note:__ It's recommended to use a fixed height for the outer container.
   *
   * __Note:__ When this is active, `visibleRows` prop has no effect.
   *
   * @since 1.24.0
   */
  AutoWithEmptyRows = 'AutoWithEmptyRows',
  /**
   * Adds a resizer to the bottom of the table to dynamically add or remove visible rows.
   * The initial number of rows is defined by the `visibleRows` prop.
   */
  Interactive = 'Interactive'
}
