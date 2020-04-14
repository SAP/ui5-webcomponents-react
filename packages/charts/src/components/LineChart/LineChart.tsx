import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { LineChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/LineChartPlaceholder';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import { useResolveDataKeys } from '@ui5/webcomponents-react-charts/lib/useResolveDataKeys';
import React, { FC, forwardRef, Ref, useCallback, useMemo } from 'react';
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
import { ChartElement } from '../../interfaces/ChartElement';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { useDataLabel, useAxisLabel, useSecondaryDimensionLabel } from '../../hooks/useLabelElements';
import { useChartMargin } from '../../hooks/useChartMargin';

interface LineChartProps extends RechartBaseProps {
  elements: ChartElement[];
}

/**
 * <code>import { LineChart } from '@ui5/webcomponents-react-charts/lib/next/LineChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const LineChart: FC<LineChartProps> = forwardRef((props: LineChartProps, ref: Ref<any>) => {
  const {
    elements,
    dataset,
    loading,
    labelKey = 'name',
    secondaryDimensionKey,
    noLegend = false,
    onDataPointClick,
    onLegendClick,
    axisInterval,
    dataLabelCustomElement = undefined,
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
      dataLabel: true,
      xAxisUnit: '',
      yAxisUnit: '',
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
  useInitialize();

  const chartRef = useConsolidatedRef<any>(ref);

  const dataKeys = elements.map(({ accessor }) => accessor);
  const currentDataKeys = useResolveDataKeys(dataKeys, labelKey, dataset, secondaryDimensionKey);

  const colorSecondY = useMemo(
    () => (chartConfig.secondYAxis ? currentDataKeys.findIndex((key) => key === chartConfig.secondYAxis.dataKey) : 0),
    [chartConfig, currentDataKeys]
  );

  const onItemLegendClick = useLegendItemClick(onLegendClick);

  const onDataPointClickInternal = useCallback(
    (payload, eventOrIndex) => {
      if (eventOrIndex.dataKey && onDataPointClick) {
        onDataPointClick(
          enrichEventWithDetails(event, {
            value: eventOrIndex.value,
            dataKey: eventOrIndex.dataKey,
            xIndex: eventOrIndex.index,
            payload: eventOrIndex.payload
          })
        );
      }
    },
    [onDataPointClick]
  );

  const labelFormatter = elements[0]?.labelFormatter ?? ((e) => e);
  const valueFormatter = elements[0]?.valueFormatter ?? ((e) => e);

  const LineDataLabel = useDataLabel(chartConfig.dataLabel, dataLabelCustomElement, labelFormatter, false, false, true);

  const XAxisLabel = useAxisLabel(valueFormatter, chartConfig.xAxisUnit);
  const SecondaryDimensionLabel = useSecondaryDimensionLabel();

  const bigDataSet = dataset?.length > 30 ?? false;

  const marginChart = useChartMargin(
    dataset,
    labelFormatter,
    labelKey,
    chartConfig.margin,
    false,
    secondaryDimensionKey,
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
        {(chartConfig.xAxisVisible ?? true) && <XAxis dataKey={labelKey} xAxisId={0} interval={0} tick={XAxisLabel} />}
        {secondaryDimensionKey && (
          <XAxis
            interval={axisInterval ?? bigDataSet ? 2 : 0}
            dataKey={secondaryDimensionKey}
            tickLine={false}
            tick={SecondaryDimensionLabel}
            axisLine={false}
            xAxisId={1}
          />
        )}
        <YAxis
          unit={chartConfig.yAxisUnit}
          axisLine={chartConfig.yAxisVisible ?? false}
          tickLine={false}
          yAxisId="left"
          tickFormatter={labelFormatter}
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
        {elements.map((element, index) => (
          <Line
            yAxisId={chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey === element.accessor ? 'right' : 'left'}
            key={element.accessor}
            name={element.label ?? element.accessor}
            strokeOpacity={chartConfig.strokeOpacity}
            label={bigDataSet ? false : LineDataLabel}
            type="monotone"
            dataKey={element.accessor}
            stroke={element.color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            strokeWidth={chartConfig.strokeWidth}
            activeDot={{ onClick: onDataPointClickInternal }}
          />
        ))}
        {!noLegend && <Legend verticalAlign={chartConfig.legendPosition ?? 'top'} onClick={onItemLegendClick} />}
        {chartConfig.referenceLine && (
          <ReferenceLine
            stroke={chartConfig.referenceLine.color}
            y={chartConfig.referenceLine.value}
            label={chartConfig.referenceLine.label}
            yAxisId={'left'}
          />
        )}
        <Tooltip cursor={{ fillOpacity: 0.3 }} labelFormatter={valueFormatter} />
        {chartConfig.zoomingTool && (
          <Brush y={0} dataKey={labelKey} stroke={`var(--sapUiChartAccent6)`} travellerWidth={10} height={20} />
        )}
      </LineChartLib>
    </ChartContainer>
  );
});

LineChart.displayName = 'LineChart';

export { LineChart };
