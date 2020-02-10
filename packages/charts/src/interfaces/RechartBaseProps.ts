import { CSSProperties } from 'react';
import { ChartContainerProps } from './ChartContainerProps';

export interface RechartBaseProps extends ChartContainerProps {
  labelKey?: string;
  noLegend?: boolean;
  dataPointClickHandler?: (object) => void;
  legendClickHandler?: (object) => void;
  color?: string;
  colors?: Array<CSSProperties['color']>;
  valueAxisFormatter?: (value: any, currentDataset?: object, currentContext?: object) => string | number;
  categoryAxisFormatter?: (value: any, currentDataset?: object, currentContext?: object) => string | number;
  chartConfig?: {
    yAxisVisible: boolean;
    xAxisVisible: boolean;
    gridStroke?: string;
    gridVertical?: boolean;
    gridHorizontal?: boolean;
    legendPosition?: string;
    strokeWidth?: number;
    secondYAxis?: {
      dataKey: string;
      name?: string;
    };
  };
}
