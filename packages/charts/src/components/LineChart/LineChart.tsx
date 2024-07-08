'use client';

import { enrichEventWithDetails, ThemingParameters, useIsRTL, useSyncRef } from '@ui5/webcomponents-react-base';
import { forwardRef, useCallback, useRef } from 'react';
import type { LineProps, YAxisProps } from 'recharts';
import {
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart as LineChartLib,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { useChartMargin } from '../../hooks/useChartMargin.js';
import { useLabelFormatter } from '../../hooks/useLabelFormatter.js';
import { useLegendItemClick } from '../../hooks/useLegendItemClick.js';
import { useLongestYAxisLabel } from '../../hooks/useLongestYAxisLabel.js';
import { useObserveXAxisHeights } from '../../hooks/useObserveXAxisHeights.js';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures.js';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter.js';
import type { IChartBaseProps } from '../../interfaces/IChartBaseProps.js';
import type { IChartDimension } from '../../interfaces/IChartDimension.js';
import type { IChartMeasure } from '../../interfaces/IChartMeasure.js';
import { ChartContainer } from '../../internal/ChartContainer.js';
import { ChartDataLabel } from '../../internal/ChartDataLabel.js';
import { defaultFormatter } from '../../internal/defaults.js';
import { tickLineConfig, tooltipContentStyle, tooltipFillOpacity, xAxisPadding } from '../../internal/staticProps.js';
import { resolvePrimaryAndSecondaryMeasures } from '../../internal/Utils.js';
import { XAxisTicks } from '../../internal/XAxisTicks.js';
import { YAxisTicks } from '../../internal/YAxisTicks.js';
import { LineChartPlaceholder } from './Placeholder.js';

interface MeasureConfig extends IChartMeasure {
  /**
   * Line Width
   * @default 1
   */
  width?: number;
  /**
   * Line Opacity
   * @default 1
   */
  opacity?: number;

  /**
   * Flag whether the line dot should be displayed or not.
   */
  showDot?: boolean;
  /**
   * This prop allows passing all [Line Properties](https://recharts.org/en-US/api/Line) of the Recharts library.
   *
   * __Note:__ It is possible to overwrite internal implementations. Please use with caution!
   */
  lineConfig?: LineProps;
}

interface DimensionConfig extends IChartDimension {
  interval?: YAxisProps['interval'];
}

export interface LineChartProps extends IChartBaseProps {
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
   * An array of config objects. Each object is defining one line in the chart.
   *
   * **Required properties**
   * - `accessor`: string containing the path to the dataset key this line should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * **Optional properties**
   *
   * - `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.
   * - `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this line.
   * - `DataLabel`: a custom component to be used for the data label
   * - `width`: line width, defaults to `1`
   * - `opacity`: line opacity, defaults to `1`
   * - `showDot`: Flag whether the line dot should be displayed or not.
   * - `lineConfig`: This prop allows passing all [Line Properties](https://recharts.org/en-US/api/Line) of the Recharts library.
   *
   */
  measures: MeasureConfig[];
}

const dimensionDefaults = {
  formatter: defaultFormatter
};

const measureDefaults = {
  formatter: defaultFormatter,
  width: 1,
  opacity: 1
};

/**
 * A `LineChart` is a type of chart used to show information that changes over time - it connects multiple dots.
 */
const LineChart = forwardRef<HTMLDivElement, LineChartProps>((props, ref) => {
  const {
    dataset,
    loading,
    loadingDelay,
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

  const chartConfig: LineChartProps['chartConfig'] = {
    yAxisVisible: false,
    xAxisVisible: true,
    gridStroke: ThemingParameters.sapList_BorderColor,
    gridHorizontal: true,
    gridVertical: false,
    legendPosition: 'bottom',
    legendHorizontalAlign: 'left',
    zoomingTool: false,
    resizeDebounce: 250,
    yAxisTicksVisible: true,
    yAxisConfig: {},
    xAxisConfig: {},
    secondYAxisConfig: {},
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

  const labelFormatter = useLabelFormatter(primaryDimension);

  const [componentRef, chartRef] = useSyncRef<any>(ref);

  const dataKeys = measures.map(({ accessor }) => accessor);
  const colorSecondY = chartConfig.secondYAxis
    ? dataKeys.findIndex((key) => key === chartConfig.secondYAxis?.dataKey)
    : 0;

  const onItemLegendClick = useLegendItemClick(onLegendClick);
  const preventOnClickCall = useRef(0);
  const onDataPointClickInternal = useCallback(
    (payload, eventOrIndex) => {
      if (eventOrIndex.dataKey && typeof onDataPointClick === 'function') {
        preventOnClickCall.current = 2;
        onDataPointClick(
          enrichEventWithDetails({} as any, {
            value: eventOrIndex.value,
            dataKey: eventOrIndex.dataKey,
            dataIndex: eventOrIndex.index,
            payload: eventOrIndex.payload
          })
        );
      } else if (typeof onClick === 'function' && preventOnClickCall.current === 0) {
        onClick(
          enrichEventWithDetails(eventOrIndex, {
            payload: payload?.activePayload?.[0]?.payload,
            activePayloads: payload?.activePayload
          })
        );
      }
      if (preventOnClickCall.current > 0) {
        preventOnClickCall.current -= 1;
      }
    },
    [onDataPointClick, preventOnClickCall.current]
  );

  const isBigDataSet = dataset?.length > 30;
  const primaryDimensionAccessor = primaryDimension?.accessor;

  const [yAxisWidth, legendPosition] = useLongestYAxisLabel(dataset, measures, chartConfig.legendPosition);
  const marginChart = useChartMargin(chartConfig.margin, chartConfig.zoomingTool);
  const xAxisHeights = useObserveXAxisHeights(chartRef, props.dimensions.length);
  const { chartConfig: _0, dimensions: _1, measures: _2, ...propsWithoutOmitted } = rest;
  const isRTL = useIsRTL(chartRef);
  const referenceLine = chartConfig.referenceLine;

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      loadingDelay={loadingDelay}
      Placeholder={ChartPlaceholder ?? LineChartPlaceholder}
      ref={componentRef}
      style={style}
      className={className}
      slot={slot}
      resizeDebounce={chartConfig.resizeDebounce}
      {...propsWithoutOmitted}
    >
      {/*@ts-expect-error: todo not yet compatible with React19*/}
      <LineChartLib
        syncId={syncId}
        margin={marginChart}
        data={dataset}
        onClick={onDataPointClickInternal}
        className={typeof onDataPointClick === 'function' ? 'has-click-handler' : undefined}
      >
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {dimensions.map((dimension, index) => {
          return (
            <XAxis
              key={dimension.reactKey}
              dataKey={dimension.accessor}
              xAxisId={index}
              interval={dimension?.interval ?? (isBigDataSet ? 'preserveStart' : 0)}
              tick={<XAxisTicks config={dimension} />}
              tickLine={index < 1}
              axisLine={index < 1}
              height={chartConfig.xAxisVisible ? xAxisHeights[index] : 0}
              padding={xAxisPadding}
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
          tickFormatter={primaryMeasure?.formatter}
          interval={0}
          tick={chartConfig.yAxisTicksVisible && <YAxisTicks config={primaryMeasure} />}
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
        {measures.map((element, index) => {
          return (
            <Line
              dot={element.showDot ?? !isBigDataSet}
              yAxisId={chartConfig.secondYAxis?.dataKey === element.accessor ? 'right' : 'left'}
              key={element.reactKey}
              name={element.label ?? element.accessor}
              strokeOpacity={element.opacity}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              label={isBigDataSet ? false : <ChartDataLabel config={element} chartType="line" position="top" />}
              type="monotone"
              dataKey={element.accessor}
              stroke={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              strokeWidth={element.width}
              activeDot={{ onClick: onDataPointClickInternal }}
              isAnimationActive={!noAnimation}
              {...element.lineConfig}
            />
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
      </LineChartLib>
    </ChartContainer>
  );
});

LineChart.displayName = 'LineChart';

export { LineChart };
