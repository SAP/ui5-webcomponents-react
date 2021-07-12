import { useIsRTL, usePassThroughHtmlProps, useConsolidatedRef } from '@ui5/webcomponents-react-base/dist/hooks';
import { ThemingParameters } from '@ui5/webcomponents-react-base/dist/ThemingParameters';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/dist/Utils';
import { TrendLinePlaceholder } from '@ui5/webcomponents-react-charts/dist/TrendLinePlaceholder';
import { ColumnChartPlaceholder } from '@ui5/webcomponents-react-charts/dist/ColumnChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/dist/components/ChartContainer';
import { ChartDataLabel } from '@ui5/webcomponents-react-charts/dist/components/ChartDataLabel';
import { XAxisTicks } from '@ui5/webcomponents-react-charts/dist/components/XAxisTicks';
import { YAxisTicks } from '@ui5/webcomponents-react-charts/dist/components/YAxisTicks';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/dist/useLegendItemClick';
import React, { FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import {
  Bar as Column,
  BarChart as ColumnChartLib,
  Brush,
  CartesianGrid,
  Label,
  LabelList,
  Legend,
  Line,
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
import { useOnClickInternal } from '../../hooks/useOnClickInternal';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { IChartBaseProps } from '../../interfaces/IChartBaseProps';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { defaultFormatter } from '../../internal/defaults';
import { tickLineConfig, tooltipContentStyle, tooltipFillOpacity } from '../../internal/staticProps';
import { LineChart as LineChartLib } from 'recharts';

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

export interface ColumnChartWithTrendProps extends IChartBaseProps {
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
  /**
   * RATIO HEIGHT TREND LINE
   */
  trendLineHeight?: number;
  /**
   * RATIO HEIGHT COLUMN CHART
   */
  columnChartHeight?: number;
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

type AvailableChartTypes = 'line' | 'column' | string;

/**
 * A `ColumnChartWithTrend` is a data visualization where each category is represented by a rectangle, with the height of the rectangle being proportional to the values being plotted amd a trend line which is displayed above the column chart.
 */
const ColumnChartWithTrend: FC<ColumnChartWithTrendProps> = forwardRef(
  (props: ColumnChartWithTrendProps, ref: Ref<HTMLDivElement>) => {
    const {
      loading,
      dataset,
      noLegend,
      noAnimation,
      onDataPointClick,
      onLegendClick,
      onClick,
      style,
      className,
      tooltip,
      slot,
      trendLineHeight = 0.2,
      columnChartHeight = 0.8
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

    const isBigDataSet = dataset?.length > 30 ?? false;
    const primaryDimensionAccessor = primaryDimension?.accessor;

    const marginChart = useChartMargin(chartConfig.margin, chartConfig.zoomingTool);
    const xAxisHeights = useObserveXAxisHeights(chartRef, props.dimensions.length);
    const passThroughProps = usePassThroughHtmlProps(props, ['onDataPointClick', 'onLegendClick', 'onClick']);
    const isRTL = useIsRTL(chartRef);

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ChartContainer
          dataset={dataset}
          loading={loading}
          Placeholder={TrendLinePlaceholder}
          ref={chartRef}
          style={{ ...style, height: `calc(${style.height} * ${trendLineHeight})` }}
          className={className}
          tooltip={tooltip}
          slot={slot}
          resizeDebounce={chartConfig.resizeDebounce}
          {...passThroughProps}
        >
          <LineChartLib
            margin={marginChart}
            syncId="anyId"
            data={dataset}
            onClick={onDataPointClickInternal}
            className={typeof onDataPointClick === 'function' ? 'has-click-handler' : undefined}
          >
            <YAxis
              orientation={isRTL === true ? 'right' : 'left'}
              axisLine={false}
              tickLine={false}
              tick={false}
              yAxisId="left"
              width={yAxisWidth}
            />
            {measures.map((element, index) => {
              if (element.type === 'line') {
                return (
                  <Line
                    dot={element.showDot ?? !isBigDataSet}
                    yAxisId={chartConfig.secondYAxis?.dataKey === element.accessor ? 'right' : 'left'}
                    key={element.accessor}
                    name={element.label ?? element.accessor}
                    strokeOpacity={element.opacity}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    label={isBigDataSet ? false : <ChartDataLabel config={element} chartType="line" position="top" />}
                    type="monotone"
                    dataKey={element.accessor}
                    stroke={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
                    strokeWidth={element.width}
                    activeDot={{ onClick: onDataPointClickInternal } as any}
                    isAnimationActive={noAnimation === false}
                  />
                );
              }
            })}
            {chartConfig.referenceLine && (
              <ReferenceLine
                stroke={chartConfig.referenceLine.color}
                y={chartConfig.referenceLine.value}
                yAxisId={'left'}
              >
                <Label>{chartConfig.referenceLine.label}</Label>
              </ReferenceLine>
            )}
            <Tooltip
              cursor={tooltipFillOpacity}
              formatter={tooltipValueFormatter}
              contentStyle={tooltipContentStyle}
              labelFormatter={labelFormatter}
            />
            {props.children}
          </LineChartLib>
        </ChartContainer>
        <ChartContainer
          Placeholder={ColumnChartPlaceholder}
          dataset={dataset}
          ref={chartRef}
          style={{ ...style, height: `calc(${style.height} * ${columnChartHeight})` }}
          className={className}
          tooltip={tooltip}
          slot={slot}
          resizeDebounce={chartConfig.resizeDebounce}
          {...passThroughProps}
        >
          <ColumnChartLib
            syncId="anyId"
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
                    key={dimension.accessor}
                    dataKey={dimension.accessor}
                    xAxisId={index}
                    interval={dimension?.interval ?? (isBigDataSet ? 'preserveStart' : 0)}
                    tick={<XAxisTicks config={dimension} />}
                    tickLine={index < 1}
                    axisLine={index < 1}
                    height={xAxisHeights[index]}
                    allowDuplicatedCategory={index === 0}
                    reversed={isRTL}
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
            />
            {measures.map((element, index) => {
              if (element.type === 'column') {
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
              }
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
              <ReferenceLine
                stroke={chartConfig.referenceLine.color}
                y={chartConfig.referenceLine.value}
                yAxisId="left"
              >
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
            {props.children}
          </ColumnChartLib>
        </ChartContainer>
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
