import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { BarChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/BarChartPlaceholder';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import { useResolveDataKeys } from '@ui5/webcomponents-react-charts/lib/useResolveDataKeys';
import React, { FC, forwardRef, Ref, useCallback } from 'react';
import {
  Bar,
  BarChart as BarChartLib,
  Brush,
  CartesianGrid,
  Legend,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { useDataLabel, useAxisLabel, useSecondaryDimensionLabel } from '../../hooks/useLabelElements';
import { useChartMargin } from '../../hooks/useChartMargin';

type BarChartProps = RechartBaseProps;

/**
 * <code>import { BarChart } from '@ui5/webcomponents-react-charts/lib/next/BarChart';</code>
 * **This component is under active development. The API is not stable yet and might change without further notice.**
 */
const BarChart: FC<BarChartProps> = forwardRef((props: BarChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    labelKey = 'name',
    secondaryDimensionKey,
    dataKeys,
    width = '100%',
    height = '500px',
    dataset,
    noLegend = false,
    onDataPointClick,
    onLegendClick,
    labels,
    axisInterval,
    labelFormatter = (el) => formatYAxisTicks(el),
    valueFormatter = (el) => el,
    dataLabelCustomElement = undefined,
    chartConfig = {
      margin: {},
      yAxisVisible: false,
      xAxisVisible: true,
      xAxisUnit: '',
      yAxisUnit: '',
      gridStroke: ThemingParameters.sapList_BorderColor,
      gridHorizontal: true,
      gridVertical: false,
      legendPosition: 'top',
      barSize: 50,
      barGap: 3,
      zoomingTool: false,
      strokeOpacity: 1,
      fillOpacity: 1,
      stacked: false,
      dataLabel: true,
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

  const onItemLegendClick = useLegendItemClick(onLegendClick);

  const formatYAxisTicks = (tick) => {
    const splitTick = tick.split(' ');
    return splitTick.length > 3
      ? `${splitTick.slice(0, 3).join(' ')}...`
      : tick.length > 11
      ? `${tick.slice(0, 12)}...`
      : tick;
  };

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
            xIndex: i
          })
        );
      }
    },
    [onDataPointClick]
  );

  const BarDataLabel = useDataLabel(
    chartConfig.dataLabel,
    dataLabelCustomElement,
    valueFormatter,
    chartConfig.stacked,
    true
  );

  const marginChart = useChartMargin(
    dataset,
    labelFormatter,
    labelKey,
    chartConfig.margin,
    true,
    secondaryDimensionKey,
    chartConfig.zoomingTool
  );

  const XAxisLabel = useAxisLabel(valueFormatter, chartConfig.xAxisUnit);
  const YAxisLabel = useAxisLabel(labelFormatter, chartConfig.yAxisUnit, true);
  const SecondaryDimensionLabel = useSecondaryDimensionLabel(true, labelFormatter);
  const bigDataSet = dataset?.length > 30 ?? false;

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      placeholder={BarChartPlaceholder}
      width={width}
      height={height}
      ref={chartRef}
      style={style}
      className={className}
      tooltip={tooltip}
      slot={slot}
    >
      <BarChartLib margin={marginChart} layout={'vertical'} data={dataset} barGap={chartConfig.barGap}>
        <CartesianGrid
          vertical={chartConfig.gridVertical ?? false}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke ?? ThemingParameters.sapList_BorderColor}
        />
        {(chartConfig.xAxisVisible ?? true) && <XAxis interval={0} type="number" tick={XAxisLabel} />}
        <YAxis
          unit={chartConfig.yAxisUnit}
          axisLine={chartConfig.yAxisVisible ?? false}
          tickLine={false}
          tick={YAxisLabel}
          type="category"
          dataKey={labelKey}
          interval={axisInterval ?? bigDataSet ? 2 : 0}
          yAxisId={0}
        />
        {secondaryDimensionKey && (
          <YAxis
            interval={0}
            type={'category'}
            dataKey={'dimension'}
            tickLine={false}
            tick={SecondaryDimensionLabel}
            axisLine={false}
            yAxisId={1}
          />
        )}
        {currentDataKeys.map((key, index) => (
          <Bar
            stackId={chartConfig.stacked ? 'A' : undefined}
            strokeOpacity={chartConfig.strokeOpacity}
            fillOpacity={chartConfig.fillOpacity}
            label={bigDataSet ? false : BarDataLabel}
            key={key}
            name={labels?.[key] || key}
            dataKey={key}
            fill={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            stroke={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            barSize={chartConfig.barSize}
            onClick={onDataPointClickInternal}
          />
        ))}
        {!noLegend && <Legend verticalAlign={chartConfig.legendPosition ?? 'top'} onClick={onItemLegendClick} />}
        {chartConfig.referenceLine && (
          <ReferenceLine
            stroke={chartConfig.referenceLine.color}
            x={chartConfig.referenceLine.value}
            label={chartConfig.referenceLine.label}
          />
        )}
        <Tooltip cursor={{ fillOpacity: 0.3 }} labelFormatter={valueFormatter} />
        {chartConfig.zoomingTool && (
          <Brush y={0} dataKey={labelKey} stroke={`var(--sapUiChartAccent6)`} travellerWidth={10} height={20} />
        )}
      </BarChartLib>
    </ChartContainer>
  );
});

BarChart.displayName = 'BarChart';

export { BarChart };
