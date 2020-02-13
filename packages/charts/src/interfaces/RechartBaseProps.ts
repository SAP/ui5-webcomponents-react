import { CSSProperties } from 'react';
import { ChartContainerProps } from './ChartContainerProps';

export interface RechartBaseProps extends ChartContainerProps {
  labelKey?: string;
  noLegend?: boolean;
  dataPointClickHandler?: (object) => void;
  legendClickHandler?: (object) => void;
  color?: string;
  colors?: Array<CSSProperties['color']>;

  chartConfig?: {
    yAxisVisible?: boolean;
    xAxisVisible?: boolean;
    dataLabel?: boolean;
    gridStroke?: string;
    gridVertical?: boolean;
    gridHorizontal?: boolean;
    legendPosition?: string;
    legendVisible?: boolean;
    zoomingTool?: boolean;
    barSize?: string | number;
    barGap?: number;
    fillOpacity?: number;
    strokeOpacity?: number;
    strokeWidth?: number;
    stacked?: boolean;
    paddingAngle?: number;
    innerRadius?: string;

    secondYAxis?: {
      dataKey: string;
      name?: string;
      color?: string;
    };
  };
}
