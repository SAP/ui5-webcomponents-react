import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { CSSProperties } from 'react';
import { ChartContainerProps } from './ChartContainerProps';

export interface RechartBaseProps extends ChartContainerProps {
  labelKey?: string;
  secondaryDimensionKey?: string;
  dataKeys?: string[];
  noLegend?: boolean;
  onDataPointClick?: (event: CustomEvent) => void;
  onLegendClick?: (event: CustomEvent) => void;
  color?: string;
  colors?: CSSProperties['color'][];
  labels?: { [key: string]: string };

  axisInterval?: number;
  labelFormatter?: (el) => void;
  valueFormatter?: (el) => void;
  dataLabelCustomElement?: JSX.Element;

  chartConfig?: {
    margin?: {
      right: number;
      left: number;
      top: number;
      bottom: number;
    };

    yAxisVisible?: boolean;
    xAxisVisible?: boolean;
    xAxisUnit?: string;
    yAxisUnit?: string;

    dataLabel?: boolean;
    gridStroke?: string;
    gridVertical?: boolean;
    gridHorizontal?: boolean;
    legendPosition?: string;
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

    referenceLine?: {
      label: string;
      value: number;
      color: string;
    };
  };
}

export interface RechartBasePropsNew extends CommonProps {
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

    referenceLine?: {
      label: string;
      value: number;
      color: string;
    };
  };
}
