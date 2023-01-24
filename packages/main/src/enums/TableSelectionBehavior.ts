/**
 * @deprecated please use AnalyticalTableSelectionBehavior instead.
 */
export enum TableSelectionBehavior {
  /**
   * A selection column is rendered along with the normal columns. The whole row is selectable.
   */
  Row = 'Row',
  /**
   * No selection column is rendered along with the normal columns. The whole row is selectable.
   */
  RowOnly = 'RowOnly',
  /**
   * The row is only selectable by clicking on the corresponding field in the selection column.
   */
  RowSelector = 'RowSelector'
}
