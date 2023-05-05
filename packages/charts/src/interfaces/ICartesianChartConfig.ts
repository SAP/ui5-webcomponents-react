import type { ReferenceLineProps, XAxisProps, YAxisProps } from 'recharts';

export interface ICartesianChartConfig {
  /**
   * Defines whether the `YAxis` should be visible.
   */
  yAxisVisible?: boolean;
  /**
   * Defines whether the `XAxis` should be visible.
   */
  xAxisVisible?: boolean;
  /**
   * Defines whether the ticks of the `YAxis` should be visible.
   */
  yAxisTicksVisible?: boolean;
  /**
   * Defines whether the labels of the `YAxis` should be visible.
   */
  yAxisLabelsVisible?: boolean;
  /**
   * Defines the width of the `YAxis`.
   */
  yAxisWidth?: number;

  gridStroke?: string;
  gridVertical?: boolean;
  gridHorizontal?: boolean;

  /**
   * Defines whether it should be possible to zoom in on the chart.
   * If this prop is `true`, a range slider is displayed on top of the chart, making it possible to zoom-in/zoom-out.
   */
  zoomingTool?: boolean;

  /**
   * Defines the gab between bars.
   */
  barGap?: number;

  /**
   * Display a second `YAxis`.
   */
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
  yAxisConfig?: Omit<YAxisProps, 'mirror'>;
  /**
   * Defines possible configurations for the `XAxis`.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   */
  xAxisConfig?: Omit<XAxisProps, 'mirror'>;
  /**
   * Defines possible configurations for the second `YAxis`.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   */
  secondYAxisConfig?: Omit<YAxisProps, 'mirror'>;
  /**
   * Defines possible configurations for the second `YAxis`.
   *
   * __Note:__ It is possible to overwrite internally used props. Please use with caution!
   */
  secondXAxisConfig?: Omit<XAxisProps, 'mirror'>;
}
