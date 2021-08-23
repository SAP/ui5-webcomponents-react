export enum TableSelectionBehavior {
  /**
   * A selection column is rendered along with the normal columns. The whole row is selectable.
   * @deprecated Please use `TableSelectionBehavior.Row` instead.
   */
  ROW = 'ROW',
  /**
   * No selection column is rendered along with the normal columns. The whole row is selectable.
   * @deprecated Please use `TableSelectionBehavior.RowOnly` instead.
   */
  ROW_ONLY = 'ROW_ONLY',
  /**
   * The row is only selectable by clicking on the corresponding field in the selection column.
   * @deprecated Please use `TableSelectionBehavior.RowSelector` instead.
   */
  ROW_SELECTOR = 'ROW_SELECTOR',

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
