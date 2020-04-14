import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { LineChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/LineChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import React, { CSSProperties, FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import {
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart as LineChartLib,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useChartMargin } from '../../hooks/useChartMargin';
import { useAxisLabel, useDataLabel, useSecondaryDimensionLabel } from '../../hooks/useLabelElements';
import { RechartBasePropsNew } from '../../interfaces/RechartBaseProps';

export interface LabelElement {
  accessor: string;
  formatter?: (value: any) => string;
  interval?: number;
}

export interface ValueElement {
  color?: CSSProperties['color'];
  accessor: string;
  label?: string;
  formatter?: (value: any) => string;
  hideDataLabel?: boolean;
}

interface LineChartProps extends RechartBasePropsNew {
  labels: LabelElement[];
  values: ValueElement[];
}

/**
 * <code>import { LineChart } from '@ui5/webcomponents-react-charts/lib/next/LineChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const LineChart: FC<LineChartProps> = forwardRef((props: LineChartProps, ref: Ref<any>) => {
  const {
    values,
    labels,
    dataset,
    loading,
    noLegend = false,
    onDataPointClick,
    onLegendClick,
    DataLabel = undefined,
    chartConfig = {
      margin: {},
      yAxisVisible: false,
      xAxisVisible: true,
      gridStroke: ThemingParameters.sapList_BorderColor,
      gridHorizontal: true,
      gridVertical: false,
      yAxisColor: ThemingParameters.sapList_BorderColor,
      legendPosition: 'top',
      strokeWidth: 1,
      zoomingTool: false,
      strokeOpacity: 1,
      secondYAxis: {
        dataKey: undefined,
        name: undefined,
        color: undefined,
      },
      referenceLine: {
        label: undefined,
        value: undefined,
        color: undefined,
      },
    },
    style,
    className,
    tooltip,
    slot,
  } = props;
  useInitialize();

  const dimensions = useMemo(() => {
    return labels.map((label) => {
      return {
        formatter: (d) => d,
        ...label,
      };
    });
  }, [labels]);

  const measures = useMemo(() => {
    return values.map((value) => {
      return {
        formatter: (d) => d,
        ...value,
      };
    });
  }, [values]);

  const tooltipValueFormatter = useCallback(
    (value, name) => {
      const { formatter } = measures.find(({ accessor }) => accessor === name);
      if (formatter && typeof formatter === 'function') {
        return formatter(value);
      }
      return value;
    },
    [measures]
  );

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
              payload: eventOrIndex.payload,
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
            console.log(dimension);
            return (
              <XAxis
                key={dimension.accessor}
                dataKey={dimension.accessor}
                xAxisId={index}
                interval={dimension.interval ?? isBigDataSet ? 2 : 0}
                tick={index === 0 ? XAxisLabel : SecondaryDimensionLabel}
                tickLine={index >= 0}
                axisLine={index >= 0}
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
            stroke={chartConfig.secondYAxis.color ?? `var(--sapUiChartAccent${(colorSecondY % 12) + 1})`}
            label={{ value: chartConfig.secondYAxis.name, offset: 2, angle: +90, position: 'center' }}
            orientation="right"
            yAxisId="right"
            interval={0}
          />
        )}
        {measures.map((element, index) => {
          const LineDataLabel = useDataLabel(!element.hideDataLabel, DataLabel, element.formatter, false, false, true);
          return (
            <Line
              yAxisId={
                chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey === element.accessor ? 'right' : 'left'
              }
              key={element.accessor}
              name={element.label ?? element.accessor}
              strokeOpacity={chartConfig.strokeOpacity}
              label={isBigDataSet ? false : LineDataLabel}
              type="monotone"
              dataKey={element.accessor}
              stroke={element.color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
              strokeWidth={chartConfig.strokeWidth}
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
            stroke={`var(--sapUiChartAccent6)`}
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
