/// <reference types="react" />
import { ChartOptions } from 'chart.js';
import { CSSProperties } from 'react';
import React from 'react';

export declare const BarChart: React.ForwardRefExoticComponent<import('@ui5/webcomponents-react-charts/src/interfaces/ChartBaseProps').ChartBaseProps &
  React.RefAttributes<any>>;

export declare const BarChartPlaceholder: () => JSX.Element;

export declare const ColumnChart: React.ForwardRefExoticComponent<import('@ui5/webcomponents-react-charts/src/interfaces/ChartBaseProps').ChartBaseProps &
  React.RefAttributes<any>>;

export declare const ColumnChartPlaceholder: (props: any) => JSX.Element;

declare interface CommonProps {
  style?: CSSProperties;
  className?: string;
  tooltip?: string;
  slot?: string;
}

declare interface DataItems {
  value: number;
  label: string;
}

export declare const DonutChart: React.ForwardRefExoticComponent<import('@ui5/webcomponents-react-charts/src/interfaces/ChartBaseProps').ChartBaseProps &
  React.RefAttributes<any>>;

export declare const LineChart: React.ForwardRefExoticComponent<import('@ui5/webcomponents-react-charts/src/interfaces/ChartBaseProps').ChartBaseProps &
  React.RefAttributes<any>>;

export declare const LineChartPlaceholder: (props: any) => JSX.Element;

export declare const MicroBarChart: React.ForwardRefExoticComponent<MicroBarChartPropTypes &
  React.RefAttributes<HTMLDivElement>>;

declare interface MicroBarChartPropTypes extends CommonProps {
  dataset: DataItems[];
  maxWidth?: CSSProperties['width'];
  colors?: Array<CSSProperties['color']>;
  visibleDatasetCount?: number;
  valueFormatter?: (value: any) => string | number;
  labelFormatter?: (value: any) => string | number;
}

export declare const PieChart: React.ForwardRefExoticComponent<import('@ui5/webcomponents-react-charts/src/interfaces/ChartBaseProps').ChartBaseProps &
  React.RefAttributes<any>>;

export declare const PieChartPlaceholder: (props: any) => JSX.Element;

export declare const RadarChart: React.ForwardRefExoticComponent<import('@ui5/webcomponents-react-charts/src/interfaces/ChartBaseProps').ChartBaseProps &
  React.RefAttributes<any>>;

export declare const RadialChart: React.ForwardRefExoticComponent<RadialChartPropTypes &
  React.RefAttributes<HTMLDivElement>>;

declare interface RadialChartPropTypes extends CommonProps {
  value: number;
  maxValue?: number;
  displayValue: number | string;
  colors?: Array<CSSProperties['color']>;
  options?: ChartOptions;
  height?: number;
  width?: number;
}

export {};
