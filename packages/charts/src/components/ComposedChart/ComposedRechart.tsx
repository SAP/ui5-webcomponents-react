import React, { ComponentType, forwardRef, ReactElement, ReactNode, Ref, useCallback, useMemo } from 'react';
import { Bar, ComposedChart, Legend, Line, Tooltip, YAxis, XAxis, CartesianGrid, Brush } from 'recharts';
import { LineChartPlaceholder } from '../..';
import { useTheme } from 'react-jss';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { ChartContainer } from '../../internal/ChartContainer';
import { useInitialize } from '../../lib/initialize';

export interface ComposedChartProps extends RechartBaseProps {
  children: ReactNode;
  placeHolder?: ComponentType<unknown>;
}

const ComposedRechart = forwardRef((props: ComposedChartProps, ref: Ref<any>) => {
  const {
    height,
    width,
    loading,
    dataset,
    labelKey,
    children,
    dataPointClickHandler,
    legendClickHandler,
    chartConfig = {
      yAxisVisible: true,
      xAxisVisible: true,
      legendVisible: true,
      gridStroke: 'white',
      gridHorizontal: true,
      gridVertical: true,
      yAxisId: '',
      yAxisColor: 'red',
      legendPosition: 'bottom',
      zoomingTool: false,
      stacked: false,
      dataLabel: false,
      secondYAxis: {
        name: '',
        dataKey: '',
        color: 'black'
      }
    }
  } = props as ComposedChartProps;

  useInitialize();

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

  const childrenClone = useMemo(
    () =>
      React.Children.map(children, (child, index) => {
        // @ts-ignore
        if (child.props) {
          return React.cloneElement(
            // @ts-ignore
            child,
            // @ts-ignore
            child.props.legendType === 'line'
              ? {
                  type: 'monotone',
                  // @ts-ignore
                  stroke: child.props.color ? child.props.color : `var(--sapUiChartAccent${(index % 12) + 1})`,
                  label: chartConfig.dataLabel && { position: 'top', fontFamily: parameters.sapUiFontFamily },
                  activeDot: { onClick: (e) => onDataPointClick(e, true) }
                }
              : {
                  // @ts-ignore
                  fill: child.props.color ? child.props.color : `var(--sapUiChartAccent${(index % 12) + 1})`,
                  label: chartConfig.dataLabel && { position: 'top', fontFamily: parameters.sapUiFontFamily },
                  stackId: chartConfig.stacked ? 'A' : undefined,
                  onClick: (e) => onDataPointClick(e, false)
                }
          );
        }
      }),
    [React.Children]
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
    (e, line) => {
      if (e && dataPointClickHandler) {
        dataPointClickHandler({
          value: e.value,
          dataKey: line ? e.dataKey : Object.keys(e).filter((key) => e[key] === e.value && key !== 'value')[0],
          xIndex: e.index,
          payload: e.payload
        });
      }
    },
    [dataset]
  );

  return (
    <ChartContainer
      width={width}
      height={height}
      loading={loading}
      dataset={dataset}
      placeholder={LineChartPlaceholder}
    >
      <ComposedChart ref={chartRef} style={{ fontSize: parameters.sapUiFontSmallSize }} data={dataset}>
        <CartesianGrid
          vertical={chartConfig.gridVertical}
          horizontal={chartConfig.gridHorizontal}
          stroke={chartConfig.gridStroke}
        />
        {(chartConfig.xAxisVisible === true || chartConfig.xAxisVisible === undefined) && (
          <XAxis dataKey={labelKey} yAxisId="left" />
        )}
        {(chartConfig.yAxisVisible === true || chartConfig.yAxisVisible === undefined) && <YAxis />}
        {chartConfig.secondYAxis && (
          <YAxis
            dataKey={chartConfig.secondYAxis.dataKey}
            stroke={chartConfig.secondYAxis.color}
            label={{ value: chartConfig.secondYAxis.name, angle: +90, position: 'center' }}
            orientation="right"
            yAxisId="right"
          />
        )}
        <Tooltip />
        {chartConfig.legendVisible && <Legend onClick={onItemLegendClick} verticalAlign={chartConfig.legendPosition} />}
        {childrenClone}
        {chartConfig.zoomingTool && (
          <Brush dataKey={labelKey} stroke={`var(--sapUiChartAccent6)`} travellerWidth={10} height={30} />
        )}
      </ComposedChart>
    </ChartContainer>
  );
});

export { ComposedRechart };
