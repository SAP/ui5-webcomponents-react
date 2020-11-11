export enum TableSelectionBehavior {
  /**
   * A selection column is rendered along with the normal columns. The whole row is selectable.
   */
  ROW = 'Row',
  /**
   * No selection column is rendered along with the normal columns. The whole row is selectable.
   */
  ROW_ONLY = 'RowOnly',
  /**
   * The row is only selectable by clicking on the corresponding field in the selection column.
   */
  ROW_SELECTOR = 'RowSelector'
}
