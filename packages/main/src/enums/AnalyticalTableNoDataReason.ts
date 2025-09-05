/**
 * Different reasons why the `NoDataComponent` is displayed.
 */
export enum AnalyticalTableNoDataReason {
  /*
   * No data was passed to the table.
   */
  Empty = 'Empty',
  /*
   * No results match the applied filters.
   */
  Filtered = 'Filtered',
}
