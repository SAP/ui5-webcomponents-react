/**
 * Defines the column growing behaviour.
 *
 * __Note:__ Custom cells with components instead of text as children are ignored by the `Smart` and `Grow` modes.
 * __Note:__ For performance reasons, the `Smart` and `Grow` modes base their calculation for table cell width on a subset of column cells. If the first 20 cells of a column are significantly smaller than the rest of the column cells, the content may still not be fully displayed for all cells.
 */
export enum AnalyticalTableScaleWidthMode {
  /*
   * The available space of the table is distributed evenly for columns without fixed width. If the minimum width of all columns is reached, horizontal scrolling will be enabled.
   */
  Default = 'Default',
  /*
   * Every column gets the space it needs for displaying the full header text. If all header texts need more space than the available table width, horizontal scrolling will be enabled. If there is space left, columns with a long text will get more space until there is no more table space left.
   */
  Smart = 'Smart',
  /*
   * Every column gets the space it needs for displaying its full header text and full text content of all cells. If it requires more space than the table has, horizontal scrolling will be enabled. To prevent huge header text from polluting the table, a max-width of 700px is applied to each column. It can be overwritten by setting the respective column property.
   */
  Grow = 'Grow'
}
