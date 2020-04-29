import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ColumnChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/ColumnChartPlaceholder';
import { ChartDataLabel } from '@ui5/webcomponents-react-charts/lib/components/ChartDataLabel';
import { XAxisTicks } from '@ui5/webcomponents-react-charts/lib/components/XAxisTicks';
import { YAxisTicks } from '@ui5/webcomponents-react-charts/lib/components/YAxisTicks';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { FC, forwardRef, Ref, useCallback } from 'react';
import {
  Bar as Column,
  BarChart as ColumnChartLib,
  Brush,
  CartesianGrid,
  Legend,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { useChartMargin } from '../../hooks/useChartMargin';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { tickLineConfig } from '../../internal/MeasureAxisProps';

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
   * column Stack ID
   * @default undefined
   */
  stackId?: string;
}

interface DimensionConfig extends IChartDimension {
  /**
   * Interval of axis label
   * @default 0
   */
  interval?: number;
}

export interface ColumnChartProps extends RechartBaseProps {
  dimensions: DimensionConfig[];
  /**
   * An array of config objects. Each object is defining one column in the chart.
   *
   * <h4>Required properties</h4>
   * - `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * <h4>Optional properties</h4>
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
  formatter: (d) => d
};

const measureDefaults = {
  formatter: (d) => d,
  opacity: 1
};

/**
 * <code>import { ColumnChart } from '@ui5/webcomponents-react-charts/lib/next/ColumnChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const ColumnChart: FC<ColumnChartProps> = forwardRef((props: ColumnChartProps, ref: Ref<any>) => {
  const {
    loading,
    dataset,
    noLegend = false,
    onDataPointClick,
    onLegendClick,
    chartConfig = {
      margin: {},
      yAxisVisible: false,
      xAxisVisible: true,
      gridStroke: ThemingParameters.sapList_BorderColor,
      gridHorizontal: true,
      gridVertical: false,
      yAxisColor: ThemingParameters.sapList_BorderColor,
      legendPosition: 'top',
      barGap: 3,
      zoomingTool: false,
      secondYAxis: {
        dataKey: undefined,
        name: undefined,
        color: undefined
      },
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

  const dataKeys = measures.map(({ accessor }) => accessor);
  const colorSecondY = chartConfig.secondYAxis
    ? dataKeys.findIndex((key) => key === chartConfig.secondYAxis.dataKey)
    : 0;

  const onItemLegendClick = useLegendItemClick(onLegendClick);

  const onDataPointClickInternal = useCallback(
    (payload, eventOrIndex, event) => {
      if (payload && onDataPointClick) {
        onDataPointClick(
          enrichEventWithDetails(event, {
            dataKey: Object.keys(payload).filter((key) =>
              payload.value.length
                ? payload[key] === payload.value[1] - payload.value[0]
                : payload[key] === payload.value && key !== 'value'
            )[0],
            value: payload.value.length ? payload.value[1] - payload.value[0] : payload.value,
            xIndex: eventOrIndex,
            payload: payload.payload
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
    measures,
    chartConfig.margin,
    false,
    dimensions.length > 1,
    chartConfig.zoomingTool
  );

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      Placeholder={ColumnChartPlaceholder}
      ref={chartRef}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
    >
      <ColumnChartLib margin={marginChart} data={dataset} barGap={chartConfig.barGap}>
        <CartesianGrid
          vertical={chartConfig.gridVertical ?? false}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke ?? ThemingParameters.sapList_BorderColor}
        />
        {(chartConfig.xAxisVisible ?? true) &&
          dimensions.map((dimension, index) => {
            return (
              <XAxis
                key={dimension.accessor}
                dataKey={dimension.accessor}
                xAxisId={index}
                interval={dimension?.interval ?? (isBigDataSet ? 'preserveStart' : 0)}
                tick={<XAxisTicks config={dimension} chartRef={chartRef} level={index} />}
                tickLine={index < 1}
                axisLine={index < 1}
              />
            );
          })}
        <YAxis
          axisLine={chartConfig.yAxisVisible ?? false}
          tickLine={tickLineConfig}
          yAxisId="left"
          interval={0}
          tick={<YAxisTicks config={primaryMeasure} />}
        />
        {chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey && (
          <YAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            stroke={chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`}
            label={{ value: chartConfig.secondYAxis.name, offset: 2, angle: +90, position: 'center' }}
            orientation="right"
            yAxisId="right"
            interval={0}
          />
        )}
        {measures.map((element, index) => {
          return (
            <Column
              yAxisId={chartConfig?.secondYAxis?.dataKey === element.accessor ? 'right' : 'left'}
              stackId={element.stackId}
              fillOpacity={element.opacity}
              key={element.accessor}
              name={element.label ?? element.accessor}
              strokeOpacity={element.opacity}
              label={<ChartDataLabel config={element} chartType="column" position={'insideTop'} />}
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
            y={chartConfig.referenceLine.value}
            label={chartConfig.referenceLine.label}
            yAxisId={'left'}
          />
        )}
        <Tooltip cursor={{ fillOpacity: 0.3 }} formatter={tooltipValueFormatter} />
        {chartConfig.zoomingTool && (
          <Brush
            y={10}
            dataKey={primaryDimensionAccessor}
            stroke={ThemingParameters.sapObjectHeader_BorderColor}
            travellerWidth={10}
            height={20}
          />
        )}
      </ColumnChartLib>
    </ChartContainer>
  );
});

ColumnChart.displayName = 'ColumnChart';

export { ColumnChart };
