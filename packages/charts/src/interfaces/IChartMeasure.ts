import type { ComponentType, CSSProperties } from 'react';

export interface IChartMeasure {
  /**
   * A string containing the path to the dataset key this line should display.
   * Supports object structures by using '`parent.child'`. Can also be a getter.
   */
  accessor: string | ((data: any) => any);
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
   * Use a custom component for the Data Label.
   *
   * __Note:__ We recommend leveraging the `Text` component of `recharts` as label here, but you can also use your own SVG.
   */
  DataLabel?: ComponentType<any>;
}
