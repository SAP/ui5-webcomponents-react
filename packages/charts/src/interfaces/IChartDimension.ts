export interface IChartDimension {
  /**
   * A string containing the path to the dataset key this line should display.
   * Supports object structures by using `'parent.child'`. Can also be a getter.
   */
  accessor: string | ((dataset: Record<string, unknown>) => string | number);
  /**
   * function will be called for each data label and allows you to format it according to your needs
   */
  formatter?: (value: any, payload?: any) => string | number;
}
