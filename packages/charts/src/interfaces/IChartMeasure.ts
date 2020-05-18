import { ComponentType, CSSProperties } from 'react';

export interface IChartMeasure {
  /**
   * A string containing the path to the dataset key this line should display.
   * Supports object structures by using '`parent.child'`. Can also be a getter.
   */
  accessor: string | Function;
  /**
   * any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors
   */
  color?: CSSProperties['color'];
  /**
   * The Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.
   */
  label?: string;
  /**
   * This function will be called for each data label and allows you to format it according to your needs.
   */
  formatter?: (value: any) => string;
  /**
   * Flag whether the data labels should be hidden in the chart for this line.
   */
  hideDataLabel?: boolean;
  /**
   * Use a custom component for the Data Label
   */
  DataLabel?: ComponentType<any>;
}
