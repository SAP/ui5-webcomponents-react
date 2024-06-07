'use client';

import { enrichEventWithDetails, ThemingParameters, useIsRTL, useSyncRef } from '@ui5/webcomponents-react-base';
import type { CSSProperties } from 'react';
import { forwardRef, useCallback } from 'react';
import {
  Bar as Column,
  BarChart as ColumnChartLib,
  Brush,
  CartesianGrid,
  Cell,
  LabelList,
  Legend,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import type { YAxisProps } from 'recharts';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils.js';
import { useCancelAnimationFallback } from '../../hooks/useCancelAnimationFallback.js';
import { useChartMargin } from '../../hooks/useChartMargin.js';
import { useLabelFormatter } from '../../hooks/useLabelFormatter.js';
import { useLegendItemClick } from '../../hooks/useLegendItemClick.js';
import { useLongestYAxisLabel } from '../../hooks/useLongestYAxisLabel.js';
import { useObserveXAxisHeights } from '../../hooks/useObserveXAxisHeights.js';
import { useOnClickInternal } from '../../hooks/useOnClickInternal.js';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures.js';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter.js';
import type { IChartBaseProps } from '../../interfaces/IChartBaseProps.js';
import type { IChartDimension } from '../../interfaces/IChartDimension.js';
import type { IChartMeasure } from '../../interfaces/IChartMeasure.js';
import { ChartContainer } from '../../internal/ChartContainer.js';
import { ChartDataLabel } from '../../internal/ChartDataLabel.js';
import { defaultFormatter } from '../../internal/defaults.js';
import { tickLineConfig, tooltipContentStyle, tooltipFillOpacity } from '../../internal/staticProps.js';
import { getCellColors, resolvePrimaryAndSecondaryMeasures } from '../../internal/Utils.js';
import { XAxisTicks } from '../../internal/XAxisTicks.js';
import { YAxisTicks } from '../../internal/YAxisTicks.js';
import { ColumnChartPlaceholder } from './Placeholder.js';

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
   * Interval of axis label
   */
  interval?: YAxisProps['interval'];
}

