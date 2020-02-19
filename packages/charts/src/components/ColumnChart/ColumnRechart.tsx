import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import React, { forwardRef, Ref, useCallback, useMemo } from 'react';
import { useTheme } from 'react-jss';
import {
  Bar as Column,
  BarChart as ColumnChartLib,
  Brush,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { ChartContainer } from '../../internal/ChartContainer';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import { ColumnChartPlaceholder } from './Placeholder';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

export interface ColumnChartProps extends RechartBaseProps {}

const ColumnRechart = forwardRef((props: ColumnChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    labelKey = 'name',
    width = '100%',
    height = '300px',
    dataset,
    dataKeys,
    noLegend = false,
    onDataPointClickHandler,
    onLegendClickHandler,
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
      dataLabel: false,
      secondYAxis: {
        dataKey: undefined,
        name: undefined,
        color: ThemingParameters.sapNeutralBorderColor
      }
    }
  } = props;

  useInitialize();

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

  const currentDataKeys =
    dataKeys ?? useMemo(() => (dataset ? Object.keys(dataset[0]).filter((key) => key !== labelKey) : []), [dataset]);

  const colorSecondY = useMemo(
    () => (chartConfig.secondYAxis ? currentDataKeys.findIndex((key) => key === chartConfig.secondYAxis.dataKey) : 0),
    [chartConfig, currentDataKeys]
  );

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
          xIndex: i,
          payload: e.payload
        });
      }
    },
    [onDataPointClickHandler]
  );

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      placeholder={ColumnChartPlaceholder}
      width={width}
      height={height}
      ref={chartRef}
    >
      <ColumnChartLib
        margin={{ top: 15 }}
        data={dataset}
        style={{ fontSize: parameters.sapUiFontSmallSize }}
        barGap={chartConfig.barGap}
      >
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {(chartConfig.xAxisVisible ?? true) && <XAxis unit={chartConfig.unit} dataKey={labelKey} />}
        <YAxis axisLine={chartConfig.yAxisVisible ?? false} tickLine={false} yAxisId={'left'} />
        {chartConfig.secondYAxis && (
          <YAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            stroke={chartConfig.secondYAxis.color ?? `var(--sapUiChartAccent${(colorSecondY % 12) + 1})`}
            label={{ value: chartConfig.secondYAxis.name, angle: +90, position: 'center' }}
            orientation="right"
            yAxisId="right"
          />
        )}
        {currentDataKeys.map((key, index) => (
          <Column
            yAxisId={chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey === key ? 'right' : 'left'}
            stackId={chartConfig.stacked ? 'A' : undefined}
            strokeOpacity={chartConfig.strokeOpacity}
            fillOpacity={chartConfig.fillOpacity}
            label={
              chartConfig.dataLabel && {
                position: chartConfig.stacked ? 'inside' : 'top',
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
      </ColumnChartLib>
    </ChartContainer>
  );
});

export { ColumnRechart };
