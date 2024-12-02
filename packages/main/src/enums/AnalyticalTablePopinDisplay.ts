/**
 * Defines the display of `AnalyticalTable` pop-ins.
 *
 * @since 2.5.0
 */
export enum AnalyticalTablePopinDisplay {
  /*
   *Inside the table popin, the header is displayed in the first line and cell content is displayed in the next line.
   */
  Block = 'Block',
  /*
   * Inside the table popin, cell content is displayed next to the header in the same line.
   */
  Inline = 'Inline',
  /*
   *Inside the table popin, only the cell content will be visible.
   */
  WithoutHeader = 'WithoutHeader'
}