export interface ColumnChartProps extends IChartBaseProps {
  /**
   * An array of config objects. Each object will define one dimension of the chart.
   *
   * **Required Properties**
   * - `accessor`: string containing the path to the dataset key the dimension should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * **Optional Properties**
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `interval`: number that controls how many ticks are rendered on the x axis
   *
   */
  dimensions: DimensionConfig[];
  /**
   * An array of config objects. Each object is defining one column in the chart.
   *
   * **Required properties**
   * - `accessor`: string containing the path to the dataset key this column should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * **Optional properties**
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

const valueAccessor =
  (attribute) =>
  ({ payload }) => {
    return getValueByDataKey(payload, attribute);
  };

/**
 * A `ColumnChart` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted.
 */
const ColumnChart = forwardRef<HTMLDivElement, ColumnChartProps>((props, ref) => {
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
    ChartPlaceholder,
    syncId,
    children,
    ...rest
  } = props;

  const chartConfig: ColumnChartProps['chartConfig'] = {
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
    yAxisConfig: {},
    xAxisConfig: {},
    secondYAxisConfig: {},
    ...props.chartConfig
  };
  const { referenceLine } = chartConfig;

  const { dimensions, measures } = usePrepareDimensionsAndMeasures(
    props.dimensions,
    props.measures,
    dimensionDefaults,
    measureDefaults
  );

  const tooltipValueFormatter = useTooltipFormatter(measures);

  const [yAxisWidth, legendPosition] = useLongestYAxisLabel(dataset, measures, chartConfig.legendPosition);

  const primaryDimension = dimensions[0];
  const { primaryMeasure, secondaryMeasure } = resolvePrimaryAndSecondaryMeasures(
    measures,
    chartConfig?.secondYAxis?.dataKey
  );

  const labelFormatter = useLabelFormatter(primaryDimension);
  const [componentRef, chartRef] = useSyncRef<any>(ref);

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

  const onClickInternal = useOnClickInternal(onClick);

  const isBigDataSet = dataset?.length > 30;
  const primaryDimensionAccessor = primaryDimension?.accessor;

  const marginChart = useChartMargin(chartConfig.margin, chartConfig.zoomingTool);
  const xAxisHeights = useObserveXAxisHeights(chartRef, props.dimensions.length);
  const isRTL = useIsRTL(chartRef);
  const { chartConfig: _0, dimensions: _1, measures: _2, ...propsWithoutOmitted } = rest;

  const { isMounted, handleBarAnimationStart, handleBarAnimationEnd } = useCancelAnimationFallback(noAnimation);

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      Placeholder={ChartPlaceholder ?? ColumnChartPlaceholder}
      ref={componentRef}
      style={style}
      className={className}
      slot={slot}
      resizeDebounce={chartConfig.resizeDebounce}
      {...propsWithoutOmitted}
    >
      <ColumnChartLib
        syncId={syncId}
        onClick={onClickInternal}
        stackOffset="sign"
        margin={marginChart}
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
        {chartConfig.xAxisVisible &&
          dimensions.map((dimension, index) => {
            return (
              <XAxis
                key={dimension.reactKey}
                dataKey={dimension.accessor}
                xAxisId={index}
                interval={dimension?.interval ?? (isBigDataSet ? 'preserveStart' : 0)}
                tick={<XAxisTicks config={dimension} />}
                tickLine={index < 1}
                axisLine={index < 1}
                height={xAxisHeights[index]}
                allowDuplicatedCategory={index === 0}
                reversed={isRTL}
                {...chartConfig.xAxisConfig}
              />
            );
          })}
        <YAxis
          orientation={isRTL === true ? 'right' : 'left'}
          axisLine={chartConfig.yAxisVisible}
          tickLine={tickLineConfig}
          yAxisId="left"
          interval={0}
          tick={<YAxisTicks config={primaryMeasure} />}
          width={yAxisWidth}
          {...chartConfig.yAxisConfig}
        />
        {chartConfig.secondYAxis?.dataKey && (
          <YAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            axisLine={{
              stroke: chartConfig.secondYAxis.color ?? `var(--sapChart_OrderedColor_${(colorSecondY % 11) + 1})`
            }}
            tick={
              <YAxisTicks
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
            orientation={isRTL === true ? 'left' : 'right'}
            yAxisId="right"
            interval={0}
            {...chartConfig.secondYAxisConfig}
          />
        )}
        {isMounted &&
          measures.map((element, index) => {
            return (
              <Column
                yAxisId={chartConfig.secondYAxis?.dataKey === element.accessor ? 'right' : 'left'}
                stackId={element.stackId}
                fillOpacity={element.opacity}
                key={element.reactKey}
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
                isAnimationActive={!noAnimation}
                onAnimationStart={handleBarAnimationStart}
                onAnimationEnd={handleBarAnimationEnd}
              >
                <LabelList
                  data={dataset}
                  valueAccessor={valueAccessor(element.accessor)}
                  content={<ChartDataLabel config={element} chartType="column" position={'insideTop'} />}
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
        {referenceLine && (
          <ReferenceLine
            {...referenceLine}
            stroke={referenceLine?.color ?? referenceLine?.stroke}
            y={referenceLine?.value ?? referenceLine?.y}
            yAxisId={referenceLine?.yAxisId ?? 'left'}
            label={referenceLine?.label}
          />
        )}
        {/*ToDo: remove conditional rendering once `active` is working again (https://github.com/recharts/recharts/issues/2703)*/}
        {tooltipConfig?.active !== false && (
          <Tooltip
            cursor={tooltipFillOpacity}
            formatter={tooltipValueFormatter}
            contentStyle={tooltipContentStyle}
            labelFormatter={labelFormatter}
            {...tooltipConfig}
          />
        )}
        {chartConfig.zoomingTool && (
          <Brush
            y={10}
            dataKey={primaryDimensionAccessor}
            tickFormatter={primaryDimension?.formatter}
            stroke={ThemingParameters.sapObjectHeader_BorderColor}
            travellerWidth={10}
            height={20}
          />
        )}
        {children}
      </ColumnChartLib>
    </ChartContainer>
  );
});

ColumnChart.displayName = 'ColumnChart';

export { ColumnChart };
