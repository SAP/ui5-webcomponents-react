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
   */
  IncludeHeight = 'IncludeHeight',
  /**
   * Render subcomponents as expandable container of each row. The height of each expanded subcomponent of visible rows (defined by `visibleRows`) is taken into account when defining the body height of the table, as result the table height changes when expanding/collapsing a subcomponent.
   *
   * __Note:__ This mode can lead to performance degradation, please use with caution!
   */
  IncludeHeightExpandable = 'IncludeHeightExpandable'
}
