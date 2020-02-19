import { CSSProperties } from 'react';
import { ChartContainerProps } from './ChartContainerProps';

export interface RechartBaseProps extends ChartContainerProps {
  labelKey?: string;
  dataKeys?: string[];
  noLegend?: boolean;
  onDataPointClick?: (object) => void;
  onLegendClick?: (object) => void;
  color?: string;
  colors?: CSSProperties['color'][];

  chartConfig?: {
    yAxisVisible?: boolean;
    xAxisVisible?: boolean;
    unit?: 'string';
    dataLabel?: boolean;
    gridStroke?: string;
    gridVertical?: boolean;
    gridHorizontal?: boolean;
    legendPosition?: string;
    legendVisible?: boolean;
    zoomingTool?: boolean;

    strokeOpacity?: number;
    strokeWidth?: number;
    stacked?: boolean;

    barSize?: string | number;
    barGap?: number;
    fillOpacity?: number;

    paddingAngle?: number;
    innerRadius?: string;

    polarGridType?: string;

    secondYAxis?: {
      dataKey: string;
      name?: string;
      color?: string;
    };
  };
}
