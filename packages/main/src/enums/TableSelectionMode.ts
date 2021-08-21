export enum TableSelectionMode {
  /**
   * The rows are not selectable.
   * @deprecated Please use `TableSelectionMode.None` instead.
   */
  NONE = 'NONE',
  /**
   * Only a single row is selectable. Clicking on another row will unselect the previously selected row.
   * @deprecated Please use `TableSelectionMode.SingleSelect` instead.
   */
  SINGLE_SELECT = 'SINGLE_SELECT',
  /**
   * Multiple rows are selectable.
   * @deprecated Please use `TableSelectionMode.MultiSelect` instead.
   */
  MULTI_SELECT = 'MULTI_SELECT',

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
