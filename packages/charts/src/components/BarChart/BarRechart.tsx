import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import React, { forwardRef, Ref, useCallback, useMemo } from 'react';
import { useTheme } from 'react-jss';
import { Bar, BarChart as BarChartLib, Brush, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { ChartContainer } from '../../internal/ChartContainer';
import { useInitialize } from '../../lib/initialize';
import { BarChartPlaceholder } from './Placeholder';

export interface BarChartProps extends RechartBaseProps {}

const BarRechart = forwardRef((props: BarChartProps, ref: Ref<any>) => {
  const {
    color,
    loading,
    labelKey = 'label',
    width = '300px',
    height = '300px',
    dataset,
    noLegend = false,
    dataPointClickHandler,
    legendClickHandler,
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

  const dataKeys = useMemo(() => (dataset ? Object.keys(dataset[0]).filter((key) => key !== labelKey) : []), [dataset]);
  const colorSecondY = useMemo(
    () => (chartConfig.secondYAxis ? dataKeys.findIndex((key) => key === chartConfig.secondYAxis.dataKey) : 0),
    [dataset]
  );

  const onItemLegendClick = useCallback(
    (e) => {
      if (legendClickHandler) {
        legendClickHandler({
          dataKey: e.dataKey,
          value: e.value,
          chartType: e.type,
          color: e.color,
          payload: e.payload
        });
      }
    },
    [dataset]
  );

  const onDataPointClick = useCallback(
    (e) => {
      if (e && dataPointClickHandler) {
        dataPointClickHandler({
          dataKey: Object.keys(e).filter((key) => e[key] === e.value && key !== 'value')[0],
          value: e.value,
          payload: e.payload
        });
      }
    },
    [dataset]
  );

  return (
    <ChartContainer dataset={dataset} loading={loading} placeholder={BarChartPlaceholder} width={width} height={height}>
      <BarChartLib
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
        {(chartConfig.xAxisVisible === true || chartConfig.xAxisVisible === undefined) && <XAxis dataKey={labelKey} />}
        {(chartConfig.yAxisVisible === true || chartConfig.yAxisVisible === undefined) && <YAxis yAxisId="left" />}
        {chartConfig.secondYAxis && (
          <YAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            stroke={
              chartConfig.secondYAxis.color
                ? chartConfig.secondYAxis.color
                : `var(--sapUiChartAccent${(colorSecondY % 12) + 1})`
            }
            label={{ value: chartConfig.secondYAxis.name, angle: +90, position: 'center' }}
            orientation="right"
            yAxisId="right"
          />
        )}
        {dataKeys.map((key, index) => (
          <Bar
            yAxisId={chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey === key ? 'right' : 'left'}
            stackId={chartConfig.stacked ? 'A' : undefined}
            strokeOpacity={chartConfig.strokeOpacity}
            fillOpacity={chartConfig.fillOpacity}
            label={chartConfig.dataLabel && { position: 'top', fontFamily: parameters.sapUiFontFamily }}
            key={key}
            name={key}
            dataKey={key}
            fill={color ? color : `var(--sapUiChartAccent${(index % 12) + 1})`}
            stroke={color ? color : `var(--sapUiChartAccent${(index % 12) + 1})`}
            barSize={chartConfig.barSize}
            onClick={onDataPointClick}
          />
        ))}
        ){!noLegend && <Legend onClick={onItemLegendClick} />}
        <Tooltip cursor={{ fillOpacity: 0.3 }} />
        {chartConfig.zoomingTool && (
          <Brush dataKey={labelKey} stroke={`var(--sapUiChartAccent6)`} travellerWidth={10} height={30} />
        )}
      </BarChartLib>
    </ChartContainer>
  );
});

export { BarRechart };
