import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import React, { forwardRef, Ref, useMemo, useCallback } from 'react';
import { useInitialize } from '../../lib/initialize';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import { CartesianGrid, Line, LineChart as LineChartLib, XAxis, YAxis, Tooltip, Legend, Brush } from 'recharts';
import { useTheme } from 'react-jss';
import { LineChartPlaceholder } from './Placeholder';
import { ChartContainer } from '../../internal/ChartContainer';

export interface LineChartProps extends RechartBaseProps {}

const LineRechart = forwardRef((props: LineChartProps, ref: Ref<any>) => {
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
      strokeWidth: 1,
      zoomingTool: false,
      strokeOpacity: 1,
      secondYAxis: {
        dataKey: '',
        name: '',
        color: 'black'
      }
    }
  } = props as LineChartProps;

  useInitialize();
  const dataKeys = dataset ? Object.keys(dataset[0]).filter((key) => key !== labelKey) : [];

  const colorSecondY = chartConfig.secondYAxis
    ? dataKeys.findIndex((key) => key === chartConfig.secondYAxis.dataKey)
    : 0;

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

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
      if (e && dataPointClickHandler && e.value) {
        dataPointClickHandler({
          value: e.value,
          dataKey: e.dataKey,
          xIndex: e.index,
          payload: e.payload
        });
      }
    },
    [dataset]
  );

  return (
    <ChartContainer
      dataset={dataset}
      loading={loading}
      placeholder={LineChartPlaceholder}
      width={width}
      height={height}
    >
      <LineChartLib
        ref={chartRef}
        data={dataset}
        onClick={onDataPointClick}
        style={{ fontSize: parameters.sapUiFontSmallSize }}
      >
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {chartConfig.xAxisVisible && <XAxis dataKey={labelKey} yAxisId="left" />}
        {chartConfig.yAxisVisible && <YAxis />}
        {chartConfig.secondYAxis.dataKey && (
          <YAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            stroke={
              chartConfig.secondYAxis.color
                ? chartConfig.secondYAxis.color
                : `var(--sapUiChartAccent${(colorSecondY % 12) + 1})`
            }
            label={{ value: chartConfig.secondYAxis.name, offset: 2, angle: +90, position: 'center' }}
            orientation="right"
            yAxisId="right"
          />
        )}
        {dataKeys.map((key, index) => (
          <Line
            key={key}
            name={key}
            strokeOpacity={chartConfig.strokeOpacity}
            label={{ position: 'top', fontFamily: parameters.sapUiFontFamily }}
            type="monotone"
            dataKey={key}
            stroke={color ? color : `var(--sapUiChartAccent${(index % 12) + 1})`}
            strokeWidth={chartConfig.strokeWidth}
            activeDot={{ onClick: onDataPointClick }}
          />
        ))}
        ){!noLegend && <Legend onClick={onItemLegendClick} />}
        <Tooltip />
        {chartConfig.zoomingTool && (
          <Brush dataKey={labelKey} stroke={`var(--sapUiChartAccent6)`} travellerWidth={10} height={30} />
        )}
      </LineChartLib>
    </ChartContainer>
  );
});

export { LineRechart };
