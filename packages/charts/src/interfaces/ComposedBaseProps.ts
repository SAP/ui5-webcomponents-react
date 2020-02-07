export interface ComposedBaseProps {
  width: string;
  height: string;
  dataSet: Array<Object>;
  dataLabel: string;
  loading?: boolean | false;
  dataPointClickHandler?: (object) => void;
  legendClickHandler?: (object) => void;
  chartConfig?: {
    yAxisVisible?: boolean;
    xAxisVisible?: boolean;
    legendVisible?: boolean;
    gridStroke?: string;
    gridVertical?: boolean;
    gridHorizontal?: boolean;
    legendPosition?: string;
  };
}
