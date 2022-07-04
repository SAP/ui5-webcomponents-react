// Generated file - do not change manually!

/**
 * Defines the type of <code>List</code>.
 */
export enum ListMode {
  /**
   * Delete mode (only one list item can be deleted via provided delete button)
   */
  Delete = 'Delete',

  /**
   * Multi selection mode (more than one list item can be selected).
   */
  MultiSelect = 'MultiSelect',

  /**
   * Default mode (no selection).
   */
  None = 'None',

  /**
   * Right-positioned single selection mode (only one list item can be selected).
   */
  SingleSelect = 'SingleSelect',

  /**
   * Selected item is highlighted and selection is changed upon arrow navigation (only one list item can be selected - this is always the focused item).
   */
  SingleSelectAuto = 'SingleSelectAuto',

  /**
   * Left-positioned single selection mode (only one list item can be selected).
   */
  SingleSelectBegin = 'SingleSelectBegin',

  /**
   * Selected item is highlighted but no selection element is visible (only one list item can be selected).
   */
  SingleSelectEnd = 'SingleSelectEnd'
}
