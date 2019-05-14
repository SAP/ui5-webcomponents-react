import { ChartDataSets, ChartOptions } from 'chart.js';
import { CSSProperties, Ref } from 'react';
import { CommonProps } from './CommonProps';

export interface ChartBaseProps extends CommonProps {
  labels?: string[];
  datasets?: ChartDataSets[];
  colors?: Array<CSSProperties['color']>;
  height?: number;
  width?: number;
  options?: ChartOptions;
  categoryAxisFormatter?: (value: any) => string | number;
  valueAxisFormatter?: (value: any) => string | number;
  getDatasetAtEvent?: (dataset: ChartDataSets[], event: Event) => void;
  getElementAtEvent?: (dataset: ChartDataSets[], event: Event) => void;
  innerChartRef?: Ref<any>;
  loading?: boolean;
}
