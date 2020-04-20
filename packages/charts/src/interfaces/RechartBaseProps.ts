import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { CSSProperties } from 'react';
import { ChartContainerProps } from './ChartContainerProps';

export interface RechartBaseProps extends CommonProps {
  loading?: boolean;
  dataset?: Record<string, any>[];

  noLegend?: boolean;
  onDataPointClick?: (event: CustomEvent) => void;
  onLegendClick?: (event: CustomEvent) => void;

  chartConfig?: {
    margin?: {
      right: number;
      left: number;
      top: number;
      bottom: number;
    };

    yAxisVisible?: boolean;
    xAxisVisible?: boolean;

    gridStroke?: string;
    gridVertical?: boolean;
    gridHorizontal?: boolean;
    legendPosition?: string;
    zoomingTool?: boolean;

    stacked?: boolean;
    barGap?: number;

    paddingAngle?: number;
    innerRadius?: string;

    polarGridType?: string;

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
  };
}
