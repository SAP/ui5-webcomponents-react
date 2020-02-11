import { ChartDataSets, ChartOptions } from 'chart.js';
import { CSSProperties } from 'react';
import { CommonProps } from './CommonProps';

export interface ChartBaseProps extends CommonProps {
  labels?: string[];
  datasets?: ChartDataSets[];
  colors?: CSSProperties['color'][];
  height?: number | string;
  width?: number | string;
  minHeight?: number;
  minWidth?: number;
  options?: ChartOptions;
  categoryAxisFormatter?: (value: any, currentDataset?: object, currentContext?: object) => string | number;
  valueAxisFormatter?: (value: any, currentDataset?: object, currentContext?: object) => string | number;
  getDatasetAtEvent?: (dataset: ChartDataSets[], event?: Event) => void;
  getElementAtEvent?: (dataset: ChartDataSets[], event?: Event) => void;
  loading?: boolean;
  noLegend?: boolean;
}
