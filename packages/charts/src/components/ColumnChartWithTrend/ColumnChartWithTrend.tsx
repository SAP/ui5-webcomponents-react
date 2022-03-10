import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, FC, forwardRef, Ref, useRef } from 'react';
import { TooltipProps } from 'recharts';
import { useLongestYAxisLabel } from '../../hooks/useLongestYAxisLabel';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { usePrepareTrendMeasures } from '../../hooks/usePrepareTrendMeasures';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { defaultFormatter } from '../../internal/defaults';
import { useDeprecationNoticeForTooltip } from '../../internal/useDeprecationNotiveForTooltip';
import { ComposedChart } from '../ComposedChart';
import { ColumnChartWithTrendPlaceholder } from './Placeholder';

interface MeasureConfig extends IChartMeasure {
  /**
   * Column Width
   */
  width?: number;
  /**
   * Column Opacity
   */
  opacity?: number;
  /**
   * Chart type
   */
  type: AvailableChartTypes;
  /**
   * column Stack ID
   */
  stackId?: string;
  /**
   * Highlight color of defined elements
   * @param value {string | number} Current value of the highlighted measure
   * @param measure {IChartMeasure} Current measure object
   * @param dataElement {object} Current data element
   */
  highlightColor?: (value: number, measure: MeasureConfig, dataElement: Record<string, any>) => CSSProperties['color'];
}

interface DimensionConfig extends IChartDimension {
  /**
   * Interval of axis label which defines the number that controls how many ticks are rendered on the x axis
   * @default 0
   */
  interval?: number;
}

export interface ColumnChartWithTrendProps extends Omit<IChartBaseProps, 'syncId'> {
  /**
   * An array of config objects. Each object will define one dimension of the chart.
   *
   * #### Required Properties
   * - `accessor`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * #### Optional Properties
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `interval`: number that controls how many ticks are rendered on the x axis
   *
   */
  dimensions: DimensionConfig[];
  /**
   * An array of config objects. Each object is defining one column in the chart.
   *
   * #### Required properties
   * - `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * #### Optional properties
   *
   * - `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.
   * - `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this column.
   * - `DataLabel`: a custom component to be used for the data label
   * - `width`: column width, defaults to `auto`
   * - `opacity`: column opacity, defaults to `1`
   * - `stackId`: columns with the same stackId will be stacked
   * - `highlightColor`: function will be called to define a custom color of a specific element which matches the
   *    defined condition. Overwrites code>color</code> of the element.
   *
   */
  measures: MeasureConfig[];
}

const dimensionDefaults = {
  formatter: defaultFormatter
};

const measureDefaults = {
  formatter: defaultFormatter,
  opacity: 1
};

const getRandomId = () => {
  if ('randomUUID' in crypto) {
    // @ts-ignore
    return crypto.randomUUID();
  }
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
};

const lineTooltipConfig = { wrapperStyle: { visibility: 'hidden' } } as TooltipProps<any, any>;

type AvailableChartTypes = 'line' | 'bar' | string;
/**
 * A `ColumnChartWithTrend` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted amd a trend line which is displayed above the column chart.
 */
const ColumnChartWithTrend: FC<ColumnChartWithTrendProps> = forwardRef(
  (props: ColumnChartWithTrendProps, ref: Ref<HTMLDivElement>) => {
    const {
      loading,
      dataset,
      style,
      className,
      slot,
      tooltip,
      onClick,
      noLegend,
      noAnimation,
      tooltipConfig,
      onDataPointClick,
      onLegendClick,
      ChartPlaceholder,
      ...rest
    } = props;

    const syncId = useRef(getRandomId()).current;

    useDeprecationNoticeForTooltip('ColumnChartWithTrend', props.tooltip);

    const chartConfig = {
      yAxisVisible: false,
      xAxisVisible: true,
      gridStroke: ThemingParameters.sapList_BorderColor,
      gridHorizontal: true,
      gridVertical: false,
      legendPosition: 'bottom',
      legendHorizontalAlign: 'left',
      barGap: 3,
      zoomingTool: false,
      resizeDebounce: 250,
      ...props.chartConfig
    };

    const { dimensions, measures } = usePrepareDimensionsAndMeasures(
      props.dimensions,
      props.measures,
      dimensionDefaults,
      measureDefaults
    );

    const { lineMeasures, columnMeasures, columnDataset } = usePrepareTrendMeasures(measures, dataset);
    const [yAxisWidth] = useLongestYAxisLabel(columnDataset, columnMeasures);

    const columnTooltipConfig = {
      formatter: (value, name, tooltipProps) => {
        const line = lineMeasures.find((currLine) => currLine.accessor === tooltipProps.dataKey);
        if (line) {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          return line.formatter(tooltipProps.payload[`__${line.accessor}`]);
        }
        const column = columnMeasures.find((currLine) => currLine.accessor === tooltipProps.dataKey);
        return column.formatter(value, name, tooltipProps);
      }
    } as TooltipProps<any, any>;

    const { chartConfig: _0, dimensions: _1, measures: _2, ...propsWithoutOmitted } = rest;

    return (
      <div
        ref={ref}
        style={{ display: 'flex', flexDirection: 'column', height: style?.height, width: style?.width, ...style }}
        className={className}
        slot={slot}
        {...propsWithoutOmitted}
      >
        {dataset?.length !== 0 && (
          <ComposedChart
            className={
              typeof onDataPointClick === 'function' || typeof onClick === 'function' ? 'has-click-handler' : undefined
            }
            tooltipConfig={lineTooltipConfig}
            noAnimation={noAnimation}
            loading={loading}
            onClick={onClick}
            syncId={syncId}
            style={{ ...style, height: `calc(${style?.height} * 0.2)` }}
            dataset={dataset}
            measures={lineMeasures}
            dimensions={dimensions}
            tooltip={tooltip}
            noLegend
            chartConfig={{
              xAxisVisible: false,
              yAxisVisible: false,
              yAxisTicksVisible: false,
              gridHorizontal: false,
              yAxisLabelsVisible: false,
              yAxisWidth
            }}
          />
        )}
        <ComposedChart
          onLegendClick={onLegendClick}
          tooltipConfig={columnTooltipConfig}
          noAnimation={noAnimation}
          noLegend={noLegend}
          loading={loading}
          onClick={onClick}
          syncId={syncId}
          ChartPlaceholder={ChartPlaceholder ?? ColumnChartWithTrendPlaceholder}
          dataset={columnDataset}
          measures={columnMeasures}
          dimensions={dimensions}
          chartConfig={chartConfig}
          tooltip={tooltip}
          style={{ ...style, height: `calc(${style?.height} * ${dataset?.length !== 0 ? 0.8 : 1})` }}
          className={
            typeof onDataPointClick === 'function' || typeof onClick === 'function' ? 'has-click-handler' : undefined
          }
        />
      </div>
    );
  }
);

ColumnChartWithTrend.defaultProps = {
  noLegend: false,
  noAnimation: false
};

ColumnChartWithTrend.displayName = 'ColumnChartWithTrend';

export { ColumnChartWithTrend };
