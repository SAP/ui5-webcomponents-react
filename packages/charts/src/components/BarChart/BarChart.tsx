import { enrichEventWithDetails, ThemingParameters, useIsRTL, useSyncRef } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback } from 'react';
import {
  Bar,
  BarChart as BarChartLib,
  Brush,
  CartesianGrid,
  Cell,
  Label,
  LabelList,
  Legend,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils';
import { useCancelAnimationFallback } from '../../hooks/useCancelAnimationFallback';
import { useChartMargin } from '../../hooks/useChartMargin';
import { useLabelFormatter } from '../../hooks/useLabelFormatter';
import { useLegendItemClick } from '../../hooks/useLegendItemClick';
import { useLongestYAxisLabelBar } from '../../hooks/useLongestYAxisLabelBar';
import { useObserveXAxisHeights } from '../../hooks/useObserveXAxisHeights';
import { useOnClickInternal } from '../../hooks/useOnClickInternal';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { ChartContainer } from '../../internal/ChartContainer';
import { ChartDataLabel } from '../../internal/ChartDataLabel';
import { defaultFormatter } from '../../internal/defaults';
import { tickLineConfig, tooltipContentStyle, tooltipFillOpacity } from '../../internal/staticProps';
import { getCellColors, resolvePrimaryAndSecondaryMeasures } from '../../internal/Utils';
import { XAxisTicks } from '../../internal/XAxisTicks';
import { YAxisTicks } from '../../internal/YAxisTicks';
import { BarChartPlaceholder } from './Placeholder';

const dimensionDefaults = {
  formatter: defaultFormatter
};

const measureDefaults = {
  formatter: defaultFormatter,
  opacity: 1
};

const valueAccessor =
  (attribute) =>
  ({ payload }) => {
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
   * Interval of dimension axis labels
   * @default 0
   */
  interval?: number;
}

export interface BarChartProps extends IChartBaseProps {
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
   * An array of config objects. Each object is defining one bar in the chart.
   *
   * #### Required properties
   * - `accessor`: string containing the path to the dataset key this bar should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * #### Optional properties
   *
   * - `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.
   * - `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_OrderedColor_` colors
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this bar.
   * - `DataLabel`: a custom component to be used for the data label
   * - `width`: bar width, defaults to `auto`
   * - `opacity`: bar opacity, defaults to `1`
   * - `stackId`: bars with the same stackId will be stacked
   * - `highlightColor`: function will be called to define a custom color of a specific element which matches the
   *    defined condition. Overwrites code>color</code> of the element.
   *
   */
  measures: MeasureConfig[];
}

/**
 * A `BarChart` is a data visualization where each category is represented by a rectangle, with the width of the rectangle being proportional to the values being plotted.
 */
const BarChart: FC<BarChartProps> = forwardRef((props: BarChartProps, ref: Ref<HTMLDivElement>) => {
  const {
    loading,
    dataset,
    noLegend,
    noAnimation,
    tooltipConfig,
    onDataPointClick,
    onLegendClick,
    onClick,
    style,
    className,
    slot,
    syncId,
    ChartPlaceholder,
    children,
    ...rest
  } = props;

  const chartConfig = {
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
    yAxisConfig: {},
    xAxisConfig: {},
    secondXAxisConfig: {},
    ...props.chartConfig
  };

  const { dimensions, measures } = usePrepareDimensionsAndMeasures(
    props.dimensions,
    props.measures,
    dimensionDefaults,
    measureDefaults
  );

  const tooltipValueFormatter = useTooltipFormatter(measures);

  const primaryDimension = dimensions[0];
  const { primaryMeasure, secondaryMeasure } = resolvePrimaryAndSecondaryMeasures(
    measures,
    chartConfig?.secondYAxis?.dataKey
  );

  const dataKeys = measures.map(({ accessor }) => accessor);
  const colorSecondY = chartConfig.secondYAxis
    ? dataKeys.findIndex((key) => key === chartConfig.secondYAxis?.dataKey)
    : 0;

  const [componentRef, chartRef] = useSyncRef<any>(ref);

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

  const onClickInternal = useOnClickInternal(onClick);

  const isBigDataSet = dataset?.length > 30;
  const primaryDimensionAccessor = primaryDimension?.accessor;

  const [width, legendPosition] = useLongestYAxisLabelBar(dataset, dimensions);
  const marginChart = useChartMargin(chartConfig.margin, chartConfig.zoomingTool);
  const [xAxisHeight] = useObserveXAxisHeights(chartRef, 1);
  const isRTL = useIsRTL(chartRef);

  const { isMounted, handleBarAnimationStart, handleBarAnimationEnd } = useCancelAnimationFallback(noAnimation);

  const { chartConfig: _0, dimensions: _1, measures: _2, ...propsWithoutOmitted } = rest;
  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      Placeholder={ChartPlaceholder ?? BarChartPlaceholder}
      ref={componentRef}
      style={style}
      className={className}
      slot={slot}
      resizeDebounce={chartConfig.resizeDebounce}
      {...propsWithoutOmitted}
    >
      <BarChartLib
        syncId={syncId}
        onClick={onClickInternal}
        stackOffset="sign"
        margin={marginChart}
        layout="vertical"
        data={dataset}
        barGap={chartConfig.barGap}
        className={
          typeof onDataPointClick === 'function' || typeof onClick === 'function' ? 'has-click-handler' : undefined
        }
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
            reversed={isRTL}
            {...chartConfig.xAxisConfig}
          />
        )}
        {chartConfig.secondYAxis?.dataKey && (
          <XAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            axisLine={{
              stroke: chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`
            }}
            tick={
              <XAxisTicks
                config={secondaryMeasure}
                secondYAxisConfig={{
                  color: chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`
                }}
              />
            }
            tickLine={{
              stroke: chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`
            }}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            label={{ value: chartConfig.secondYAxis.name, offset: 2, angle: +90, position: 'center' }}
            orientation="top"
            interval={0}
            xAxisId="secondary"
            type="number"
            {...chartConfig.secondXAxisConfig}
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
                orientation={isRTL ? 'right' : 'left'}
                {...chartConfig.yAxisConfig}
              />
            );
          })}
        {isMounted &&
          measures.map((element, index) => {
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
                onAnimationStart={handleBarAnimationStart}
                onAnimationEnd={handleBarAnimationEnd}
              >
                <LabelList
                  data={dataset}
                  valueAccessor={valueAccessor(element.accessor)}
                  content={<ChartDataLabel config={element} chartType="bar" position={'insideRight'} />}
                />
                {dataset.map((data, i) => {
                  return (
                    <Cell
                      key={i}
                      fill={getCellColors(element, data, index)}
                      stroke={getCellColors(element, data, index)}
                    />
                  );
                })}
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
          {...tooltipConfig}
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
        {children}
      </BarChartLib>
    </ChartContainer>
  );
});

BarChart.defaultProps = {
  noLegend: false,
  noAnimation: false
};

BarChart.displayName = 'BarChart';

export { BarChart };
