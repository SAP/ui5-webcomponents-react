/**
 * Defines the rendering and height calculation behavior of subcomponents when `renderRowSubComponent` is used.
 */
export enum AnalyticalTableSubComponentsBehavior {
  /**
   * Render subcomponents as expandable container of each row.
   */
  Expandable = 'Expandable',
  /**
   * Render subcomponents below each row.
   */
  Visible = 'Visible',
  /**
   * Render subcomponents below each row. The height of each initially visible subcomponent (defined by `visibleRows`) is taken into account when defining the body height of the table.
   *
   * __Note:__ `AnalyticalTableVisibleRowCountMode.Interactive` is not supported with this mode.
   */
  IncludeHeight = 'IncludeHeight',
  /**
   * Render subcomponents as expandable container of each row. The height of each expanded subcomponent of visible rows (defined by `visibleRows`) is taken into account when defining the body height of the table, so that the height of the table changes when a subcomponent is expanded/collapsed.
   *
   * __Note:__ This mode can lead to performance degradation, please use with caution!
   * __Note:__ `AnalyticalTableVisibleRowCountMode.Interactive` is not supported with this mode.
   *
   * @since 1.23.0
   */
  IncludeHeightExpandable = 'IncludeHeightExpandable'
}
