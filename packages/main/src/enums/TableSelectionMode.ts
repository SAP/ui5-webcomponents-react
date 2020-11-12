export enum TableSelectionMode {
  /**
   * The rows are not selectable.
   */
  NONE = 'None',
  /**
   * Only a single row is selectable. Clicking on another row will unselect the previously selected row.
   */
  SINGLE_SELECT = 'SingleSelect',
  /**
   * Multiple rows are selectable.
   */
  MULTI_SELECT = 'MultiSelect'
}
