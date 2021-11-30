import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ComponentType, ReactNode } from 'react';
import { TooltipProps } from 'recharts';
import { ICartesianChartConfig } from './ICartesianChartConfig';

export interface IChartBaseProps<T = ICartesianChartConfig> extends Omit<CommonProps, 'onClick'> {
  /**
   * Flag whether the chart should display a loading indicator.
   *
   * This can either be a placeholder shimmer (in case the chart has no data yet) or a small
   * loading bar in the top of the chart (in case the chart has already some data to display).
   */
  loading?: boolean;
  /**
   * The `dataset` is an array of object which will be displayed in the chart.
   */
  dataset?: Record<string, unknown>[];

  /**
   * With the help of the `children` prop you can add more svg elements to the chart, e.g. if you want to display
   * a linear gradient.
   */
  children?: ReactNode | ReactNode[];

  /**
   * `noLegend` toggles the visibility of the legend below the chart. If this prop is `true`, no legend will be rendered.
   */
  noLegend?: boolean;

  /**
   * Fired when clicked anywhere in the chart.
   */
  onClick?: (event: CustomEvent<{ payload: unknown; activePayloads: Record<string, unknown>[] }>) => void;

  /**
   * The `onDataPointClick` event fires whenever the user clicks on e.g. a  bar in `BarChart` or a point the `LineChart`.
   *
   * You can use this event to trigger e.g. navigations or set filters based on the last clicked data point.
   */
  onDataPointClick?: (event: CustomEvent) => void;

  /**
   * The `onLegendClick` event fires when the user clicks on a label of the legend.
   *
   * This can be useful to e.g. show/hide the current dataset in case you have multiple datasets in in your chart.
   * @param event
   */
  onLegendClick?: (event: CustomEvent) => void;

  /**
   * `noAnimation` disables all chart animations when set to `true`.
   */
  noAnimation?: boolean;

  /**
   * Defines possible configurations of the chart.
   *
   * <h4>Possible properties</h4>
   *
   * - `margin`: Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.
   * - `legendPosition`: Position of the legend. Can be one of the following: `"top"`, `"left"`, `"right"`, `"bottom"`
   * - `legendHorizontalAlign`: Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`
   * - `resizeDebounce`: Number that sets the amount of delay time the chart waits when resizing.
   */
  chartConfig?: T & {
    /**
     * Sets the margin of the chart container. Receives a object with four possible properties (`right`, `left`, `top`, `bottom`) that expect a number as value.
     */
    margin?: {
      right: number;
      left: number;
      top: number;
      bottom: number;
    };
    /**
     * Position of the legend. Can be one of the following: `"top"`, `"left"`, `"right"`, `"bottom"`
     */
    legendPosition?: string;
    /**
     * Alignment of the legend. Can be one of the following: `"left"`, `"center"`, `"right"`
     */
    legendHorizontalAlign?: string;
    /**
     * Number that sets the amount of delay time the chart waits when resizing.
     */
    resizeDebounce?: number;
  };
  /**
   * Defines the configuration object for the internally used `recharts` Tooltip popover that is displayed when hovering over data points.
   * You can find all possible configuration properties [here](https://recharts.org/en-US/api/Tooltip).
   *
   * __Note:__ It is possible to overwrite internally used tooltip props, so use with caution!
   */
  tooltipConfig?: TooltipProps<number | string | Array<number | string>, number | string>;
  /**
   * A string which defines an id to synchronize two separate charts. Charts with the same syncId synchronize the position
   * of the tooltips, the startIndex and the endIndex of the zooming tool.
   */
  syncId?: string;
  /**
   * Injects a custom loading placeholder which is used when no data are available. If the property isn't set the
   * standard loading placeholder of the specific chart is used.
   */
  ChartPlaceholder?: ComponentType;
}
