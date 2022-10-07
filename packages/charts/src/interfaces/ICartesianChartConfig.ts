import { ReferenceLineProps, XAxisProps, YAxisProps } from 'recharts';

export interface ICartesianChartConfig {
  yAxisVisible?: boolean;
  xAxisVisible?: boolean;
  yAxisTicksVisible?: boolean;
  yAxisLabelsVisible?: boolean;
  yAxisWidth?: number;

  gridStroke?: string;
  gridVertical?: boolean;
  gridHorizontal?: boolean;

  zoomingTool?: boolean;

  barGap?: number;

  secondYAxis?: {
    dataKey: string;
    name?: string;
    color?: string;
  };
  /**
   * If this property is set, a reference line will be shown.
   * Please note that this property also allows setting all properties described [here](https://recharts.org/en-US/api/ReferenceLine), but we only recommend setting `label`,`value` and `color` to preserve the intended design.
   */
  referenceLine?: {
    value?: number;
    color?: string;
  } & ReferenceLineProps;
  /**
   * Defines possible configurations for the `YAxis`.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   */
  yAxisConfig?: YAxisProps;
  /**
   * Defines possible configurations for the `XAxis`.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   */
  xAxisConfig?: XAxisProps;
  /**
   * Defines possible configurations for the second `YAxis`.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   */
  secondYAxisConfig?: YAxisProps;
  /**
   * Defines possible configurations for the second `YAxis`.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   */
  secondXAxisConfig?: XAxisProps;
}
