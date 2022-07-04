// Generated file - do not change manually!

/**
 * FCLLayout
 */
export enum FCLLayout {
  /**
   * Desktop: -/-/100 only the End column is displayed Tablet: -/-/100 only the End column is displayed Phone: -/-/100 only the End column is displayed
   *
   * Use to display a detail-detail page only, when the user should focus entirely on it.
   */
  EndColumnFullScreen = 'EndColumnFullScreen',

  /**
   * Desktop: -/100/- only the Mid column is displayed Tablet: -/100/- only the Mid column is displayed Phone: -/100/- only the Mid column is displayed
   *
   * Use to display a detail page only, when the user should focus entirely on it.
   */
  MidColumnFullScreen = 'MidColumnFullScreen',

  /**
   * The layout will display 1 column.
   */
  OneColumn = 'OneColumn',

  /**
   * Desktop: 25/25/50 Start, Mid and End (expanded) columns are displayed Tablet: 0/33/67 Mid and End (expanded) columns are displayed, Start is accessible by layout arrows Phone: -/-/100 (only the End column is displayed)
   *
   * Use to display all three pages (list, detail, detail-detail) when the user should focus on the detail-detail.
   */
  ThreeColumnsEndExpanded = 'ThreeColumnsEndExpanded',

  /**
   * Desktop: 25/50/25 Start, Mid (expanded) and End columns are displayed Tablet: 0/67/33 Mid (expanded) and End columns are displayed, Start is accessible by a layout arrow Phone: -/-/100 only the End column is displayed
   *
   * Use to display all three pages (list, detail, detail-detail) when the user should focus on the detail.
   */
  ThreeColumnsMidExpanded = 'ThreeColumnsMidExpanded',

  /**
   * Desktop: 33/67/0 Start and Mid (expanded) columns are displayed, End is accessible by a layout arrow Tablet: 33/67/0 Start and Mid (expanded) columns are displayed, End is accessible by a layout arrow Phone: -/-/100 only the End column is displayed
   *
   * Use to display the list and detail pages when the user should focus on the detail. The detail-detail is still loaded and easily accessible with a layout arrow.
   */
  ThreeColumnsMidExpandedEndHidden = 'ThreeColumnsMidExpandedEndHidden',

  /**
   * Desktop: 67/33/0 Start (expanded) and Mid columns are displayed, End is accessible by layout arrows Tablet: 67/33/0 Start (expanded) and Mid columns are displayed, End is accessible by layout arrows Phone: -/-/100 only the End column is displayed
   *
   * Use to display the list and detail pages when the user should focus on the list. The detail-detail is still loaded and easily accessible with layout arrows.
   */
  ThreeColumnsStartExpandedEndHidden = 'ThreeColumnsStartExpandedEndHidden',

  /**
   * Desktop: 33/67/- Start and Mid (expanded) columns are displayed Tablet: 33/67/- Start and Mid (expanded) columns are displayed Phone: -/100/- only the Mid column is displayed
   *
   * Use to display both a list and a detail page when the user should focus on the detail page.
   */
  TwoColumnsMidExpanded = 'TwoColumnsMidExpanded',

  /**
   * Desktop: 67/33/- Start (expanded) and Mid columns are displayed Tablet: 67/33/- Start (expanded) and Mid columns are displayed Phone: -/100/- only the Mid column is displayed
   *
   * Use to display both a list and a detail page when the user should focus on the list page.
   */
  TwoColumnsStartExpanded = 'TwoColumnsStartExpanded'
}
