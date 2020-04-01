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
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { useDataLabel, useAxisLabel, useSecondaryDimensionLabel } from '../../hooks/useLabelElements';
import { useChartMargin } from '../../hooks/useChartMargin';

type LineChartProps = RechartBaseProps;

/**
 * <code>import { LineChart } from '@ui5/webcomponents-react-charts/lib/next/LineChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const LineChart: FC<LineChartProps> = forwardRef((props: LineChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    labelKey = 'name',
    secondaryDimensionKey,
    width = '100%',
    height = '500px',
    dataset,
    dataKeys,
    noLegend = false,
    onDataPointClick,
    onLegendClick,
    yAxisFormatter = (el) => el,
    xAxisFormatter = (el) => el,
    dataLabelFormatter = (d) => d,
    tooltipFormatter = (value, name) => [value, name],
    tooltipLabelFormatter = (labelValue) => labelValue,
    legendFormatter = (value) => value,
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

  const LineDataLabel = useDataLabel(chartConfig.dataLabel, dataLabelCustomElement, dataLabelFormatter);

  const XAxisLabel = useAxisLabel(xAxisFormatter, chartConfig.xAxisUnit);
  const SecondaryDimensionLabel = useSecondaryDimensionLabel();

  const marginChart = useChartMargin(
    dataset,
    yAxisFormatter,
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
      placeholder={LineChartPlaceholder}
      width={width}
      height={height}
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
            interval={0}
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
          tickFormatter={yAxisFormatter}
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
        {currentDataKeys.map((key, index) => (
          <Line
            yAxisId={chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey === key ? 'right' : 'left'}
            key={key}
            name={key}
            strokeOpacity={chartConfig.strokeOpacity}
            label={LineDataLabel}
            type="monotone"
            dataKey={key}
            stroke={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            strokeWidth={chartConfig.strokeWidth}
            activeDot={{ onClick: onDataPointClickInternal }}
          />
        ))}
        {!noLegend && (
          <Legend
            formatter={legendFormatter}
            verticalAlign={chartConfig.legendPosition ?? 'top'}
            onClick={onItemLegendClick}
          />
        )}
        {chartConfig.referenceLine && (
          <ReferenceLine
            stroke={chartConfig.referenceLine.color}
            y={chartConfig.referenceLine.value}
            label={chartConfig.referenceLine.label}
            yAxisId={'left'}
          />
        )}
        <Tooltip cursor={{ fillOpacity: 0.3 }} labelFormatter={tooltipLabelFormatter} formatter={tooltipFormatter} />
        {chartConfig.zoomingTool && (
          <Brush y={0} dataKey={labelKey} stroke={`var(--sapUiChartAccent6)`} travellerWidth={10} height={20} />
        )}
      </LineChartLib>
    </ChartContainer>
  );
});

LineChart.displayName = 'LineChart';

export { LineChart };
