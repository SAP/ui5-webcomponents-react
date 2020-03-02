import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { BarChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/BarChartPlaceholder';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import { useLegendItemClick } from '@ui5/webcomponents-react-charts/lib/useLegendItemClick';
import { useResolveDataKeys } from '@ui5/webcomponents-react-charts/lib/useResolveDataKeys';
import React, { FC, forwardRef, Ref, useCallback } from 'react';
import { Bar, BarChart as BarChartLib, Brush, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { AxisTicks } from '../../internal/AxisTicks';

type BarChartProps = RechartBaseProps;

/**
 * <code>import { BarChart } from '@ui5/webcomponents-react-charts/lib/next/BarChart';</code>
 */
const BarChart: FC<BarChartProps> = forwardRef((props: BarChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    labelKey = 'name',
    dataKeys,
    width = '100%',
    height = '500px',
    dataset,
    noLegend = false,
    onDataPointClick,
    onLegendClick,
    chartConfig = {
      yAxisVisible: false,
      xAxisVisible: true,
      unit: '',
      legendVisible: true,
      gridStroke: ThemingParameters.sapUiListTableFooterBorder,
      gridHorizontal: true,
      gridVertical: false,
      yAxisColor: ThemingParameters.sapNeutralBorderColor,
      legendPosition: 'bottom',
      barSize: 10,
      barGap: 3,
      zoomingTool: false,
      strokeOpacity: 1,
      fillOpacity: 1,
      stacked: false,
      dataLabel: false
    },
    style,
    className,
    tooltip,
    slot
  } = props;
  useInitialize();

  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys = useResolveDataKeys(dataKeys, labelKey, dataset);

  const onItemLegendClick = useLegendItemClick(onLegendClick);

  const onDataPointClickInternal = useCallback(
    (payload, i, event) => {
      if (payload && onDataPointClick) {
        onDataPointClick(
          Event.of(null, event, {
            dataKey: Object.keys(payload)
              .filter((key) => key !== 'value')
              .find((key) =>
                payload.value.length
                  ? payload[key] === payload.value[1] - payload.value[0]
                  : payload[key] === payload.value
              ),
            value: payload.value.length ? payload.value[1] - payload.value[0] : payload.value,
            payload: payload.payload,
            xIndex: i
          })
        );
      }
    },
    [onDataPointClick]
  );

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
      <BarChartLib
        margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
        layout={'vertical'}
        data={dataset}
        barGap={chartConfig.barGap}
      >
        <CartesianGrid
          vertical={chartConfig.gridVertical ?? false}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {(chartConfig.xAxisVisible ?? true) && <XAxis unit={chartConfig.unit} type="number" tick={<AxisTicks />} />}
        <YAxis axisLine={chartConfig.yAxisVisible ?? false} tickLine={false} type="category" dataKey={labelKey} />
        {currentDataKeys.map((key, index) => (
          <Bar
            stackId={chartConfig.stacked ? 'A' : undefined}
            strokeOpacity={chartConfig.strokeOpacity}
            fillOpacity={chartConfig.fillOpacity}
            label={
              chartConfig.dataLabel && {
                position: chartConfig.stacked ? 'inside' : 'right',
                fill: ThemingParameters.sapContent_LabelColor
              }
            }
            key={key}
            name={key}
            dataKey={key}
            fill={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            stroke={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            barSize={chartConfig.barSize}
            onClick={onDataPointClickInternal}
          />
        ))}
        {!noLegend && <Legend onClick={onItemLegendClick} />}
        <Tooltip cursor={{ fillOpacity: 0.3 }} />
        {chartConfig.zoomingTool && (
          <Brush dataKey={labelKey} stroke={`var(--sapUiChartAccent6)`} travellerWidth={10} height={20} />
        )}
      </BarChartLib>
    </ChartContainer>
  );
});

BarChart.displayName = 'BarChart';

export { BarChart };
