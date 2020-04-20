import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { LineChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/LineChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { ComponentType, CSSProperties, FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import {
  Area,
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart as ComposedChartLib,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { RechartBasePropsNew } from '../../interfaces/RechartBaseProps';
import { useDataLabel, useAxisLabel, useSecondaryDimensionLabel } from '../../hooks/useLabelElements';
import { useChartMargin } from '../../hooks/useChartMargin';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { IChartDimension } from '../../interfaces/IChartDimension';

const dimensionDefaults = {
  formatter: (d) => d
};

const measureDefaults = {
  formatter: (d) => d,
  opacity: 1,
  lineWidth: 1,
  barWidth: 20
};

interface MeasureConfig extends IChartMeasure {
  /**
   * Line Width
   * @default 1
   */
  lineWidth?: number;
  /**
   * Bar Width
   * @default 1
   */
  barWidth?: number;
  /**
   * Opacity
   * @default 1
   */
  opacity?: number;
  /**
   * Chart type
   */
  type: AvailableChartTypes;
}

interface DimensionConfig extends IChartDimension {
  interval?: number;
}

interface ComposedChartProps extends RechartBasePropsNew {
  dimensions: DimensionConfig[];
  /**
   * An array of config objects. Each object is defining one element in the chart.
   *
   * <h4>Required properties</h4>
   * - `accessor`: string containing the path to the dataset key this element should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * <h4>Optional properties</h4>
   *
   * - `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.
   * - `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this element.
   * - `DataLabel`: a custom component to be used for the data label
   * - `lineWidth`: lineWidth, defaults to `1`
   * - `barWidth`: barWidth, defaults to `20`
   * - `opacity`: element opacity, defaults to `1`
   *
   */
  measures: MeasureConfig[];
}

enum ChartTypes {
  line = Line,
  bar = Bar,
  area = Area
}

const BAR_DEFAULT_PADDING = 20;

type AvailableChartTypes = 'line' | 'bar' | 'area' | string;

/**
 * <code>import { ComposedChart } from '@ui5/webcomponents-react-charts/lib/next/ComposedChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const ComposedChart: FC<ComposedChartProps> = forwardRef((props: ComposedChartProps, ref: Ref<any>) => {
  const {
    loading,
    dataset,
    onDataPointClick,
    noLegend = false,
    onLegendClick,
    chartConfig = {
      margin: {},
      yAxisVisible: false,
      xAxisVisible: true,
      gridStroke: ThemingParameters.sapList_BorderColor,
      gridHorizontal: true,
      gridVertical: false,
      yAxisId: '',
      yAxisColor: ThemingParameters.sapList_BorderColor,
      legendPosition: 'top',
      zoomingTool: false,
      dataLabel: true,
      barSize: 20,
      barGap: undefined,
      stacked: false,
      secondYAxis: {
        name: undefined,
        dataKey: undefined,
        color: undefined
      }
    },
    style,
    className,
    tooltip,
    slot
  } = props;

  const chartRef = useConsolidatedRef<any>(ref);

  const { dimensions, measures } = usePrepareDimensionsAndMeasures(
    props.dimensions,
    props.measures,
    dimensionDefaults,
    measureDefaults
  );

  const tooltipValueFormatter = useTooltipFormatter(measures);

  const primaryDimension = dimensions[0];
  const primaryMeasure = measures[0];

  const dataKeys = measures.map(({ accessor }) => accessor);
  const colorSecondY = chartConfig.secondYAxis
    ? dataKeys.findIndex((key) => key === chartConfig.secondYAxis.dataKey)
    : 0;

  const onDataPointClickInternal = useCallback(
    (payload, eventOrIndex, event) => {
      if (payload.name && onDataPointClick) {
        onDataPointClick(
          enrichEventWithDetails(event ?? eventOrIndex, {
            value: payload.value.length ? payload.value[1] - payload.value[0] : payload.value,
            xIndex: payload.index ?? eventOrIndex,
            dataKey: payload.value.length
              ? Object.keys(payload).filter((key) =>
                  payload.value.length
                    ? payload[key] === payload.value[1] - payload.value[0]
                    : payload[key] === payload.value && key !== 'value'
                )[0]
              : payload.dataKey ??
                Object.keys(payload).find((key) => payload[key] === payload.value && key !== 'value'),
            payload: payload.payload
          })
        );
      } else {
        onDataPointClick(
          enrichEventWithDetails(
            {},
            {
              value: eventOrIndex.value,
              dataKey: eventOrIndex.dataKey,
              xIndex: eventOrIndex.index,
              payload: eventOrIndex.payload
            }
          )
        );
      }
    },
    [onDataPointClick]
  );

  const onItemLegendClick = useLegendItemClick(onLegendClick);

  const paddingCharts = useMemo(
    () =>
      measures?.reduce((acc, chartElement) => {
        if (chartElement.type === 'bar') {
          // @ts-ignore
          acc += chartElement?.barSize ?? 20;
        }
        return acc;
      }, BAR_DEFAULT_PADDING),
    [measures]
  );

  const SecondaryDimensionLabel = useSecondaryDimensionLabel();

  const isBigDataSet = dataset?.length > 30 ?? false;
  const primaryDimensionAccessor = primaryDimension?.accessor;

  const marginChart = useChartMargin(
    dataset,
    (d) => d,
    primaryDimensionAccessor,
    chartConfig.margin,
    false,
    dimensions.length > 1,
    chartConfig.zoomingTool
  );

  const bigDataSet = dataset?.length > 30 ?? false;

  return (
    <ChartContainer
      ref={chartRef}
      loading={loading}
      dataset={dataset}
      Placeholder={LineChartPlaceholder}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
    >
      <ComposedChartLib margin={marginChart} data={dataset}>
        <CartesianGrid
          vertical={chartConfig.gridVertical ?? false}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke ?? ThemingParameters.sapList_BorderColor}
        />
        {(chartConfig.xAxisVisible ?? true) &&
          dimensions.map((dimension, index) => {
            const XAxisLabel = useAxisLabel(dimension.formatter);
            return (
              <XAxis
                key={dimension.accessor}
                dataKey={dimension.accessor}
                xAxisId={index}
                interval={dimension.interval ?? isBigDataSet ? 2 : 0}
                tick={index === 0 ? XAxisLabel : SecondaryDimensionLabel}
                tickLine={index < 1}
                axisLine={index < 1}
                padding={{ left: paddingCharts / 2, right: paddingCharts / 2 }}
              />
            );
          })}
        <YAxis
          axisLine={chartConfig.yAxisVisible ?? false}
          tickLine={false}
          yAxisId="left"
          tickFormatter={primaryMeasure?.formatter}
          interval={0}
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
        <Tooltip cursor={{ fillOpacity: 0.3 }} formatter={tooltipValueFormatter} />
        {!noLegend && <Legend verticalAlign={chartConfig.legendPosition ?? 'top'} onClick={onItemLegendClick} />}
        {measures?.map((element, index) => {
          const ComposedDataLabel = useDataLabel(
            !element.hideDataLabel,
            element.DataLabel,
            element.formatter,
            element.type === 'bar' ? chartConfig.stacked : false,
            false,
            element.type === 'line' || element.type === 'area'
          );
          const ChartElement = (ChartTypes[element.type] as any) as FC<any>;

          const chartElementProps: any = {};

          switch (element.type) {
            case 'line':
              chartElementProps.activeDot = {
                onClick: onDataPointClickInternal
              };
              chartElementProps.label = bigDataSet ? false : ComposedDataLabel;
              chartElementProps.strokeWidth = element.lineWidth;
              chartElementProps.strokeOpacity = element.opacity;
              chartElementProps.name = element.label ?? element.accessor;
              break;
            case 'bar':
              chartElementProps.fillOpacity = element.opacity;
              chartElementProps.strokeOpacity = element.opacity;
              chartElementProps.barSize = element.barWidth;
              chartElementProps.onClick = onDataPointClickInternal;
              chartElementProps.label = ComposedDataLabel;
              chartElementProps.name = element.label ?? element.accessor;
              break;
            case 'area':
              chartElementProps.fillOpacity = 0.3;
              chartElementProps.strokeOpacity = element.opacity;
              chartElementProps.onClick = onDataPointClickInternal;
              chartElementProps.label = bigDataSet ? false : ComposedDataLabel;
              chartElementProps.strokeWidth = element.lineWidth;
              chartElementProps.name = element.label ?? element.accessor;
              break;
          }
          return (
            <ChartElement
              yAxisId={chartConfig?.secondYAxis?.dataKey === element.accessor ? 'right' : 'left'}
              stackId={chartConfig.stacked ? 'A' : undefined}
              key={element.accessor}
              name={element.label ?? element.accessor}
              label={isBigDataSet ? false : ComposedDataLabel}
              stroke={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              fill={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              type="monotone"
              dataKey={element.accessor}
              {...chartElementProps}
            />
          );
        })}
        {chartConfig.zoomingTool && (
          <Brush
            y={0}
            dataKey={primaryDimensionAccessor}
            stroke={ThemingParameters.sapObjectHeader_BorderColor}
            travellerWidth={10}
            height={20}
          />
        )}
      </ComposedChartLib>
    </ChartContainer>
  );
});

ComposedChart.displayName = 'ComposedChart';

export { ComposedChart };
