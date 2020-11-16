import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { BarChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/BarChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/components/ChartContainer';
import { ChartDataLabel } from '@ui5/webcomponents-react-charts/lib/components/ChartDataLabel';
import { XAxisTicks } from '@ui5/webcomponents-react-charts/lib/components/XAxisTicks';
import { YAxisTicks } from '@ui5/webcomponents-react-charts/lib/components/YAxisTicks';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import {
  Bar,
  BarChart as BarChartLib,
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
import { useLongestYAxisLabelBar } from '../../hooks/useLongestYAxisLabelBar';
import { useObserveXAxisHeights } from '../../hooks/useObserveXAxisHeights';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { defaultFormatter } from '../../internal/defaults';
import { tickLineConfig, tooltipContentStyle, tooltipFillOpacity } from '../../internal/staticProps';

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
  /**
   * Interval of dimension axis labels
   * @default 0
   */
  interval?: number;
}

export interface BarChartProps extends IChartBaseProps {
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

const BarChart: FC<BarChartProps> = forwardRef((props: BarChartProps, ref: Ref<HTMLDivElement>) => {
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
      margin: {},
      yAxisVisible: true,
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

  const primaryDimension = dimensions[0];
  const primaryMeasure = measures[0];
  const chartRef = useConsolidatedRef<any>(ref);

  const onItemLegendClick = useLegendItemClick(onLegendClick);
  const labelFormatter = useLabelFormatter(primaryDimension);

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
            dataIndex: i
          })
        );
      }
    },
    [onDataPointClick]
  );

  const isBigDataSet = dataset?.length > 30;
  const primaryDimensionAccessor = primaryDimension?.accessor;

  const [width, legendPosition] = useLongestYAxisLabelBar(dataset, dimensions);
  const marginChart = useChartMargin(chartConfig.margin, chartConfig.zoomingTool);
  const [xAxisHeight] = useObserveXAxisHeights(chartRef, 1);

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
      resizeDebounce={chartConfig.resizeDebounce}
    >
      <BarChartLib
        stackOffset="sign"
        margin={marginChart}
        layout="vertical"
        data={dataset}
        barGap={chartConfig.barGap}
        className={typeof onDataPointClick === 'function' ? 'has-click-handler' : undefined}
      >
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {chartConfig.xAxisVisible && (
          <XAxis
            interval={0}
            type="number"
            tick={<XAxisTicks config={primaryMeasure} />}
            axisLine={chartConfig.xAxisVisible}
            tickLine={tickLineConfig}
            tickFormatter={primaryMeasure?.formatter}
            height={xAxisHeight}
          />
        )}
        {chartConfig.yAxisVisible &&
          dimensions.map((dimension, index) => {
            return (
              <YAxis
                interval={dimension?.interval ?? (isBigDataSet ? 'preserveStart' : 0)}
                type="category"
                key={dimension.accessor}
                dataKey={dimension.accessor}
                tick={<YAxisTicks config={dimension} />}
                tickLine={index < 1}
                axisLine={index < 1}
                yAxisId={index}
                width={width[index]}
                allowDuplicatedCategory={index === 0}
              />
            );
          })}
        {measures.map((element, index) => {
          return (
            <Bar
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
                content={<ChartDataLabel config={element} chartType="bar" position={'insideRight'} />}
              />
            </Bar>
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
          <ReferenceLine stroke={chartConfig.referenceLine.color} x={chartConfig.referenceLine.value}>
            <Label>{chartConfig.referenceLine.label}</Label>
          </ReferenceLine>
        )}
        <Tooltip
          cursor={tooltipFillOpacity}
          formatter={tooltipValueFormatter}
          contentStyle={tooltipContentStyle}
          labelFormatter={labelFormatter}
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
      </BarChartLib>
    </ChartContainer>
  );
});

BarChart.displayName = 'BarChart';

export { BarChart };
