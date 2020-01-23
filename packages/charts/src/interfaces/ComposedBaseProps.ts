export interface ComposedBaseProps {
  width: string;
  height: string;
  dataSet: Array<Object>;
  dataLabel: string;
  loading?: boolean | false;

  chartConfig?: {
    yAxisVisible?: boolean;
    xAxisVisible?: boolean;
    legendVisible?: boolean;
    gridStroke?: string;
    gridVertical?: boolean;
    gridHorizontal?: boolean;
    verticalAlign?: string;
  };
}
