export enum TableScaleWidthMode {
  /*
   * Every column without fixed width gets the maximum available space of the table
   */
  Default = 'Default',
  /*
   * Every column gets the space it needs for displaying the full header text. If all headers need more space than the
   * available table width, horizontal scrolling will be enabled.
   * If there is space left, columns with a long content will get more space until there is no more table space left
   */
  Smart = 'Smart',
  /*
   * Every column gets the space it needs for displaying it's full header text and full content of all cells.
   * If it requires more space than the table has, horizontal scrolling will be enabled.
   */
  Grow = 'Grow'
}
