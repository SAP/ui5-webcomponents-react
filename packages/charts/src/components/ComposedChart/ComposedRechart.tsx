import React, { Component, ComponentType, forwardRef, ReactElement, ReactNode, Ref, useCallback, useMemo } from 'react';
import { ComposedChart, Legend, Tooltip, YAxis, XAxis, CartesianGrid, Brush } from 'recharts';
import { LineChartPlaceholder } from '../..';
import { useTheme } from 'react-jss';
import { useConsolidatedRef } from '@ui5/webcomponents-react-base/lib/useConsolidatedRef';
import { RechartBaseProps } from '../../interfaces/RechartBaseProps';
import { ChartContainer } from '@ui5/webcomponents-react-charts/lib/ChartContainer';
import { useInitialize } from '@ui5/webcomponents-react-charts/lib/initialize';
import * as ThemingParameters from '@ui5/webcomponents-react-base/lib/sap_fiori_3';

export interface ComposedChartProps extends RechartBaseProps {
  children?: ReactNode;
  placeHolder?: ComponentType<unknown>;
}

const ComposedRechart = forwardRef((props: ComposedChartProps, ref: Ref<any>) => {
  const {
    height = '500px',
    width = '100%',
    loading,
    dataset,
    labelKey = 'name',
    children,
    onDataPointClickHandler,
    onLegendClickHandler,
    chartConfig = {
      yAxisVisible: false,
      xAxisVisible: true,
      legendVisible: true,
      gridStroke: ThemingParameters.sapUiListTableFooterBorder,
      gridHorizontal: true,
      gridVertical: false,
      yAxisId: '',
      yAxisColor: ThemingParameters.sapNeutralBorderColor,
      legendPosition: 'bottom',
      zoomingTool: false,
      stacked: false,
      dataLabel: false,
      secondYAxis: {
        name: undefined,
        dataKey: undefined,
        color: ThemingParameters.sapNeutralBorderColor
      }
    }
  } = props;

  useInitialize();

  const { parameters }: any = useTheme();
  const chartRef = useConsolidatedRef<any>(ref);

  type ChildClone = ReactNode & { props: any };
  const childrenClone = useMemo(
    () =>
      React.Children.map(children, (child: ChildClone, index) => {
        if (child?.props) {
          return React.cloneElement(
            // @ts-ignore
            child,
            child.props.legendType === 'line'
              ? {
                  type: 'monotone',
                  stroke: child.props.color ? child.props.color : `var(--sapUiChartAccent${(index % 12) + 1})`,
                  label: chartConfig.dataLabel && { position: 'top', fontFamily: parameters.sapUiFontFamily },
                  yAxisId:
                    chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey === child.props.dataKey
                      ? 'right'
                      : 'left',
                  activeDot: { onClick: (e, i) => onDataPointClick(e, i, true) }
                }
              : {
                  fill: child.props.color ? child.props.color : `var(--sapUiChartAccent${(index % 12) + 1})`,
                  label: chartConfig.dataLabel && { position: 'top', fontFamily: parameters.sapUiFontFamily },
                  stackId: chartConfig.stacked ? 'A' : undefined,
                  yAxisId:
                    chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey === child.props.dataKey
                      ? 'right'
                      : 'left',
                  onClick: (e, i) => onDataPointClick(e, i, false)
                }
          );
        }
      }),
    [children]
  );

  const onItemLegendClick = useCallback(
    (e, i) => {
      if (onLegendClickHandler) {
        onLegendClickHandler({
          dataKey: e.dataKey,
          index: i,
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
    (e, i, line) => {
      if (e && onDataPointClickHandler) {
        onDataPointClickHandler({
          value: e.value,
          xIndex: i,
          dataKey: line ? e.dataKey : Object.keys(e).filter((key) => e[key] === e.value && key !== 'value')[0],
          payload: e.payload
        });
      }
    },
    [onDataPointClickHandler]
  );
  console.log(chartConfig);
  return (
    <ChartContainer
      ref={chartRef}
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
        {(chartConfig.xAxisVisible ?? true) && <XAxis dataKey={labelKey} />}
        <YAxis axisLine={chartConfig.yAxisVisible ?? false} tickLine={false} yAxisId="left" />
        {chartConfig.secondYAxis && chartConfig.secondYAxis.dataKey && (
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
