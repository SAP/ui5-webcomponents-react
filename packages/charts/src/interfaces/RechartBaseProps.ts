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
    yAxisVisible: boolean;
    xAxisVisible: boolean;
    gridStroke?: string;
    gridVertical?: boolean;
    gridHorizontal?: boolean;
    legendPosition?: string;
    strokeWidth?: number;
    legendVisible?: boolean;
    barSize?: string | number;
    barGap?: number;
    zoomingTool?: boolean;
    strokeOpacity?: number;
    fillOpacity?: number;
    secondYAxis?: {
      dataKey: string;
      name?: string;
      color?: string;
    };
  };
}
