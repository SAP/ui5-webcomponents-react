'use client';

import { enrichEventWithDetails, ThemingParameters, useIsRTL, useSyncRef } from '@ui5/webcomponents-react-base';
import type { CSSProperties, FC } from 'react';
import React, { forwardRef, useCallback } from 'react';
import {
  Area,
  Bar,
  Brush,
  CartesianGrid,
  Cell,
  ComposedChart as ComposedChartLib,
  LabelList,
  Legend,
  Line,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { getValueByDataKey } from 'recharts/lib/util/ChartUtils.js';
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
import { ComposedChartPlaceholder } from './Placeholder.js';

const dimensionDefaults = {
  formatter: defaultFormatter
};

const measureDefaults = {
  formatter: defaultFormatter,
  opacity: 1
};

interface MeasureConfig extends IChartMeasure {
  /**
   * width of the current chart element, defaults to `1` for `lines` and `20` for bars
   */
  width?: number;
  /**
   * Opacity
   * @default 1
   */
  opacity?: number;
  /**
   * Chart type
   */
  type: AvailableChartTypes;
  /**
   * bar Stack ID
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
  interval?: number;
}

export interface ComposedChartProps extends IChartBaseProps {
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
   * An array of config objects. Each object is defining one element in the chart.
   *
   * **Required properties**
   * - `accessor`: string containing the path to the dataset key this element should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   * - `type`: string which chart element to show. Possible values: `line`, `bar`, `area`.
   *
   * **Optional properties**
   *
   * - `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.
   * - `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this element.
   * - `DataLabel`: a custom component to be used for the data label
   * - `width`: width of the current chart element, defaults to `1` for `lines` and `20` for bars
   * - `opacity`: element opacity, defaults to `1`
   * - `stackId`: bars with the same stackId will be stacked
   * - `highlightColor`: function will be called to define a custom color of a specific element which matches the
   *    defined condition. Overwrites code>color</code> of the element.
   *
   */
  measures: MeasureConfig[];
  /**
   * layout for showing measures. `horizontal` bars would equal the column chart, `vertical` would be a bar chart.
   * Default Value: `horizontal`
   */
  layout?: 'horizontal' | 'vertical';
}

const ChartTypes = {
  line: Line,
  bar: Bar,
  area: Area
};

type AvailableChartTypes = 'line' | 'bar' | 'area' | string;

/**
 * The `ComposedChart` enables you to combine different chart types in one chart, e.g. showing bars together with lines.
 */
const ComposedChart = forwardRef<HTMLDivElement, ComposedChartProps>((props, ref) => {
  const {
    loading,
    dataset,
    onDataPointClick,
    noLegend,
    noAnimation,
    tooltipConfig,
    onLegendClick,
    onClick,
    layout,
    style,
    className,
    slot,
    syncId,
    ChartPlaceholder,
    children,
    ...rest
  } = props;

  const [componentRef, chartRef] = useSyncRef<any>(ref);

  const chartConfig = {
    yAxisLabelsVisible: true,
    yAxisVisible: false,
    xAxisVisible: true,
    gridStroke: ThemingParameters.sapList_BorderColor,
    gridHorizontal: true,
    gridVertical: false,
    legendPosition: 'bottom',
    legendHorizontalAlign: 'left',
    zoomingTool: false,
    resizeDebounce: 250,
    yAxisWidth: null,
    yAxisConfig: {},
    xAxisConfig: {},
    secondYAxisConfig: {},
    secondXAxisConfig: {},
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

  const primaryDimension = dimensions[0];
  const { primaryMeasure, secondaryMeasure } = resolvePrimaryAndSecondaryMeasures(
    measures,
    chartConfig?.secondYAxis?.dataKey
  );

  const labelFormatter = useLabelFormatter(primaryDimension);

  const dataKeys = measures.map(({ accessor }) => accessor);
  const colorSecondY = chartConfig.secondYAxis
    ? dataKeys.findIndex((key) => key === chartConfig.secondYAxis?.dataKey)
    : 0;

  const valueAccessor =
    (attribute) =>
    ({ payload }) => {
      return getValueByDataKey(payload, attribute);
    };

  const onDataPointClickInternal = (payload, eventOrIndex, event) => {
    if (typeof onDataPointClick === 'function') {
      if (typeof eventOrIndex === 'number') {
        const payloadValueLength = Array.isArray(payload?.value);
        onDataPointClick(
          enrichEventWithDetails(event, {
            value: payloadValueLength ? payload.value[1] - payload.value[0] : payload.value,
            dataIndex: payload.index ?? eventOrIndex,
            dataKey: payloadValueLength
              ? Object.keys(payload).filter((key) =>
                  payload.value.length
                    ? payload[key] === payload.value[1] - payload.value[0]
                    : payload[key] === payload.value && key !== 'value'
                )[0]
              : payload.dataKey ??
                Object.keys(payload).find((key) => payload[key] && payload[key] === payload.value && key !== 'value'),
            payload: payload.payload
          })
        );
      } else {
        onDataPointClick(
          enrichEventWithDetails({} as any, {
            value: Array.isArray(eventOrIndex.value)
              ? eventOrIndex.value[1] - eventOrIndex.value[0]
              : eventOrIndex.value,
            dataKey: eventOrIndex.dataKey,
            dataIndex: eventOrIndex.index,
            payload: eventOrIndex.payload
          })
        );
      }
    }
  };

  const onItemLegendClick = useLegendItemClick(onLegendClick);
  const onClickInternal = useOnClickInternal(onClick);

  const isBigDataSet = dataset?.length > 30 ?? false;
  const primaryDimensionAccessor = primaryDimension?.accessor;

  const [yAxisWidth, legendPosition] = useLongestYAxisLabel(dataset, layout === 'vertical' ? dimensions : measures);

  const marginChart = useChartMargin(chartConfig.margin, chartConfig.zoomingTool);
  const xAxisHeights = useObserveXAxisHeights(chartRef, layout === 'vertical' ? 1 : props.dimensions.length);

  const measureAxisProps = {
    axisLine: chartConfig.yAxisVisible,
    tickLine: tickLineConfig,
    tickFormatter: primaryMeasure?.formatter,
    interval: 0
  };

  const Placeholder = useCallback(() => {
    return <ComposedChartPlaceholder layout={layout} measures={measures} />;
  }, [layout, measures]);

  const { chartConfig: _0, dimensions: _1, measures: _2, ...propsWithoutOmitted } = rest;
  const isRTL = useIsRTL(chartRef);

  return (
    <ChartContainer
      ref={componentRef}
      loading={loading}
      dataset={dataset}
      Placeholder={ChartPlaceholder ?? Placeholder}
      style={style}
      className={className}
      slot={slot}
      resizeDebounce={chartConfig.resizeDebounce}
      {...propsWithoutOmitted}
    >
      <ComposedChartLib
        syncId={syncId}
        onClick={onClickInternal}
        stackOffset="sign"
        margin={marginChart}
        data={dataset}
        layout={layout}
        className={
          typeof onDataPointClick === 'function' || typeof onClick === 'function' ? 'has-click-handler' : undefined
        }
      >
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {dimensions.map((dimension, index) => {
          let AxisComponent;
          const axisProps: any = {
            dataKey: dimension.accessor,
            interval: dimension?.interval ?? (isBigDataSet ? 'preserveStart' : 0),
            tickLine: index < 1,
            axisLine: index < 1,
            allowDuplicatedCategory: index === 0
          };

          if (layout === 'vertical') {
            axisProps.type = 'category';
            axisProps.visible = false;
            axisProps.hide = !chartConfig.yAxisVisible;
            axisProps.tick = <YAxisTicks config={dimension} />;
            axisProps.yAxisId = index;
            axisProps.width = chartConfig.yAxisWidth ?? yAxisWidth;
            AxisComponent = YAxis;
            axisProps.orientation = isRTL ? 'right' : 'left';
          } else {
            axisProps.dataKey = dimension.accessor;
            axisProps.tick = <XAxisTicks config={dimension} />;
            axisProps.hide = !chartConfig.xAxisVisible;
            axisProps.xAxisId = index;
            axisProps.height = xAxisHeights[index];
            AxisComponent = XAxis;
            axisProps.reversed = isRTL;
          }

          return <AxisComponent key={dimension.accessor} {...axisProps} />;
        })}
        {layout === 'horizontal' && (
          <YAxis
            {...measureAxisProps}
            yAxisId="primary"
            width={chartConfig.yAxisWidth ?? yAxisWidth}
            orientation={isRTL ? 'right' : 'left'}
            tick={chartConfig.yAxisLabelsVisible ? <YAxisTicks config={primaryMeasure} /> : false}
            {...chartConfig.yAxisConfig}
          />
        )}
        {layout === 'vertical' && (
          <XAxis
            {...measureAxisProps}
            reversed={isRTL}
            xAxisId="primary"
            type="number"
            tick={<XAxisTicks config={primaryMeasure} />}
            {...chartConfig.xAxisConfig}
          />
        )}

        {chartConfig.secondYAxis?.dataKey && layout === 'horizontal' && (
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
            label={{
              value: chartConfig.secondYAxis.name,
              offset: 2,
              angle: +90,
              position: 'center'
            }}
            orientation={isRTL ? 'left' : 'right'}
            interval={0}
            yAxisId="secondary"
            {...chartConfig.secondYAxisConfig}
          />
        )}
        {chartConfig.secondYAxis?.dataKey && layout === 'vertical' && (
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
        {referenceLine && (
          <ReferenceLine
            {...referenceLine}
            stroke={referenceLine?.color ?? referenceLine?.stroke}
            y={referenceLine?.value ? (layout === 'horizontal' ? referenceLine?.value : undefined) : referenceLine?.y}
            x={referenceLine?.value ? (layout === 'vertical' ? referenceLine?.value : undefined) : referenceLine?.x}
            yAxisId={referenceLine?.yAxisId ?? layout === 'horizontal' ? 'primary' : undefined}
            xAxisId={referenceLine?.xAxisId ?? layout === 'vertical' ? 'primary' : undefined}
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
        {measures?.map((element, index) => {
          const ChartElement = ChartTypes[element.type] as any as FC<any>;

          const chartElementProps: any = {
            isAnimationActive: noAnimation === false
          };
          let labelPosition = 'top';

          switch (element.type) {
            case 'line':
              chartElementProps.activeDot = {
                onClick: onDataPointClickInternal
              };
              chartElementProps.strokeWidth = element.width;
              chartElementProps.strokeOpacity = element.opacity;
              chartElementProps.dot = element.showDot ?? !isBigDataSet;
              break;
            case 'bar':
              chartElementProps.hide = element.hide;
              chartElementProps.fillOpacity = element.opacity;
              chartElementProps.strokeOpacity = element.opacity;
              chartElementProps.barSize = element.width;
              chartElementProps.onClick = onDataPointClickInternal;
              chartElementProps.stackId = element.stackId ?? undefined;
              chartElementProps.labelPosition = element.stackId ? 'insideTop' : 'top';
              if (layout === 'vertical') {
                labelPosition = 'insideRight';
              } else {
                labelPosition = 'insideTop';
              }
              break;
            case 'area':
              chartElementProps.dot = !isBigDataSet;
              chartElementProps.fillOpacity = 0.3;
              chartElementProps.strokeOpacity = element.opacity;
              chartElementProps.strokeWidth = element.width;
              chartElementProps.activeDot = {
                onClick: onDataPointClickInternal
              };
              break;
          }

          if (layout === 'vertical') {
            chartElementProps.xAxisId = chartConfig.secondYAxis?.dataKey === element.accessor ? 'secondary' : 'primary';
          } else {
            chartElementProps.yAxisId = chartConfig.secondYAxis?.dataKey === element.accessor ? 'secondary' : 'primary';
          }
          return (
            <ChartElement
              key={element.accessor}
              name={element.label ?? element.accessor}
              label={
                element.type === 'bar' || isBigDataSet ? undefined : (
                  <ChartDataLabel config={element} chartType={element.type} position={labelPosition} />
                )
              }
              stroke={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              fill={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              type="monotone"
              dataKey={element.accessor}
              {...chartElementProps}
            >
              {element.type === 'bar' && (
                <>
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
                </>
              )}
            </ChartElement>
          );
        })}
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
      </ComposedChartLib>
    </ChartContainer>
  );
});

ComposedChart.defaultProps = {
  noLegend: false,
  noAnimation: false,
  layout: 'horizontal'
};

ComposedChart.displayName = 'ComposedChart';

export { ComposedChart };
