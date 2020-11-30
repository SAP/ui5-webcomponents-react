export enum TableVisibleRowCountMode {
  /**
   * The number of visible rows displayed is defined by the `visibleRows` prop. If the prop is not set, 15 rows will be shown.
   */
  FIXED = 'Fixed',
  /**
   * The number of visible rows displayed depends on the height of the surrounding container.
   *
   * --Note:__ It's recommended to use a fixed height for the outer container.
   * __Note:__ When this is active, `visibleRows` prop has no effect.
   */
  AUTO = 'Auto'
}
