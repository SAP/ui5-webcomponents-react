import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ICartesianChartConfig } from './ICartesianChartConfig';

export interface IChartBaseProps<T = ICartesianChartConfig> extends CommonProps {
  loading?: boolean;
  dataset?: Record<string, any>[];

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
