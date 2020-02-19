import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import React, { forwardRef, Ref, useCallback, useMemo } from 'react';
import { useTheme } from 'react-jss';
import { Bar, BarChart as BarChartLib, Brush, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { ChartContainer } from '../../lib/next/ChartContainer';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { BarChartPlaceholder } from '../BarChart/Placeholder';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

export interface MicroBarChartProps extends RechartBaseProps {}

const MicroBarChart = forwardRef((props: MicroBarChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    labelKey = 'name',
    dataKeys,
    width = '100%',
    height = '500px',
    dataset,
    noLegend = false,
    onDataPointClickHandler,
    onLegendClickHandler,
    chartConfig = {
      yAxisVisible: false,
      xAxisVisible: false,
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

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys =
    dataKeys ?? useMemo(() => (dataset ? Object.keys(dataset[0]).filter((key) => key !== labelKey) : []), [dataset]);

  const onItemLegendClick = useCallback(
    (e) => {
      if (onLegendClickHandler) {
        onLegendClickHandler({
          dataKey: e.dataKey,
          value: e.value,
          chartType: e.type,
          color: e.color,
          payload: e.payload
        });
      }
    },
    [onLegendClickHandler]
  );

  const onDataPointClick = useCallback(
    (e, i) => {
      if (e && onDataPointClickHandler) {
        onDataPointClickHandler({
          dataKey: Object.keys(e).filter((key) =>
            e.value.length ? e[key] === e.value[1] - e.value[0] : e[key] === e.value && key !== 'value'
          )[0],
          value: e.value.length ? e.value[1] - e.value[0] : e.value,
          payload: e.payload,
          xIndex: i
        });
      }
    },
    [onDataPointClickHandler]
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
      <BarChartLib
        layout={'vertical'}
        data={dataset}
        style={{ fontSize: parameters.sapUiFontSmallSize }}
        barGap={chartConfig.barGap}
      >
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
                fontFamily: parameters.sapUiFontFamily
              }
            }
            key={key}
            name={key}
            dataKey={key}
            fill={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            stroke={color ?? `var(--sapUiChartAccent${(index % 12) + 1})`}
            barSize={chartConfig.barSize}
            onClick={onDataPointClick}
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

export { MicroBarChart };
