import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { LineChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/LineChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { FC, forwardRef, Ref, useCallback } from 'react';
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
import { useChartMargin } from '../../hooks/useChartMargin';
import { useAxisLabel, useDataLabel, useSecondaryDimensionLabel } from '../../hooks/useLabelElements';
import { usePrepareDimensionsAndMeasures } from '../../hooks/usePrepareDimensionsAndMeasures';
import { useTooltipFormatter } from '../../hooks/useTooltipFormatter';
import { IChartDimension } from '../../interfaces/IChartDimension';
import { IChartMeasure } from '../../interfaces/IChartMeasure';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';

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
}

interface DimensionConfig extends IChartDimension {
  interval?: number;
}

interface LineChartProps extends RechartBaseProps {
  dimensions: DimensionConfig[];
  /**
   * An array of config objects. Each object is defining one line in the chart.
   *
   * <h4>Required properties</h4>
   * - `accessor`: string containing the path to the dataset key this line should display. Supports object structures by using <code>'parent.child'</code>.
   *   Can also be a getter.
   *
   * <h4>Optional properties</h4>
   *
   * - `label`: Label to display in legends or tooltips. Falls back to the <code>accessor</code> if not present.
   * - `color`: any valid CSS Color or CSS Variable. Defaults to the `sapChart_Ordinal` colors
   * - `formatter`: function will be called for each data label and allows you to format it according to your needs
   * - `hideDataLabel`: flag whether the data labels should be hidden in the chart for this line.
   * - `DataLabel`: a custom component to be used for the data label
   * - `width`: line width, defaults to `1`
   * - `opacity`: line opacity, defaults to `1`
   *
   */
  measures: MeasureConfig[];
}

const dimensionDefaults = {
  formatter: (d) => d
};

const measureDefaults = {
  formatter: (d) => d,
  width: 1,
  opacity: 1
};

/**
 * <code>import { LineChart } from '@ui5/webcomponents-react-charts/lib/next/LineChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const LineChart: FC<LineChartProps> = forwardRef((props: LineChartProps, ref: Ref<any>) => {
  const {
    dataset,
    loading,
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
    (payload, eventOrIndex) => {
      if (eventOrIndex.dataKey && onDataPointClick) {
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

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      Placeholder={LineChartPlaceholder}
      ref={chartRef}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
    >
      <LineChartLib margin={marginChart} data={dataset} onClick={onDataPointClickInternal}>
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
                interval={primaryDimension?.interval ?? isBigDataSet ? 'preserveStart' : 0}
                tick={index === 0 ? XAxisLabel : SecondaryDimensionLabel}
                tickLine={index < 1}
                axisLine={index < 1}
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
        {measures.map((element, index) => {
          const LineDataLabel = useDataLabel(
            !element.hideDataLabel,
            element.DataLabel,
            element.formatter,
            false,
            false,
            true
          );
          return (
            <Line
              dot={!isBigDataSet}
              yAxisId={chartConfig?.secondYAxis?.dataKey === element.accessor ? 'right' : 'left'}
              key={element.accessor}
              name={element.label ?? element.accessor}
              strokeOpacity={element.opacity}
              label={isBigDataSet ? false : LineDataLabel}
              type="monotone"
              dataKey={element.accessor}
              stroke={element.color ?? `var(--sapChart_OrderedColor_${(index % 11) + 1})`}
              strokeWidth={element.width}
              activeDot={{ onClick: onDataPointClickInternal }}
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
            y={0}
            dataKey={primaryDimensionAccessor}
            stroke={ThemingParameters.sapObjectHeader_BorderColor}
            travellerWidth={10}
            height={20}
          />
        )}
      </LineChartLib>
    </ChartContainer>
  );
});

LineChart.displayName = 'LineChart';

export { LineChart };
