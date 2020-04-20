import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { BarChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/BarChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { FC, forwardRef, Ref, useCallback } from 'react';
import {
  Bar,
  BarChart as BarChartLib,
  Brush,
  CartesianGrid,
  Legend,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { useChartMargin } from '../../hooks/useChartMargin';
import { useAxisLabel, useDataLabel, useSecondaryDimensionLabel } from '../../hooks/useLabelElements';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';

const formatYAxisTicks = (tick) => {
  const splitTick = tick.split(' ');
  return splitTick.length > 3
    ? `${splitTick.slice(0, 3).join(' ')}...`
    : tick.length > 11
    ? `${tick.slice(0, 12)}...`
    : tick;
};

const dimensionDefaults = {
  formatter: formatYAxisTicks
};

const measureDefaults = {
  formatter: (d) => d,
  opacity: 1
};

interface MeasureConfig extends IChartMeasure {
  /**
   * Bar Width
   * @default auto
   */
  width?: number;
  /**
   * Bar Opacity
   * @default 1
   */
  opacity?: number;
  /**
   * Bar Stack ID
   * @default undefined
   */
  stackId?: string;
}

interface DimensionConfig extends IChartDimension {
  interval?: number;
}

interface BarChartProps extends RechartBaseProps {
  dimensions: DimensionConfig[];
  /**
   * An array of config objects. Each object is defining one bar in the chart.
   *
   * <h4>Required properties</h4>
   * - `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * <h4>Optional properties</h4>
   *
   * - `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.
   * - `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.
   * - `DataLabel`: a custom component to be used for the data label
   * - `width`: bar width, defaults to `auto`
   * - `opacity`: bar opacity, defaults to `1`
   * - `stackId`: bars with the same stackId will be stacked
   *
   */
  measures: MeasureConfig[];
}

/**
 * <code>import { BarChart } from '@ui5/webcomponents-react-charts/lib/next/BarChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const BarChart: FC<BarChartProps> = forwardRef((props: BarChartProps, ref: Ref<any>) => {
  const {
    loading,
    dataset,
    noLegend = false,
    onDataPointClick,
    onLegendClick,
    chartConfig = {
      margin: {},
      yAxisVisible: true,
      xAxisVisible: true,
      gridStroke: ThemingParameters.sapList_BorderColor,
      gridHorizontal: true,
      gridVertical: false,
      legendPosition: 'top',
      barGap: 3,
      zoomingTool: false,
      referenceLine: {
        label: undefined,
        value: undefined,
        color: undefined
      }
    },
    style,
    className,
    tooltip,
    slot
  } = props;

  const { dimensions, measures } = usePrepareDimensionsAndMeasures(
    props.dimensions,
    props.measures,
    dimensionDefaults,
    measureDefaults
  );

  const tooltipValueFormatter = useTooltipFormatter(measures);

  const primaryDimension = dimensions[0];
  const primaryMeasure = measures[0];

  const chartRef = useConsolidatedRef<any>(ref);

  const onItemLegendClick = useLegendItemClick(onLegendClick);

  const onDataPointClickInternal = useCallback(
    (payload, i, event) => {
      if (payload && onDataPointClick) {
        const value = payload.value.length ? payload.value[1] - payload.value[0] : payload.value;
        onDataPointClick(
          enrichEventWithDetails(event, {
            dataKey: Object.keys(payload)
              .filter((key) => key !== 'value')
              .find((key) => payload[key] === value),
            value,
            payload: payload.payload,
            xIndex: i
          })
        );
      }
    },
    [onDataPointClick]
  );

  const isBigDataSet = dataset?.length > 30 ?? false;
  const primaryDimensionAccessor = primaryDimension?.accessor;

  const marginChart = useChartMargin(
    dataset,
    (d) => d,
    primaryDimensionAccessor,
    chartConfig.margin,
    true,
    dimensions.length > 1,
    chartConfig.zoomingTool
  );

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      Placeholder={BarChartPlaceholder}
      ref={chartRef}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
    >
      <BarChartLib margin={marginChart} layout={'vertical'} data={dataset} barGap={chartConfig.barGap}>
        <CartesianGrid
          vertical={chartConfig.gridVertical ?? false}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke ?? ThemingParameters.sapList_BorderColor}
        />
        {(chartConfig.xAxisVisible ?? true) && (
          <XAxis
            interval={0}
            type="number"
            axisLine={chartConfig.xAxisVisible ?? true}
            tickFormatter={primaryMeasure?.formatter}
          />
        )}
        {(chartConfig.yAxisVisible ?? true) &&
          dimensions.map((dimension, index) => {
            const YAxisLabel =
              index > 0
                ? useSecondaryDimensionLabel(true, dimension.formatter)
                : useAxisLabel(dimension.formatter, true);
            return (
              <YAxis
                type="category"
                key={dimension.accessor}
                dataKey={dimension.accessor}
                xAxisId={index}
                interval={dimension.interval ?? isBigDataSet ? 2 : 0}
                tick={YAxisLabel}
                tickLine={index < 1}
                axisLine={index < 1}
                yAxisId={index}
              />
            );
          })}
        {measures.map((element, index) => {
          const ColumnDataLabel = useDataLabel(
            !element.hideDataLabel,
            element.DataLabel,
            element.formatter,
            false,
            true,
            false
          );
          return (
            <Bar
              stackId={element.stackId ?? undefined}
              fillOpacity={element.opacity}
              key={element.accessor}
              name={element.label ?? element.accessor}
              strokeOpacity={element.opacity}
              label={isBigDataSet ? false : ColumnDataLabel}
              type="monotone"
              dataKey={element.accessor}
              fill={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              stroke={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              barSize={element.width}
              onClick={onDataPointClickInternal}
            />
          );
        })}
        {!noLegend && <Legend verticalAlign={chartConfig.legendPosition ?? 'top'} onClick={onItemLegendClick} />}
        {chartConfig.referenceLine && (
          <ReferenceLine
            stroke={chartConfig.referenceLine.color}
            x={chartConfig.referenceLine.value}
            label={chartConfig.referenceLine.label}
          />
        )}
        <Tooltip cursor={{ fillOpacity: 0.3 }} formatter={tooltipValueFormatter} />
        {chartConfig.zoomingTool && (
          <Brush
            y={0}
            dataKey={primaryDimensionAccessor}
            stroke={ThemingParameters.sapObjectHeader_BorderColor}
            travellerWidth={10}
            height={20}
          />
        )}
      </BarChartLib>
    </ChartContainer>
  );
});

BarChart.displayName = 'BarChart';

export { BarChart };
