export interface IChartDimension {
  /**
   * A string containing the path to the dataset key this line should display.
   * Supports object structures by using `'parent.child'`. Can also be a getter.
   */
  accessor: string | Function;
  /**
   * function will be called for each data label and allows you to format it according to your needs
   */
  formatter?: (value: any) => string;
}
