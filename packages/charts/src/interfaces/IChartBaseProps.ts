import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ReactNode, ReactNodeArray } from 'react';
import { ICartesianChartConfig } from './ICartesianChartConfig';

export interface IChartBaseProps<T = ICartesianChartConfig> extends CommonProps {
  loading?: boolean;
  dataset?: Record<string, any>[];

  /**
   * With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display
   * a linear gradient.
   */
  children?: ReactNode | ReactNodeArray;

  noLegend?: boolean;
  onDataPointClick?: (event: CustomEvent) => void;
  onLegendClick?: (event: CustomEvent) => void;

  noAnimation?: boolean;

  chartConfig?: T & {
    margin?: {
      right: number;
      left: number;
      top: number;
      bottom: number;
    };

    legendPosition?: string;
    legendHorizontalAlign?: string;

    resizeDebounce?: number;
  };
}
