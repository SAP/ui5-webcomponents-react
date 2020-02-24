import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { BarChartPlaceholder } from '@ui5/webcomponents-react-charts/lib/BarChartPlaceholder';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/next/ChartContainer';
import React, { forwardRef, Ref, useCallback, useMemo } from 'react';
import { Bar, BarChart as BarChartLib, Brush, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { useResolveDataKeys } from '../../internal/useResolveDataKeys';

export interface BarChartProps extends RechartBaseProps {}

const BarChart = forwardRef((props: BarChartProps, ref: Ref<any>) => {
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
      barSize: 20,
      barGap: 3,
      zoomingTool: false,
      strokeOpacity: 1,
      fillOpacity: 1,
      stacked: false,
      dataLabel: false
    }
  } = props;
  useInitialize();

  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys = useResolveDataKeys(dataKeys, labelKey, dataset);

  const onItemLegendClick = useCallback(
    (e) => {
      if (onLegendClick) {
        onLegendClick(
          Event.of(null, e, {
            dataKey: e.dataKey,
            value: e.value,
            chartType: e.type,
            color: e.color,
            payload: e.payload
          })
        );
      }
    },
    [onLegendClick]
  );

  const onDataPointClickInternal = useCallback(
    (e, i) => {
      if (e && onDataPointClick) {
        onDataPointClick(
          Event.of(null, e, {
            dataKey: Object.keys(e)
              .filter((key) => key !== 'value')
              .find((key) => (e.value.length ? e[key] === e.value[1] - e.value[0] : e[key] === e.value)),
            value: e.value.length ? e.value[1] - e.value[0] : e.value,
            payload: e.payload,
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
    >
      <BarChartLib layout={'vertical'} data={dataset} barGap={chartConfig.barGap}>
        <CartesianGrid
          vertical={chartConfig.gridVertical ?? false}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {(chartConfig.xAxisVisible ?? true) && <XAxis unit={chartConfig.unit} type="number" />}
        <YAxis axisLine={chartConfig.yAxisVisible ?? false} tickLine={false} type="category" dataKey={labelKey} />
        {currentDataKeys.map((key, index) => (
          <Bar
            stackId={chartConfig.stacked ? 'A' : undefined}
            strokeOpacity={chartConfig.strokeOpacity}
            fillOpacity={chartConfig.fillOpacity}
            label={
              chartConfig.dataLabel && {
                position: chartConfig.stacked ? 'inside' : 'right',
                fontFamily: ThemingParameters.sapUiFontFamily,
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
          <Brush dataKey={labelKey} stroke={`var(--sapUiChartAccent6)`} travellerWidth={10} height={30} />
        )}
      </BarChartLib>
    </ChartContainer>
  );
});

BarChart.displayName = 'BarChart';

export { BarChart };
