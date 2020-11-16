import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ColumnChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/ColumnChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/components/ChartContainer';
import { ChartDataLabel } from '@ui5/webcomponents-react-charts/lib/components/ChartDataLabel';
import { XAxisTicks } from '@ui5/webcomponents-react-charts/lib/components/XAxisTicks';
import { YAxisTicks } from '@ui5/webcomponents-react-charts/lib/components/YAxisTicks';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import {
  Bar as Column,
  BarChart as ColumnChartLib,
  Brush,
  CartesianGrid,
  Label,
  LabelList,
  Legend,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils';
import { useChartMargin } from '../../hooks/useChartMargin';
import { useLabelFormatter } from '../../hooks/useLabelFormatter';
import { useLongestYAxisLabel } from '../../hooks/useLongestYAxisLabel';
import { useObserveXAxisHeights } from '../../hooks/useObserveXAxisHeights';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { defaultFormatter } from '../../internal/defaults';
import { tickLineConfig, tooltipContentStyle, tooltipFillOpacity } from '../../internal/staticProps';

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

export interface ColumnChartProps extends IChartBaseProps {
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
  formatter: defaultFormatter
};

const measureDefaults = {
  formatter: defaultFormatter,
  opacity: 1
};

const valueAccessor = (attribute) => ({ payload }) => {
  return getValueByDataKey(payload, attribute);
};

const ColumnChart: FC<ColumnChartProps> = forwardRef((props: ColumnChartProps, ref: Ref<HTMLDivElement>) => {
  const {
    loading,
    dataset,
    noLegend = false,
    noAnimation = false,
    onDataPointClick,
    onLegendClick,
    style,
    className,
    tooltip,
    slot
  } = props;

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

  const tooltipValueFormatter = useTooltipFormatter(measures);

  const [yAxisWidth, legendPosition] = useLongestYAxisLabel(dataset, measures);

  const primaryDimension = dimensions[0];
  const primaryMeasure = measures[0];

  const labelFormatter = useLabelFormatter(primaryDimension);
  const chartRef = useConsolidatedRef<any>(ref);

  const dataKeys = measures.map(({ accessor }) => accessor);
  const colorSecondY = chartConfig.secondYAxis
    ? dataKeys.findIndex((key) => key === chartConfig.secondYAxis?.dataKey)
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
            dataIndex: eventOrIndex,
            payload: payload.payload
          })
        );
      }
    },
    [onDataPointClick]
  );

  const isBigDataSet = dataset?.length > 30 ?? false;
  const primaryDimensionAccessor = primaryDimension?.accessor;

  const marginChart = useChartMargin(chartConfig.margin, chartConfig.zoomingTool);
  const xAxisHeights = useObserveXAxisHeights(chartRef, props.dimensions.length);

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
      resizeDebounce={chartConfig.resizeDebounce}
    >
      <ColumnChartLib
        stackOffset="sign"
        margin={marginChart}
        data={dataset}
        barGap={chartConfig.barGap}
        className={typeof onDataPointClick === 'function' ? 'has-click-handler' : undefined}
      >
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {chartConfig.xAxisVisible &&
          dimensions.map((dimension, index) => {
            return (
              <XAxis
                key={dimension.accessor}
                dataKey={dimension.accessor}
                xAxisId={index}
                interval={dimension?.interval ?? (isBigDataSet ? 'preserveStart' : 0)}
                tick={<XAxisTicks config={dimension} />}
                tickLine={index < 1}
                axisLine={index < 1}
                height={xAxisHeights[index]}
                allowDuplicatedCategory={index === 0}
              />
            );
          })}
        <YAxis
          axisLine={chartConfig.yAxisVisible}
          tickLine={tickLineConfig}
          yAxisId="left"
          interval={0}
          tick={<YAxisTicks config={primaryMeasure} />}
          width={yAxisWidth}
        />
        {chartConfig.secondYAxis?.dataKey && (
          <YAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            axisLine={{
              stroke: chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`
            }}
            tick={{ fill: chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})` }}
            tickLine={{
              stroke: chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`
            }}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label={{ value: chartConfig.secondYAxis.name, offset: 2, angle: +90, position: 'center' }}
            orientation="right"
            yAxisId="right"
            interval={0}
          />
        )}
        {measures.map((element, index) => {
          return (
            <Column
              yAxisId={chartConfig.secondYAxis?.dataKey === element.accessor ? 'right' : 'left'}
              stackId={element.stackId}
              fillOpacity={element.opacity}
              key={element.accessor}
              name={element.label ?? element.accessor}
              strokeOpacity={element.opacity}
              type="monotone"
              dataKey={element.accessor}
              fill={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              stroke={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              barSize={element.width}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              onClick={onDataPointClickInternal}
              isAnimationActive={noAnimation === false}
            >
              <LabelList
                data={dataset}
                valueAccessor={valueAccessor(element.accessor)}
                content={<ChartDataLabel config={element} chartType="column" position={'insideTop'} />}
              />
            </Column>
          );
        })}
        {!noLegend && (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <Legend
            verticalAlign={chartConfig.legendPosition}
            align={chartConfig.legendHorizontalAlign}
            onClick={onItemLegendClick}
            wrapperStyle={legendPosition}
          />
        )}
        {chartConfig.referenceLine && (
          <ReferenceLine stroke={chartConfig.referenceLine.color} y={chartConfig.referenceLine.value} yAxisId="left">
            <Label>{chartConfig.referenceLine.label}</Label>
          </ReferenceLine>
        )}
        <Tooltip
          cursor={tooltipFillOpacity}
          formatter={tooltipValueFormatter}
          labelFormatter={labelFormatter}
          contentStyle={tooltipContentStyle}
        />
        {chartConfig.zoomingTool && (
          <Brush
            y={10}
            dataKey={primaryDimensionAccessor}
            tickFormatter={primaryDimension.formatter}
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
