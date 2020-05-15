export interface ICartesianChartConfig {
  yAxisVisible?: boolean;
  xAxisVisible?: boolean;

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
}
