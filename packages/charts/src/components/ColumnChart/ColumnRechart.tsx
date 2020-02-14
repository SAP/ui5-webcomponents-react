import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
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
import { useInitialize } from '../../lib/initialize';
import { ColumnChartPlaceholder } from './Placeholder';

export interface ColumnChartProps extends RechartBaseProps {}

const ColumnRechart = forwardRef((props: ColumnChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    labelKey = 'label',
    width = '100%',
    height = '300px',
    dataset,
    dataKeys,
    noLegend = false,
    onDataPointClickHandler,
    onLegendClickHandler,
    chartConfig = {
      yAxisVisible: true,
      xAxisVisible: true,
      legendVisible: true,
      gridStroke: 'white',
      gridHorizontal: true,
      gridVertical: true,
      yAxisColor: 'black',
      legendPosition: 'bottom',
      barSize: 25,
      barGap: 3,
      zoomingTool: false,
      strokeOpacity: 1,
      fillOpacity: 1,
      stacked: false,
      dataLabel: false,
      secondYAxis: {
        dataKey: '',
        name: '',
        color: 'black'
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
    (e) => {
      if (e && onDataPointClickHandler) {
        onDataPointClickHandler({
          dataKey: Object.keys(e).filter((key) => e[key] === e.value && key !== 'value')[0],
          value: e.value,
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
    >
      <ColumnChartLib
        ref={chartRef}
        data={dataset}
        style={{ fontSize: parameters.sapUiFontSmallSize }}
        barGap={chartConfig.barGap}
      >
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {(chartConfig.xAxisVisible ?? true) && <XAxis dataKey={labelKey} />}
        {(chartConfig.yAxisVisible ?? true) && <YAxis yAxisId="left" />}
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
            label={chartConfig.dataLabel && { position: 'top', fontFamily: parameters.sapUiFontFamily }}
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
