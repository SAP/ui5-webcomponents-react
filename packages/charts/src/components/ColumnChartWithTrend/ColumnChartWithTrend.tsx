import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { useConsolidatedRef, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/hooks';
import { ColumnChart as ColumnChartLib } from '@ui5/webcomponents-react-charts/dist/ColumnChart';
import { ColumnChartWithTrendPlaceholder } from '@ui5/webcomponents-react-charts/dist/ColumnChartWithTrendPlaceholder';
import { LineChart as LineChartLib } from '@ui5/webcomponents-react-charts/dist/LineChart';
import React, { FC, forwardRef, Ref, useMemo } from 'react';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { usePrepareTrendMeasures } from '../../hooks/usePrepareTrendMeasures';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { defaultFormatter } from '../../internal/defaults';

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

type AvailableChartTypes = 'line' | 'column' | string;
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
      onLegendClick
    } = props;

    const chartRef = useConsolidatedRef<any>(ref);
    const passThroughProps = usePassThroughHtmlProps(props, ['onDataPointClick', 'onLegendClick', 'onClick']);

    const chartConfig = useMemo(() => {
      return {
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
    }, [props.chartConfig]);

    const { dimensions, measures } = usePrepareDimensionsAndMeasures(
      props.dimensions,
      props.measures,
      dimensionDefaults,
      measureDefaults
    );

    const { lineMeasures, columnMeasures } = usePrepareTrendMeasures(measures);

    return (
      <div
        ref={chartRef}
        style={{ display: 'flex', flexDirection: 'column', height: style?.height, width: style?.width, ...style }}
        className={className}
        slot={slot}
        {...passThroughProps}
      >
        {dataset?.length !== 0 && (
          <LineChartLib
            className={
              typeof onDataPointClick === 'function' || typeof onClick === 'function' ? 'has-click-handler' : undefined
            }
            tooltipConfig={tooltipConfig}
            noAnimation={noAnimation}
            loading={loading}
            onClick={onClick}
            syncId={'trend'}
            style={{ ...style, height: `calc(${style.height} * 0.2)` }}
            dataset={dataset}
            measures={lineMeasures}
            dimensions={dimensions}
            tooltip={tooltip}
            noLegend
            chartConfig={{
              xAxisVisible: false,
              yAxisVisible: false,
              yAxisTicksVisible: false,
              gridHorizontal: false
            }}
          />
        )}
        <ColumnChartLib
          onLegendClick={onLegendClick}
          tooltipConfig={tooltipConfig}
          noAnimation={noAnimation}
          noLegend={noLegend}
          loading={loading}
          onClick={onClick}
          syncId={'trend'}
          chartPlaceholder={ColumnChartWithTrendPlaceholder}
          dataset={dataset}
          measures={columnMeasures}
          dimensions={dimensions}
          chartConfig={chartConfig}
          tooltip={tooltip}
          style={{ ...style, height: `calc(${style.height} * ${dataset?.length !== 0 ? 0.8 : 1})` }}
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
