/**
 * @deprecated please use AnalyticalTableSelectionMode instead.
 */
export enum TableSelectionMode {
  /**
   * The rows are not selectable.
   */
  None = 'None',
  /**
   * Only a single row is selectable. Clicking on another row will unselect the previously selected row.
   */
  SingleSelect = 'SingleSelect',
  /**
   * Multiple rows are selectable.
   */
  MultiSelect = 'MultiSelect'
}
