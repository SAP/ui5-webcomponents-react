import { XAxisProps, YAxisProps } from 'recharts';

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

  referenceLine?: {
    label: string;
    value: number;
    color: string;
  };
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
